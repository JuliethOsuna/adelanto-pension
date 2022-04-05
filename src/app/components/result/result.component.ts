import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public resultList: Array<any> = [
    {
      label: "Adelanto de pensión: ",
      text: "Aprobado"
    },
    {
      label: "Tipo de seguro: ",
      text: "Familiar - 106.200 mensual"
    },
    {
      label: "Fecha y hora: ",
      text: "29/01/2020, 09:41 a.m."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
