import { heroesImages } from 'assets/heroesImages';
import { heroesPreviews } from 'assets/heroesPreviews';

export interface IHero {
  id: number;
  name: string;
  image: string;
  preview: string;
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: 'Baraka',
    image: heroesImages.baraka,
    preview: heroesPreviews.baraka,
  },
  {
    id: 2,
    name: 'Cyrax',
    image: heroesImages.cyrax,
    preview: heroesPreviews.cyrax,
  },
  {
    id: 3,
    name: 'Jade',
    image: heroesImages.jade,
    preview: heroesPreviews.jade,
  },
  {
    id: 4,
    name: 'Jax',
    image: heroesImages.jax,
    preview: heroesPreviews.jax,
  },
  {
    id: 5,
    name: 'Kano',
    image: heroesImages.kano,
    preview: heroesPreviews.kano,
  },
  {
    id: 6,
    name: 'Liu Kang',
    image: heroesImages.liuKang,
    preview: heroesPreviews.liuKang,
  },
  {
    id: 7,
    name: 'Sektor',
    image: heroesImages.sector,
    preview: heroesPreviews.sector,
  },
  {
    id: 8,
    name: 'Shang Tsung',
    image: heroesImages.shang,
    preview: heroesPreviews.shang,
  },
  {
    id: 9,
    name: 'Sindel',
    image: heroesImages.sindel,
    preview: heroesPreviews.sindel,
  },
  {
    id: 10,
    name: 'Smoke',
    image: heroesImages.smoke,
    preview: heroesPreviews.smoke,
  },
  {
    id: 11,
    name: 'Sonya Blade',
    image: heroesImages.sonyaBlade,
    preview: heroesPreviews.sonyaBlade,
  },
  {
    id: 12,
    name: 'Sub Zero',
    image: heroesImages.subZero,
    preview: heroesPreviews.subZero,
  },
  {
    id: 13,
    name: 'Kabal',
    image: heroesImages.kabal,
    preview: heroesPreviews.kabal,
  },
  {
    id: 14,
    name: 'Kung Lao',
    image: heroesImages.kungLao,
    preview: heroesPreviews.kungLao,
  },
  {
    id: 15,
    name: 'Sheeva',
    image: heroesImages.sheeva,
    preview: heroesPreviews.sheeva,
  },
];
