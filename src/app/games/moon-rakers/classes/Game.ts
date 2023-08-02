
export class Game {
    id: string;
    name: string;
    players: string[];


    constructor(id: string, name: string, creator: string){
        this.id = id
        this.name = name
        this.players = [creator]
    }

    addPlayers(playerid: string){
        this.players[this.players.indexOf("")] = playerid
    }

    removePlayer(playerid: string){
        this.players = this.players.filter( e => e !== playerid); 
    }


}