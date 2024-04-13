import { Body, Controller, Get, HttpStatus, Logger, Param, Post, Res } from '@nestjs/common';
import { PautasService } from './pautas.service';
import { CriarPautaResource, NovaSessaoResource, toDomain, toRepresentation } from './pautas.resource';
import { Response } from 'express'
import { Pauta } from './pauta.entity';
import { ErrorResponse } from 'src/common/erro.resource';

@Controller('pautas')
export class PautasController {

    private readonly logger = new Logger(PautasController.name);

    constructor(
        private readonly service: PautasService
    ){}

    @Post()
    async save(@Body() pauta: CriarPautaResource, @Res() response: Response) {

        this.logger.log('criando nova pauta');

        const pautaDomain: Pauta = toDomain(pauta);
        const result = await this.service.save(pautaDomain);

        if(result.isError()) {
            this.logger.error('erro ao tentar criar nova pauta')
            return response
                        .status(HttpStatus.CONFLICT)
                        .send(new ErrorResponse(result.error.message))
        }

        return response
                    .status(HttpStatus.CREATED)
                    .send(toRepresentation(result.value));
    }

    @Get()
    async list(@Res() response: Response) {
        const result = await this.service.findAll();
        return response
                    .status(HttpStatus.OK)
                    .send(result.map(toRepresentation));
    }

    @Post(':id/sessao')
    async criarSessao(@Param('id') id: string, @Body() resource: NovaSessaoResource,
                      @Res() response: Response) {
        const pauta: Pauta = await this.service.findById(id);
        if(!pauta) {
            return response
                        .status(HttpStatus.NOT_FOUND)
                        .send(new ErrorResponse("pauta nao encontrada"));
        }

        const sucesso = await this.service.iniciarSessao(pauta, resource.minutos);

        if(sucesso) {
            return response.status(HttpStatus.OK).send();
        }
        
        const errorResponse = new ErrorResponse('não foi possivel iniciar a sessao para esta pauta');
        return response.status(HttpStatus.CONFLICT).send(errorResponse);
    }

}
