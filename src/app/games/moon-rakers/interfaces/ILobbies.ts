import { Players } from "../classes/Players";

export interface ILobby {
    key: string;
    data: {
        count: number;
        name: string;
        players: Players;
    }    
  }
