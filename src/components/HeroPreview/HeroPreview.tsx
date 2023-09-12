import React, { FC } from 'react';
import styles from './HeroPreview.module.scss';
import cn from 'classnames';

interface IProps {
  name: string;
  imageSrc: string;
  size?: 'middle' | 'large';
  isEnemy?: boolean;
  hideName?: boolean;
}

export const HeroPreview: FC<IProps> = ({
  name,
  imageSrc,
  size = 'middle',
  isEnemy,
  hideName,
}) => (
  <div className={styles.wrapper}>
    <img
      className={cn(styles.image, {
        [styles.mirrorImage]: isEnemy,
        [styles.largeImage]: size === 'large',
      })}
      src={imageSrc}
      alt={name}
    />
    {!hideName && <p className={styles.heroName}>{name}</p>}
  </div>
);
