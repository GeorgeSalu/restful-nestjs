import { IsIn, IsNotEmpty } from "class-validator";
import { OpcaoVoto } from "./voto.entity";

export class RegistroVotoResource {
    @IsNotEmpty({ message: 'campo cpf é obrigatorio' })
    cpf: string;

    @IsNotEmpty({ message: 'campo opcaoVoto é obrigatorio' })
    @IsIn([OpcaoVoto.NAO, OpcaoVoto.SIM])
    opcaoVoto: OpcaoVoto
}
