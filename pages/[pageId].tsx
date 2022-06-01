import * as React from 'react'

import { getAllPagesInSpace } from 'notion-utils'
import { defaultMapPageUrl } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

import * as notion from '../utils/notion.util'
import NotionPage from '../components/notion-page';
import {
  notionPageID,
  previewImagesEnabled
} from '../utils/config.util'

export const getStaticProps = async (context: any) => {
  const pageId = context.params.pageId as string
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const mapPageUrl = defaultMapPageUrl(notionPageID)

  const pages = await getAllPagesInSpace(
    notionPageID,
    '',
    notion.getPage,
    {
      traverseCollections: false
    }
  )

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== '/')

  return {
    paths,
    fallback: true
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootPageId={notionPageID}
      previewImagesEnabled={previewImagesEnabled}
    />
  )
}
