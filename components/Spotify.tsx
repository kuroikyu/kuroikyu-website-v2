export enum SpotifyContentTypes {
	PLAYLIST = 'playlist',
	ARTIST = 'artist',
	ALBUM = 'album',
	TRACK = 'track',
	SHOW = 'show',
	EPISODE = 'episode',
}

export default function Spotify({
	type,
	id,
}: {
	type: SpotifyContentTypes
	id: string
}) {
	if (!id) return null

	return (
		<iframe
			className="aspect-square rounded-xl"
			src={`https://open.spotify.com/embed/${type}/${id}`}
			width="100%"
			height="352"
			frameBorder={0}
			allowFullScreen={false}
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		/>
	)
}
