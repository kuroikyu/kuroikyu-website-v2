// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImagePost(props: { title: string; image: string }) {
	const { title, image } = props
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				textAlign: 'center',
				alignItems: 'flex-end',
				flexWrap: 'nowrap',
				backgroundColor: '#111112',
				boxShadow: 'inset 0 0 0 10px #da145b',
			}}
		>
			<img
				src={image}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
				}}
			/>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<svg
					width="112"
					height="104"
					viewBox="0 0 112 104"
					xmlns="http://www.w3.org/2000/svg"
					fill="#111112"
				>
					<rect width="112" height="104" fill="#DA145B" />
					<path d="M51.5061 70.82V94H9.53809V9.69803H51.5061V47.762H54.1901L59.4361 9.69803H102.136L87.2521 51.788L102.136 94H59.1921L54.1901 70.82H51.5061Z" />
				</svg>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					fontSize: 40,
					fontStyle: 'normal',
					color: 'black',
					marginTop: 0,
					lineHeight: 1.8,
					whiteSpace: 'pre-wrap',
					background:
						'linear-gradient(0deg, rgba(17,17,18,1) 6%, rgba(17,17,18,0) 100%)',
					minHeight: 104,
					padding: '0px 24px',
					width: '100%',
				}}
			>
				<b
					style={{
						color: 'rgb(244 244 245)',
						textShadow: '4px 4px #111112',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						width: '100%',
						/** 112 is the width of the icon, 24 is the padding above */
						maxWidth: width - 112 - 24 * 2,
					}}
				>
					{title}
				</b>
			</div>
			<div
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					boxShadow: 'inset 0 0 0 10px #da145b',
				}}
			/>
		</div>
	)
}
