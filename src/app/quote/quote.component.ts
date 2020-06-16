import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quotes = [
    new Quote(1, 'All our dreams can come true, if we have the courage to pursue them.',' Walt Disney', "W.D",new Date(2020,3,14)),
    new Quote(2, 'The secret of getting ahead is getting started.', 'Mark Twain',"M.T", new Date(2019,6,9)),
    new Quote(3, '“It’s hard to beat a person who never gives up.', 'Babe Ruth',"B.R",new Date(2022,1,12)),
    new Quote(4, 'Work like there is someone working twenty four hours a day to take it away from you.', 'Mark Cuban',"M.C",new Date(2019,0,18)), 
    new Quote(5, 'Very often, a change of self is needed more than a change of scene.', 'L.H.Holts',"A.C.Benson",new Date(2019,2,14)),
];

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}
//author: boolean = false
// toggleDetails(index){
  // this.quotes[index].author = !this.quotes[index].author;
 //}
  constructor() { }

  ngOnInit() {
  }

}


