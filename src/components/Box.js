import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { useTransition, useSpring, useChain, config } from 'react-spring';
import { Words, Container, Item } from './styles';
import data from './data';
import { animated } from 'react-spring';

export default function Box() {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stff,
    from: { size: '20%', background: 'hotpink', top: '50%'},
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink', top: open ? '0%' : '50%' }
  });

  const { visibility, ...others } = useSpring({
    display: open ? 'none' : '',
    delay: open ? 0 : 1000,
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

  return (
      <>
        <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
          <Words style={{...others, display: visibility}} >Open the Box</Words>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props, background: item.css }} />
          ))}
        </Container>
      </>
    );
}
