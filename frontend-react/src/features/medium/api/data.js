import { createCrewService, createMediumService, fetchCrewService, getCategoriesService, searchCrewService } from "./service"

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