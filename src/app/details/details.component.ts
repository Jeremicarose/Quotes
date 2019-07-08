import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';
import{Quotes} from"../quotes"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quotes ;
  @Output()isComplete = new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

upvote = 0;
downvote= 0;

Upvote(){
  this.upvote = this.downvote +1;
}
Downvote(){
  this.downvote = this.upvote +1;
}
  constructor() { }

  ngOnInit() {
  
  }
}
