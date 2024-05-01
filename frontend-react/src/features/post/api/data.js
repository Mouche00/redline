import { fetchCommentService, fetchCommentsService, storeCommentService, storeDownvoteService, storeImageService, storePostService, storeUpvoteService } from "./service"

export const storeImage = async (payload) => {
    try {
        payload = {
            image: payload 
        }
    
        const response = await storeImageService(payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const storePost = async (medium, payload) => {
    // const medium = payload.medium
    // payload = Object.keys(payload).reduce((r, e) => {
    //     if(e != 'medium') r[e] = payload[e]
    //     return r
    // }, {})

    // console.log('fffff', payload, medium)

    try {
        const response = await storePostService(medium, payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const storeComment = async (commentable, payload) => {

    try {
        const response = await storeCommentService(commentable.name, commentable.id, payload)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const fetchComment = async (comment) => {

    try {
        const response = await fetchCommentService(comment)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const fetchComments = async (commentable) => {

    try {
        const response = await fetchCommentsService(commentable.name, commentable.id)
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}

export const storeVote = async (voteable, id, type = 'up') => {

    try {
        let response = null
        if(type == 'down'){
            response = await storeDownvoteService(voteable, id)
        } else if(type == 'up') {
            response = await storeUpvoteService(voteable, id)
        }
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}