import { IYuzbir } from './../yuzbir/Yuzbir';
import { TPlayer } from './../player/Player';

export interface ITable {
    game: IYuzbir;
    capacity: number;
    sit(player: TPlayer): void;
    stand(player: TPlayer): void;
}

export class Table {

}