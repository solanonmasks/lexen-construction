// All 13 projects, in the order shown on the Projects page.
// Each project gets a two-digit number ("01", "02", ...) automatically.
//
// TODO (before launch): when Lexen sends photos for each project, add a
// `photos` list to that project, e.g.
//   photos: ['/projects/craft-kitchen-1.jpg', '/projects/craft-kitchen-2.jpg']
// and turn the Projects page into a photo grid where each project opens its
// own gallery (like their current site).
const list = [
  ['Geometric Tile Modern Kitchen Renovation', 'A bright, modern kitchen with two-tone cabinetry, a full-height geometric tile backsplash, quartz-style countertops, open shelving and under-cabinet lighting.'],
  ['Craft Kitchen Renovation', 'Custom cabinetry in a soft sage tone, integrated storage and warm wood detailing throughout.'],
  ['Scandinavian Kitchen', 'Custom birch millwork, part of a full home renovation.'],
  ['Gastown Modern Industrial Kitchen', 'A modern industrial kitchen in Gastown.'],
  ['Main Floor Modern Refresh', 'A statement kitchen island, custom cabinetry, and a clean-lined fireplace feature with built-in storage and open shelving.'],
  ['Custom Travertine Bathroom', 'A bathroom finished in travertine.'],
  ['Modern Kitchen with Rustic Wood', 'Modern lines with rustic wood.'],
  ['Blend of Classic + Modern Bathroom', 'Classic and modern details in one bathroom.'],
  ['Mosaic Tiled Bathroom', 'Mosaic tile with exposed brick features.'],
  ['Custom Tiny Home Build', 'A custom tiny home, built from the ground up.'],
  ['1900s Vancouver Home Renovation', 'Renovating a Vancouver home from the 1900s.'],
  ['Airstream Full Interior Renovation', 'A full interior renovation of an Airstream trailer.'],
  ['Bamboo Kitchen', 'A bamboo kitchen, part of a full home renovation.'],
];

export const PROJECTS = list.map(([title, description], i) => ({
  number: String(i + 1).padStart(2, '0'),
  title,
  description,
}));

// The four projects shown under "Recent projects" on the Home page.
export const FEATURED = [PROJECTS[0], PROJECTS[1], PROJECTS[9], PROJECTS[11]];

// The two projects that already have a photo (shown at the top of /projects).
export const PHOTO_PROJECTS = [
  {
    caption: 'Main Floor Modern Refresh',
    image: '/lexen/kitchen.jpg',
    alt: 'Main floor modern refresh with statement kitchen island',
    position: 'center',
  },
  {
    caption: 'Mosaic tiled bathroom with exposed brick',
    image: '/lexen/bath.jpg',
    alt: 'Mosaic tiled bathroom with exposed brick',
    position: 'center 40%',
  },
];
