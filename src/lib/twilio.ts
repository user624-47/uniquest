import axios from 'axios'

const TWILIO_ACCOUNT_SID = import.meta.env.VITE_TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = import.meta.env.VITE_TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = import.meta.env.VITE_TWILIO_PHONE_NUMBER

const twilioApi = axios.create({
  baseURL: 'https://api.twilio.com/2010-04-01',
  auth: {
    username: TWILIO_ACCOUNT_SID,
    password: TWILIO_AUTH_TOKEN,
  },
})

export const sendOTP = async (to: string, otp: string) => {
  try {
    const response = await twilioApi.post('/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json', {
      From: TWILIO_PHONE_NUMBER,
      To: to,
      Body: `Your verification code is: ${otp}`,
    })
    return response.data
  } catch (error) {
    console.error('Error sending OTP:', error)
    throw error
  }
}
