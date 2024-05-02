import { loginService, registerService } from "./service"

export const login = async (payload) => {
    try {
        const response = await loginService(payload)
        
        return {
            token: response.data.data.authorization.token,
            user: response.data.data.user
        }

    } catch (error) {
        throw error.response.data.errors
    }
}

export const register = async (payload) => {
    try {
        const response = await registerService(payload)
        
        return {
            token: response.data.data.authorization.token,
            user: response.data.data.user
        }

    } catch (error) {
        throw error.response.data.errors
    }
}