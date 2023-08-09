import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import {
  indexQuery,
  settingsQuery,
  type Post,
  type Settings,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
	const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, indexQuery)
	const [settings, loadingSettings] = useLiveQuery<Settings>(
		props.settings,
		settingsQuery,
	)

	return (
		<IndexPage
			preview
			loading={loadingPosts || loadingSettings}
			posts={posts || []}
			settings={settings || {}}
		/>
	)
}
