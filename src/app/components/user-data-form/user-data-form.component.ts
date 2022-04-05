import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {

  public showEditAdress: boolean = false;
  public userDataForm: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.userDataForm = this._fb.group({
      ingresosMensuales: [''],
      actividadLaboral: [''],
      nombreEmpresa: [''],
      tipoContrato: [''],
      ciudadResidencia: [''],
      direccionResidencia: [''],
      codigoAsesor: ['']
    });
  }

  editField() {
    this.showEditAdress = true;
  }

  onSubmit() {}
}
