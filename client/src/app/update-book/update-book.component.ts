import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookItem = new BookModel("","",[],"","");

  constructor(private bookService: BookService, private _router: Router) { } 

  ngOnInit(): void {
    let bookId = localStorage.getItem("updateBookId");
    this.bookService.getBook(bookId)
    .subscribe((data)=>{
      this.bookItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.bookItem);
    })
  }

  updateBook(){
    this.bookService.updateBook(this.bookItem);
    alert("success");
    this._router.navigate(['/books']);
  }
}
