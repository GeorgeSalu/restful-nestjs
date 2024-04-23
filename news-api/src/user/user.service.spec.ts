import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";
import { prismaUserMock, userMock } from "./mocks/user.mock";
import exp from "constants";

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

    it(`${UserService.prototype.findByEmail.name} should return a single user`, async () => {
        const response = await service.findByEmail(userMock[0].email);

        expect(response).toEqual(userMock[0]);
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenCalledWith({
            where: { email: userMock[0].email },
        })
    })

    it(`${UserService.prototype.findByEmail.name} should return null when user is not found`, async () => {
        jest.spyOn(prismaService.users, 'findFirst').mockResolvedValueOnce(null);
        const fakeEmail = 'mock@mock.fail'
        const response = await service.findByEmail(fakeEmail);

        expect(response).toEqual(null);
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenLastCalledWith({
            where: { email: fakeEmail }
        })
    })

})