/* eslint-disable no-useless-catch */
import { fetchMediumsService } from "./service"


export const fetchMediums = async (type) => {
    try {
        const response = await fetchMediumsService(type)
        return response.data.data
    } catch (error) {
        throw error
    }
}