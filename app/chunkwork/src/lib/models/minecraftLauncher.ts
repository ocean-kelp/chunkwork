import type { Shared } from './metadata/shared';

import type { MinecraftLauncherVersion } from './minecraftLauncherVersion';

export interface MinecraftLauncher extends Shared {
    name: string;
    description: string;
    iconUrl: string;
    lastestVersionId: string;

    // Versions: a launcher version diff is nelligeable as it includes in-game changes and we only care about a title and description, so it is not worth it to store more data other than string version. Therefore they will be stored via other model: MinecraftLauncherVersion, which will have a relation to this model.

    // relations
    versions?: MinecraftLauncherVersion[]; 

}