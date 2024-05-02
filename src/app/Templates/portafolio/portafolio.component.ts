import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
currentRoute: any;

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/About']);
  }
  
  navigateToProject() {
    this.router.navigate(['/Project']);
  }

  rutaimg: string = '../../../assets/img/cine.png'; // Ruta de la imagen

}
