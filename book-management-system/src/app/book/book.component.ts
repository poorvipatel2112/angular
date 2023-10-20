import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  books : Book[]= []
  bookTitle : string = ''
  bookAuthor : string = ''

  ngOnInit(): void {
      let savedBooks = localStorage.getItem("books")
      this.books =  savedBooks ? JSON.parse(savedBooks) : []
  }

  onAddBook(){
    if(this.bookTitle.trim().length && this.bookAuthor){
      let newBook : Book ={
        id: Date.now(),
        title : this.bookTitle,
        author : this.bookAuthor
      }
      this.bookAuthor = '';
      this.books.push(newBook);

      this.bookTitle = '';
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  onRetrieveBook(index: number){
    const book  = this.books[index];
    return book;
  }

  onDeleteBook(index : number){
    this.books.splice(index , 1);
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
