import transporter from "../controller/mailer.js";
import { appointmentTemplate } from "../utils/emailTemplate.js";

export const sendAppointmentEmail = async (nombre, numeroCel, fecha, hora) => {
  await transporter.sendMail({
    from: process.env.USER_LUMAR,
    to: process.env.USER_LUMAR,
    subject: "Confirmación de Cita",
    html: appointmentTemplate(nombre, numeroCel, fecha, hora),
  });
};
