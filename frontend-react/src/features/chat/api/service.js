/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig";

export const sendService = async (payload) => {
    try {
        const response = await instance.post('/message/store', payload)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchService = async (channel) => {
    try {
        const response = await instance.get(`/channels/${channel}`)
        return response
    } catch (error) {
        throw error
    }
}

export const indexService = async () => {
    try {
        const response = await instance.get(`/channels`)
        return response
    } catch (error) {
        throw error
    }
}

export const recieverService = async (channel) => {
    try {
        const response = await instance.get(`/channels/${channel}/users`)
        return response
    } catch (error) {
        throw error
    }
}