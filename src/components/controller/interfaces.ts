export interface NewsSource {
    id: string | null;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface SourcesResponse {
    status: 'ok' | 'error';
    sources: NewsSource[];
}

export interface EverythingResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: NewsArticle[];
}

export interface RequestOptions {
    [key: string]: string | number | boolean;
}
