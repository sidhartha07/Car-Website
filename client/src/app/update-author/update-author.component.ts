import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/authors.model';

@Component({ 
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
 
  authorItem = new AuthorModel("","",[],"","");

  constructor(private authorService: AuthorService, private _router: Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("updateAuthorId");
    this.authorService.getAuthor(authorId)
    .subscribe((data)=>{
      this.authorItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.authorItem);
    })
  }

  updateAuthor(){
    this.authorService.updateAuthor(this.authorItem);
    alert("success");
    this._router.navigate(['/authors']);
  }

}
