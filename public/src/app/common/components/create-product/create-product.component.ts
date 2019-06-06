import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { NewProduct } from '../../models/NewProduct'
import { ProductError } from '../../models/ProductError';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProduct: NewProduct = {
    title: '',
    price: null,
    image: '',
  };
  ProductError: ProductError = {
    title: '',
    price: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
  }

  onCreate() {
    this.http.addProduct(this.newProduct)
      .subscribe(data => {
        this.ProductError = { title: '', price: '' };
        if (!data['errors']) {
          this.router.navigateByUrl('product-list');
        } else {
          for (let k in data['errors']) {
            this.ProductError[k] = data['errors'][k]['message'];
          }
        }

      });
  }

}
