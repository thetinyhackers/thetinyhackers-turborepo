import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  const urls: string[] = []
  const { availableLocales } = useAppConfig()

  const articles = await serverQueryContent(event)
    .only(['_path'])
    .find()

  for (const availableLocale of availableLocales) {
    for (const article of articles)
      urls.push(`/${availableLocale.code}${article._path}`)
  }

  return urls
})
