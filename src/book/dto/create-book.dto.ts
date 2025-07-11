import { IsString, isString ,Length}  from 'class-validator';

export class createBookDto{
  
  id:number
  
  @IsString()
  @Length(2,100)
  title:string

  @IsString()
  @Length(2,100)
  author:string
    
}