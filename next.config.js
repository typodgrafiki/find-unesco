/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    i18n: {
        locales: ['en-US', 'pl', 'de'],
        defaultLocale: 'en-US',
        domains: [
          {
            domain: 'findunesco.com',
            defaultLocale: 'en-US',
            http: true,
          },
          {
            domain: 'findunesco.pl',
            defaultLocale: 'pl',
            http: true,
          },
          {
            domain: 'findunesco.de',
            defaultLocale: 'de',
            http: true,
          },
        ],
    },
}

module.exports = nextConfig