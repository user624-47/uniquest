import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

export const sendVerificationEmail = async (to: string, verificationLink: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'noreply@yourdomain.com', // Update with your domain
      to: [to],
      subject: 'Verify Your Account',
      html: `<p>Click the link to verify your account: <a href="${verificationLink}">Verify</a></p>`,
    })
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
