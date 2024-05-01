import { PrismaService } from "../prisma/prisma.service";
import { CategoriesService } from "./categories.service";
import { Test, TestingModule } from "@nestjs/testing";
import { categoriesMock, prismaCategoriesMock } from "./mocks/categories.mock";

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

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it(`${CategoriesService.prototype.create.name} should create a new category`, async () => {
        const response = await service.create(categoriesMock[0]);

        expect(response).toEqual(categoriesMock[0]);
        expect(prismaService.categories.create).toHaveBeenCalledTimes(1);
    })

    it(`${CategoriesService.prototype.findByName.name} should return a single category`, async () => {
        const response = await service.findByName(categoriesMock[0].name);

        expect(response).toEqual(categoriesMock[0]);
        expect(prismaService.categories.findFirst).toHaveBeenCalledTimes(1);
    })

    it(`${CategoriesService.prototype.findByName.name} should return null whan category is not found`, async () => {
        jest.spyOn(prismaService.categories, 'findFirst').mockReturnValueOnce(null);
        const response = await service.findByName('teste');

        expect(response).toBeNull()
        expect(prismaService.categories.findFirst).toHaveBeenCalledTimes(1);
    })


    it(`${CategoriesService.prototype.findAll.name} should return all categories`, async () => {
        const response = await service.findAll();

        expect(response).toEqual(categoriesMock)
        expect(prismaService.categories.findMany).toHaveBeenCalledTimes(1);
    })

    it(`${CategoriesService.prototype.findById.name} should return single categories`, async () => {
        const response = await service.findById(categoriesMock[0].id);

        expect(response).toEqual(categoriesMock[0])
        expect(prismaService.categories.findFirst).toHaveBeenCalledTimes(1);
    })

    it(`${CategoriesService.prototype.findById.name} should return null when category is not found`, async () => {
        jest.spyOn(prismaService.categories, 'findFirst').mockReturnValueOnce(null);
        const response = await service.findByName('123456');

        expect(response).toBeNull()
        expect(prismaService.categories.findFirst).toHaveBeenCalledTimes(1);
    })

    it(`${CategoriesService.prototype.update.name} should update category`, async () => {
        jest.spyOn(prismaService.categories, 'update').mockResolvedValueOnce(categoriesMock[1]);
        const response = await service.update({
            id: categoriesMock[0].id,
            data: categoriesMock[1]
        });

        expect(response.name).toEqual(categoriesMock[1].name)
        expect(prismaService.categories.update).toHaveBeenCalledTimes(1);
    })

})