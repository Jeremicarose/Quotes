export class Quotes {
     upvotes:number
     downvotes:number
    showDescription:boolean;
    constructor(
      public id:number, public name:string, public authors:string, public quotes:string,public date:Date, ){
      this.upvotes=0;
      this.downvotes=0;
      this.showDescription=false;

      }
  }
