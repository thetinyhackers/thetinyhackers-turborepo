import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  const urls: string[] = []
  const { availableLocales } = useAppConfig()

  const articles = await serverQueryContent(event)
    .where({ navigation: { $ne: false } })
    .only(['_path'])
    .find()

  for (const locale of availableLocales) {
    for (const article of articles)
      urls.push(`/${locale}${article._path}`)
  }

  return urls
})
