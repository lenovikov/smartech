// pages/api/send-email.js
import nodemailer from 'nodemailer'
import { parse } from 'formidable'
import fs from 'fs'
import path from 'path'

// Настройка Nodemailer для работы с SMTP (например, Gmail)
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'smartechbyshop@gmail.com', // Ваш email lnovikov853@gmail.com
		pass: 'ogkllyxvrkwaiiou' // Пароль приложения (не основной пароль аккаунта!)gplwlinheoasogbv
	}
})

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).end() // Метод не поддерживается
	}

	if (req.method === 'POST') {
		try {
			const fields = await req.body

			const { firstName, lastName, patronymic, phone, address, delivery, productsList } = fields

			// Создаем текст письма
			const mailBody = `
      Новое сообщение с сайта smartech.by
      От: smartech.by
      Сообщение: ${firstName} 
      
      Имя : ${firstName}
      Фамилия: ${lastName}
      Отчество: ${patronymic}
      Телефон: ${phone}
      Доставка: ${delivery}
      Адрес: ${address}
      Список товаров:
      ${productsList}`

			// Настраиваем опции письма
			const mailOptions = {
				from: ``,
				to: 'smartechbyshop@gmail.com', // Email, на который придет письмо
				subject: `Новое сообщение от Магазина`,
				text: mailBody
			}

			// Если файл был загружен, добавляем его как вложение

			// Отправляем письмо
			await transporter.sendMail(mailOptions)

			// Удаляем временный файл после отправки

			res.status(200).json({ success: true })
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Не удалось отправить сообщение' })
		}
	}
}
