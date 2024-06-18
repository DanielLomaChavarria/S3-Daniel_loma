import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    { name: 'Producto 1', price: 1000 },
    { name: 'Producto 2', price: 2000 },
    // Añade más productos según sea necesario
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
