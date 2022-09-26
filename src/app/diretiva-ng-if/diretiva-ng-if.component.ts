import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss'],
})
export class DiretivaNgIfComponent implements OnInit {
  cursos: string[] = ['Angular 2'];

  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
