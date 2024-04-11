import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pauta } from './pauta.entity';

@Injectable()
export class PautasService {

    constructor(
        @Inject('PAUTA_REPOSITORY')
        private readonly pautaRespository: Repository<Pauta>
    ){}

    async save(pauta: Pauta): Promise<Pauta> {
        const descricao = pauta.descricao;

        const possivelPauta = await this.pautaRespository.findOne({
            where: {
                descricao: descricao
            }
        })

        if(possivelPauta) {
            throw Error("pauta existente");
        }

        pauta = await this.pautaRespository.save(pauta);
        return pauta;
    }

}
