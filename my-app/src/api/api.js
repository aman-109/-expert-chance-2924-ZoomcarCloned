import axios from 'axios';

export default axios.create({
	baseURL: 'https://zoomcar-servertest.herokuapp.com',
});