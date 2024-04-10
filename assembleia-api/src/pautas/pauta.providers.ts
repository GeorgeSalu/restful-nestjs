import { DataSource, Repository } from "typeorm";
import { Pauta } from "./pauta.entity";
import { Provider } from "@nestjs/common";

const pautaRepository: Provider<Repository<Pauta>> = {
    provide: 'PAUTA_REPOSITORY',
    useFactory: (datasource: DataSource) => {
        const repository: Repository<Pauta> = datasource.getRepository(Pauta);
        return repository;
    },
    inject: ['DATA_SOURCE']
}

export const pautaProviders = [pautaRepository]