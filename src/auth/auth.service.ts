import { Injectable ,BadRequestException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { loginDto } from './dto/login.dto';
import { use } from 'passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

 constructor(
 @InjectRepository(User)

 private readonly UserRepository:Repository<User>,
 private readonly jwtService:JwtService

 ){}


 async signUp(Dto:CreateUserDto):Promise<User>{

    const existing=await this.UserRepository.findOneBy({email:Dto.email})

    if(existing) throw new BadRequestException("Email already exists");

    const user=this.UserRepository.create(Dto)
    return await this.UserRepository.save(user);
 }


 async login(Dto:loginDto):Promise<{access_token:string}>{

   const user=await this.UserRepository.findOneBy({email:Dto.email})

   if(!user || user.password!==Dto.password){
      throw new BadRequestException("Invalid credentials");
   }

   const payload={sub:user.id,email:user.email}

   return {
    access_token:this.jwtService.sign(payload)
   }

 }


}
