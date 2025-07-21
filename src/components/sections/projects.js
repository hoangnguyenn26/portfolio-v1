import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;
    width: 100%;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const StyledSectionHeading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;
  color: var(--lightest-slate);
  text-align: center;
  justify-content: center;

  /* Xoá line after */
  &::after {
    display: none;
  }

  @media (max-width: 1080px) {
    width: 100%;
    &::after {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    &::after {
      width: 100px;
    }
  }

  @media (max-width: 600px) {
    &::after {
      display: none;
    }
  }
`;

const StyledMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  .show-more-button {
    ${({ theme }) => theme.mixins.button};
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1rem 2rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover,
    &:focus {
      background-color: rgba(100, 255, 138, 0.1);
      outline: 0;
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);
  const [showAll, setShowAll] = React.useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <StyledSectionHeading ref={revealTitle}>Other Noteworthy Projects</StyledSectionHeading>

      <StyledProjectsGrid>
        {displayedProjects &&
          displayedProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-inner">
                  <header>
                    <div className="project-top">
                      <div className="folder">
                        <Icon name="Folder" />
                      </div>
                      <div className="project-links">
                        {github && (
                          <a href={github} aria-label="GitHub Link">
                            <Icon name="GitHub" />
                          </a>
                        )}
                        {external && (
                          <a href={external} aria-label="External Link" className="external">
                            <Icon name="External" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </header>
                  <footer>
                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}
                  </footer>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>

      {projects.length > 6 && (
        <StyledMoreButton>
          <button className="show-more-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </StyledMoreButton>
      )}
    </section>
  );
};

export default Projects;
