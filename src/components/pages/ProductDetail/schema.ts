interface ProductID {
  productId : string;
}
interface Params {
  params : ProductID;
}
export interface ProductDetailProps {
  match : Params;
}
export interface ProductResponse{
  Poster:string;
  Title:string;
  Director:string;
  Year:string;
  imdbRating:string;
  Language:string;
  Runtime:string;
}
