# SANHS Annex — School Website

> Official website of **San Andres National High School — Cabadiangan Annex**, Kadingilan, Bukidnon, Philippines.

Built with **Next.js 15**, **Cloudflare D1**, **Drizzle ORM**, **NextAuth v5**, and **Tailwind CSS v4**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5.2 (App Router) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database | Cloudflare D1 (SQLite) + Drizzle ORM |
| Auth | NextAuth v5 beta |
| Deployment | Cloudflare Pages |
| Language | TypeScript |

## Getting Started

### Prerequisites

- Node.js 18+
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare account

### Local Development

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Set up environment
cp .env.example .env
# Edit .env and add AUTH_SECRET (generate with: openssl rand -base64 32)

# 3. Create local D1 database
wrangler d1 create sanhs-annex --local
# Copy the output database_name and database_id to wrangler.toml

# 4. Run migrations
wrangler d1 migrations apply sanhs-annex --local

# 5. Seed test data
npx tsx scripts/seed.ts

# 6. Start dev server
npm run dev
```

### Cloudflare Pages Deployment

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click **Create a project** → **Connect to Git**
3. Connect your GitHub repo: `westphilip24/sanhs-annex`
4. Set **Build command**: `npm run build`
5. Set **Build output directory**: `.next`
6. Add environment variable: `AUTH_SECRET` (generate with `openssl rand -base64 32`)
7. Deploy!

### After Deployment — Set Up Production D1

```bash
# 1. Create production D1
wrangler d1 create sanhs-annex

# 2. Update wrangler.toml with the new database_id

# 3. Apply migrations
wrangler d1 migrations apply sanhs-annex --remote

# 4. Seed data
npx tsx scripts/seed.ts

# 5. Redeploy via GitHub push
```

## Test Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@sanhs.edu.ph | Admin@2026! |
| Teacher | m.santos@sanhs.edu.ph | Teacher@2026! |
| Parent | j.delacruz@email.com | Parent@2026! |
| Student | a.belmonte@sanhs.edu.ph | Student@2026! |

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Marketing pages (Homepage, About, etc.)
│   ├── (auth)/login/      # Login page
│   ├── (portal)/          # Student/parent portal
│   └── (admin)/           # Admin dashboard
├── components/            # Navbar, Footer, UI components
├── db/schema.ts           # Full Drizzle schema (users, grades, attendance, etc.)
├── lib/utils.ts           # DepEd grading utilities, transmutation
└── auth.ts                # NextAuth configuration
```

## School Info

- **Location**: Sayre Highway, Cabadiangan, Kadingilan, 8713 Bukidnon, Philippines
- **Phone**: +63 954 885 2407
- **Email**: cabadiangannex@gmail.com
- **School Head**: Michael V. Beliganio
- **DepEd Division**: Region X (Northern Mindanao), District II, Kadingilan
- **School ID**: 314926

## Features

- [x] Public marketing pages
- [x] Responsive mobile-first design
- [x] SANHS brand colors (Green #1B5E20, Gold #C9A84C)
- [x] DepEd grading schema (WW/PT/QA)
- [x] Enrollment inquiry form
- [x] NextAuth authentication
- [x] Test accounts seeded
- [ ] Full portal pages (grades, attendance, schedule)
- [ ] Admin dashboard CRUD
- [ ] Promotional banners system
- [ ] Cloudflare Pages production deployment
