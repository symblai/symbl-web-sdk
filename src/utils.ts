const logger = console;

const uuid = () => {}

const symblFetch = async (url: string, token: string, options: any = {}) => {
    if (!options.headers) options.headers = {};
    if (!options.headers['Authorization'] && !options.headers['X-API-KEY']) {
        if (!token) {
            throw Error('Authorization token not provided');
        }
        options.headers['Authorization'] = `Bearer ${token}`;
    }
    if (!options.headers['Content-Type']) {
        options.headers['Content-Type'] = 'application/json';
    }
    const response = await fetch(url, options);
    return await response.json();
}

const defaultConfig: SymblConfig = {
    basePath: "https://api.symbl.ai"
}

export = {
    logger,
    uuid,
    symblFetch,
    defaultConfig,
}