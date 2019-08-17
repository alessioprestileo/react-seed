import { fetchResponse } from '../../utils/apiUtils';
interface ProductListResponse {
  Search : any[];
}
const domain = 'http://www.omdbapi.com';
const apiKey = '7e5bdf84';
class Catalog {
  transformProductList = (data:ProductListResponse) => {
    const { Search } = data;
    return Search;
  }
  transformProductDetail = (data:any) => {
    const { Poster, Title, Director, Year, imdbRating, Language, Runtime } = data;
    const transformed = {
      Poster,
      Title,
      Director,
      Year,
      imdbRating,
      Language,
      Runtime,
    };
    return transformed;
  }
  getProductList = async() => {
    const searchKey = 'batman';
    const url = `${domain}/?s=${searchKey}&apikey=${apiKey}`;
    const productListResponse = await fetchResponse(url);
    return this.transformProductList(productListResponse);
  }
  getProductDetail = async(productId:string) => {
    const url = `${domain}/?i=${productId}&apikey=${apiKey}`;
    const productDetail = await fetchResponse(url);
    console.log('productDetail', productDetail);
    return this.transformProductDetail(productDetail);
  }
}
const catalog = new Catalog();
export { catalog, Catalog };
export default Catalog ;
