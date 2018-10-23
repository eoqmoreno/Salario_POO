import {Funcionario} from"./Funcionario";

export class Professor extends Funcionario{
	private categoria: string;

	public constructor (nome:string, diaria:number, categoria:string){ 
		super(nome, diaria);
		this.categoria = categoria; 
	}

	public getCategoria(): string{
		return this.categoria;
	}
	public setCategoria(categoria: string): void{
		this.categoria = categoria;
	}
  	public calcularSalario() : number{

  		if (this.categoria == "A"){
  			return 3000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "B"){
  			return 5000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "C"){
  			return 7000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "D"){
  			return 9000 + (this.getDiaria() * 100);
  		}
  		return 11000 + (this.getDiaria() * 100);
  	}

  	public addDiaria() : boolean {
  		if(this.getDiaria() < 2){
  			this.setDiaria(this.getDiaria() + 1);
  		}else {
  			return false;
  		}
  	}

}