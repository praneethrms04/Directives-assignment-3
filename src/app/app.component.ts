import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Data-binding';
  count: number = 0;
  name = "hello"
  city = "Puttaparthy"

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }

  changeName(e: any) {
     this.name = e.target.value;
  }
 
  updatecity (e: any){
    this.city = e.target.value
  }

}
