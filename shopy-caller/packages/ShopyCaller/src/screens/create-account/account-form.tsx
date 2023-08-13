import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from 'react-native';
import * as z from 'zod';
import { useAddClient } from '@/api';

import { Button, ControlledInput, Text, View, showErrorMessage } from '@/ui';
import { showMessage } from 'react-native-flash-message';
import { AxiosError } from 'axios';

const schema = z.object({
  phone: z
    .string({
      required_error: 'Telephone is required',
    })
    .regex(/^\d+$/) // validate that the input value contains only digits
    .min(8)
    .max(8),
    fullname: z
    .string({
      required_error: 'First name and last name are required',
    })
    .regex(
      /^[A-Za-z]+ [A-Za-z]+$/,
      'First name and last name must be two words separated by a space'
    ),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
    deliveryadress: z.string({
    required_error: 'Adresse de livraison est requis',
  }),
});

export type FormType = z.infer<typeof schema>;

type Props = {
  onSubmit?: (data: FormType) => void;
};
//const [toggle, setToggle] = useState(false);

export const AccountForm = ({}: Props) => {
  const { mutate: addClient, isLoading } = useAddClient();

  const [isEnabled, setIsEnabled] = useState(false);
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormType) => {
    console.log(data);
    addClient(
      { ...data },
      {
        onSuccess: () => {
          showMessage({
            message: 'Client added successfully',
            type: 'success',
          });
          // here you can navigate to the post list and refresh the list data
          // queryClient.invalidateQueries('posts');
        },
        onError: (err:AxiosError) => {
          showErrorMessage('Error adding client');
          
        },
      }
    );
  };
  return (
    <View className="flex justify-center p-4">
      <ControlledInput
        testID="Phone-input"
        control={control}
        name="phone"
        label="Téléphone"
        keyboardType="numeric"
      />
      <ControlledInput
        testID="FirstNameAndLastName-input"
        control={control}
        name="fullname"
        label="Nom & Prénom"
      />
      <ControlledInput
        testID="Email-input"
        control={control}
        name="email"
        label="Email"
      />
      <ControlledInput
        testID="DeliveryAddress-input"
        control={control}
        name="deliveryadress"
        label="Adresse de livraison"
      />
      <View className="space-x-5 flex-col p-2">
        <View className="flex flex-row border-b border-grey-10 pb-5">
          <Switch
            trackColor={{ false: '#767577', true: '#02F387' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={setIsEnabled}
            value={isEnabled}
          />
          <Text className="text-white "> Passer au magasin</Text>
        </View>
        <View className="pt-5">
          <Text className="text-grey-10 text-center text-xs  ">
            Remplir les champs et cliquer sur le bouton d'enregistrement pour
            terminer le {'\n'} processus d'achat.
          </Text>
        </View>
      </View>
      <Button
        variant="outline"
        label="S'enregistrer"
        className="bg-green-10 rounded-3xl"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
