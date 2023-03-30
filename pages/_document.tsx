import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	const dotSize = 1
	const dotSpace = 20
	const dotBetween = dotSpace - dotSize
	const bgColor = '#111112'
	const dotColor = '#3f3f46'

	return (
		<Html lang="en">
			<Head />
			<body
				className="bg-black text-zinc-100"
				style={{
					background: `
            linear-gradient(90deg, ${bgColor} ${dotBetween}px, transparent 1%) center 220% / ${dotSpace}px ${dotSpace}px,
            linear-gradient(${bgColor} ${dotBetween}px, transparent 1%) center 220% / ${dotSpace}px ${dotSpace}px,
            ${dotColor}
            `,
				}}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
