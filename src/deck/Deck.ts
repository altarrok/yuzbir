export interface IDeck {
    shuffle(): void;
    next(): TCard | undefined;
}

export enum ECardColor {
    RED,
    YELLOW,
    BLACK,
    BLUE
}

export type TCard = {
    cardType: "fake";
} | {
    cardType: "real";
    value: number;
    color: ECardColor
}

export class Deck implements IDeck {
    deck: TCard[];

    constructor() {
        this.deck = [];

        [...new Array(13)].map((_, i) => this.deck.push({
            cardType: "real",
            value: i + 1,
            color: ECardColor.RED
        }));

        [...new Array(13)].map((_, i) => this.deck.push({
            cardType: "real",
            value: i + 1,
            color: ECardColor.YELLOW
        }));

        [...new Array(13)].map((_, i) => this.deck.push({
            cardType: "real",
            value: i + 1,
            color: ECardColor.BLACK
        }));

        [...new Array(13)].map((_, i) => this.deck.push({
            cardType: "real",
            value: i + 1,
            color: ECardColor.BLUE
        }));

        [...new Array(2)].map(() => this.deck.push({
            cardType: "fake"
        }));
    }

    shuffle(): void {
        this.deck = this.deck
            .map(val => ({ val, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ val }) => val);
    }

    next(): TCard | undefined {
        return this.deck.pop();
    }
}