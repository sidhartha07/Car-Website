import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class BookService { 

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  
  getBook(id:any){        //for edit book page
    return this.http.get("http://localhost:3000/book/"+id)
  }

  newBook(item: any){
    return this.http.post("http://localhost:3000/insertbook", {"book" : item})
    .subscribe(data => {console.log(data)})
  }

  updateBook(book: any){
    return this.http.put("http://localhost:3000/updatebook", book)
    .subscribe((data)=>{console.log(data)})
  }

  deleteBook(id: any){
    return this.http.delete("http://localhost:3000/removebook/"+id);
  }
}
 