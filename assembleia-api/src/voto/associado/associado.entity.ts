import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Associado {
    
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    cpf: string;

}