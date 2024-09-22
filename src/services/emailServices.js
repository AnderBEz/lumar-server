import transporter from "../controller/mailer.js";

export const sendAppointmentEmail = async (nombre, numeroCel, fecha, hora) => {
  await transporter.sendMail({
    from: process.env.USER_LUMAR,
    to: process.env.USER_LUMAR,
    subject: "Confirmación de Cita",
    html: `
    <h1>Confirmación de una cita</h1>
    <p><b>${nombre}<b> ha hecho una cita</p>
    <p>Informacion del cliente<p>
    <p>Nombre: ${nombre} <p>
    <p>Numero de celular: ${numeroCel} <p>
    <p>Fecha reservada: ${fecha} <p>
    <p>Hora reservada: ${hora} <p>
    `
  });
};
