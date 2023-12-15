import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Ram\'s website';
  products: Product[] =[];
  // this is where we inject the services we need to use inside the component. we need HTTPClient module here.
  // type script has private and public access modifiers and private means we can only use http and cannot
  // use http outside this class including our component template i.e., above templateUrl. Also we have other life-
  //cycle verbs one of them is onInitialization
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products').subscribe(
      {
        next: response => this.products = response.data, //what to do next
        error: error => console.log(error), //what to do if there is an error
        complete: () =>{
          console.log('request completed');
          console.log('extra statement');
        }
      }
    )
  }
}
