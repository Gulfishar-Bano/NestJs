import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
