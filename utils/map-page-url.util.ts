
import { uuidToId, parsePageId, getCanonicalPageId as getCanonicalPageIdImpl } from 'notion-utils'
import { ExtendedRecordMap } from 'notion-types'
import { notionPageID, subDomain } from './config.util';

export const getCanonicalPageId = (
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
) => {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  return getCanonicalPageIdImpl(pageId, recordMap, {
    uuid
  })
}

const normalizeTitle = (title: string | null): string => {
  return (
    (title || '')
      .replace(/ /g, '-')
      .replace(/--/g, '-')
      .replace(/-$/, '')
      .replace(/^-/, '')
      .trim()
  )
}

export const mapPageUrl =
  (recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageUuid) === notionPageID) {
      return createUrl(subDomain, searchParams)
    } else {
      return createUrl(
        `${subDomain}${normalizeTitle(getCanonicalPageId(pageUuid, recordMap))}`,
        searchParams
      )
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}
