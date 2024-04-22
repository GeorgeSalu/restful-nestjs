import { IsString, isString } from "class-validator";

export class UpdateNewsDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    category_id: string;
}