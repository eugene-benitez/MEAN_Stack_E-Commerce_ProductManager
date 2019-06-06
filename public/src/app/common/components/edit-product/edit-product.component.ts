import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/Product';
import { NewProduct } from '../../models/NewProduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  thisProduct: Product = {
    _id: '',
    title: '',
    price: 0,
    image: '',
  };

  editProduct: NewProduct = {
    title: '',
    price: 0,
    image: '',
  }

  ProductError: ProductError = {
    title: '',
    price: ''
  }

  deleteProduct: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.http.getProduct(params.id)
        .subscribe((data: Product) => this.thisProduct = data);
    });
  }


  onEdit() {
    this.http.updateProduct(this.thisProduct._id, this.editProduct)
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

  deleteProductButton(product_id: string): void {
    console.log(`Delete event is working with string param: ${product_id}`);
    this.http.deleteProduct(product_id)
      .subscribe((data: Product) => {
        this.deleteProduct = data;
        this.router.navigateByUrl('product-list')
      });
  }


}
