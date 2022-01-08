import connectionApi from '../utils/connectionApi';

const getList = async () => {
    try {
        const response = await connectionApi.get(`/posts`);

        return {
            type: 'GET_ALL_POSTS',
            payload: response.data
        };
    } catch (error) {
        throw error;
    }

};
export default getList;