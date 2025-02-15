import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
        url:`https://rayadvertising.com`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/about-us`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/services`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/career`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/events`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/blog`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/join-us`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
    {
        url:`https://rayadvertising.com/terms-condition`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
    },
  ]
}