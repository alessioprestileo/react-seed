import 'isomorphic-fetch';

const baseURL = 'https://bcreation.herokuapp.com/api';

export async function fetchAPI(props: { method: string, dynamicURL: string }) {
  const { method, dynamicURL } = props;
  const finalURL = `${baseURL}/${dynamicURL}`;
  return await fetch(finalURL, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response: any) => {
    return response.json().then((data:any) => {
      return data;
    });
  });
}
