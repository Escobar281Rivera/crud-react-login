import axios from 'axios'
import { API_URL } from '../utils/constants'
import { GetRol } from '../types/rol.type'

export const create_rol = async (rol: string) => {
    const { data } = await axios.post<{ ok: boolean, msg: string }>(
        API_URL + '/rol',
        {
            rol,
        },
    )
    return data
}

export const get_rol = async () => {
    const { data } = await axios.get<{ roles: GetRol[] }>(
        API_URL + '/rol'
    )
    return data
}
export const get_rol_id = async (id: number) => {
    const { data } = await axios.get<{ roles: GetRol[] }>(
        API_URL + '/rol' + id
    )
    return data
}

export const update_rol = async (id: number, rol: string) => {
    const { data } = await axios.put<{ ok: boolean, msg: string }>(
        API_URL + '/rol' + id,
        {
            rol
        },
    )
    return data
}
export const delete_rol = async (id: number) => {
    const { data } = await axios.delete<{ ok: boolean, msg: string }>(
        API_URL + '/rol' + id,
    )
    return data
}