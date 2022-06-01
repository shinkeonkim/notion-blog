import * as React from 'react';

import { ExtendedRecordMap } from 'notion-types'
import NotionPage from '../components/notion-page';
import * as notion from '../utils/notion.util';

import {
  rootDomain,
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
    <NotionPage
      recordMap={recordMap}
      rootPageId={notionPageID}
      rootDomain={rootDomain}
      previewImagesEnabled={previewImagesEnabled}
    />
  )
}
