import { TCard } from './../deck/Deck';
import { Clock, IClock } from './../clock/Clock';
import { ITable } from './../table/Table';
import { TPlayer } from './../player/Player';
import { Deck, IDeck } from '../deck/Deck';

export interface IYuzbir {
    table: ITable;
    clock: IClock;
    join(player: TPlayer): void;
    leave(player: TPlayer): void;
    start(): AsyncGenerator<TYuzbirGameUpdate[], void, void>;
    registerPlayerEvent(event: TYuzbirGameEvent): void; 
}

export type TYuzbirGameUpdate = {
    player: TPlayer;
}

export type TYuzbirGameEvent = {

}

export class Yuzbir implements IYuzbir {
    table: ITable;
    clock: IClock;
    deck: IDeck;
    okeyCard: TCard;

    private _players: TPlayer[] = []
    private _startingPlayer: number = 0;

    constructor(table: ITable) {
        this.table = table;
        this.clock = new Clock();
        this.deck = new Deck();
        this.okeyCard = this.deck.next()!;
    }

    join(player: TPlayer): void {
        throw new Error('Method not implemented.');
    }

    leave(player: TPlayer): void {
        throw new Error('Method not implemented.');
    }
    
    registerPlayerEvent(event: TYuzbirGameEvent): void {
        this.clock.cancelTimer(event);
    }

    async * start() {
        this._init();
        while (true) {
            yield await this._turn();
        }
    }

    private _init() {
        this.deck = new Deck();
        this.deck.shuffle();
        this._players.forEach((player) => player.hand = [...new Array(14)].map(() => this.deck.next()!));
        this._startingPlayer = Math.floor(Math.random() * 4);
        this._players[this._startingPlayer].hand.push(this.deck.next()!);
        do {
            this.okeyCard = this.deck.next()!;
        } while (this.okeyCard.cardType != "real")
    }

    private async _turn(): Promise<TYuzbirGameUpdate[]> {
        const gameEvent: TYuzbirGameEvent = (await this.clock.startTimer(5000)) as TYuzbirGameEvent;
        return [];
    }

}