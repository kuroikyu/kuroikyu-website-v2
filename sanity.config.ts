/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import {
	apiVersion,
	dataset,
	DRAFT_MODE_ROUTE,
	previewSecretId,
	projectId,
} from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { media } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'
import authorType from 'schemas/author'
import spotify from 'schemas/common/spotify'
import youtube from 'schemas/common/youtube'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'

const title =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	title,
	schema: {
		// If you want more content types, you can add them to this array
		types: [authorType, postType, settingsType, spotify, youtube],
	},
	plugins: [
		deskTool({
			structure: settingsStructure(settingsType),
			// `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
			defaultDocumentNode: previewDocumentNode(),
		}),
		// Configures the global "new document" button, and document actions, to suit the Settings document singleton
		settingsPlugin({ type: settingsType.name }),
		// Add the "Open preview" action
		previewUrl({
			base: DRAFT_MODE_ROUTE,
			urlSecretId: previewSecretId,
			matchTypes: [postType.name, settingsType.name],
		}),
		// Add an image asset source for Unsplash
		unsplashImageAsset(),
		// A convenient way to browse, manage and select all your Sanity assets.
		// https://www.sanity.io/plugins/sanity-plugin-media
		media(),
		// Vision lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
})
