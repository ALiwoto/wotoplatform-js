var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Socket } from "net";
export class WotoSocket {
    /**
     *
     */
    constructor(host, port) {
        this._host = null;
        this._port = 0;
        this.client = null;
        this.is_initialized = false;
        this._host = host;
        this._port = port;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(_ => {
                this.client = new Socket();
                this.client.connect(this._port, this._host);
                this.client.setNoDelay(true);
            });
        });
    }
    send(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(_ => {
                this.client.write(data);
            });
        });
    }
    something() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(_ => {
                let ok = new Socket();
                ok.write('');
            });
        });
    }
}
