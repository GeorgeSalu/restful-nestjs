import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pauta {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    descricao: string;

    @CreateDateColumn({ name: 'data_cadastro' })
    dataCadastro?: Date;

    @Column({ type: 'timestamp', nullable: true })
    abertura?: Date;

    @Column({ type: 'timestamp', nullable: true })
    fechamento?: Date;

    obterStatus(): string {
        if(this.fechamento && this.fechamento < new Date()) {
            return StatusPauta.ENCERRADA;
        }
        if(this.abertura) {
            return StatusPauta.INICIADA;
        }
        return StatusPauta.NAO_INICIADA;
    }

    public isFoiIniciada(): boolean {
        const status = this.obterStatus();
        return StatusPauta.INICIADA == status;
    }


    public isPossivelIniciarSessao(): boolean {
        const status = this.obterStatus();
        return StatusPauta.NAO_INICIADA == status;
    }

}

enum StatusPauta {
    NAO_INICIADA = "Sessão nao iniciada",
    INICIADA = "Sessão iniciada",
    ENCERRADA = "Pauta encerrada"
}