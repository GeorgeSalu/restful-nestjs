import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PautasService } from 'src/pautas/pautas.service';
import { VotoService } from './voto.service';
import { RegistroVotoResource } from './voto.resource';
import { Response } from 'express';
import { ErrorResponse } from 'src/common/erro.resource';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Votos')
@Controller('pautas/:id/votos')
export class VotoController {

    constructor(
        private readonly pautasService: PautasService,
        private readonly votoService: VotoService
    ){}

    @Post()
    async registrarVoto(
        @Param('id') idPauta: string,
        @Body() resource: RegistroVotoResource,
        @Res() response: Response
    ) {
        const pauta = await this.pautasService.findById(idPauta);

        if(!pauta) {
            return response
                        .status(HttpStatus.NOT_FOUND)
                        .send(new ErrorResponse("pauta nao encontrada"))
        }

        const result = await this.votoService.registrarVoto(pauta, resource.cpf, resource.opcaoVoto);

        if(result.isError()) {
            const error = result.error;
            return response.status(error.status).send(new ErrorResponse(error.message))
        }

        return response.status(HttpStatus.ACCEPTED).send();
    }

}
