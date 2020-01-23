export const isEmptyObject = (obj: any): boolean => {
  const result = obj === undefined ||
    obj === null ||
    !(obj instanceof Object) ||
    Object.keys(obj).length === 0;
  return result;
};

export const isNonEmptyArray = (props: any): boolean => {
  const isArr = Array.isArray(props);
  return props && props.length && isArr;
};
