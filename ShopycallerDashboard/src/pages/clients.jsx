import React, { useState,useEffect } from 'react';
import axios from 'axios'

const Clients = () => {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:4040/clients/client');
        setClients(response.data);
      } catch (error) {
        console.error(error);
        // Optional: Handle the error
      }
    };
  
    fetchClients();
  }, []);
  
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:4040/clients/client/${id}`,
  //     );
  //     setClients((prevClients) => prevClients.filter((client) => client.id !== id));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?");
  
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:4040/clients/client/${id}`,
        );
        setClients((prevClients) => prevClients.filter((client) => client.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  

  const [isAddingClient, setIsAddingClient] = useState(false);
  const [isModifyingClient, setIsModifyingClient] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [formClient, setFormClient] = useState({
    id: '',
    fullname: '',
    phone: '',
    email: '',
    deliveryadress: '',
  });

  const handleModify = (id) => {
    const client = clients.find((client) => client.id === id);
    setFormClient(client);
    setIsModifyingClient(true);
    setSelectedClientId(id);
  };
  // Form state
  const [newClient, setNewClient] = useState({
    id: '',
    fullname: '',
    phone: '',
    email: '',
    deliveryadress: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };
  

  const handleAddClient = async () => {
    // const generatedId = Math.floor(Math.random() * 1000) + 1;
    //const client = { ...newClient, id: generatedId };

    // setNewClient({
    //   id: '',
    //   fullname: '',
    //   phone: '',
    //   email: '',
    //   deliveryadress: '',
    // });
    try {
      const response = await axios.post("http://localhost:4040/clients/addClient", {
        fullname: newClient.fullname,
        phone: newClient.phone,
        email: newClient.email,
        deliveryadress: newClient.deliveryadress,
      });
      console.log(response.data); // Optional: Handle the response data
    } catch (error) {
      console.error(error);
      // Optional: Handle the error
    
    }
    setIsAddingClient(false);
  };

  const handleModifyClient = (clientId) => {
    const client = clients.find((client) => client.id === clientId);
    console.log("our client : ", client);
    setFormClient(client)
    
    setNewClient({
      id: client.clientId,
      fullname: client.fullname,
      phone: client.phone,
      email: client.email,
      deliveryadress: client.deliveryadress,
    });
    setIsModifyingClient(true);
    console.log("updated changes : ", newClient);
    setSelectedClientId(clientId);
  };

  const handleSaveModifications = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4040/clients/client/${selectedClientId}`,
        newClient
      );
      console.log(response.data); // Optional: Handle the response data
      const updatedClients = clients.map((client) =>
        client.id === selectedClientId ? newClient : client
      );
      setClients(updatedClients);
      setNewClient({
        id: '',
        fullname: '',
        phone: '',
        email: '',
        deliveryadress: '',
      });
      setIsModifyingClient(false);
      setSelectedClientId(null);
    } catch (error) {
      console.error(error);
      // Optional: Handle the error
    }
  };

  const handleDeleteClient = (clientId) => {
    const updatedClients = clients.filter((client) => client.id !== clientId);
    setClients(updatedClients);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Liste des Clients</h1>

      {isAddingClient || isModifyingClient ? (
        <div className="bg-gray-100 rounded p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">
            {isAddingClient ? 'Ajouter un client' : 'Modifier un client'}
          </h2>
          <form>
            <div className="flex flex-col mb-2">
              <label htmlFor="fullname" className="font-bold mb-1">
                Nom complet:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={newClient.fullname}
                onChange={handleInputChange}
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="phone" className="font-bold mb-1">
                Numéro de téléphone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={newClient.phone}
                onChange={handleInputChange}
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="font-bold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newClient.email}
                onChange={handleInputChange}
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="deliveryadress" className="font-bold mb-1">
                Adresse de livraison:
              </label>
              <input
                type="text"
                id="deliveryadress"
                name="deliveryadress"
                value={newClient.deliveryadress}
                onChange={handleInputChange}
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={isAddingClient ? handleAddClient : handleSaveModifications}
              >
                {isAddingClient ? 'Ajouter' : 'Enregistrer'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mb-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setIsAddingClient(true)}
          >
            Ajouter un client
          </button>
        </div>
      )}

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nom complet</th>
            <th className="px-4 py-2">Numéro de téléphone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Adresse de livraison</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border px-4 py-2">{client.id}</td>
              <td className="border px-4 py-2">{client.fullname}</td>
              <td className="border px-4 py-2">{client.phone}</td>
              <td className="border px-4 py-2">{client.email}</td>
              <td className="border px-4 py-2">{client.deliveryadress}</td>
              <td className="border px-4 py-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
                  onClick={() => handleModify(client.id)}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(client.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
