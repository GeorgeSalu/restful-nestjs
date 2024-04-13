import { IsNotEmpty } from "class-validator";
import { Pauta } from "./pauta.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CriarPautaResource {
    @ApiProperty({ name: 'descricao', example: 'votacao do aumento do gas' })
    @IsNotEmpty({
        message: 'descricao é um campo obrigatorio'
    })
    descricao: string;
}

export class PautaResource {
    id: string;
    descricao: string;
    status: string;
}

export class NovaSessaoResource {
    minutos: number;
}

export function toRepresentation(entity: Pauta): PautaResource {
    const resource = new PautaResource();
    resource.id = entity.id;
    resource.descricao = entity.descricao;
    resource.status = entity.obterStatus();
    return resource;
}

export function toDomain(resource: CriarPautaResource): Pauta {
    const pauta = new Pauta();
    pauta.descricao = resource.descricao;
    return pauta;
}