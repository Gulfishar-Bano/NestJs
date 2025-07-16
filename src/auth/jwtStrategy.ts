import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){

constructor(){
    super(
        {
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"secret-jwt-key"
        }
    );
}

 async validate(payload:{sub:number,email:string}){

    return {id:payload.sub,email:payload.email}
 }



}

