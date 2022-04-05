import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  title = 'adelanto-pension';
  public counter: number = 2;
  public buttonText: string = 'Continuar';

  public nextStep(): void  {
    console.log(this.counter);

    if (routes.length -1 >= this.counter) {
      const nextStep = routes[this.counter];
      this.router.navigate([nextStep.path]);

      if (routes.length -1 === this.counter) {
        this.buttonText = 'Finalizar';
      }

      this.counter++;
    }
  }

  public backStep(): void  {
    if (this.counter > 2) {
      this.counter--;
      const nextStep = routes[this.counter - 1];
      this.router.navigate([nextStep.path]);

      if (this.counter < routes.length -1 ) {
        this.buttonText = 'Continuar';
      }
    }
  }
}
