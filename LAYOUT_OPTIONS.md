# Layout Options

Two layout variants have been created. You can switch between them by updating `src/app/page.tsx`.

## Option A: Full Bento Grid (100vh single viewport)

**File**: `src/app/page-bento-full.tsx`

- Single viewport design, no scrolling
- 3-column layout: name+about | projects | contact
- Desktop optimized, requires ~1400px+ width to avoid cramping
- Visually distinctive, magazine/poster-like aesthetic
- All content simultaneously visible

**To use**:
```bash
cp src/app/page-bento-full.tsx src/app/page.tsx
```

## Option B: Responsive Bento (Recommended for now)

**File**: `src/app/page-responsive-bento.tsx`

- Desktop (lg breakpoint): Bento grid with 2 columns, all in 100vh
  - Left: Hero section
  - Right: About + Projects + Contact (scrollable within column)
- Mobile: Traditional vertical scrolling layout
- Better mobile experience, graceful degradation
- Preserves existing component structure

**To use**:
```bash
cp src/app/page-responsive-bento.tsx src/app/page.tsx
```

## Current Layout

**File**: `src/app/page.tsx` (original)

- Traditional vertical scroll
- All sections stacked with spacing
- Works great on mobile, hero is large on desktop
- Most conservative option

## What Changed

### 1. **Icons in About Section**
- ❌ Removed: Colored geometric shapes (circle, square, triangle)
- ✅ Added: Monospace index numbers (`01`, `02`, `03`)
- File: `src/components/sections/about.tsx`

### 2. **Fonts**
- ❌ Old: Instrument Serif + Inter + JetBrains Mono
- ✅ New: Fraunces (serif, variable) + Space Grotesk (sans) + JetBrains Mono
- More distinctive; Fraunces has optical sizing that looks great at display sizes
- Space Grotesk is techy but not generic
- Files: `tailwind.config.ts`, `src/app/layout.tsx`

### 3. **Dark Mode Transition**
- ❌ Old: Instant switch (`disableTransitionOnChange: true`)
- ✅ New: Smooth fade using CSS View Transitions API
- Works in all modern browsers
- Icon rotates + fades nicely
- File: `src/components/theme/theme-toggle.tsx`, `src/app/globals.css`

### 4. **Git Ignore**
- Added `agent_docs/` to `.gitignore` (local Obsidian vault, never commit)

### 5. **Projects Data**
- Added `hidden: boolean` flag to Project interface
- Taurus added as project #4
- Stockify and RustyDJ marked as `hidden: true`
- File: `src/data/projects.ts`

## Testing

All changes are backward compatible. The original vertical layout still works in `src/app/page.tsx`.

To test a variant:
```bash
# Copy and test Option A (full bento)
cp src/app/page-bento-full.tsx src/app/page.tsx
npm run dev
# Test on desktop (looks best at 1400px+)

# Or test Option B (responsive bento)
cp src/app/page-responsive-bento.tsx src/app/page.tsx
npm run dev
# Test on mobile (md/sm) and desktop (lg)

# Or revert to original
git checkout src/app/page.tsx
```

## Recommendations

- **Option B (Responsive Bento)** is the safest choice: looks good everywhere, no scrolling on desktop, full mobile experience
- **Option A (Full Bento)** is more visually distinctive but requires careful mobile handling (not included in this version)
- If you want the full bento experience on mobile too, I can build a responsive version that adapts the 3-column layout to mobile (e.g., stacking columns vertically but keeping the grid structure)
