import { PrismaService } from "src/prisma/prisma.service";
import { CategoriesService } from "./categories.service";
import { Test, TestingModule } from "@nestjs/testing";
import { prismaCategoriesMock } from "./mocks/categories.mock";

describe(`${CategoriesService.name}`, () => {

    let service: CategoriesService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategoriesService,
                { provide: PrismaService, useValue: prismaCategoriesMock }
            ],
        }).compile();

        service = module.get<CategoriesService>(CategoriesService);
        prismaService = module.get<PrismaService>(PrismaService);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

})