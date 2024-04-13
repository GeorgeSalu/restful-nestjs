import { ApiProperty } from "@nestjs/swagger";

export class Person {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}

export class PersonUpdatingData {

    @ApiProperty()
    name: string;
}