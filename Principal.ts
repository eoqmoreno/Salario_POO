declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios: Funcionario[] = new Array();

while(true){
    let comando: string = readline.question(" addProf \n addSta \n addTer \n addDiaria \n mostrarSalario \n status \n excluir\nEscolha um dos comandos:");
    switch(comando){
        case"addProf":
            let nomeProf: string = readline.question("Digite um nome: ");
            let c: string = readline.question("Digite a categoria: ");
            let prof: Professor = new Professor(nomeProf, 0, c.toUpperCase());
            funcionarios.push(prof);
            console.log(prof);
            break;

        case "addSta":
            let nomeSta:string = readline.question("Digite um nome: ");
            let nv:number = readline.question("Digite o nivel: ");
            let sta: STA = new STA(nomeSta, 0, nv);//Objeto
            funcionarios.push (sta);
            "\n"
            break;

        case "addTer":
            let nomeTer:string = readline.question("Digite um nome: ");
            let horas:number = readline.question("Digite as horas: ");
            let insalubre: string = readline.question("Digite se for insalubre:");
            let ter: Terceirizado = new Terceirizado(nomeTer, horas, true);
            if (insalubre == "não" || insalubre == "nao"){
                ter.setInsalubre(false);
                console.log(ter);        
            }
            funcionarios.push (ter);
            "\n"
            break;

        case "addDiaria":
            let nome = readline.question("Digite o seu nome: ");
            for(let item of funcionarios){
                if(item.getNome() == nome){
                    item.addDiaria();
                }
            } 
            break;

        case "mostrarSalario":
            let nomeSalario= readline.question("Digite o seu nome: ");
            let salario: number;
            for(let x of funcionarios){
                if(x.getNome() == nomeSalario){
                    salario = x.calcularSalario();
                    console.log("Salario:" + salario);
                    break;
                }
            }
            break;

        case "excluir":
            let nomeExcluir= readline.question("Digite o nome de quem vai ser excluido:");
            for(let i:number = 0; i < funcionarios.length; i++){
                if(funcionarios[i].getNome() == nomeExcluir) {
                    funcionarios.splice(i, 1);
                    break;
                }
            }
            break;

        case "addBonus":
            let bonus : number|undefined = readline.question("Valor do bonus:");
        break;

        case "status":
            let mostra: string = readline.question("Digite o nome do funcionario: ");
            let f: Funcionario|undefined = undefined;
            for(let i of funcionarios){
                if(i.getNome() == mostra){
                    f = i;
                }
            }if (f == undefined){
                console.log("Não existe");
            }else{
                if(bonus!=undefined){
                    let soma:number= f.calcularSalario() + (bonus/funcionarios.length);
                    console.log ("Nome: " + f.getNome() + "\n" + "Diaria: " + f.getDiaria() + "\n"+ "Salario: " + soma);
                }else{
                    console.log ("Nome: " + f.getNome() + "\n" + "Diaria: " + f.getDiaria() + "\n"+ "Salario: " + f.calcularSalario());
                }
            }
            break;
    }
    }