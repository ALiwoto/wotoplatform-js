import { WotoError } from "./errors/errors";
import { WotoSocket } from "./utils/woto-socket";
export class WotoClient {
    /**
     * constructor of the WotoClient class.
     * @param username the username you are going to login to wotoplatform with.
     * @param password the password you are going to login to wotoplatform with.
     * @param endpoint the endpoint of the server, default to wotoplatform.kaizoku.cyou.
     * @param port the port of the server, default to 50100.
     */
    constructor(username, password, endpoint = 'wotoplatform.kaizoku.cyou', port = 50100) {
        this.username = '';
        this.password = '';
        this.woto_socket = null;
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
