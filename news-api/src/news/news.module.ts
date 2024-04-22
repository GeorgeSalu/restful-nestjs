import { Module } from "@nestjs/common";
import { NewsController } from "./news.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { newService } from "./news.service";
import { UserService } from "src/user/user.service";
import { CategoriesService } from "src/categories/categories.service";

@Module({
    controllers: [NewsController],
    providers: [PrismaService, newService, UserService, CategoriesService],
    exports: [newService]
})
export class NewsModule {

}