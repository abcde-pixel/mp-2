export interface Artworks {
    id: number;
    title: string;
    thumbnail: ThumbnailProps;
    lqip: string;
    _score: number;
}

export interface ThumbnailProps {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
}