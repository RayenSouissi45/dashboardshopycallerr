import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Commercial = () => {
  const [commercials, setCommercials] = useState([]);
  const [selectedCommercial, setSelectedCommercial] = useState({
    email: '',
    password: '',
    phone: '',
    firstname: '',
    lastname: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCommercials();
  }, []);

  const fetchCommercials = async () => {
    try {
      const response = await axios.get('http://localhost:4040/commercial/getcommercial');
      setCommercials(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = (commercial) => {
    setSelectedCommercial(commercial);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce commercial ?");
      if (confirmed) {
        await axios.delete(`http://localhost:4040/commercial/deletecommercial/${id}`);
        fetchCommercials();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    try {
      if (selectedCommercial.id) {
        await axios.put(
          `http://localhost:4040/commercial/putcommercial/${selectedCommercial.id}`,
          selectedCommercial
        );
      } else {
        await axios.post('http://localhost:4040/commercial/addcommercial', selectedCommercial);
      }
      fetchCommercials();
      setSelectedCommercial({
        email: '',
        password: '',
        phone: '',
        firstname: '',
        lastname: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setSelectedCommercial({
      email: '',
      password: '',
      phone: '',
      firstname: '',
      lastname: ''
    });
    setShowForm(false);
  };

  const handleAdd = () => {
    setSelectedCommercial({
      email: '',
      password: '',
      phone: '',
      firstname: '',
      lastname: ''
    });
    setShowForm(true);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Page Commerciaux</h1>

      {/* Commercial Table */}
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Téléphone</th>
            <th className="px-4 py-3 text-left">Prénom</th>
            <th className="px-4 py-3 text-left">Nom</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commercials.map((commercial, index) => (
            <tr key={commercial.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className="border px-4 py-2">{commercial.email}</td>
              <td className="border px-4 py-2">{commercial.phone}</td>
              <td className="border px-4 py-2">{commercial.firstname}</td>
              <td className="border px-4 py-2">{commercial.lastname}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-200"
                  onClick={() => handleModify(commercial)}
                >
                  Modifier
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none transition duration-200"
                  onClick={() => handleDelete(commercial.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Commercial Form */}
      {showForm && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            {selectedCommercial.id ? 'Modifier Commercial' : 'Ajouter Commercial'}
          </h2>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="new-email" className="mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                id="new-email"
                className="border border-gray-300 p-2 rounded focus:outline-none"
                value={selectedCommercial.email}
                onChange={(e) =>
                  setSelectedCommercial({ ...selectedCommercial, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="new-phone" className="mb-2 font-bold">
                Téléphone
              </label>
              <input
                type="text"
                id="new-phone"
                className="border border-gray-300 p-2 rounded focus:outline-none"
                value={selectedCommercial.phone}
                onChange={(e) =>
                  setSelectedCommercial({ ...selectedCommercial, phone: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="new-firstname" className="mb-2 font-bold">
                Prénom
              </label>
              <input
                type="text"
                id="new-firstname"
                className="border border-gray-300 p-2 rounded focus:outline-none"
                value={selectedCommercial.firstname}
                onChange={(e) =>
                  setSelectedCommercial({ ...selectedCommercial, firstname: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="new-lastname" className="mb-2 font-bold">
                Nom
              </label>
              <input
                type="text"
                id="new-lastname"
                className="border border-gray-300 p-2 rounded focus:outline-none"
                value={selectedCommercial.lastname}
                onChange={(e) =>
                  setSelectedCommercial({ ...selectedCommercial, lastname: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-200"
                onClick={handleSave}
              >
                {selectedCommercial.id ? 'Enregistrer' : 'Ajouter'}
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none transition duration-200"
                onClick={handleCancel}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-200"
          onClick={handleAdd}
        >
          Ajouter Commercial
        </button>
      </div>
    </div>
  );
};

export default Commercial;
