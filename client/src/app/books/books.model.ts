export class BookModel{
    constructor(
        public title : String,
        public author : String,
        public genre : Array<any>,
        public summary : String,
        public image : String
    ){} 
}