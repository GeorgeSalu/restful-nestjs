import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";
import { prismaUSerMock } from "./mocks/user.mock";

describe(`${UserService.name}`, () => {

    let service: UserService;
    let prismaService: PrismaService

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: PrismaService, useValue: prismaUSerMock
                }
            ],

        }).compile();

        service = module.get<UserService>(UserService);
        prismaService = module.get<PrismaService>(PrismaService)
    })

})