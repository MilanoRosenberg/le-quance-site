# LE QUANCE Digital Design System

## Direction

The interface is a dark, restrained digital flagship. It uses asymmetric editorial composition for brand storytelling and direct, familiar patterns for commerce.

Design settings:

- DESIGN_VARIANCE: 7
- MOTION_INTENSITY: 5
- VISUAL_DENSITY: 3

## Colour

- Carbon: `#090a0a`
- Elevated carbon: `#111212`
- Soft ivory: `#f1eee7`
- Muted stone: `#a6a39d`
- Hairline: `rgba(241, 238, 231, 0.14)`
- Champagne accent: `#c1b38e`

Champagne is used only for focus, selected states and small brand accents. The page remains in one dark theme because Deep Black is the primary LE QUANCE brand environment.

## Typography

No approved production font files were supplied. The build uses Cormorant Garamond for selected editorial display moments and Manrope for navigation, UI and body copy. Both are self-hosted by Next.js at build time. Replace these through `src/app/layout.tsx` when final licensed brand fonts are approved.

## Shape and material

- Square geometry throughout
- No decorative rounded cards
- Buttons, inputs and media frames use a zero radius
- Hairlines and negative space provide hierarchy
- Shadows are limited to overlays and modal separation

## Motion

- Short load-in sequence for hierarchy
- Viewport reveals for storytelling
- Image scale on hover for product discovery
- Drawer and overlay transitions for state change
- All motion collapses under `prefers-reduced-motion`

## Asset status

The supplied images are concept visuals. Ivory wordmark, lockup and monogram PNG files are used directly. Product and packaging visuals are cropped in layout without modifying the source files. Prices, delivery windows, inventory, origin, production claims and final legal copy remain pending until approved data or integrations are supplied.
