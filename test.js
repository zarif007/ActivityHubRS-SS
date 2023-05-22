const axios = require('axios');

const sendSms = async (token,to,message) => {
    const smsApiUrl= "http://api.greenweb.com.bd/api.php?json&"
    const smsParams = new URLSearchParams();
    smsParams.append('token', token);
    smsParams.append('to', `+88${to}`);
    smsParams.append('message', message);
    
    try {
        const response = await axios.post(smsApiUrl, smsParams);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

sendSms("9515162702168475122288081e302bfe3c474b0a908fa779b717",'01947302925','Your Otp for registration is 809889')