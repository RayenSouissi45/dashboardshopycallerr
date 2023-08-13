import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { client } from '../common';
import type { Client } from './types';

type Input = { phone: string; fullname: string; email:string; deliveryadress: string; };

type Response = Client;

const addClient = (input: Input): Promise<Response> => {
 
  
  return client({
    url: 'clients/addClient',
    method: 'POST',
    data: input,
  }).then((response) => response.data);
};

export function useAddClient(
  config?: UseMutationOptions<Response, AxiosError, Input>
) {
  return useMutation<Response, AxiosError, Input>(addClient, config);
}
