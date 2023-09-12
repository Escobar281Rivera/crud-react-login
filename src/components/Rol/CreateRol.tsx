import React, { useState } from 'react';
import UseRolStore from '../../stores/rol.store';

const CreateRoleModal = () => {
    const { CreateRol } = UseRolStore();
    const [roleName, setRoleName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRoleName('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoleName(e.target.value);
    };

    const handleSubmit = async () => {
        if (roleName.trim() !== '') {
            await CreateRol(roleName);
            closeModal();
        }
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
            >
                <svg
                    width="27"
                    height="27"
                    fill="none"
                    stroke="#0d0c0c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                >
                    <path d="M12 5.25v13.5"></path>
                    <path d="M18.75 12H5.25"></path>
                </svg>
                <span>Agregar</span>
            </button>

            {isModalOpen && (
                <div>

                    <div className="fixed inset-0 bg-black opacity-50"></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-container bg-white p-6 rounded-lg shadow-lg relative">

                            <span onClick={closeModal} className="close-modal absolute top-2 right-4 text-gray-600 cursor-pointer text-2xl">
                                &times;
                            </span>
                            <h2 className="text-xl font-semibold mb-4">Crear Nuevo Rol</h2>
                            <input
                                type="text"
                                placeholder="Role Name"
                                value={roleName}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                            />
                            <div className='flex justify-center'>
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Crear
                            </button>
                            <div className="mx-2"></div> 
                            <button
                                onClick={closeModal}
                                className=" bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Cancelar
                            </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}
        </div>



    );
};

export default CreateRoleModal;
