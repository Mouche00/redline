/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig"

export const storeImageService = async (payload) => {
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    
    try {
        const response = await instance.post(`/image/store`, payload, headers)
        return response
    } catch (error) {
        throw error
    }
}