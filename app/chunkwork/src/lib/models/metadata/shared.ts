

// shared model of id, createdAt, updatedAt, deletedAt as common fields for all models
export interface Shared {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}