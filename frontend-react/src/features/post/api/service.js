/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig"

export const storeImageService = async (payload) => {
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    
    try {
        const response = await instance.post(`/image/store`, payload, headers)
        return response
    } catch (error) {
        throw error
    }
}

export const storePostService = async (medium, payload) => {
    
    try {
        const response = await instance.post(`/medium/${medium}/post`, payload)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchCommentsService = async (commentable, id) => {
    
    try {
        const response = await instance.get(`/${commentable}/${id}/comments`)
        return response
    } catch (error) {
        throw error
    }
}

export const storeCommentService = async (commentable, id, payload) => {
    
    try {
        const response = await instance.post(`/${commentable}/${id}/comments/store`, payload)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchPostService = async (post) => {
    
    try {
        const response = await instance.get(`/post/${post}`)
        return response
    } catch (error) {
        throw error
    }
}

export const fetchCommentService = async (comment) => {
    
    try {
        const response = await instance.get(`/comment/${comment}`)
        return response
    } catch (error) {
        throw error
    }
}

export const storeUpvoteService = async (voteable, id) => {
    
    try {
        const response = await instance.post(`/${voteable}/${id}/upvote`)
        return response
    } catch (error) {
        throw error
    }
}

export const storeDownvoteService = async (voteable, id) => {
    
    try {
        const response = await instance.post(`/${voteable}/${id}/downvote`)
        return response
    } catch (error) {
        throw error
    }
}