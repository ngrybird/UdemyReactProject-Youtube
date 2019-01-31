import axios from 'axios';

const KEY = 'AIzaSyDgvD5Zl38b3Bw7F5a4J4z30AUFBkExPdw';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key :KEY
    }  
});