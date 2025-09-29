import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the GOV.UK Eleventy Plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Get Tech Certified',
      search: false
    },
    footer: {
      copyright: {
        text: '© Crown copyright'
      }
    }
  })

  // Copy video and image files to output
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