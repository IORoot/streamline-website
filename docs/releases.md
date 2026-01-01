---
sidebar_position: 0
title: Release Notes
description: Track additions and updates to the STREAMLINE documentation website
---

# Release Notes

This page tracks all additions and updates to the STREAMLINE documentation website.

## Version 1.0.0 - Current Release

### New Pages

The following pages have been added in this release:

- **Release Notes** <span class="new-badge">NEW</span> - This page! Track all website updates and new additions here.

### Updates

- Fixed light mode color scheme for better readability
- Improved theme switching between light and dark modes
- Enhanced code block styling for both themes

---

## How to Use This Page

When adding new pages to the documentation:

1. Add the new page to the appropriate section in `sidebars.ts`
2. Update this release notes page with the new page listed under "New Pages"
3. Add the `<span class="new-badge">NEW</span>` badge next to the page name
4. When creating a new release, move the current release to a new version section above

### Marking Pages as New

To mark a page as new in the sidebar or documentation, add the badge:

```html
<span class="new-badge">NEW</span>
```

The badge will automatically adapt to both light and dark themes.
