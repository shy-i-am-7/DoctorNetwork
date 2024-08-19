import axios from 'axios';

const firebaseUrl = 'https://doctornetwork-newsletter-default-rtdb.firebaseio.com';

class NewsletterService {
    async submitNewsletter(data) {
        try {
            await axios.post(`${firebaseUrl}/subscribers.json`, data);
            console.log('Newsletter signup successful!');
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            throw error;
        }
    }
}

export default new NewsletterService();
