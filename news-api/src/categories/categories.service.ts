import { Injectable } from "@nestjs/common";
import { Categories, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriesService {

    constructor(
        private prismaService: PrismaService
    ) { }

    public async create(data: Prisma.CategoriesCreateInput): Promise<Categories> {
        const newCategories = await this.prismaService.categories.create({
            data
        });
        return newCategories;
    }

}