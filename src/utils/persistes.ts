export const AddToken = (token: string) => {
    localStorage.setItem('token', token)
}

export const RemoveToken = () => {
    localStorage.removeItem('token')
}

export const GetToken = () => {
    return localStorage.getItem('token')
}

export const IsAuth = () => {
    return GetToken()? true: false
}