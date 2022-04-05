import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  public benefitsList: Array<any> = [
    {
      icon: "cashier.svg",
      text: "Reciba el pago de su pensión y otros depósitos en su cuenta."
    },
    {
      icon: "phone.svg",
      text: "Programe de forma automática sus transferencias, el pago de productos y servicios."
    },
    {
      icon: "bill.svg",
      text: "Podrá obtener beneficios con aliados y tasas especiales en créditos para pensionados."
    },
    {
      icon: "quota.svg",
      text: "Podrá acceder a un cupo de adelanto de pensión y a los productos móviles que le ofrece Davivienda."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
