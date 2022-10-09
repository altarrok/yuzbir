"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
class Clock {
    startTimer(timeInMs, onFinish) {
        this._onFinish = onFinish;
        return new Promise((resolve) => {
            this._resolve = resolve;
            this._timeout = setTimeout(() => this._finishTimer(), timeInMs);
        });
    }
    cancelTimer(resolveWith) {
        clearTimeout(this._timeout);
        this._finishTimer(resolveWith);
    }
    _finishTimer(resolveWith) {
        this._onFinish && this._onFinish();
        this._resolve && this._resolve(resolveWith);
    }
}
exports.Clock = Clock;
