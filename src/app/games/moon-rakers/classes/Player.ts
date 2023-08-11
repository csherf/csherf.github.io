import { STARTER_DECK } from "../interfaces/CARDS";


export class Player {


    constructor(
        public id: string, public deck: string[] = STARTER_DECK,
        public hand: string[] = [], public discard: string[] = [],
        public playing: string[] = [], public trash: string[] = [],
        public shipParts: string[] = [], public gold: number = 2,
        public objectives: string[] = []
    ){
        this.id = id;
        this.deck = deck;
        this.hand = hand;
        this.discard = discard;
        this.playing = playing;
        this.trash = trash;
        this.shipParts = shipParts;
        this.gold = gold;
        this.objectives = objectives;
        
    }

    setDefault(){
        this.deck = this.shuffle(this.deck)
        this.draw(5)

    }

    draw(amount: number){
        this.hand.push(...this.deck.splice(-amount))
    }

    shuffle(array: any[]) {
        let currentIndex = array.length, randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    
        return array;
      }
}