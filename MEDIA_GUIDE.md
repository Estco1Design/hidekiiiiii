# HIDEKI SITE — MEDIA GUIDE

## Current Project Structure

All media paths in the code reference the `/media/` directory. You need to create this folder structure and add your files.

---

## REQUIRED FOLDER STRUCTURE

Create these folders in your project root:

```
HIDEKI SITE/
├── media/
│   ├── home/              # Homepage hero and sections
│   │   ├── hero.mp4       # Main homepage fashion film (fullscreen)
│   │   ├── hero-poster.jpg
│   │   └── section-*.jpg  # Various section images
│   │
│   ├── about/             # About page
│   │   ├── founder-fashion.jpg
│   │   └── founder-visual.jpg
│   │
│   ├── work/              # Work page grid previews
│   │   └── (project-specific folders below)
│   │
│   ├── projects/          # Individual project pages
│   │   ├── echoes/        # ECHOES OF SILENCE
│   │   │   ├── cover.mp4
│   │   │   ├── cover.jpg
│   │   │   ├── preview.mp4
│   │   │   ├── video-01.mp4
│   │   │   ├── video-02.mp4
│   │   │   └── img-01.jpg through img-04.jpg
│   │   │
│   │   ├── shadow/        # SHADOW RITUAL
│   │   │   ├── cover.jpg
│   │   │   ├── preview.mp4
│   │   │   ├── img-01.jpg through img-03.jpg
│   │   │   └── video-01.mp4
│   │   │
│   │   ├── void/          # VOID PORTRAITS
│   │   │   ├── cover.jpg
│   │   │   ├── preview.mp4
│   │   │   └── img-01.jpg through img-04.jpg
│   │   │
│   │   ├── neural/        # NEURAL DREAMS
│   │   │   ├── cover.mp4
│   │   │   ├── cover.jpg
│   │   │   ├── preview.mp4
│   │   │   ├── video-01.mp4
│   │   │   └── img-01.jpg, img-02.jpg
│   │   │
│   │   ├── concrete/      # CONCRETE GARDEN
│   │   │   ├── cover.jpg
│   │   │   ├── preview.mp4
│   │   │   ├── img-01.jpg through img-03.jpg
│   │   │   └── video-01.mp4
│   │   │
│   │   └── motion/        # MOTION STUDY 001
│   │       ├── cover.mp4
│   │       ├── cover.jpg
│   │       ├── preview.mp4
│   │       ├── video-01.mp4
│   │       └── video-02.mp4
│   │
│   ├── shop/              # Shop products
│   │   ├── object-001/
│   │   │   ├── front.jpg
│   │   │   ├── side.jpg
│   │   │   ├── back.jpg
│   │   │   ├── detail.jpg
│   │   │   └── campaign.mp4
│   │   │
│   │   ├── object-002/
│   │   │   ├── front.jpg
│   │   │   ├── side.jpg
│   │   │   ├── back.jpg
│   │   │   ├── detail.jpg
│   │   │   └── campaign.mp4
│   │   │
│   │   └── object-003/
│   │       ├── front.jpg
│   │       ├── side.jpg
│   │       ├── back.jpg
│   │       └── campaign.mp4 (optional - archived item)
│   │
│   ├── studio/            # Studio page services
│   │   ├── fashion.jpg
│   │   ├── portrait.jpg
│   │   ├── campaign.jpg
│   │   ├── commercial.jpg
│   │   ├── film.jpg
│   │   ├── reel.jpg
│   │   ├── music-video.jpg
│   │   ├── art-direction.jpg
│   │   ├── ai-photo.jpg
│   │   ├── product.jpg
│   │   └── full-production.jpg
│   │
│   ├── archive/           # Archive items
│   │   └── (add archived pieces as needed)
│   │
│   └── contact/           # Contact page background (optional)
│       └── bg.jpg
│
└── public/                # Static assets (already exists)
    └── favicon.ico
```

---

## VIDEO SPECIFICATIONS

### Homepage Hero Video
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds
- **File size**: Keep under 10MB if possible
- **Aspect ratio**: 16:9
- **Sound**: Muted (no audio track needed)
- **Loop**: Seamless loop preferred

### Project Videos
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 minimum, up to 4K for fullscreen
- **Duration**: Varies by project
- **Aspect ratios supported**:
  - `fullscreen`: 16:9 or custom
  - `huge`: Any (will fill container)
  - Standard: Will be cropped to fit

### Preview Videos (Work page hover)
- **Format**: MP4
- **Resolution**: 640x480 or similar (small file size)
- **Duration**: 3-5 seconds loop
- **File size**: Under 2MB recommended
- **Sound**: No audio

---

## IMAGE SPECIFICATIONS

### General Guidelines
- **Format**: JPG for photos, PNG for graphics with transparency
- **Color profile**: sRGB
- **Quality**: 80-90% JPEG quality for web optimization

### Size Recommendations by Type

| Type | Recommended Resolution | Aspect Ratio |
|------|----------------------|--------------|
| Fullscreen | 1920x1080 or higher | 16:9 |
| Huge | 1600x1200 or higher | 4:3 or custom |
| Large | 1200x1600 (portrait) or 1600x1200 (landscape) | 3:4 or 4:3 |
| Medium | 800x1000 (portrait) or 1000x800 (landscape) | 4:5 or 5:4 |
| Small | 600x800 (portrait) or 800x600 (landscape) | 3:4 or 4:3 |

### Homepage Specific
- **Hero poster**: 1920x1080 (16:9)
- **Section images**: Varies by layout

### About Page
- **Founder portraits**: 1200x1600 (3:4 aspect ratio)

### Shop Products
- **Product images**: Minimum 1200x1600
- **Detail shots**: 800x800 or larger
- **Campaign video**: 1920x1080

---

## CURRENT PROJECTS DATA

Edit `src/data/projects.ts` to change:
- Project titles
- Categories
- Years
- Media file paths
- Credits
- Descriptions

Example project entry:
```typescript
{
  id: '1',
  slug: 'echoes-of-silence',
  title: 'ECHOES OF SILENCE',
  year: 2026,
  category: 'FASHION',
  coverType: 'video',
  coverVideo: '/media/projects/echoes/cover.mp4',
  coverImage: '/media/projects/echoes/cover.jpg',
  previewVideo: '/media/projects/echoes/preview.mp4',
  theme: 'dark',
  accentColor: '#FFFFFF',
  client: 'Private Collection',
  location: 'Moscow',
  gallery: [
    { type: 'video', src: '/media/projects/echoes/video-01.mp4', size: 'fullscreen' },
    { type: 'image', src: '/media/projects/echoes/img-01.jpg', caption: 'Look 01', size: 'large', align: 'center' },
    // Add more content blocks as needed
  ],
  credits: [
    { role: 'Photography', name: 'HIDEKI Studio' },
    { role: 'Direction', name: 'HIDEKI Studio' },
  ],
  description: 'An exploration of silence through fashion and movement.',
}
```

---

## SHOP PRODUCTS DATA

Edit `src/data/products.ts` to change:
- Product names
- Prices (in RUB)
- Status: 'available' | 'pre-order' | 'archive' | 'sold-out'
- Sizes and measurements
- Materials
- Images
- Descriptions

Example product entry:
```typescript
{
  id: '1',
  slug: 'object-001',
  objectNumber: '001',
  title: 'BLACK SET',
  price: 45000,
  status: 'pre-order',
  sizes: [
    { label: '01', measurements: 'Chest: 120cm, Length: 75cm' },
    { label: '02', measurements: 'Chest: 125cm, Length: 77cm' },
    { label: '03', measurements: 'Chest: 130cm, Length: 79cm' },
  ],
  materials: ['Heavy Cotton', 'Distressed Treatment', 'Hand-finished'],
  images: [
    '/media/shop/object-001/front.jpg',
    '/media/shop/object-001/side.jpg',
    '/media/shop/object-001/back.jpg',
    '/media/shop/object-001/detail.jpg',
  ],
  campaignVideo: '/media/shop/object-001/campaign.mp4',
  description: 'Oversized silhouette with experimental construction.',
  isLimited: true,
  numberOfObjects: 50,
}
```

---

## MISSING MEDIA HANDLING

The site includes a dev-only fallback system:
- In development: Missing images show a placeholder with the filename
- In production: Missing images fail gracefully with alt text

This allows you to:
1. Commit code changes without having all media ready
2. See which files are missing by their placeholders
3. Add media files gradually without breaking the site

---

## ADDING NEW PROJECTS

1. Create a new folder in `media/projects/your-project-name/`
2. Add your media files (images/videos)
3. Edit `src/data/projects.ts` and add a new project entry
4. Reference your media files with paths like `/media/projects/your-project-name/filename.ext`
5. Run `npm run dev` to see the changes

---

## ADDING NEW PRODUCTS

1. Create a new folder in `media/shop/object-XXX/`
2. Add product images and optional campaign video
3. Edit `src/data/products.ts` and add a new product entry
4. Reference your media files
5. Run `npm run dev` to see the changes

---

## PERFORMANCE TIPS

1. **Compress videos**: Use HandBrake or similar tools
2. **Optimize images**: Use Squoosh, TinyPNG, or ImageOptim
3. **Use appropriate sizes**: Don't upload 4K images for small thumbnails
4. **Preview videos**: Keep them short and low-resolution
5. **Lazy loading**: Already implemented - only loads media when visible

---

## BROWSER COMPATIBILITY

- Videos: MP4 with H.264 codec works in all modern browsers
- Images: JPG and PNG universally supported
- Lazy loading: Uses IntersectionObserver (modern browsers)
- Fallbacks: Provided for older browsers where possible

---

## FILE NAMING CONVENTIONS

Use lowercase with hyphens:
- ✅ `cover-video.mp4`
- ✅ `img-01.jpg`
- ❌ `Cover Video.MP4`
- ❌ `IMG_01.JPG`

This avoids issues with different operating systems and servers.

---

## QUICK START CHECKLIST

- [ ] Create `media/` folder in project root
- [ ] Add homepage hero video: `media/home/hero.mp4`
- [ ] Add about page founder photos: `media/about/founder-*.jpg`
- [ ] Add at least one complete project with all media
- [ ] Add at least one shop product with images
- [ ] Run `npm run dev` and test all pages
- [ ] Check browser console for any missing file errors
- [ ] Replace placeholder media gradually

---

For questions about specific implementations, check the component files in `src/components/` and page files in `src/app/`.
