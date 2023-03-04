import Spotify, { SpotifyContentTypes } from 'components/Spotify'
import { enumValues } from 'lib/typescript.helpers'
import { FaSpotify } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

const Preview = (props) => {
  const { type, id, renderDefault } = props
  if (!type) {
    return <div>Missing Spotify content type</div>
  }
  if (!id) {
    return <div>Missing Spotify content id</div>
  }
  return (
    <div>
      {renderDefault({
        title: 'Spotify Embed',
        icon: FaSpotify,
        ...props,
      })}
      <Spotify type={type} id={id} />
    </div>
  )
}

export default defineType({
  name: 'spotify',
  title: 'Spotify',
  icon: FaSpotify,
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Spotify content type',
      validation: (rule) => rule.required(),
      options: {
        list: enumValues(SpotifyContentTypes).map((el: string | number) =>
          el.toString()
        ),
        layout: 'radio',
      },
    }),
    defineField({
      name: 'id',
      type: 'string',
      title: 'Spotify content id',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      type: 'type',
      id: 'id',
    },
  },
  components: {
    preview: Preview,
  },
})
