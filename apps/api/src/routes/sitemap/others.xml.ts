import type { Handler } from 'express';

import logger from '@hey/lib/logger';
import catchedError from 'src/lib/catchedError';
import { buildUrlsetXml } from 'src/lib/sitemap/buildSitemap';

export const get: Handler = (req, res) => {
  const user_agent = req.headers['user-agent'];

  try {
    const sitemaps = [
      'https://hey.xyz',
      'https://hey.xyz/explore',
      'https://hey.xyz/pro',
      'https://hey.xyz/thanks',
      'https://hey.xyz/terms',
      'https://hey.xyz/privacy',
      'https://hey.xyz/rules'
    ];

    const entries = sitemaps.map((sitemap) => ({
      changefreq: 'daily',
      lastmod: new Date().toISOString(),
      loc: sitemap,
      priority: 0.5
    }));
    const xml = buildUrlsetXml(entries);

    logger.info(`Lens: Fetched other sitemaps from user-agent: ${user_agent}`);

    return res.status(200).setHeader('Content-Type', 'text/xml').send(xml);
  } catch (error) {
    return catchedError(res, error);
  }
};