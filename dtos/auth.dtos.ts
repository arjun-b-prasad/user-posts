import { Length, IsString, IsEmail } from 'class-validator';

export class SignupDTO
{
    @IsEmail()
    email!: string

    @IsString()
    name!: string
    
    @IsString()
    @Length(8)
    password!: string
}