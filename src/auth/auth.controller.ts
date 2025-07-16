import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { loginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {

constructor(private readonly AuthService:AuthService){}

@Post('signUp')
SignUp(@Body() Dto:CreateUserDto):Promise<User>{

    return this.AuthService.signUp(Dto)
}

@Post('login')
Login(@Body() loginDto:loginDto){
    return this.AuthService.login(loginDto)
}


}
