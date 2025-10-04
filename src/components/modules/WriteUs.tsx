'use client'
import { FC, useEffect, useState } from 'react'
import { Text } from '@UI/Text'
import { Button } from '@UI/Button'
import { Link } from '@UI/Link'
import { ReactComponent as MessageIcon } from '@icons/message.svg'
import { ReactComponent as TelegramIcon } from '@icons/telegram.svg'
import { ReactComponent as BigTelegramIcon } from '@icons/telegramBig.svg'
import { ReactComponent as Cross } from '@icons/cross.svg'
import clsx from 'clsx'
import styles from '@styles/writeUs.module.css'

interface IWriteUs {}

export const WriteUs: FC<IWriteUs> = () => {
	const [showButton, setShowButton] = useState(false)
	const [showCommunicationVariant, setShowCommunicationVariant] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setShowButton(true), 5000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<>
			{showButton ? (
				<>
					<div className='fixed right-10 bottom-[-4px] z-50 flex mobile:hidden'>
						<div className='w-[300px] h-[40px] relative rounded-t-lg'>
							<Link
								className={clsx('z-[50] relative', styles.writeUsButtonDesktop)}
								href='https://t.me/+ncsQe4IfCFo4NDA6'
								variant='external'
							>
								<Button className='w-full h-full' handleClick={() => {}}>
									<Text>Напишите нам. Мы онлайн!</Text>
								</Button>
							</Link>
							<Link
								variant='external'
								href='https://t.me/+ncsQe4IfCFo4NDA6'
								className={styles.desktopWriteUsCommunicationButton}
							>
								<div className='flex gap-3 p-2 rounded-lg bg-white hover:shadow-lg'>
									<TelegramIcon />
									<Text>Telegram</Text>
								</div>
							</Link>
						</div>
					</div>
					<div className='fixed right-5 bottom-[10px] z-50 hidden mobile:flex'>
						<div className='relative w-full h-full'>
							<Button variant='icon' handleClick={() => setShowCommunicationVariant(prev => !prev)}>
								<div className='bg-purple rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10'>
									{showCommunicationVariant ? <Cross /> : <MessageIcon />}
								</div>
							</Button>
							<Link
								variant='external'
								href='https://t.me/+ncsQe4IfCFo4NDA6'
								className={clsx(styles.mobileWriteUsCommunicationButton, { [styles.open]: showCommunicationVariant })}
							>
								<BigTelegramIcon />
							</Link>
						</div>
					</div>
				</>
			) : null}
		</>
	)
}
