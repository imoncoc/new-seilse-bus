import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  list: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.restful-api.dev/objects').subscribe((res) => {
      this.list = res;
    });
  }


}
