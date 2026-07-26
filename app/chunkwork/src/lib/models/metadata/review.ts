import type { Shared } from './shared';

export interface Review extends Shared {
    userId: string;
    rating: number; // 1-5
    title: string;
    content: string;

    // For now review won't be associated to media.
    // Each entity uses this entity however they please.
}