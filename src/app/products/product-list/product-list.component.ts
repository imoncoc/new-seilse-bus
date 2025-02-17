import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() item: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  viewDetails(id: number) {
    console.log(id);
    this.router.navigate(['/product',  id ]);
  }
}
