import { Users } from "@prisma/client";

export const userMock: Users[] = [
    {
        id: "af1c2549-b456-414c-b7ab-110369b0f8d4",
        name: "marcos alterado",
        email: "teste@gmail.com",
        password: "$2b$10$4H8dcl5qFPwsbFY0MzpSpe7zcR3iOe355o2A8mt2ZlG9CEG8j4eOa",
        created_at: new Date(),
        update_at: new Date()
    },
    {
        id: "551c2549-b456-414c-b7ab-110369b0f8d4",
        name: "marcos ",
        email: "teste2@gmail.com",
        password: "$2b$10$Ei9OQE2k33UDKrAMWsLwd.KhC0CXiPIupS6rCxoi1VwpBpDtFALSy",
        created_at: new Date(),
        update_at: new Date()
    }
];

export const prismaUserMock = {
    users: {
        create: jest.fn().mockReturnValue(userMock[0]),
        findMany: jest.fn().mockReturnValue(userMock),
        findFirst: jest.fn().mockReturnValue(userMock[0]),
        update: jest.fn().mockReturnValue(userMock[0]),
        delete: jest.fn(),
    }
}