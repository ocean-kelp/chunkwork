import type { Shared } from './metadata/shared';

import type { Role } from './metadata/role';
import type { UserGroup } from './metadata/userGroup';

export interface User extends Shared {
    // bussiness
    email: string;
    username: string;
    displayName: string;
    iconUrl: string;
    bannerUrl: string;
    bio: string;

    // relations

    // role assignments
    roles?: Role[];
    // user groups
    userGroups?: UserGroup[];

}