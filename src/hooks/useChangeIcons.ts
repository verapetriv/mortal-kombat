import { useEffect, useCallback, useState } from 'react';
import { iconsVariants } from '../data/icons';

const qwertyButtons = {
  q: 'q',
  w: 'w',
  e: 'e',
  r: 'r',
  t: 't',
  y: 'y',
};

export const useChangeIcons = () => {
  const [indexForQ, setIndexForQ] = useState<number>(0);
  const [indexForW, setIndexForW] = useState<number>(0);
  const [indexForE, setIndexForE] = useState<number>(0);
  const [indexForR, setIndexForR] = useState<number>(0);
  const [indexForT, setIndexForT] = useState<number>(0);
  const [indexForY, setIndexForY] = useState<number>(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isKeyQWERTY = Object.values(qwertyButtons).includes(key);

      const getNextIndex = (currentIndex: number) =>
        currentIndex === iconsVariants.length - 1 ? 0 : currentIndex + 1;

      if (isKeyQWERTY) {
        switch (key) {
          case qwertyButtons.q:
            setIndexForQ(getNextIndex(indexForQ));
            break;
          case qwertyButtons.w:
            setIndexForW(getNextIndex(indexForW));
            break;
          case qwertyButtons.e:
            setIndexForE(getNextIndex(indexForE));
            break;
          case qwertyButtons.r:
            setIndexForR(getNextIndex(indexForR));
            break;
          case qwertyButtons.t:
            setIndexForT(getNextIndex(indexForT));
            break;
          case qwertyButtons.y:
            setIndexForY(getNextIndex(indexForY));
            break;
          default:
            break;
        }
      }
    },
    [indexForQ, indexForW, indexForE, indexForR, indexForT, indexForY],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    icons: [
      iconsVariants[indexForQ],
      iconsVariants[indexForW],
      iconsVariants[indexForE],
      iconsVariants[indexForR],
      iconsVariants[indexForT],
      iconsVariants[indexForY],
    ],
  };
};
