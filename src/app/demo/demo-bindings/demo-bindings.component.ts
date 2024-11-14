import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {

  // propritété => nomDeVariable: type [=valeur];
  formateur: string = "Seb";
  batiment: string = "";
  nom: string= "";
  placeholderText: string = "Rentrez du texte";

  names: string[] = ['Osmane', 'Amin', 'Ayoub', 'Nicolas', 'Viktor', 'Joeffrey', 'Christopher', 'Ana Maria'];

  result: string | null = null;

  getResult(): void{
    let winner = this.names[Math.floor(Math.random() * this.names.length)]
    let looser = this.names[Math.floor(Math.random() * this.names.length)]
    this.result = `${looser} doit un café à ${winner}`;
  }
}
