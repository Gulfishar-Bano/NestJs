import { IsString,IsEmpty,Length, IsEmail, MinLength } from "class-validator";

export class CreateUserDto{

    @IsEmail()
    email:string

    @IsString()
    @MinLength(6)
    password:string



}