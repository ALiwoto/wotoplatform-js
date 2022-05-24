import { WotoError } from "./errors/errors";
import { WotoSocket } from "./utils/woto-socket";

export class WotoClient {
    username: string = '';
    password: string = '';

    protected woto_socket: WotoSocket = null;

    /**
     * constructor of the WotoClient class.
     * @param username the username you are going to login to wotoplatform with.
     * @param password the password you are going to login to wotoplatform with.
     * @param endpoint the endpoint of the server, default to wotoplatform.kaizoku.cyou.
     * @param port the port of the server, default to 50100.
     */
    constructor(
        username: string,
        password: string,
        endpoint: string = 'wotoplatform.kaizoku.cyou',
        port: number = 50100,
    ) {
        if (!username) {
            throw new WotoError('username is required');
        }

        if (!password) {
            throw new WotoError('password is required');
        }

        if (!endpoint || !port) {
            throw new WotoError('invalid endpoint or port provided');
        }

        this.woto_socket = new WotoSocket(endpoint, port);
    }
}
