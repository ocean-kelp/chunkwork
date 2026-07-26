import type { Shared } from './metadata/shared';

import type { ModSource } from './modSource';
import type { IsWorkingPoll } from './metadata/isWorkingPoll';

export interface ModDownloadSource extends Shared {
    modSourceId: string;
    urls: string[];
    isWorking: boolean; // calculated as avg of responses

    // relations
    modSource?: ModSource;
    isWorkingPolls?: IsWorkingPoll[];
}