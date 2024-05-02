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
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    
    try {
        const response = await instance.post(`/crew/store`, payload, headers)
        return response
    } catch (error) {
        throw error
    }
}

export const createMediumService = async (payload) => {
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    
    try {
        const response = await instance.post(`/medium/store`, payload, headers)
        return response
    } catch (error) {
        throw error
    }
}

export const searchCrewService = async (query) => {
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

export const fetchMediumService = async (id) => {
    try {
        const response = await instance.get(`/medium/${id}`)
        return response
    } catch (error) {
        throw error
    }
}

export const deletePostService = async (post) => {
    try {
        const response = await instance.post(`/post/${post}/delete`)
        return response
    } catch (error) {
        throw error
    }
}

export const banUserService = async (medium, payload) => {
    try {
        const response = await instance.post(`/medium/${medium}/ban`, payload)
        return response
    } catch (error) {
        throw error
    }
}