import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { createBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {

  constructor(
    @InjectRepository(Book)
    private readonly BookRepository:Repository<Book>,
  ){}

    async getall():Promise<Book[]>{
     
      return await this.BookRepository.find();

    }

    async getOne(id:number):Promise<Book|null>{

      return await this.BookRepository.findOneBy({id})
    }


    async create( createBookDto:createBookDto):Promise<Book>{
      const newBook=this.BookRepository.create(createBookDto)
      return await this.BookRepository.save(newBook);
    }

    async update(id:number,updateBookDto:updateBookDto):Promise<Book|null>{
       
      const book = await this.BookRepository.findOneBy({id});
      if(!book) throw new NotFoundException ( "book not found");

      Object.assign(book,updateBookDto)
      return await this.BookRepository.save(book);
    
    }

    // async delete(id:number):Promise<String>{
      
    //   const book=await this.BookRepository.findOneBy({id});

    //   if(!book) throw new NotFoundException("Book not found");
       
    //    await this.BookRepository.remove(book);

    //    return `book deleted ${id}`;

    // }

    async delete(id:number):Promise<String>{
      const book=await this.BookRepository.delete(id);
      return `book deleted with ${id} `
    }
 

 








  

//  private books = [
    
//     { id:1,title: 'Atomic Habits', author: 'James Clear' },
//     { id:2,title: 'Deep Work', author: 'Cal Newport' }
//   ];
  
  
  
  // getBooks():{id:number;title:string;author:string}[]{
  // return this.books;
  // }

  // updateBooks(id:number,title:string,author:string):string{

  //   if(id < 0 || id >=this.books.length){
  //       return `book with ${id} not found`;

  //   }

  //   this.books[id]={id,title,author};

  //   return `book ${id} is updated`;

  // }

  // DeleteBooks(id:number):string{
  //   if(id <0 || id >= this.books.length){
  //      return `book with ${id} not found`;
  //   }
  
  //   const remove=this.books.splice(id,1);
  //   return `book ${remove} is removed`;

  // }

  // addBooks(id:number,title:string,author:string){

  //   const newBook={id,title,author};
  //   this.books.push(newBook);
  //   return `book id ${id} is added`;
    
  // }

  // patchBook(id:number,title?:string,author?:string):string{
  //    const book=this.books.find(b=> b.id ===id);
   
  //   if(!book){
  //       return "not found";
  //   }

  //   if(title) book.title=title;
  //   if(author) book.author=author;

  //   return `book ${id} updated by using patch`;

  // }

  
}


  
  

 

  
