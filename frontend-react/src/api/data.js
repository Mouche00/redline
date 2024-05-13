/* eslint-disable no-useless-catch */
import { fetchMediumsService, fetchPostsService } from "./service"


export const fetchMediums = async (type = 'new') => {
    try {
        const response = await fetchMediumsService(type)
        return response.data.data
    } catch (error) {
        throw error
    }
}

export const fetchPosts = async (type) => {
    try {
        const response = await fetchPostsService(type)
        return response.data.data
    } catch (error) {
        throw error
    }
}