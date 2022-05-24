import { Socket } from "net";

export class WotoSocket {
    private _host: string = null;
    private _port: number = 0;
    private client: Socket = null;
    is_initialized: boolean = false;

    /**
     * 
     */
    constructor(host: string, port: number) {
        this._host = host;
        this._port = port;
    }

    async connect() {
        await new Promise(_ => {
            this.client = new Socket();
            this.client.connect(this._port, this._host);
            this.client.setNoDelay(true);
        });
    }

    async send(data: Uint8Array | string) {
        await new Promise(_ => {
            this.client.write(data);
        });
    }

    async something(): Promise<void>  {
        await new Promise(_ => {
            let ok = new Socket();
            ok.write('');
        });
    }
}
