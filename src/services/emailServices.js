import transporter from "../controller/mailer.js";

export const sendAppointmentEmail = async (nombre, numeroCel, fecha, hora) => {
    const mailOptions = {
        from: process.env.USER_LUMAR,
        to: process.env.USER_LUMAR,
        subject: 'Confirmación de Cita',
        html: appointmentTemplate(nombre, numeroCel, fecha, hora)
      };
}