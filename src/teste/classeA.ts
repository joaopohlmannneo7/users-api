import { Controller, Get } from '@nestjs/common';
import { ClassB } from './classeB';
@Controller('teste')
export class ClassA{
 @Get()
 public exibeNome(){
    const nomeDanilo = new ClassB('Danilo', 'Sales')
    const leandro = new ClassB('Leandro', 'Vida')

    nomeDanilo.exibeNomeCompleto();
    leandro.exibeNomeCompleto();
    return '';
 }
}