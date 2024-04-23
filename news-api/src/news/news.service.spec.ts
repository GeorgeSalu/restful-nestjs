import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { NewsService } from "./news.service"
import { prismaNewsMock } from "./mocks/news.mock";

describe(`${NewsService.name}`, () => {
    let service: NewsService;
    let prismaService: PrismaService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NewsService,
                { provide: PrismaService, useValue: prismaNewsMock }
            ]
        }).compile();

        service = module.get<NewsService>(NewsService);
        prismaService = module.get<PrismaService>(PrismaService)
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

})