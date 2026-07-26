import type { Shared } from './shared';
import type { User } from '../user';

export interface IsWorkingPoll extends Shared {
    // generic model to model votes/review on whether something is working or not. This can be ued for download link of a mod of a server of an img, etc. Keep generic.
    isWorking: boolean;
    reportedByUserId: string;
    whatIsNotWorking: string; // optional, if isWorking is false, user can provide a description of what is not working.

    // relations
    reportedByUser?: User;
}