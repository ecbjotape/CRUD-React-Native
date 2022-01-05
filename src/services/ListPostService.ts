import connectionApi from '../utils/connectionApi';

class ListPostService {
    public async getList() {
        try {
            const response = await connectionApi.get('/posts');

            return response.data;
        } catch (error) {
            throw error;
        }

    }
}

export default new ListPostService();