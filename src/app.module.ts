import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/book.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // or your MySQL user
    password: 'gulfisha@18',
    database: 'bookstore',
    entities: [Book],
    synchronize: true, // turn off in production
  }),
    
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
