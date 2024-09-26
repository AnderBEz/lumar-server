import transporter from "../controller/mailer.js";

export const sendAppointmentEmail = async (nombre, numeroCel, fecha, hora) => {
  await transporter.sendMail({
    from: process.env.USER_LUMAR,
    to: process.env.USER_LUMAR,
    subject: "Confirmación de Cita",
    html: `
    <h1><b>${nombre} ha agendado una cita</b></h1>
    <h2>Informacion del cliente</h2>
    <h3>Nombre: ${nombre} </h3>
    <h3>Numero de celular: ${numeroCel} </h3>
    <h3>Fecha reservada: ${fecha} </h3>
    <h3>Hora reservada: ${hora} </h3>
    `
  });
};
