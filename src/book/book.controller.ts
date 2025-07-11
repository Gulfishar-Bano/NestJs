import { Body, Controller, Delete, Get, Param, Put, Post, Patch } from '@nestjs/common';
import { BookService } from './book.service';
import { createBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) { }

    @Get()
    greet(): string {
        return "welcome to the book store"
    }


    @Get('list')
    getBooks(): { id: number; title: string; author: string }[] {
        return this.bookService.getBooks();
    }







    @Put(':id')
    updateBooks(@Param('id') id: string, @Body() body: { title: string, author: string }): string {

        const bookId = parseInt(id);
        return this.bookService.updateBooks(bookId, body.title, body.author);

    }

    @Delete(':id')
    deleteBooks(@Param('id') id: string): string {


        return this.bookService.DeleteBooks(+id);
    }

    //without dto
    // @Post()
    // addBooks(@Body() body:{id:number;title:string;author:string}):string{
    //     return this.bookService.addBooks(body.id,body.title,body.author);
    // }

    //with dto
    @Post()
    addBooks(@Body() body: createBookDto): string {
        return this.bookService.addBooks(body.id, body.title, body.author);
    }

    @Patch(':id')
    patchBooks(@Param('id') id: string, @Body() body: { title?: string; author?: string }): string {

        const bookId = parseInt(id);
        return this.bookService.patchBook(bookId, body.title, body.author);



    }





}
