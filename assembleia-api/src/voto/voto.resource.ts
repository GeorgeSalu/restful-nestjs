import { IsIn, IsNotEmpty } from "class-validator";
import { OpcaoVoto } from "./voto.entity";
import { ApiProperty } from "@nestjs/swagger";

export class RegistroVotoResource {
    @ApiProperty()
    @IsNotEmpty({ message: 'campo cpf é obrigatorio' })
    cpf: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'campo opcaoVoto é obrigatorio' })
    @IsIn([OpcaoVoto.NAO, OpcaoVoto.SIM])
    opcaoVoto: OpcaoVoto
}
