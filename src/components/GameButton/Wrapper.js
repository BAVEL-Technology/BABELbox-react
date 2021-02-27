import React, { useState, useRef } from 'react';
import { useChain, animated, config, useSpring, useTransition } from 'react-spring';
const GameButton = (props) => {
  const [open, set] = useState(false);
  setTimeout(() => {
    set(open => true);
  }, 1500);
  // Build a spring and catch its ref
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '10%' },
    to: { size: open ? '100%' : '10%' }
  });
  // Build a transition and catch its ref
  const transRef = useRef();
  const transitions = useTransition(open ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });
  // First run the spring, when it concludes run the transition
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);
  // Use the animated props like always
    return (
        <div className="absolute w-full flex items-center justify-center top-2/4 z-50 mt-20">
          <animated.div className="flex justify-center overflow-x-auto flex-nowrap space-x-6" style={props}>
            {transitions.map(({item, key, props}) => (
              <animated.div key={key} style={props} className="w-48 h-48 rounded-lg bg-indigo-300 flex-shrink-0" />
            ))}
          </animated.div>
        </div>
    );
};

export default GameButton;
