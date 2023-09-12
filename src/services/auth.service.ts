import axios from 'axios'
import { API_URL } from '../utils/constants'
import { MakeLoginData, Response } from '../types/auth.type'
import { RemoveToken } from '../utils/persistes'
import { useNavigate } from 'react-router-dom'

export async function make_login(values:MakeLoginData) {
    const data = await axios.post<Response>(API_URL + '/login/sign', values)
    return data
}

export async function log_out() {
    RemoveToken()
    const navigate = useNavigate()
    navigate('/')
}