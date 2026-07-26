import type { Shared } from './metadata/shared';
import type { Difficulty } from './metadata/difficulty';

// relations
import type { User } from './user';
import type { Mod } from './mod';
import type { Review } from './metadata/review';
import type { UserGroup } from './metadata/userGroup';

export interface Server extends Shared {
    // bussiness
    name: string;
    description: string;
    bannerUrl: string;
    difficulty: Difficulty;
    ownerId: string; // user id
    tags: string[]; // tags for server, like "pvp", "pve", "roleplay", etc. Mods have their own tag but this are the ones set by the server owner.
    isPublic: boolean; // if true, server is public and anyone can see it, if false, server is private and only owner and invited users can see it.
    modsDownloadCount: number; // number of times the server's mods have been downloaded. This is a counter that gets incremented every time a user downloads the server's mods. This is a business metric to measure the popularity of the server.
    serverDownloadCount: number; // number of times the server has been downloaded. This is a counter that gets incremented every time a user downloads the server. This is a business metric to measure the popularity of the server. This refers to the server as a whole, not just the mods. Ideally this value will; be very low like 1 or 4 at much, the idea of this is to easily transfer the server management to a new machine or person.
    calculatedRating: number; // calculated rating based on user ratings. This is a number between 0 and 5, with 0 being the lowest and 5 being the highest. It is calculated as the average of all user ratings, rounded to the nearest half star. This value gets recalculated every time a new rating is added.

    // relations

    owner?: User;
    serverMods?: Mod[]; // mods that are installed on the server, this is a many to many relation with Mod model. This is a relation table that has serverId and modId as foreign keys.
    reviews?: Review[]; // reviews for the server, this is a one to many relation with Review model. A server can have many reviews, but a review can only belong to one server.

    // user & group management
    assignedUsers: User[]; // users that are assigned to the server, roles will allow users to manage the server. Only users with at least 1 role assignment to this server will be able to at least read its data, either via user-role or via group-role, this basically can work as a whitelist technically speaking.
    assignedGroups: UserGroup[]; // groups that are assigned to the server, roles will allow users to manage the server.

}