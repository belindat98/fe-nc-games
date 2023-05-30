import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://nc-games-ms1c.onrender.com/api/'
});

export const getReviews = () => {
    return gamesApi.get('/reviews').then(({data}) => data.reviews)
}

export const getAllCategories = () => {
    return gamesApi.get('/categories').then(({data}) => data.categories)
}

export const getAllUsers = () => {
    return gamesApi.get('/users').then(({data}) => data.users)
}