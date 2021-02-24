import { animated } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled(animated.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height, top;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const Words = styled(animated.div)`
  color: white;
  font-weight: bold;
  text-size: 1.8rem;
  will-change: display;
`;

export { Words, Container, Item };
