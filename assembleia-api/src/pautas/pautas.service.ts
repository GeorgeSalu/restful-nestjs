import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pauta } from './pauta.entity';
import { Result } from 'src/common/result';

@Injectable()
export class PautasService {

    constructor(
        @Inject('PAUTA_REPOSITORY')
        private readonly pautaRespository: Repository<Pauta>
    ){}

    async save(pauta: Pauta): Promise<Result<Pauta>> {
        const descricao = pauta.descricao;

        const possivelPauta = await this.pautaRespository.findOne({
            where: {
                descricao: descricao
            }
        })

        if(possivelPauta) {
            return new Result(null, new Error("pauta existente"))
        }

        pauta = await this.pautaRespository.save(pauta);
        return new Result(pauta, null);
    }

    async findAll(): Promise<Pauta[]> {
        return await this.pautaRespository.find();
    }

}
