import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// api.interceptors.request.use((config) => {
//     return config
// })

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export const createUser = async (data) => {
    return await api.post('/users', data)
}

export const getUser = async (userId) => {
    return await api.get(`/users/${userId}`)
}

export const addOrder = async (data) => {
    return await api.post('/orders', data)
}

export const getOrderByUserId = async (userId) => {
    return await api.get(`/orders/${userId}`)
}
