import { PrismaService } from "src/prisma/prisma.service";
import { CategoriesService } from "./categories.service";
import { Test, TestingModule } from "@nestjs/testing";

describe(`${CategoriesService.name}`, () => {

    let service: CategoriesService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategoriesService,
                { provide: PrismaService, useValue: null }
            ],
        }).compile()
    })

})