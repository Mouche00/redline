import { fetchCommentsService, storeImageService, storePostService } from "./service"

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

export const storePost = async (medium, payload) => {
    // const medium = payload.medium
    // payload = Object.keys(payload).reduce((r, e) => {
    //     if(e != 'medium') r[e] = payload[e]
    //     return r
    // }, {})

    // console.log('fffff', payload, medium)

    try {
        const response = await storePostService(medium, payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const fetchPostComments = async (post) => {

    try {
        const response = await fetchCommentsService('post', post)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}