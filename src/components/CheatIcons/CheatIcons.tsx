import React, { FC } from 'react';
import styles from './CheatIcons.module.scss';

interface IProps {
  icons: string[];
}

export const CheatIcons: FC<IProps> = ({ icons }) => (
  <div className={styles.iconsWrapper}>
    {icons.map((icon, index) => (
      <img key={index} src={icon} alt={'icon'} />
    ))}
  </div>
);
