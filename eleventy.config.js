import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'Get Tech Certified'

export default function(eleventyConfig) {
  // Register the GOV.UK Eleventy Plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: serviceName,
      search: false
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS ? '/govuk-eleventy-plugin/' : '/',
      navigation: [
        {
          text: 'Topics',
          href: '/topics/'
        }, {
          text: 'Vendors',
          href: '/vendors/'
        }, {
          text: 'FAQs',
          href: '/faqs/'
        }
      ]
    },
    footer: {
      copyright: {
        text: '© Crown copyright'
      }
    },
    templates: {
      searchIndex: true,
      sitemap: true,
      tags: true
    }
  })

  eleventyConfig.addCollection('topic', (collection) =>
    collection
      .getFilteredByGlob(['app/topics/*.md'])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )

  // Copy video and image files to output
  eleventyConfig.addPassthroughCopy('./app/assets')
  eleventyConfig.addPassthroughCopy('app/*.mp4')
  eleventyConfig.addPassthroughCopy('app/*.png')
  eleventyConfig.addPassthroughCopy('app/vendors')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: '_site'
    },
    pathPrefix: '/gds-gtc-demo/'
  }
}