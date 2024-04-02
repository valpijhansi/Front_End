import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SecondComponent,DatabindingComponent],
  templateUrl: './app.component.html',
   styleUrl: './app.component.css'
 
})
export class AppComponent {
  title = 'AshokIT';
}
