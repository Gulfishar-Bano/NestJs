import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:Number

    

    @Column({unique:true})
    email:string

    @Column()
    password:string

}