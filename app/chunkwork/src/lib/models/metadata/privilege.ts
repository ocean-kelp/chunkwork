import type { Shared } from './shared';

export enum PrivilegeTarget {
    Server = 'server',
    Mod = 'mod',
    // for now roles will apply to servers and mods (who can change a server mod or a mod data)
}

export enum PrivilegeAction {
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

export interface Privilege extends Shared {
    name: string;
    description: string;
    target: PrivilegeTarget;
    action: PrivilegeAction;
    targetId: string; // the id of the target (server or mod) that this privilege applies to
}