'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './WordCycle.module.scss';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const words = [
  'create',
  'code',
  'design',
  'collab',
  'ideate',
  'craft',
  'hack',
  'strive',
  'build',
];

const WordCycle = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const swapInterval = setInterval(() => {
      setWordIdx((idx) => (idx + 1) % words.length);
    }, 3000);

    return () => clearInterval(swapInterval);
  }, []);

  return (
    <span className={styles.words}>
      <SwitchTransition>
        <CSSTransition
          key={words[wordIdx]}
          nodeRef={nodeRef}
          timeout={400}
          in
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
        >
          <span style={{ display: 'inline-block' }} ref={nodeRef}>
            {words[wordIdx]}
          </span>
        </CSSTransition>
      </SwitchTransition>{' '}
    </span>
  );
};

export default WordCycle;
