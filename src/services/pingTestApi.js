class ExpressJSPingTest{
    constructor() {
        this.url = 'http://my-ip-address/ping-it';
        this.responseData = '';
    }

    async retrievePing() {
        console.log('retrieve ping running');
        const responseData = await fetch(this.url);
        this.response = await responseData.json();
        console.log('retrieve ping running response: ' + this.response);
        return this.response;
    }
}

const expressJSPingTest = new ExpressJSPingTest();

export default expressJSPingTest;