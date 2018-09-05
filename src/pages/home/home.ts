import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas: Array<{nome: string, descricao:string, acao:any}>;  

  constructor(public navCtrl: NavController) {

    this.tarefas = [
      {
        nome:'Nome da tarefa', 
        descricao:'Descrição da tarefa', 
        acao:[
          {label:'Editar', icone:'create'},
          {label: 'Visualizar', icone:'eye'}
        ]
      },
      {
        nome:'Nome da tarefa2', 
        descricao:'Descrição da tarefa2', 
        acao:[
          {label:'Editar', icone:'create'},
          {label: 'Visualizar', icone:'eye'}
        ]
      }
    ]

  }

}
