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

    it(`${UserService.name} should be defined`, () => {
        expect(service).toBeDefined();
    })

    it(`${UserService.prototype.create.name}() should create a new user`, async () => {
        const response = await service.create(userMock[0]);

        expect(response).toEqual(userMock[0]);
        expect(prismaService.users.create).toHaveBeenCalledTimes(1);
    })

    it(`${UserService.prototype.findByEmail.name}() should return a single user`, async () => {
        const response = await service.findByEmail(userMock[0].email);

        expect(response).toEqual(userMock[0]);
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenCalledWith({
            where: { email: userMock[0].email },
        })
    })

    it(`${UserService.prototype.findByEmail.name}() should return null when user is not found`, async () => {
        jest.spyOn(prismaService.users, 'findFirst').mockResolvedValueOnce(null);
        const fakeEmail = 'mock@mock.fail'
        const response = await service.findByEmail(fakeEmail);

        expect(response).toEqual(null);
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenLastCalledWith({
            where: { email: fakeEmail }
        })
    })

    it(`${UserService.prototype.findById.name}() should return a single user`, async () => {
        const response = await service.findById(userMock[0].id);

        expect(response).toEqual(userMock[0]);
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenLastCalledWith({
            where: { id: userMock[0].id }
        })
    })

    it(`${UserService.prototype.findById.name}() should return null when user is not found`, async () => {
        jest.spyOn(prismaService.users, 'findFirst').mockResolvedValueOnce(null);
        const fakeId = '123456';
        const response = await service.findById(fakeId);

        expect(response).toBeNull()
        expect(prismaService.users.findFirst).toHaveBeenCalledTimes(1);
        expect(prismaService.users.findFirst).toHaveBeenLastCalledWith({
            where: { id: fakeId }
        })
    })

    it(`${UserService.prototype.update.name}() should update user`, async () => {
        jest.spyOn(prismaService.users, 'update').mockResolvedValueOnce(userMock[1]);
        const response = await service.update({
            id: userMock[0].id,
            data: userMock[1]
        })

        expect(response.name).toEqual(userMock[1].name);
        expect(prismaService.users.update).toHaveBeenCalledTimes(1);
        expect(prismaService.users.update).toHaveBeenLastCalledWith({
            where: { id: userMock[0].id },
            data: { name: userMock[1].name, email: userMock[1].email }
        })
    })

    it(`${UserService.prototype.update.name}() should return null when user is not found`, async () => {
        jest.spyOn(prismaService.users, 'update').mockResolvedValueOnce(null);
        const fakeId = '89632'
        const response = await service.update({
            id: fakeId,
            data: userMock[0]
        })

        expect(response).toBeNull()
        expect(prismaService.users.update).toHaveBeenCalledTimes(1);
        expect(prismaService.users.update).toHaveBeenLastCalledWith({
            where: { id: fakeId },
            data: { name: userMock[0].name, email: userMock[0].email }
        })
    })

})