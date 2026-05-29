export const Button = ({ children }) => {
	return (
		<button className='px-4 py-2 bg-hero text-[var(--text)] bg-[var(--hero)] border border-[var(--text)] rounded-xl hover:bg-hero/80 transition-colors'>
			{children}
		</button>
	)
}
