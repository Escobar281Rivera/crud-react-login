import React, { useState } from 'react';
import UseRolStore from '../../stores/rol.store';

const UpdateRoleModal = ({ roleId, roleNameToUpdate }: { roleId: number, roleNameToUpdate: string }) => {
    const { UpdateRol } = UseRolStore();
    const [newRoleName, setNewRoleName] = useState(roleNameToUpdate);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setNewRoleName(roleNameToUpdate);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoleName(e.target.value);
    };
    const handleSubmit = async () => {
        if (newRoleName.trim() !== '') {
            await UpdateRol(roleId, newRoleName);

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
                >
                    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span> Editar</span>
            </button>
            {isModalOpen && (
                <div>
                    <div className="fixed inset-0 bg-black opacity-50"></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-container bg-white p-6 rounded-lg shadow-lg relative">
                            <span
                                onClick={closeModal}
                                className="close-modal absolute top-2 right-4 text-gray-600 cursor-pointer text-2xl"
                            >
                                &times;
                            </span>
                            <h2 className="text-xl font-semibold mb-4">Editar Rol</h2>
                            <input
                                type="text"
                                placeholder="Nuevo Nombre de Rol"
                                value={newRoleName}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                            />
                            <div className='flex justify-center'>

                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Guardar
                                </button>
                                <div className='mx-2'></div>
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
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

export default UpdateRoleModal;
