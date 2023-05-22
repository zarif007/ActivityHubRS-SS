import axios from 'axios';

const sendSms = async (to:string,message:string) => {
    if(! to.startsWith('+88')){
        to = `+88${to}`;
    }
    const token:any = process.env.SMS_TOKEN;
    const smsApiUrl:any = process.env.SMS_API
    const smsParams = new URLSearchParams();
    smsParams.append('token', token);
    smsParams.append('to', to);
    smsParams.append('message', message);
    
    try {
        const response = await axios.post(smsApiUrl, smsParams);
        return response.data;
    } catch (error) {
        return error;
    }
}

export { sendSms };