export interface IClock {
    startTimer(timeInMs: number, onFinish?: () => void): Promise<unknown>;
    cancelTimer(resolveWith?: unknown): void;
}

export class Clock implements IClock {
    private _timeout?: number;
    private _onFinish?: () => void;
    private _resolve?: (value?: unknown) => void;

    startTimer(timeInMs: number, onFinish?: () => void) {
        this._onFinish = onFinish;
        return new Promise((resolve) => {
            this._resolve = resolve;
            this._timeout = setTimeout(() => this._finishTimer(), timeInMs)
        });
    }

    cancelTimer(resolveWith?: unknown): void {
        clearTimeout(this._timeout);
        this._finishTimer(resolveWith);
    }

    private _finishTimer(resolveWith?: unknown) {
        this._onFinish && this._onFinish();
        this._resolve && this._resolve(resolveWith);
    }
}