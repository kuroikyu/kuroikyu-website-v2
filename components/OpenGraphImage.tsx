// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
	const { title } = props
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				textAlign: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'space-between',
				flexWrap: 'nowrap',
				backgroundColor: '#111112',
				backgroundImage: `
        radial-gradient(circle at 0px 0px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 0px 25px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 0px 50px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 0px 75px, #3f3f46 1%, transparent 0%),
        radial-gradient(circle at 25px 0px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 25px 25px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 25px 50px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 25px 75px, #3f3f46 1%, transparent 0%),
        radial-gradient(circle at 50px 0px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 50px 25px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 50px 50px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 50px 75px, #3f3f46 1%, transparent 0%),
        radial-gradient(circle at 75px 0px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 75px 25px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 75px 50px, #3f3f46 1%, transparent 0%), radial-gradient(circle at 75px 75px, #3f3f46 1%, transparent 0%),
        `,
				backgroundSize: '100px 100px',
				backgroundPosition: 'center 220% / 20px 20px',
			}}
		>
			<div
				style={{
					display: 'flex',
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
					width="731"
					height="104"
					viewBox="0 0 731 104"
					xmlns="http://www.w3.org/2000/svg"
					fill="#111112"
				>
					<rect width="731" height="104" fill="#DA145B" />
					<path d="M51.5061 70.82V94H9.53809V9.69803H51.5061V47.762H54.1901L59.4361 9.69803H102.136L87.2521 51.788L102.136 94H59.1921L54.1901 70.82H51.5061Z" />
					<path d="M154.445 9.69803H194.583V56.546C194.583 69.722 191.207 79.482 184.457 85.826C177.787 92.0887 167.133 95.22 152.493 95.22H149.321C134.762 95.22 124.107 92.048 117.357 85.704C110.687 79.36 107.353 69.6407 107.353 56.546V9.69803H147.369V61.06C147.369 62.1174 147.694 62.9714 148.345 63.622C148.995 64.1914 149.809 64.476 150.785 64.476C151.842 64.476 152.696 64.1507 153.347 63.5C154.079 62.8494 154.445 62.036 154.445 61.06V9.69803Z" />
					<path d="M243.561 69.356V94H201.593V9.69803H245.879C260.437 9.69803 271.133 12.0974 277.965 16.896C284.797 21.6134 288.213 29.828 288.213 41.54C288.213 50.4054 285.325 56.9527 279.551 61.182C284.431 69.8847 288.131 80.824 290.653 94H250.515C249.864 85.7854 248.725 78.5467 247.099 72.284L246.245 69.356H243.561ZM243.561 59.474H247.099C248.075 59.474 248.888 59.1487 249.539 58.498C250.189 57.8474 250.515 56.9934 250.515 55.936V48.616C250.515 47.5587 250.189 46.7454 249.539 46.176C248.888 45.5254 248.075 45.2 247.099 45.2H243.561V59.474Z" />
					<path d="M336.331 8.47803H346.457C361.097 8.47803 371.752 11.9347 378.421 18.848C385.091 25.7614 388.425 36.6194 388.425 51.422C388.425 66.2247 385.05 77.2454 378.299 84.484C371.63 91.6414 361.016 95.22 346.457 95.22H336.331C321.773 95.22 311.118 91.6414 304.367 84.484C297.617 77.2454 294.241 66.2247 294.241 51.422C294.241 36.6194 297.576 25.7614 304.245 18.848C310.996 11.9347 321.691 8.47803 336.331 8.47803ZM337.917 48.616V62.768C337.917 63.8254 338.202 64.6794 338.771 65.33C339.422 65.9807 340.235 66.306 341.211 66.306C342.269 66.306 343.123 65.9807 343.773 65.33C344.505 64.6794 344.871 63.8254 344.871 62.768V48.616C344.871 47.64 344.505 46.8267 343.773 46.176C343.123 45.5254 342.269 45.2 341.211 45.2C340.235 45.2 339.422 45.5254 338.771 46.176C338.202 46.8267 337.917 47.64 337.917 48.616Z" />
					<path d="M393.767 94V9.69803H435.735V94H393.767Z" />
					<path d="M484.821 70.82V94H442.853V9.69803H484.821V47.762H487.505L492.751 9.69803H535.451L520.567 51.788L535.451 94H492.507L487.505 70.82H484.821Z" />
					<path d="M604.925 94H559.175V74.114C556.897 73.138 555.311 72.4467 554.417 72.04C553.522 71.6334 552.058 70.7794 550.025 69.478C548.073 68.1767 546.609 66.8347 545.633 65.452C542.949 61.792 541.241 57.278 540.509 51.91L535.263 9.69803H578.451L581.501 51.422H584.185L586.747 9.69803H628.837L623.591 51.91C622.859 57.278 621.151 61.792 618.467 65.452C617.491 66.8347 615.986 68.1767 613.953 69.478C612.001 70.7794 610.577 71.6334 609.683 72.04C608.788 72.4467 607.202 73.138 604.925 74.114V94Z" />
					<path d="M681.165 9.69803H721.303V56.546C721.303 69.722 717.928 79.482 711.177 85.826C704.508 92.0887 693.853 95.22 679.213 95.22H676.041C661.483 95.22 650.828 92.048 644.077 85.704C637.408 79.36 634.073 69.6407 634.073 56.546V9.69803H674.089V61.06C674.089 62.1174 674.415 62.9714 675.065 63.622C675.716 64.1914 676.529 64.476 677.505 64.476C678.563 64.476 679.417 64.1507 680.067 63.5C680.799 62.8494 681.165 62.036 681.165 61.06V9.69803Z" />
				</svg>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 40,
					fontStyle: 'normal',
					color: 'black',
					marginTop: 0,
					lineHeight: 1.8,
					whiteSpace: 'pre-wrap',
				}}
			>
				<b style={{ color: 'rgb(244 244 245)' }}>{title}</b>
			</div>
			<div
				style={{
					display: 'flex',
				}}
			/>
		</div>
	)
}
