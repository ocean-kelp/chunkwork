import type { Shared } from './metadata/shared';

import type { MinecraftLauncher } from './minecraftLauncher';

export interface MinecraftLauncherVersion extends Shared {
    version: string;
    launcherId: string;

    // relations
    launcher?: MinecraftLauncher;
}