
interface MediaMetadata {
    height: number,
    width: number,
    url: string
}

interface INewsMedia {
    caption: string,
    type: string,
    'media-metadata': MediaMetadata[]
}

export interface INews {
    id: number,
    abstract: string,
    byline: string,
    section: string,
    title: string,
    updated: string,
    media: INewsMedia[],
    url: string
}

export interface INewsRequest {
    status: 'OK',
    copyright: string,
    results: INews[]
}