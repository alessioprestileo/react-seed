type RequestAction = {
  type: string
  params?: string,
};

type SuccessAction = {
  type: string
  payload?: string,
};

type FailureAction = {
  type: string
  error?: string,
};

export const request = (type: string, params?: string): RequestAction => {
  return { type, params };
};

export const success = (type: string, payload?: string): SuccessAction => {
  return { type, payload };
};

export const failuer = (type: string, error?: string): FailureAction => {
  return { type, error };
};
