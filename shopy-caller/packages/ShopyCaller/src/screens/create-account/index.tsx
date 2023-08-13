import React from 'react';

import { ScrollView, Text } from '@/ui';

import { AccountForm } from './account-form';

const CreateAccount = () => {
  return (
    <ScrollView className="p-4 bg-neutral-200 flex">
      <Text className="text-white font-bold  text-4xl text-center pb-4 pt-20 ">
        Créer un {'\n'}compte client
      </Text>
      <AccountForm />

      <Text className="text-grey-10 text-center text-xs  ">
        Powred By Superverse Entreprise
      </Text>
    </ScrollView>
  );
};
export default CreateAccount;
