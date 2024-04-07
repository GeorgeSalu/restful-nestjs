import { Controller, Get } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller()
export class HelloControler {

  constructor(
    private helloService: HelloService
  ){}

  @Get("/hello")
  hello(): string {
    return this.helloService.hello(" fulano");
  }

}