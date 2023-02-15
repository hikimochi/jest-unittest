import { Customer } from '../src/customer';
import { Store } from '../src/store';
import { Product } from '../type/product';

jest.mock('../src/store');
Store as jest.Mock;

describe('Store', () => {
  it('在庫が十分にある場合、購入は成功する', () => {
    const spyRemoveInventory = jest.spyOn(Store.prototype, 'removeInventory');
    const spyHasEnoughInventory = jest
      .spyOn(Store.prototype, 'hasEnoughInventory')
      .mockReturnValue(true);
    const store = new Store();
    const customer = new Customer();

    expect(customer.purchase(store, 'Shampoo', 5)).toBe(true);
    expect(spyHasEnoughInventory).toBeCalled();
    expect(spyRemoveInventory).toBeCalled();
  });

  it('在庫が十分にない場合、購入は失敗する', () => {
    const spyRemoveInventory = jest.spyOn(Store.prototype, 'removeInventory');
    const spyHasEnoughInventory = jest
      .spyOn(Store.prototype, 'hasEnoughInventory')
      .mockReturnValue(false);
    const store = new Store();
    const customer = new Customer();

    expect(customer.purchase(store, 'Shampoo', 5)).toBe(false);
    expect(spyHasEnoughInventory).toBeCalled();
    expect(spyRemoveInventory).toBeCalled();
  });
});
