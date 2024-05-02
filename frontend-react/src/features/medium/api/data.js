import { banUserService, createCrewService, createMediumService, deletePostService, fetchCrewService, fetchMediumService, getCategoriesService, searchCrewService } from "./service"

export const getCategories = async () => {
    try {
        const response = await getCategoriesService()
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const createCrew = async (payload) => {
    try {
        const response = await createCrewService(payload)
        return response.data.data.id
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const createMedium = async (payload) => {
    try {
        const response = await createMediumService(payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const searchCrew = async (query) => {
    try {
        const response = await searchCrewService(query)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const fetchCrew = async (id) => {
    try {
        const response = await fetchCrewService(id)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const fetchMedium = async (id) => {

    try {
        const response = await fetchMediumService(id)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const deletePost = async (post) => {

    try {
        const response = await deletePostService(post)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const banUser = async (medium, payload) => {
    payload = {
        'user_id': payload
    }

    try {
        const response = await banUserService(medium.id, payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}