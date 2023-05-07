export default function YouTube({ id }: { id: string }) {
	if (!id) return null

	return (
		<iframe
			className="aspect-video h-auto w-full"
			width="800"
			height="450"
			src={`https://www.youtube-nocookie.com/embed/${id}`}
			title="YouTube video player"
			frameBorder={0}
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
			allowFullScreen
		></iframe>
	)
}
