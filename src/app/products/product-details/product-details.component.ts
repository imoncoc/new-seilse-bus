import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  product: any

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
     this.route.paramMap.subscribe((params) => {
       this.productId = params.get('id');
       this.http
         .get(`https://api.restful-api.dev/objects/${this.productId}`)
         .subscribe((res) => {
           this.product = res;
         });
     });
  }
}
