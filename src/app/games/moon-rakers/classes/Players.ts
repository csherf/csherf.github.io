export class Players{
    constructor( 
        public p1: string = "",
        public p2: string = "",
        public p3: string = "",
        public p4: string = "",
        public p5: string = "",

    ){
        
    }

    getPlayers(): string[] {
        return [this.p1,
            this.p2, 
            this.p3, 
            this.p4, 
            this.p5
        ]
    }
}