import { Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { posix } from "path";

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoriesService: CategoriesService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    public async store() { }

}