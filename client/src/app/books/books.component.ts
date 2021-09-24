import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
import { BookModel } from './books.model';

@Component({ 
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : BookModel[] = [];

  constructor(private bookService: BookService ,public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks() 
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
    })
  }
  
  singleBook(book: any){
    localStorage.setItem("singleBookId" , book._id.toString());
    this._router.navigate(['/singlebook']);
  }

  updateBook(book:any){
    localStorage.setItem("updateBookId" , book._id.toString());
    this._router.navigate(['/updatebook']);
  }

  deleteBook(book: any){
    this.bookService.deleteBook(book._id)
    .subscribe((data)=>{
      this.books = this.books.filter(b => b !== book);  //deletes product from list (line 14) and shows the list of products that is != the deleted product
    })
  }
}
 