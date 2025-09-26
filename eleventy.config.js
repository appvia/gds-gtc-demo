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

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: '_site'
    }
  }
}