import { heroesImages } from '../assets/heroesImages';
import { heroesPreviews } from '../assets/heroesPreviews';
import { heroesBattles } from '../assets/heroesBattles';

export interface IHero {
  id: number;
  name: string;
  image: string;
  preview: string;
  battle: string;
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: 'Baraka',
    image: heroesImages.baraka,
    preview: heroesPreviews.baraka,
    battle: heroesBattles.baraka,
  },
  {
    id: 2,
    name: 'Cyrax',
    image: heroesImages.cyrax,
    preview: heroesPreviews.cyrax,
    battle: heroesBattles.cyrax,
  },
  {
    id: 3,
    name: 'Jade',
    image: heroesImages.jade,
    preview: heroesPreviews.jade,
    battle: heroesBattles.jade,
  },
  {
    id: 4,
    name: 'Jax',
    image: heroesImages.jax,
    preview: heroesPreviews.jax,
    battle: heroesBattles.jax,
  },
  {
    id: 5,
    name: 'Kano',
    image: heroesImages.kano,
    preview: heroesPreviews.kano,
    battle: heroesBattles.kano,
  },
  {
    id: 6,
    name: 'Liu Kang',
    image: heroesImages.liuKang,
    preview: heroesPreviews.liuKang,
    battle: heroesBattles.liuKang,
  },
  {
    id: 7,
    name: 'Sektor',
    image: heroesImages.sector,
    preview: heroesPreviews.sector,
    battle: heroesBattles.sector,
  },
  {
    id: 8,
    name: 'Shang Tsung',
    image: heroesImages.shang,
    preview: heroesPreviews.shang,
    battle: heroesBattles.shang,
  },
  {
    id: 9,
    name: 'Sindel',
    image: heroesImages.sindel,
    preview: heroesPreviews.sindel,
    battle: heroesBattles.sindel,
  },
  {
    id: 10,
    name: 'Smoke',
    image: heroesImages.smoke,
    preview: heroesPreviews.smoke,
    battle: heroesBattles.smoke,
  },
  {
    id: 11,
    name: 'Sonya Blade',
    image: heroesImages.sonyaBlade,
    preview: heroesPreviews.sonyaBlade,
    battle: heroesBattles.sonyaBlade,
  },
  {
    id: 12,
    name: 'Sub Zero',
    image: heroesImages.subZero,
    preview: heroesPreviews.subZero,
    battle: heroesBattles.subZero,
  },
];
