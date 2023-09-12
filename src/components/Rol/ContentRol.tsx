import React, { useEffect, useState } from 'react';
import UseRolStore from '../../stores/rol.store';
import CreateRol from '../../components/Rol/CreateRol';
import UpdateRol from '../../components/Rol/UpdateRol';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RoleList() {
    const { roles, GetAllRol, DeleteRol } = UseRolStore();
    const [roleToDelete, setRoleToDelete] = useState<{ id: number; roleName: string } | null>(null);

    useEffect(() => {
        GetAllRol();
    }, []);
    const handleDelete = (id: number, roleName: string) => {
        setRoleToDelete({ id, roleName });
    };
    const confirmDelete = () => {
        if (roleToDelete) {
            DeleteRol(roleToDelete.id);
            toast.success(`Se ha eliminado el rol correctamente`, {
                position: 'top-right',
                autoClose: 3000,
            });

            setRoleToDelete(null);
        }
    };
    const cancelDelete = () => {
        setRoleToDelete(null);
    };


    return (
        // formulario
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold text-center mb-4">Lista de Roles</h1>
            <div className="flex justify-end mb-4">
                <CreateRol />
            </div>

            <div className="flex justify-center">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-2 px-4">Rol</th>
                            <th className="py-2 px-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {roles.map((rol) => (
                            <tr key={rol.id}>
                                <td className="py-2 px-4 whitespace-nowrap align-top text-center">{rol.rol}</td>
                                <td className="py-2 px-4 whitespace-nowrap align-top text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        <button
                                            onClick={() => handleDelete(rol.id, rol.rol)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
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
                                                <path d="M3 6h18"></path>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                            Eliminar
                                        </button>
                                        <UpdateRol roleId={rol.id} roleNameToUpdate={rol.rol} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
{/* Toasts */}

       <ToastContainer />
            {roleToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>¿Estás seguro de que deseas eliminar el rol "{roleToDelete.roleName}"?</p>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Sí, eliminar
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RoleList;
