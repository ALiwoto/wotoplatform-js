import * as net from "net";
import { WotoError } from "./errors/errors";
export function sayHello() {
    console.log('hi');
}
export function sayGoodbye() {
    console.log('goodbye');
}
export class WotoClient {
    constructor(username, password, endpoint = 'wotoplatform.kaizoku.cyou', port = 50100) {
        this.username = '';
        this.password = '';
        if (!username) {
            throw new WotoError('username is required');
        }
        if (!password) {
            throw new WotoError('password is required');
        }
        if (!endpoint || !port) {
            throw new WotoError('invalid endpoint or port provided');
        }
        console.log(`woto client ${username}`);
        // do tcp stuff
        const client = new net.Socket();
    }
}
