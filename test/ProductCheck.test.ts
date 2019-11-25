import { makeProductCall } from '../src/components/Product/Product';

describe('API CHECK', () => {
  it('Product call', async () => {
    const response = await makeProductCall('comboB001');
    console.log(response);
    expect(response).toBeTruthy();
  });
  it('has product identifier', async () => {
    const response = await makeProductCall('comboB001');
    const productIdentifier = response.product;
    expect(productIdentifier).toHaveProperty('identifier');
  });
  it('is Type Product', async () => {
    const response = await makeProductCall('comboB001');
    const productResponseLength = response.product.type;
    expect(productResponseLength).toBe('product');
  });
});
