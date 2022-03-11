class ARPostService {
    constructor() {
        // Add the firebase backend url
        this.url = '';
        this.posts = [];
    }

    async fetchPosts() {
        console.log('Fetch AR Posts');
        const response = await fetch(this.url);
        this.posts = await response.json();
        return this.posts;
    }
}

const arPostService = new ARPostService();

export default arPostService;