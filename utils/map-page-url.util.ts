
import { uuidToId, parsePageId, getCanonicalPageId as getCanonicalPageIdImpl } from 'notion-utils'
import { ExtendedRecordMap } from 'notion-types'
import { notionPageID, subDomain } from './config.util';

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  return getCanonicalPageIdImpl(pageId, recordMap, { uuid: false });
}

export const mapPageUrl =
  (recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageUuid) === notionPageID) {
      return createUrl(subDomain, searchParams)
    } else {
      return createUrl(
        `${subDomain}${getCanonicalPageId(pageUuid, recordMap)}`,
        searchParams
      )
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  console.log(path);

  return [path, searchParams.toString()].filter(Boolean).join('?')
}