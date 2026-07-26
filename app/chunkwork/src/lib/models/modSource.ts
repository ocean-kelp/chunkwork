import type { Shared } from './metadata/shared';

import type { Review } from './metadata/review';

export interface ModSource extends Shared {
    name: string;
    description: string;
    url: string;
    iconUrl: string;
    calculatedRating: number;

    // relations
    reviews?: Review[];
}