import { Component } from '@angular/core';
import { NavComponent } from '../component/nav/nav.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  styleUrls: ['./home.component.css'], // Use styleUrls for multiple style files
  templateUrl: './home.component.html',
})
export class HomeComponent {
  imagePath: string = './assets/Frame_logo.png';

}
