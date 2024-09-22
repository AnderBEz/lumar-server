import { sendAppointmentEmail } from '../services/emailServices.js';

//funcion asincrona
export const sendEmail = async (req, res) => {
    const {nombre, numeroCel, fecha, hora} = req.body;
  
  if (!nombre || !numeroCel || !fecha || !hora) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    //espera una respuesta
    await sendAppointmentEmail(nombre, numeroCel, fecha, hora);
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    res.status(500).send('Error al enviar el correo');
  }
  
};