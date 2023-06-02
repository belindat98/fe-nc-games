import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://nc-games-ms1c.onrender.com/api/'
});

export const getReviews = (category, sort_by, order) => {
    return gamesApi.get('/reviews', {params: {category: category, sort_by: sort_by, order: order}}).then(({data}) => data.reviews)
}

export const getAllCategories = () => {
    return gamesApi.get('/categories').then(({data}) => data.categories)
}

export const getAllUsers = () => {
    return gamesApi.get('/users').then(({data}) => data.users)
}

export const getReviewById = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then(({data}) => data.review)
}

export const getCommentsByReviewId = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then(({data})=> data.comments)
}

export const voteForReview = (vote, review_id) => {
    return gamesApi.patch(`/reviews/${review_id}`, {"inc_votes": vote}).then(({data}) => data.review)
}

export const postComment = (comment_input, username, review_id) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, {
        "body": comment_input,
        "username": username
})
}