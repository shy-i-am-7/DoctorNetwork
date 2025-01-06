import axios from 'axios';

const firebaseUrl = 'https://physilink-webinar-podcast-default-rtdb.firebaseio.com';

class WebinarPodcastService {
    async fetchPodcasts() {
        try {
            const response = await axios.get(`${firebaseUrl}/podcasts.json`);
            return response.data ? Object.values(response.data) : [];
        } catch (error) {
            console.error('Error fetching podcasts:', error);
            throw error;
        }
    }

    async fetchWebinars() {
        try {
            const response = await axios.get(`${firebaseUrl}/webinars.json`);
            return response.data ? Object.values(response.data) : [];
        } catch (error) {
            console.error('Error fetching webinars:', error);
            throw error;
        }
    }

    async addPodcast(data) {
        try {
            await axios.post(`${firebaseUrl}/podcasts.json`, data);
        } catch (error) {
            console.error('Error adding podcast:', error);
            throw error;
        }
    }

    async addWebinar(data) {
        try {
            await axios.post(`${firebaseUrl}/webinars.json`, data);
        } catch (error) {
            console.error('Error adding webinar:', error);
            throw error;
        }
    }
}

export default new WebinarPodcastService();