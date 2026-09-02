# debugLog

**debugLog** is the personal Salesforce engineering blog of **Bathini Madan Krishna**.

🌐 https://debuglog.in

## What it is

A simple, dark-first place for practical notes about:

- Salesforce development
- Salesforce clouds
- Integrations
- Architecture
- AI and emerging Salesforce technologies

## Site flow

Home → Topic → Article

## Features

- MDX blog content
- Flexible categories
- Article images
- Code blocks
- SEO metadata
- Canonical URLs
- Open Graph / Twitter metadata
- Sitemap
- RSS feed
- robots.txt
- Custom 404 page
- Favicon
- No database
- No Tailwind dependency

## Author

**Bathini Madan Krishna**

- LinkedIn: https://www.linkedin.com/in/madhankrishna/
- Email: madhankrishna24@gmail.com

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Writing a new article

Create an `.mdx` file under:

```text
src/content/blogs/
```

Example:

```yaml
---
title: "My Salesforce Article"
description: "A short description."
category: "Agentforce"
tags:
  - Agentforce
  - Salesforce
date: "2026-09-01"
readTime: "6 min"
heroImage: "/images/blog/my-article.png"
---
```

Then write the article below the frontmatter.

## Images

Place images in:

```text
public/images/blog/
```

Use them in MDX:

```md
![Architecture diagram](/images/blog/architecture.png)
```

or:

```mdx
import BlogImage from '../../components/BlogImage.astro';

<BlogImage
  src="/images/blog/architecture.png"
  alt="Architecture diagram"
  caption="High-level integration flow"
/>
```

## Deployment

The production domain is:

```text
https://debuglog.in
```

The intended deployment flow is:

```text
GitHub → Vercel → debuglog.in
```
