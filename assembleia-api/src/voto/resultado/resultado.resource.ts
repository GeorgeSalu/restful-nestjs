import { OpcaoVoto } from "../voto.entity";

export class ResultadoVotacao {
    pauta: string;
    abertura: Date;
    encerramento: Date;
    totalVotos: number;
    quantidadeSim: number;
    quantidadeNao: number;
    opcaoGanhadora: OpcaoVoto;
}