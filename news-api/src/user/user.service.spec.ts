import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";
import { prismaUserMock, userMock } from "./mocks/user.mock";

describe(`${UserService.name}`, () => {

    let service: UserService;
    let prismaService: PrismaService

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: PrismaService, useValue: prismaUserMock
                }
            ],

        }).compile();

        service = module.get<UserService>(UserService);
        prismaService = module.get<PrismaService>(PrismaService)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should create a new user', async () => {
        const response = await service.create(userMock[0]);

        expect(response).toEqual(userMock[0]);
        expect(prismaService.users.create).toHaveBeenCalledTimes(1);
    })

})