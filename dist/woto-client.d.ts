import { WotoSocket } from "./utils/woto-socket";
export declare class WotoClient {
    username: string;
    password: string;
    protected woto_socket: WotoSocket;
    /**
     * constructor of the WotoClient class.
     * @param username the username you are going to login to wotoplatform with.
     * @param password the password you are going to login to wotoplatform with.
     * @param endpoint the endpoint of the server, default to wotoplatform.kaizoku.cyou.
     * @param port the port of the server, default to 50100.
     */
    constructor(username: string, password: string, endpoint?: string, port?: number);
}
