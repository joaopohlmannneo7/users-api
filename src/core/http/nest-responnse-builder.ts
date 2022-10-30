import { HttpStatus } from "@nestjs/common";
import { NestResponse } from "./nest-responde";

export class NestResponseBuilder{
    
build(): NestResponse {
  throw new Error('Method not implemented.');
}
private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {},
}
public withStatus(status: number){
    this.resposta.status = status;
    return this;
}

public withHeaders(headers: any){
    this.resposta.headers = headers;
    return this;
}
public withBody(body: any){
    this.resposta.body = body;
    return this;
}


}
