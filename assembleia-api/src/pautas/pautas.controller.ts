import { Body, Controller, Post, Res } from '@nestjs/common';
import { PautasService } from './pautas.service';
import { CriarPautaResource, toDomain } from './pautas.resource';
import { Response } from 'express'
import { Pauta } from './pauta.entity';

@Controller('pautas')
export class PautasController {

    constructor(
        private readonly service: PautasService
    ){}

    @Post()
    async save(@Body() pauta: CriarPautaResource, @Res() response: Response) {
        const pautaDomain: Pauta = toDomain(pauta);
        const pautaSalva = await this.service.save(pautaDomain);
        return response.status(201).send(pautaSalva);
    }

}
