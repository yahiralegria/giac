import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { contact } from '@/lib/site';

type ContactBody = {
    name?: string;
    company?: string;
    email?: string;
    description?: string;
};

type ContactResponse = {
    message: string;
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getEnv = (key: string) => process.env[key]?.trim() || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ message: 'Método no permitido.' });
    }

    const { name = '', company = '', email = '', description = '' } = req.body as ContactBody;
    const cleanName = name.trim();
    const cleanCompany = company.trim();
    const cleanEmail = email.trim();
    const cleanDescription = description.trim();

    if (!cleanName || !cleanEmail || !cleanDescription) {
        return res.status(400).json({ message: 'Nombre, correo electrónico y descripción son obligatorios.' });
    }

    if (!isValidEmail(cleanEmail)) {
        return res.status(400).json({ message: 'El correo electrónico no tiene un formato válido.' });
    }

    const host = getEnv('SMTP_HOST');
    const port = Number(getEnv('SMTP_PORT') || '587');
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const from = getEnv('MAIL_FROM') || user;
    const to = getEnv('CONTACT_TO_EMAIL') || contact.email || user;

    if (!host || !port || !user || !pass || !from || !to) {
        return res.status(500).json({ message: 'Faltan variables SMTP en el servidor.' });
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: getEnv('SMTP_SECURE') === 'true',
        auth: {
            user,
            pass,
        },
    });

    const text = [
        'NUEVA SOLICITUD DE COTIZACIÓN',
        '',
        `Nombre: ${cleanName}`,
        `Empresa: ${cleanCompany || 'No especificada'}`,
        `Correo electrónico: ${cleanEmail}`,
        '',
        'Descripción del proyecto:',
        cleanDescription,
    ].join('\n');

    try {
        await transporter.sendMail({
            from,
            to,
            replyTo: cleanEmail,
            subject: `Nuevo mensaje de contacto - ${cleanName}`,
            text,
        });

        return res.status(200).json({ message: 'Solicitud enviada correctamente.' });
    } catch (error) {
        console.error('Contact email error:', error);
        return res.status(500).json({ message: 'No pudimos enviar el correo. Intenta de nuevo más tarde.' });
    }
}
