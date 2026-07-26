import type { Shared } from './shared';

import type { Role } from './role';
import type { User } from '../user';

export interface UserGroup extends Shared {
    name: string;
    description: string;
    
    // relations
    roles?: Role[];
    users?: User[];
}