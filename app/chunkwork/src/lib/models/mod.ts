import type { Shared } from './metadata/shared';

import type { ContextualMedia } from './metadata/contextualMedia';
import type { MinecraftLauncherVersion } from './minecraftLauncherVersion';
import type { Review } from './metadata/review';

export interface Mod extends Shared {
    // bussiness
    name: string;
    markdownDescription: string; // enriched text with capabilities of adding links, images, videos, etc. to describe the mod. Though all media data will be limited to that associated with the mod.
    version: string;
    downloadUrl: string;
    fileSize: number; // in bytes
    fileName: string;
    createdByUserId: string; // user id of the user who created this mod
    calculatedRating: number; // calculated rating based on user ratings. This is a number between 0 and 5, with 0 being the lowest and 5 being the highest. It is calculated as the average of all user ratings, rounded to the nearest half star. This value gets recalculated every time a new rating is added.
    tags: string[]; // tags for mod, like "pvp", "pve", "roleplay", etc. Mods have their own tag but this are the ones set by the mod creator. A server can have a list of tags comming from the mods it has and the tags assigned by the creator given that not all tags are relevant such as economy, this is way too generic toi define a server and if shown it will be visual contamination.

    // family fields
    parentModId: string | null; // if this mod is a child of another mod, this field will be set to the parent mod's id. If this mod is a parent mod, this field will be null. Being a parent means that this is the lastest version.

    // relations
    mediaContent?: ContextualMedia[]; // media content related to the mod, like screenshots, videos, etc.
    childMods?: Mod[]; // child mods of this mod, if any. This is a recursive relation, so a child mod can have its own child mods, and so on.
    compatibilityList?: MinecraftLauncherVersion[]; // list of minecraft launcher versions that this mod is compatible with. This is a many-to-many relation, as a mod can be compatible with multiple launcher versions, and a launcher version can be compatible with multiple mods.
    recommendedMods?: Mod[]; // list of recommended mods for this mod. This is a many-to-many relation, as a mod can recommend multiple mods, and a mod can be recommended by multiple mods.
    dependencyMods?: Mod[]; // list of dependency mods for this mod. This is a many-to-many relation, as a mod can have multiple dependency mods, and a mod can be a dependency for multiple mods.
    excludedMods?: Mod[]; // list of excluded mods for this mod. This is a many-to-many relation, as a mod can have multiple excluded mods, and a mod can be excluded by multiple mods.
    modReviews?: Review[]; // list of reviews for this mod. This is a one-to-many relation, as a mod can have multiple reviews, but a review can only belong to one mod.
}