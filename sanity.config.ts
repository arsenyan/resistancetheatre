'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'



const plugins = [
  structureTool({structure}),
  crossDatasetDuplicator({
    // Required settings to show document action
    types: ['post', 'category'],
    // Optional settings
    tool: true,
    follow: [],
    queries:[
      {
        label: "All posts",
        query: '_type == "post"'
      }
    ]
  }),
  visionTool({defaultApiVersion: apiVersion}),
];

export default defineConfig([
  {
    name: 'workspace-ru',
    title: 'Russian',
    basePath: '/admin/ru',
    projectId,
    dataset: 'ru',
    schema,
    plugins,
  },
  {
    name: 'workspace-en',
    title: 'English',
    basePath: '/admin/en',
    projectId,
    dataset: 'en',
    schema,
    plugins,
  },
]);
