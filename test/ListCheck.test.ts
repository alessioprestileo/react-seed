import { fetchAPIResponse } from '../src/components/ProductList/ProductList';

describe('API CHECK', () => {
  it('List call', async () => {
    const response = await fetchAPIResponse();
    expect(response).toBeTruthy();
  });

  it('has product identifier', async () => {
    const response = await fetchAPIResponse();
    const prodcutIdentifier = response.products[0];
    expect(prodcutIdentifier).toHaveProperty('identifier');
  });
  it('List call products found', async () => {
    const response = await fetchAPIResponse();
    const productResponseLength = response.products.length;
    expect(productResponseLength).toBeGreaterThanOrEqual(1);
  });
});
