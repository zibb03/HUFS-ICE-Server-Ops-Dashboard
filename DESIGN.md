# Design System Specification: The Institutional Sentinel

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Observer**
This design system moves beyond the "utilitarian dashboard" and enters the realm of **High-End Institutional Editorial**. For a University Server Operation Center, the interface must command authority, suggest absolute stability, and present complex data with the clarity of a premium financial journal. 

We break the "standard template" look by utilizing **intentional asymmetry** and **tonal layering**. Instead of a rigid grid of identical boxes, we use a modular layout where critical status gauges occupy expansive, breathing "hero" zones, while granular data tables are tucked into sophisticated, recessed containers. The goal is a digital environment that feels like a physical mission control room—quiet, powerful, and impeccably organized.

---

## 2. Colors & Surface Architecture
The palette is rooted in the university’s heritage `primary` (#000d2f) but expanded into a spectrum of atmospheric depths.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. 
Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section sitting on a `surface` background creates a natural, sophisticated break. Use `surface-container-highest` for the most critical interactive areas to provide a "tactile" lift.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-weight paper.
- **Base Layer:** `surface` (#f7f9fb)
- **Primary Layout Blocks:** `surface-container-low` (#f2f4f6)
- **Active Dashboard Cards:** `surface-container-lowest` (#ffffff) to provide a crisp pop.
- **Recessed Utility Panels:** `surface-container-high` (#e6e8ea)

### The "Glass & Gradient" Rule
To elevate the "HUFS Brand Color," do not use flat fills for large headers. Apply a subtle linear gradient from `primary` (#000d2f) to `primary-container` (#00205b) at a 135-degree angle. This adds "visual soul" and depth. For floating overlays or status tooltips, use **Glassmorphism**: `surface-container-lowest` at 80% opacity with a `backdrop-blur` of 20px.

---

### 3. Typography
We utilize a dual-typeface system to balance institutional weight with technical precision.

*   **Display & Headlines (Manrope):** Chosen for its geometric stability. 
    *   `display-lg` (3.5rem): Reserved for critical server uptime percentages.
    *   `headline-md` (1.75rem): Used for primary dashboard section titles.
*   **Body & Labels (Inter/Pretendard):** Chosen for maximum legibility at small scales.
    *   `body-md` (0.875rem): Standard for data table entries.
    *   `label-sm` (0.6875rem): Used for technical metadata and timestamps.

**Editorial Hierarchy:** Always pair a `headline-sm` title with a `label-md` uppercase subtitle (letter-spacing: 0.05em) using the `secondary` color token to create an authoritative, curated look.

---

## 4. Elevation & Depth
We eschew traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" tiers. A `surface-container-lowest` card placed atop a `surface-container-low` background creates a soft, natural lift without visual noise.
*   **Ambient Shadows:** If a card requires a "floating" state (e.g., a hovered server node), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(0, 32, 91, 0.06);`. The shadow color is a tinted version of the primary brand color, mimicking natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` token at **20% opacity**. Never use 100% opaque lines; they "trap" the eye and break the editorial flow.

---

## 5. Components

### Status Gauges (The Sentinel Gauges)
High-visibility circular or semi-circular indicators. 
- **Design:** Use a thick `secondary-container` track. The active progress should use `primary` for normal states, but switch to `error` (#ba1a1a) or `tertiary-container` (#471200) for alerts.
- **Styling:** No harsh caps; use "Round" stroke-linecaps for a modern, organic feel.

### Dashboard Cards
- **Structure:** Roundedness set to `md` (0.75rem). 
- **Constraint:** Forbid divider lines. Separate card headers from content using `spacing-4` (0.9rem) of vertical white space or a subtle background shift to `surface-container-low`.

### Data Tables
- **Aesthetic:** High-density, low-friction. 
- **Styling:** Use `surface-container-lowest` for the header row. No vertical lines. Use alternating row tints of `surface` and `surface-container-low`.
- **Typography:** Technical data (IP addresses, Port numbers) should use `body-sm` with a slightly tighter tracking.

### Announcement Ticker
- **Visual Style:** A full-width `primary-container` bar. 
- **Typography:** `title-sm` in `on-primary`. 
- **Detail:** Use a `glass` overlay effect on the "Static" label of the ticker (e.g., "URGENT") to make it pop against the scrolling text.

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `md` corner radius, `on-primary` text.
- **Secondary:** `surface-container-high` fill with no border.
- **Tertiary:** Text-only, using `primary` color, strictly for low-priority actions like "View Logs."

---

## 6. Do's and Don'ts

### Do:
*   **Do** use white space as a structural element. If a section feels crowded, increase the spacing to `spacing-8` (1.75rem) rather than adding a line.
*   **Do** use `tertiary` (#230500) and `error` (#ba1a1a) sparingly. They are "loud" colors intended to break the calm navy/grey environment only when immediate action is required.
*   **Do** ensure all "Success" states use a refined green that harmonizes with the Navy—avoid neon greens; opt for a sophisticated forest or sage variant.

### Don't:
*   **Don't** use 1px black or dark grey borders. This instantly "cheapens" the university's professional image.
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#191c1e) to maintain a premium, soft-contrast feel.
*   **Don't** use standard "Warning Yellow." Use the `tertiary-container` and `on-tertiary-container` tokens for a more "Amber/Burnt Orange" warning that feels more authoritative and less like a construction sign.