import type { Shared } from './shared';

export enum ContextualMediaType {
    Image = 'image',
    Video = 'video',
    Audio = 'audio',
    Document = 'document',
}

export enum extension {
    // image
    PNG = 'png',
    JPG = 'jpg',
    JPEG = 'jpeg',
    GIF = 'gif',
    SVG = 'svg',
    WEBP = 'webp',

    // video
    MP4 = 'mp4',
    WEBM = 'webm',
    OGG = 'ogg',

    // audio
    MP3 = 'mp3',
    WAV = 'wav',
    OGG_AUDIO = 'oga',

    // document
    PDF = 'pdf',
}

export interface ContextualMedia extends Shared {
    // bussiness
    url: string;
    extension: extension;
    fileSize: number; // in bytes
    fileName: string;

    type: ContextualMediaType;
    description: string; // counts as alt text.
    title: string;
}