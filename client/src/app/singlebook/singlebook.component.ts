import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  bookItem = new BookModel("","",[],"","");

  constructor(private bookService: BookService, private _router: Router) { }

  ngOnInit(): void { 
    let bookId = localStorage.getItem("singleBookId");
    this.bookService.getBook(bookId)
    .subscribe((data)=>{
      this.bookItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.bookItem);
    })
  }

}
