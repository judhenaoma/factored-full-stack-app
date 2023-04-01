import axios from 'axios';
const postData = (url, formData) => {
        
    return axios.post(url, formData)
      .then((response) => {
        const { data } = response;	
        if(data.authorized) {
          return data;
        }
        return          
    }).catch((error) => {
        return error;
      });
}
export { postData }

