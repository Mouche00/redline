import { createCrewService, fetchCrewService, getCategoriesService, getCrewService } from "./service"

export const getCategories = async () => {
    try {
        const response = await getCategoriesService()
        return response.data.data
    } catch (error) {
        console.log('Error', error)
    }
}

export const createCrew = async (payload) => {
    try {
        const response = await createCrewService(payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
    }
}

export const getCrew = async (query) => {
    try {
        const response = await getCrewService(query)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
    }
}

export const fetchCrew = async (id) => {
    try {
        const response = await fetchCrewService(id)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
    }
}