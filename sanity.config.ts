'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {
  documentInternationalization, 
  DuplicateWithTranslationsAction,
  DeleteTranslationAction,
} from '@sanity/document-internationalization'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  document: {
    actions(prev, {schemaType}) {
      // these will be the schema types you're passing to the plugin configuration
      let actions = schema.types.some((type) => type.name === schemaType)
        ? prev.map((action) =>
            action.action === 'duplicate'
              ? DuplicateWithTranslationsAction
              : action
          )
        : prev

      // Add to the same schema types you use for internationalization
      if (['page'].includes(schemaType)) {
        // You might also like to filter out the built-in "delete" action
        actions = [...actions, DeleteTranslationAction]
      }

      return actions
    },
  },
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schema.types,
    templates: (prev) =>
      prev.filter((template) => !['post'].includes(template.id)),
  },
  plugins: [
    structureTool({structure}),
    documentInternationalization(
    {
      supportedLanguages: [
        {id: 'ru', title: 'Русский'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: ['post'],
    }
    ),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
