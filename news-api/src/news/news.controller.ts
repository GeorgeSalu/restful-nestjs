import { Body, Controller, Get, NotFoundException, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateNewDto } from "./dtos/CreateNews.dto";
import { News } from "@prisma/client";
import { UserService } from "src/user/user.service";
import { NewsService } from "./news.service";
import { CategoriesService } from "src/categories/categories.service";

@Controller('news')
export class NewsController {

    constructor(
        private userService: UserService,
        private newsService: NewsService,
        private categoriesService: CategoriesService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    public async store(@Body() createNews: CreateNewDto): Promise<News> {
        const { author_id, category_id } = createNews;
        const findUserById = await this.userService.findById(author_id);

        if (!findUserById) {
            throw new NotFoundException('user not found');
        }

        const findCategoryById = await this.categoriesService.findById(category_id);

        if (!findCategoryById) {
            throw new NotFoundException('category not found');
        }

        const news = await this.newsService.create(createNews);
        return news;
    }


    @Get()
    public async index(): Promise<News[]> {
        const newsList = this.newsService.findAll();
        return newsList;
    }

    @Get('/:id')
    public async show(@Param('id') id: string) {
        const findNew = await this.newsService.findById(id);

        if (!findNew) {
            throw new NotFoundException('new not found');
        }

        return findNew;
    }

}