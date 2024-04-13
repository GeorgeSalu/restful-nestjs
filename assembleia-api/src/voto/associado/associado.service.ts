import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Associado } from './associado.entity';

@Injectable()
export class AssociadoService {

    constructor(
        @Inject()
        private readonly associadoRepository: Repository<Associado> 
    ){}

}
