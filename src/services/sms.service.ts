import axios from 'axios';

const sendSms = async (token:string,to:string,message:string) => {
    const smsApiUrl:any = process.env.SMS_API
    const smsParams = new URLSearchParams();
    smsParams.append('token', token);
    smsParams.append('to', `+88${to}`);
    smsParams.append('message', message);
    
    try {
        const response = await axios.post(smsApiUrl, smsParams);
        return response.data;
    } catch (error) {
        return error;
    }
}

export { sendSms };