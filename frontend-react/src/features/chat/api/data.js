/* eslint-disable no-useless-catch */

import { fetchService, indexService, recieverService, sendService } from "./service"

export const send = async (message, channel) => {
    const payload = {
        message: message,
        channel: channel
    }
    
    try {
        const response = await sendService(payload)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export const fetchMessages = async (channel) => {
    try {
        const response = await fetchService(channel)
        return response.data.data.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchChannels = async () => {
    try {
        const response = await indexService()
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchReciever = async (channel) => {
    try {
        const response = await recieverService(channel)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}