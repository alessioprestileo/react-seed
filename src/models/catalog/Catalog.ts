import { fetchResponse } from '../../utils/apiUtils';
interface ProductListResponse {
  Search : any[];
}
class Catalog {
  transformProductList = (data:ProductListResponse) => {
    const { Search } = data;
    return Search;
  }
  getProductList = async() => {
    const domain = 'http://www.omdbapi.com' ;
    const searchKey = 'batman';
    const apiKey = '7e5bdf84';
    const url = `${domain}/?s=${searchKey}&apikey=${apiKey}`;
    const productListResponse = await fetchResponse(url);
    return this.transformProductList(productListResponse);
  }
}
const catalog = new Catalog();
export { catalog, Catalog };
export default Catalog ;
