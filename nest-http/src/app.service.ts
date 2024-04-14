import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  constructor(
    private readonly httpService: HttpService
  ){}

  async getAllTodos() {
    let todos = [];
    
    const url = "http://jsonplaceholder.typicode.com/todos";

    const { status, data } = await this.httpService.get<ITodo[]>(url).toPromise();

    if(status === 200) {
      todos = data;
    }

    return todos;
  }

}
