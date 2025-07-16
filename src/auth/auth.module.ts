import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtStrategy } from './jwtStrategy';

@Module({
   imports:[
     TypeOrmModule.forFeature([User]),
     PassportModule,
     JwtModule.register(
      {
        secret:"secret-jwt-key",
        signOptions:{expiresIn:"1h"}
      }
     )



   ],

  providers: [AuthService,jwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
