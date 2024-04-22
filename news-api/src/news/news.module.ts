import { Module } from "@nestjs/common";
import { NewsController } from "./news.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { newService } from "./news.service";

@Module({
    controllers: [NewsController],
    providers: [PrismaService, newService],
    exports: [newService]
})
export class NewsModule {

}