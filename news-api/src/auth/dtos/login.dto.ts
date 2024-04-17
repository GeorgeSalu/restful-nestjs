import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    pasword: string;
}