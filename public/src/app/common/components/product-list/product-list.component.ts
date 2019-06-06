import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: Product[] = [];

  deleteProduct: any;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.refreshAll();
  }

  refreshAll() {
    this.http.getProducts()
      .subscribe((data: Product[]) => this.allProducts = data);
  }

  deleteProductButton(product_id: string): void {
    console.log(`Delete event is working with string param: ${product_id}`);
    this.http.deleteProduct(product_id)
      .subscribe((data: Product) => {
        this.deleteProduct = data;
        this.refreshAll();
      });
  }

  editProductButton(product_id: string): void {
    this.router.navigate(['/edit-product/', product_id]);
  }

}
