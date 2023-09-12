import React, { useState, useEffect } from 'react';


import { get_rol, delete_rol, update_rol, create_rol } from "../services/rol.service";
import { GetRol } from "../types/rol.type";

const UseRolStore = () => {
    const [roles, setRoles] = useState<GetRol[]>([]);

    useEffect(() => {
        GetAllRol()
    }, [])
    const GetAllRol = async () => {
        try {
            const data = await get_rol();
            setRoles(data.roles);
        } catch {

        }
    };

    const CreateRol = async (rol: string) => {
        try {
            const data = await create_rol(rol);

            if (data.ok) {

                await GetAllRol();
            }
        } catch (error) {

        }
    };
    const DeleteRol = async (id: number) => {
        try {
            const data = await delete_rol(id);

            if (data.ok) {
                await GetAllRol()
            }
        } catch {

        }
    };
    const UpdateRol = async (id: number, rol: string) => {
        try {
            const data = await update_rol(id, rol);

            if (data.ok) {
                await GetAllRol();
            }
        } catch (error) {

        }
    };

    return {
        roles,
        GetAllRol,
        CreateRol,
        DeleteRol,
        UpdateRol,
    }
}

export default UseRolStore