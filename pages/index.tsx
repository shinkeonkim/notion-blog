import * as React from 'react';

import { ExtendedRecordMap } from 'notion-types'
import NotionPage from '../components/notion-page';
import * as notion from '../utils/notion.util';

const NOTION_ROOT_PAGE_ID = process.env.NOTION_ROOT_PAGE_ID || "";

import {
  notionPageID,
  previewImagesEnabled
} from '../utils/config.util'

export const getStaticProps = async () => {
  const pageId = notionPageID
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Home({ recordMap }: { recordMap : ExtendedRecordMap }) {
  return (
    <div>
      {NOTION_ROOT_PAGE_ID}
      <NotionPage
        recordMap={recordMap}
        rootPageId={NOTION_ROOT_PAGE_ID}
        previewImagesEnabled={previewImagesEnabled}
      />
    </div>
  )
}
