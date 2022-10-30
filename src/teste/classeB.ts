export class ClassB{
    private nome;
    private sobreNome;
    constructor(nome: string, SobreNome: string){
    this.nome = nome
    this.sobreNome = SobreNome;
    }
    public exibeNomeCompleto(){
        console.log(this.nome + this.sobreNome) 
    }
}