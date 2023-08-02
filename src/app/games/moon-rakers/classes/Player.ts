import { STARTER_DECK } from "../interfaces/CARDS";


export class Player{


    constructor( private id: string, private deck: string[] = STARTER_DECK,  private hand: string[] = [], private discard: string[] = [], private shipParts: string[] = [], private gold: number = 2, private objectives: string[] = [])
    {
        this.id = id;
        this.deck = deck;
        this.hand = hand;
        this.discard = discard;
        this.shipParts = shipParts;
        this.gold = gold;
        this.objectives = objectives;
    }


    getDeck(){
        return this.deck;
    }

}