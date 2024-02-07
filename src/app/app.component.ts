import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';

  mydata = {
    name:'',
    email:'',
    password:'',
    dob:'',
    address:[
      {doorNo: ''}
    ],

  }

  addAddress(){
    this.mydata.address.push({doorNo: ''});
  }
  removeAddress(index: any){
    this.mydata.address.splice(index,1);
  }

  handleValitade(form: any){
    console.log(form.invalid);
    
  }
}
