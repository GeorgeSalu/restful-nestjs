import { BadGatewayException, BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { posix } from "path";
import { CreateCategoryDto } from "./dtos/createCategory.dto";
import { Categories } from "@prisma/client";

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoriesService: CategoriesService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    public async store(@Body() createCategori: CreateCategoryDto): Promise<Categories> {
        if (!createCategori?.name) {
            throw new BadRequestException('name is required');
        }

        const findCategoryByName = await this.categoriesService.findByName(createCategori.name);

        if (findCategoryByName) {
            throw new BadRequestException('this category name is not available')
        }

        const newCategory = await this.categoriesService.create(createCategori);
        return newCategory;
    }

}