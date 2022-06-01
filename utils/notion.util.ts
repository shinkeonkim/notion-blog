import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types'

import { previewImagesEnabled } from './config.util';
import { getPreviewImageMap } from './preview-images.util'

const notion = new NotionAPI()

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)

  if (previewImagesEnabled) {
    const previewImageMap = await getPreviewImageMap(recordMap)
    ;(recordMap as any).preview_images = previewImageMap
  }

  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params)
}
