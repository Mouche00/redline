/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig"

export const fetchMediumsService = async (type) => {
    try {
        const response = await instance.get(`/mediums/${type}`)
        return response
    } catch (error) {
        throw error
    }
}