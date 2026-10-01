import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/builds/*.webp', { eager: true });
const cuts = import.meta.glob<{ default: ImageMetadata }>('../assets/cut/*.webp', { eager: true });

export const photo = (id: string) => photos[`../assets/builds/${id}.webp`].default;
export const cutout = (id: string) => cuts[`../assets/cut/${id}.webp`]?.default;
