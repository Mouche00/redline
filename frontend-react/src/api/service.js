/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig"

export const fetchMediumsService = async () => {

    try {
        const response = await instance.get(`/mediums`)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchNewService = async () => {

    try {
        const response = await instance.get(`/mediums/new`)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchUpcomingService = async () => {

    try {
        const response = await instance.get(`/mediums/upcoming`)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchPopularService = async () => {

    try {
        const response = await instance.get(`/mediums/popular`)
        return response
    } catch (error) {
        throw error
    }
}