import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignupComponent } from './signup/signup.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component'


const routes: Routes = [
  {path: '' , 
  component: HomeComponent},

  {path: 'signup',
  component: SignupComponent},

  {path: 'login', 
  component: LoginComponent},

  {path: 'books' ,
  component: BooksComponent},

  {path: 'newbook' , 
  canActivate : [AuthGuard],
  component: NewBookComponent},

  {path: 'singlebook',
  component: SinglebookComponent},

  {path: 'updatebook',
  canActivate : [AuthGuard],
  component: UpdateBookComponent},
  
  {path: 'authors' , 
  component: AuthorsComponent},

  {path: 'newauthor' , 
  canActivate : [AuthGuard],
  component: NewAuthorComponent},

  {path: 'updateauthor',
  canActivate : [AuthGuard],
  component: UpdateAuthorComponent},

  {path: 'singleauthor',
  component: SingleauthorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
