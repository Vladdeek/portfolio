import { useState } from 'react'
import { Compass, Settings, User } from 'lucide-react'
import { Button } from './Buttons'

const Header = () => {
	const [activeTab, setActiveTab] = useState('home')

	const navItems = [
		{ id: 'explore', label: 'Первый' },
		{ id: 'profile', label: 'Второй' },
		{ id: 'settings', label: 'Третий' },
	]

	return (
		<header className='w-full h-fit flex items-center justify-between'>
			<div className='w-full flex justify-start'></div>
			<div className='flex items-center justify-center w-full'>
				{navItems.map(item => (
					<button
						key={item.id}
						onClick={() => setActiveTab(item.id)}
						className={`flex items-center px-4 py-2 text-[var(--text)]`}
					>
						{item.icon}
						<span className='ml-2'>{item.label}</span>
					</button>
				))}
			</div>
			<div className='w-full flex justify-end'>
				<Button>
					<div className='w-5 h-5 invert-100'>
						<img className='' src='./github-svgrepo-com.svg' alt='GitHub' />s
					</div>
					GitHub
				</Button>
			</div>
		</header>
	)
}
export default Header
