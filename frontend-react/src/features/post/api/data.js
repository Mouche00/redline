import { storeImageService } from "./service"

export const storeImage = async (payload) => {
    try {
        payload = {
            image: payload 
        }
    
        const response = await storeImageService(payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}