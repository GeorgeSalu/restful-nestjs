import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateNewDto } from "./dtos/CreateNews.dto";
import { News } from "@prisma/client";

@Controller('news')
export class NewsController {

    @UsePipes(ValidationPipe)
    @Post()
    public async store(@Body() createNews: CreateNewDto): Promise<News> {



    }

}