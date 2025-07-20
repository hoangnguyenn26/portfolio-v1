import styled from 'styled-components';

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 12, 27, 0.7);
  backdrop-filter: blur(5px);
  z-index: 8;
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  transition: var(--transition);
`;

export default BlurOverlay; 