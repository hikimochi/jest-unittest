import { Product } from '../type/product';
import { Store } from './store';

export class Customer {
  purchase(store: Store, product: Product, num: number) {
    if (store.hasEnoughInventory(product, num)) {
      store.removeInventory(product, num);
      return true;
    } else {
      return false;
    }
  }
}
