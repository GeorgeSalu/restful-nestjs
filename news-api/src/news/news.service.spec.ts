import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { NewsService } from "./news.service"
import { newsMock, prismaNewsMock } from "./mocks/news.mock";

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

    it(`${NewsService.prototype.create.name}() should create new news`, async () => {
        const response = await service.create(newsMock[0]);

        expect(response).toEqual(newsMock[0]);
        expect(prismaService.news.create).toHaveBeenCalledTimes(1);
    })

    it(`${NewsService.prototype.findAll.name} should return all news`, async () => {
        const response = await service.findAll();

        expect(response).toEqual(newsMock);
        expect(prismaService.news.findMany).toHaveBeenCalledTimes(1);
    })

    it(`${NewsService.prototype.findById.name} should return a single new`, async () => {
        const response = await service.findById(newsMock[0].id);

        expect(response).toEqual(newsMock[0]);
        expect(prismaService.news.findFirst).toHaveBeenCalledTimes(1);
    })

})