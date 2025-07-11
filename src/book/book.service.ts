import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';






@Injectable()
export class BookService {
  

 private books = [
    
    { id:1,title: 'Atomic Habits', author: 'James Clear' },
    { id:2,title: 'Deep Work', author: 'Cal Newport' }
  ];
  

  getBooks():{id:number;title:string;author:string}[]{
  return this.books;
  }

  updateBooks(id:number,title:string,author:string):string{

    if(id < 0 || id >=this.books.length){
        return `book with ${id} not found`;

    }

    this.books[id]={id,title,author};

    return `book ${id} is updated`;

  }

  DeleteBooks(id:number):string{
    if(id <0 || id >= this.books.length){
       return `book with ${id} not found`;
    }
  
    const remove=this.books.splice(id,1);
    return `book ${remove} is removed`;

  }

  addBooks(id:number,title:string,author:string){

    const newBook={id,title,author};
    this.books.push(newBook);
    return `book id ${id} is added`;
    
  }

  patchBook(id:number,title?:string,author?:string):string{
     const book=this.books.find(b=> b.id ===id);
   
    if(!book){
        return "not found";
    }

    if(title) book.title=title;
    if(author) book.author=author;

    return `book ${id} updated by using patch`;




  }

}
