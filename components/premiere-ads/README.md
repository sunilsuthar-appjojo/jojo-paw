# Premiere Ads World - Dynamic Landing Page

A fully dynamic, responsive landing page implementation for Premiere Ads World with hero section, services grid, and contact form.

## Components

### PremiereAdsPage
Main container component that orchestrates all sections.

### HeroSection
- Red background with upward arrow illustration
- Logo with title and subtitle
- Description text
- CTA button
- Fully responsive

### ServicesGrid
- 6 service cards in a 3-column grid (responsive)
- Three theme variants: light, red, and black
- Dynamic icon loading from SVG files
- Watermark background effect on hover
- Cards include:
  - Digital Marketing
  - Influencer Marketing
  - Brand Partnerships
  - Content & Integrations
  - On-Ground Activations
  - Campaign Strategy

### ContactSection
- Contact form with validation
- Name, Email, and Message fields
- Decorative illustration on the right
- Form submission handling
- Fully responsive layout

## Data Structure

All content is managed through `data/site/premiere-ads.json`:

```json
{
  "hero": { ... },
  "whatWeDo": { ... },
  "contact": { ... }
}
```

## Assets Used

### SVG Icons (from `/public/images/svg/`)
- banner-arrow.svg - Hero section arrows
- DIGITAL_MARKETING.svg
- INFLUENCER_MARKETING.svg
- BRAND_PARTNERSHIP.svg
- CONTENT_INTEGRATION.svg
- ON_GROUND.svg
- CAMPAIGN.svg
- Illustration_FORM.svg - Contact form illustration

### Logos (from `/public/images/logos/`)
- JOJO_LIMITED_LOGO.svg
- PAW-LOGO.svg

## Styling

- Uses Tailwind CSS for all styling
- Custom fonts: Gotham (headings) and Poppins (body text)
- Color palette:
  - Primary Red: #E63946
  - Black: #0A0A0A
  - Light Gray: #F5F5F5
  - White: #FFFFFF

## Usage

```tsx
import PremiereAdsPage from "@/components/premiere-ads/PremiereAdsPage";
import premiereAdsData from "@/data/site/premiere-ads.json";

export default function Page() {
  return <PremiereAdsPage data={premiereAdsData} />;
}
```

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Features

- Fully dynamic content from JSON
- Responsive design
- Hover effects and transitions
- Form validation
- Accessible markup
- SEO-friendly structure
