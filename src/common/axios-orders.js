import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-chat-53c8c.firebaseio.com/'
});

export default instance;