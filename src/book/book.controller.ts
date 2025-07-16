import { Body, Controller, Delete, Get, Param, Put, Post, Patch ,Headers} from '@nestjs/common';
import { BookService } from './book.service';
import { createBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';
import { Book } from './book.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) { }
   
    @Get()
  getSomething(@Headers() headers: Record<string, string>) {
    console.log(headers);
  }



    @Get()
    greet(): string {
        return "welcome to the book store"
    }

  
    @Get('list')
    getall():Promise<Book[]>{
        return this.bookService.getall();
    }

    @Get('list/:id')
    getById(@Param('id') id:string):Promise<Book|null>{

        return this.bookService.getOne(+id);
    }

    @Post('create')
    create(@Body() createBookDto:createBookDto):Promise<Book>{
    return this.bookService.create(createBookDto);

    }

    @Put('update/:id')
    update(@Param('id') id:string ,@Body() updateBookDto:updateBookDto):Promise<Book|null>{
       return  this.bookService.update(+id,updateBookDto)

    }

    @Delete('delete/:id')
    delete(@Param('id') id:string):Promise<String>{
        return this.bookService.delete(+id)
    }






    


    // @Put(':id')
    // updateBooks(@Param('id') id: string, @Body() body: { title: string, author: string }): string {

    //     const bookId = parseInt(id);
    //     return this.bookService.updateBooks(bookId, body.title, body.author);

    // }

    //with Dto

    // @Put('update/:id')
    // update(@Param('id') id:string,@Body() updateBookDto:updateBookDto){
    //    const bookId=parseInt(id);
    //     return this.bookService.updateBooks(bookId,updateBookDto.name,updateBookDto.author);
    // }

    // @Delete(':id')
    // deleteBooks(@Param('id') id: string): string {


    //     return this.bookService.DeleteBooks(+id);
    // }

    //without dto
    // @Post()
    // addBooks(@Body() body:{id:number;title:string;author:string}):string{
    //     return this.bookService.addBooks(body.id,body.title,body.author);
    // }

    //with dto
//     @Post()
//     addBooks(@Body() body: createBookDto): string {
//         return this.bookService.addBooks(body.id, body.title, body.author);
//     }

//     @Patch(':id')
//     patchBooks(@Param('id') id: string, @Body() body: { title?: string; author?: string }): string {

//         const bookId = parseInt(id);
//         return this.bookService.patchBook(bookId, body.title, body.author);



//     }





}
