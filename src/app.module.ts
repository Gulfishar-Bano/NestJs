import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/book.entity';

import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // or your MySQL user
    password: 'gulfisha@18',
    database: 'bookstore',
    entities: [Book,User],
    synchronize: true, // turn off in production
  }),
    
    BookModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
