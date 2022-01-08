import connectionApi from '../utils/connectionApi';

export const getPostById = async (id: number) => {
    try {
        const response = await connectionApi.get(`/posts/${id}`);

        return {
            type: 'POST_BY_ID',
            payload: response.data
        };
    } catch (error) {
        throw error;
    }

};
export default getPostById;