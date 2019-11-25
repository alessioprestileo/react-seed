export const pagePath = {
  catalog: '/',
  product: '/products',
};

export const pageComponents = [
  {
    path: pagePath.catalog,
    Component: 'ProductList',
  },
  {
    path: `${pagePath.product}/:productId`,
    Component: 'Product',
  },
];
