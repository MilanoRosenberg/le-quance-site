# LE QUANCE Digital Flagship

A complete Next.js 16 storefront implementation based on the supplied LE QUANCE brand context, visual concepts and website blueprint.

## Setup

Requires Node.js `>=24.14.0` (see `engines` in `package.json`) and npm.

```bash
git clone <repo-url>
cd le-quance-site
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in. `.env.local` is gitignored.

| Key | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for canonical links, sitemap, robots and structured data. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_COMMERCE_PROVIDER` | Commerce backend selector. Leave blank until wired up. |
| `NEXT_PUBLIC_NEWSLETTER_PROVIDER` | Newsletter provider selector. Leave blank until wired up. |
| `NEXT_PUBLIC_AUTH_PROVIDER` | Auth provider selector. Leave blank until wired up. |

## Validate

```bash
npm run lint
npm run typecheck
npm run build
```

## Integrations still requiring owner credentials or approved data

- Commerce, inventory, confirmed prices, taxes and payment checkout
- Customer authentication and order history
- Newsletter provider
- Carrier tracking
- Final delivery and returns policies
- Final legal review and company details
- Production-approved product photography and master logo suite

The UI exposes honest pending states for these items. It does not simulate completed orders, inventory, legal approval or live customer accounts.
