export type goBackFunctionType = {
  goBack: () => void,
};

export interface MovieDetailsDataType {
  history: goBackFunctionType;
  match: {[key:string]: any};
}
