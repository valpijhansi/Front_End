import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { VisitingcardComponent } from './visitingcard/visitingcard.component';
import { User } from './user';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SecondComponent,DatabindingComponent,VisitingcardComponent,EmpdetailsComponent],
  templateUrl: './app.component.html',
   styleUrl: './app.component.css'
 
})
export class AppComponent {
  title = 'AshokIT';
  username:string="ASHOK IT";

  userInput:User=new User;


  constructor(){
    this.userInput.username="Abhishek Kumar";
    this.userInput.salary="100000";
    this.userInput.title="Software Lead";
    this.userInput.department='2';
    this.userInput.address=[
      "Kukatpally",
      "Hyderabad"
    ];
    this.userInput.phones=[
      '111-1111-22222'
    ]
  }

}
