import { Injectable } from "@nestjs/common";
import { Categories, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriesService {

    constructor(
        private prismaService: PrismaService
    ) { }

    public async create(data: Prisma.CategoriesCreateInput): Promise<Categories> {
        const newCategory = await this.prismaService.categories.create({
            data
        });
        return newCategory;
    }

    public async findByName(name: string): Promise<Categories | null> {
        const category = await this.prismaService.categories.findFirst({
            where: { name }
        });
        return category;
    }

    public async findAll(): Promise<Categories[]> {
        const categories = this.prismaService.categories.findMany();
        return categories
    }

    public async findById(id: string): Promise<Categories | null> {
        const categoris = await this.prismaService.categories.findFirst({
            where: { id }
        });
        return categoris;
    }

    public async update(params: {
        id: string;
        data: Prisma.CategoriesUpdateInput
    }): Promise<Categories> {
        const { id, data } = params;
        const updateCategory = await this.prismaService.categories.update({
            where: { id },
            data
        })

        return updateCategory;
    }

}