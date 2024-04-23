import { News } from "@prisma/client";
import { create } from "domain";

export const newsMock: News[] = [
    {
        id: "9dadf34a-2298-4932-956a-f4b916a84512",
        title: "testando criacao de noticias",
        content: "testando conteudo",
        publication_date: new Date(),
        author_id: "af1c2549-b456-414c-b7ab-110369b0f8d4",
        category_id: "350a82c3-9614-468a-9262-3c09a71a7b58",
        created_at: new Date(),
        update_at: new Date()
    },
    {
        id: "10adf34a-2298-4932-956a-f4b916a84512",
        title: "criacao de noticias",
        content: "testando conteudo",
        publication_date: new Date(),
        author_id: "af1c2549-b456-414c-b7ab-110369b0f8d4",
        category_id: "350a82c3-9614-468a-9262-3c09a71a7b58",
        created_at: new Date(),
        update_at: new Date()
    }
];

export const prismaNewsMock = {
    news: {
        create: jest.fn().mockReturnValueOnce(newsMock[0]),
        findMany: jest.fn().mockReturnValueOnce(newsMock),
        findFirst: jest.fn().mockReturnValueOnce(newsMock[0]),
        update: jest.fn().mockReturnValueOnce(newsMock[0]),
        delete: jest.fn()
    }
}