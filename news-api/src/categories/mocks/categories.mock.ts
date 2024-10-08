import { Categories } from "@prisma/client";

export const categoriesMock: Categories[] = [
    {
        id: "350a82c3-9614-468a-9262-3c09a71a7b58",
        name: "noticias",
        created_at: new Date(),
        update_at: new Date()
    },
    {
        id: "223a82c3-9614-468a-9262-3c09a71a7b58",
        name: "teste noticias",
        created_at: new Date(),
        update_at: new Date()
    }
]

export const prismaCategoriesMock = {
    categories: {
        create: jest.fn().mockReturnValue(categoriesMock[0]),
        findMany: jest.fn().mockReturnValue(categoriesMock),
        findFirst: jest.fn().mockReturnValue(categoriesMock[0]),
        update: jest.fn().mockReturnValue(categoriesMock[0]),
        delete: jest.fn()
    }
}