import type { Shared } from './shared';

import type { Privilege } from './privilege';

export interface Role extends Shared {
    name: string;
    description: string;

    // relations
    privileges?: Privilege[];
}