export declare class WotoSocket {
    private _host;
    private _port;
    private client;
    is_initialized: boolean;
    /**
     *
     */
    constructor(host: string, port: number);
    connect(): Promise<void>;
    send(data: Uint8Array | string): Promise<void>;
    something(): Promise<void>;
}
