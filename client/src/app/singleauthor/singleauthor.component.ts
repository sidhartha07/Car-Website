import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/authors.model';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {

  authorItem = new AuthorModel("","",[],"","");

  constructor(private authorService: AuthorService, private _router: Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("singleAuthorId");
    this.authorService.getAuthor(authorId)
    .subscribe((data)=>{
      this.authorItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.authorItem);
    })
  }

}
