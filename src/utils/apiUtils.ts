async function fetchResponse(url:string) {
  const result  = await fetch(url)
        .then((response) => {
          const data  = response.json().then((data) => {
            console.log('data', data);
            return data;
          });
          return data ;
        });
  return result;
}

export { fetchResponse };
export default fetchResponse;
