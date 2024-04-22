import { Injectable } from "@nestjs/common";
import { News, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class NewsService {

    constructor(
        private prismaService: PrismaService
    ) { }

    public async create(newData: Prisma.NewsUncheckedCreateInput): Promise<News> {
        const news = await this.prismaService.news.create({
            data: newData
        });
        return news;
    }

    public async findAll(): Promise<News[]> {
        const newsList = await this.prismaService.news.findMany();
        return newsList;
    }


}