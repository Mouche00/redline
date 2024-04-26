/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig"

export const getCategoriesService = async () => {
    try {
        const response = await instance.get('/categories')
        return response
    } catch (error) {
        throw error
    }
}

export const createCrewService = async (payload) => {
    try {
        const response = await instance.post(`/crew/store`, payload)
        return response
    } catch (error) {
        throw error
    }
}

export const getCrewService = async (query) => {
    try {
        const response = await instance.get(`/crew?query=${query}`)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchCrewService = async (id) => {
    try {
        const response = await instance.get(`/crew/${id}`)
        return response
    } catch (error) {
        throw error
    }
}