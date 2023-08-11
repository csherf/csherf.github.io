import { ILobby } from "../interfaces/ILobbies";
import { Players } from "./Players";

export class Lobby implements ILobby {
    key: string = "";
    data: {
        count: number;
        name: string;
        players: Players;
    }  

    constructor(key = "", data = {count:0, name:"", players: new Players()}){
        this.key = key;
        this.data = data;
    }

}