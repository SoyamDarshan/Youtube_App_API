import axios from 'axios';

// Environment key variables for react should start with 'REACT_APP_' eg: REACT_APP_variable_name
const KEY = `${process.env.REACT_APP_KEY_youtube}`;
console.log(KEY)
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxresult: '5',
        key: KEY,
    }
});