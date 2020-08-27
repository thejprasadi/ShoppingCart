import { Product } from './product';
import { Guid } from 'guid-typescript';

export class CartItem {
  id: Guid;
  productId: number;
  productName: string;
  qty: number;
  unitPrice: number;

  constructor(product: Product, qty = 1) {
    this.id = Guid.create();
    this.productId = product.id;
    this.productName = product.name;
    this.unitPrice = product.unitPrice;
    this.qty = qty;
  }
}
