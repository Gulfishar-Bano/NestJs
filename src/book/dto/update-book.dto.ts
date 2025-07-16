import { IsOptional, IsString,Length } from "class-validator";

export class updateBookDto{

@IsString()
@IsOptional()
name?:string

@IsString()
@IsOptional()
author?:string


}