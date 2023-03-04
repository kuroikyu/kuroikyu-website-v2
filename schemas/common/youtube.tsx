import YouTube from 'components/YouTube'
import getYouTubeId from 'get-youtube-id'
import { FaYoutube } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

const Preview = (props) => {
  const { url, renderDefault } = props
  if (!url) {
    return <div>Missing YouTube video URL</div>
  }
  const id = getYouTubeId(url)
  return (
    <div>
      {renderDefault({
        title: 'YouTube Embed',
        icon: FaYoutube,
        ...props,
      })}
      <YouTube id={id} />
    </div>
  )
}

export default defineType({
  name: 'youtube',
  title: 'YouTube',
  icon: FaYoutube,
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
})
