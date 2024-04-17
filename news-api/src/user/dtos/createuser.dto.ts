import { IsString } from "class-validator";

export class CreateuserDto {
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
}