import { Controller, Get } from "@nestjs/common";

@Controller()
export class HelloControler {

  @Get("/hello")
  hello(): string {
    return "Hello";
  }

}