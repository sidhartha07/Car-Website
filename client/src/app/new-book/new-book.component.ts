import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';
declare var $: any;

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'] 
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService , private _router: Router) { }

  bookItem = new BookModel("","",[],"","");

  ngOnInit(): void {$('.select-picker').selectpicker();}
  
  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("added");
    alert("success");
    this._router.navigate(['/books']); 
  }
}
