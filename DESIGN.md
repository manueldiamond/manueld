# Design guidelines

The look of manueldiamond.com, taken from the home page. New pages follow these rules; the home page is the reference when in doubt.

## Colour

Defined as Tailwind theme tokens in `src/app.css`.

| Token | Value | Use |
|---|---|---|
| `mblack` | hsl(220 3.7% 14.3%) | Page background |
| `cream` | hsl(33.3 39.3% 95.1%) | Headings, body text (at 70 to 90% opacity), primary button fill |
| `pewter` | hsl(38.6 5.8% 52.5%) | Borders and hairlines (30 to 40% opacity). Not for small text: it falls just under AA contrast |
| `carafe` / `carafe-light` | hsl(47.6 21.3% 32.2% / 42.2%) | Warm accent: footer, gradients, rare highlights |

Black is used for shadows and image backgrounds. There is no bright accent colour.

## Type

- Montserrat Variable for everything; Nunito is loaded but secondary.
- Headings: regular or medium weight, sentence case, no single-word accents.
- Body: 16 to 18px, line height 180 to 190%, lines under about 80 characters.
- Large numerals (such as years on the About page) are set light (300) so they read as structure, not as headlines.
- Uppercase is reserved for the navbar. No uppercase eyebrow labels above headings.

## Shape and surface

- Square corners everywhere. No rounded cards.
- Thin borders in `pewter/40`, deep black shadows (`shadow-black/40` and darker).
- Frosted plates (`backdrop-blur` over `bg-black/30`) for panels that sit over imagery.
- The diamond (`diamond-bullet` utility) is the site's mark. Use it beside section headings on the home page, not as a list bullet.

## Buttons

- `pri-button`: cream fill, dark text. One per surface, for the main action.
- `button`: cream outline. Secondary actions.
- Plain underlined links for in-text navigation.

## Layout

- `container mx-auto` with a 16px gutter on every section, so all content shares one left edge.
- Home page section headings are right-aligned with the diamond; content pages (About, AI) are left-aligned.
- Phone first: nothing scrolls sideways at 390px, tap targets at least 44px tall.

## Images

- Screenshots sit in a 16:9 frame with `object-contain` on black, so in-game text is never cropped.
- Crop away window title bars, editor panels and debug labels before adding an image.
- Every image must show something the copy refers to. Fewer, stronger images over galleries.

## Motion

- One deliberate effect per page at most (the hero's spinning diamond, the About page's pinned years).
- No fade-in on every section. Respect `prefers-reduced-motion`.

## Copy

- Professional and plain, in the voice of the home page About section. First person, no jokes, no slang, no punchlines.
- Every sentence states a fact the reader can use. No filler, no invented numbers or claims.
- No em dashes.
