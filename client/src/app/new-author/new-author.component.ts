import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/authors.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  authorItem = new AuthorModel("","",[],"","");

  constructor(private authorService: AuthorService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("added");
    alert("success");
    this._router.navigate(['/authors']); 
  }
}
