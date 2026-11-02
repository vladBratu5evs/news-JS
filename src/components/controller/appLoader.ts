import Loader from './loader.js';
import type{ SourcesResponse, EverythingResponse } from './interfaces.js';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL || 'https://onrender.com', {
            apiKey: process.env.API_KEY || '',
        });
    }

    protected override getResp(
        { endpoint, options }: { endpoint: 'sources'; options?: Record<string, string> },
        callback: (data: SourcesResponse) => void
    ): void;

    protected override getResp(
        { endpoint, options }: { endpoint: 'everything'; options?: Record<string, string> },
        callback: (data: EverythingResponse) => void
    ): void;

    protected override getResp(
        { endpoint, options }: { endpoint: string; options?: Record<string, string> },
        callback: (data: any) => void
    ): void {
        super.getResp({ endpoint, options }, callback);
    }
}

export default AppLoader;
