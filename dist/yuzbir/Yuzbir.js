"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yuzbir = void 0;
const Clock_1 = require("./../clock/Clock");
class Yuzbir {
    constructor(table) {
        this.table = table;
        this.clock = new Clock_1.Clock();
    }
    join(player) {
        throw new Error('Method not implemented.');
    }
    leave(player) {
        throw new Error('Method not implemented.');
    }
    registerEvent(event) {
        this.clock.cancelTimer(event);
    }
    async *start() {
        this._init();
        while (true) {
            yield await this._turn();
        }
    }
    _init() {
    }
    async _turn() {
        const gameEvent = (await this.clock.startTimer(5000));
        return [];
    }
}
exports.Yuzbir = Yuzbir;
