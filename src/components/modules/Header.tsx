import { Navigation } from '@modules/Navigation'
import { Wrapper } from '@UI/Wrapper'
import { ReactComponent as Logo } from '@icons/Logo.svg'
import { SocialButtons } from '@UI/SocialButtons'
import { headerLinks } from '@helpers/Consts'
import { MainCartIcon } from '@UI/MainCartIcon'
import { MobileNavigation } from '@modules/MobileNavigation'
import { Link } from '@UI/Link'
import { Text } from '../UI/Text'

export const Header = () => {
	return (
		<header className={'w-full fixed left-0 top-0 z-[500] bg-gray-bg'}>
			<Wrapper size='nav' className='h-[90px] w-full items-center justify-between tablet:hidden'>
				<Link href='/'>
					<Logo />
				</Link>
				<Navigation className='' links={headerLinks} />
				<div className='flex items-center'>
					<Text variant='semi' className='mr-2'>
						+375336370202
					</Text>
					<SocialButtons />
					<MainCartIcon />
				</div>
			</Wrapper>

			<MobileNavigation />
		</header>
	)
}
