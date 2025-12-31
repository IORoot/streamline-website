# STREAMLINE - Video Pipeline Editor
## Website Description Document

---

## Hero Section

**Headline:** Transform Video Editing with Visual Workflows

**Subheadline:** STREAMLINE is a powerful, node-based video editing application that transforms complex FFMPEG operations into an intuitive visual workflow. Build professional video processing pipelines by simply connecting nodes—no command-line expertise required.

**Tagline:** Visual Video Editing, Powered by FFMPEG

---

## What is STREAMLINE?

STREAMLINE is a cross-platform desktop application that revolutionizes video editing by providing a visual, node-based interface for creating complex video processing pipelines. Instead of writing complex FFMPEG commands, users drag and drop nodes onto a canvas, connect them visually, and watch their video transformations come to life in real-time.

Built on Electron and React, STREAMLINE combines the power of industry-standard FFMPEG with an elegant, modern user interface designed for both beginners and professionals. Whether you're resizing videos for social media, applying color corrections, adding watermarks, or creating complex multi-video compositions, STREAMLINE makes it accessible through its intuitive visual editor.

---

## Key Features

### Visual Node-Based Editing

STREAMLINE's core innovation is its visual node editor, where each video operation is represented as a node on an infinite canvas. Users simply drag nodes from the library, connect them with visual wires, and configure parameters through an intuitive inspector panel. This approach eliminates the need to memorize FFMPEG syntax or write complex command-line scripts.

The node system is organized into logical categories, making it easy to find the right tool for any task. From basic operations like scaling and cropping to advanced effects like color grading and motion blur, every FFMPEG capability is accessible through a simple, visual interface.

### Real-Time Preview Generation

See your changes instantly with STREAMLINE's real-time preview system. As you adjust parameters or connect nodes, the application generates preview images showing exactly how your video will look after processing. This immediate visual feedback allows you to iterate quickly and perfect your workflow before committing to a full render.

The preview system intelligently cascades through your pipeline, showing how each node transforms the video. When you adjust an overlay position or change a color filter, you can immediately see the result in downstream nodes, ensuring your entire pipeline works together harmoniously.

### Comprehensive Node Library

STREAMLINE comes with an extensive library of pre-built nodes covering every aspect of video processing. The library is organized into intuitive categories:

**Input & Output:** Download videos from URLs, reference local files, and export in any format. Handle single files or entire folders with ease.

**Size & Position:** Scale videos to any resolution, crop specific regions, add padding, rotate, flip, and convert aspect ratios. Perfect for adapting content to different platforms and formats.

**Visual Effects:** Apply professional-grade effects including blur, sharpen, color correction, color grading with LUTs, brightness and contrast adjustments, and advanced color manipulation tools.

**Composition:** Layer multiple videos with precise positioning, add watermarks and logos, insert text overlays, burn-in subtitles, and mix audio tracks. Create complex multi-layer compositions visually.

**Format & Encoding:** Convert between video formats, transcode with different codecs, optimize for social media platforms, and adjust quality settings. Ensure your videos are perfectly formatted for their destination.

**Timing & Assembly:** Cut videos to specific time ranges, change frame rates, concatenate multiple clips, add transitions between segments, and stack videos side-by-side or vertically.

**Utilities:** Generate proxy files for faster editing, extract thumbnails, create Ken Burns effects, and perform batch operations on multiple files.

### AI-Powered Control

STREAMLINE includes a built-in Model Context Protocol (MCP) server that enables AI assistants like Claude or Cursor to control the application programmatically. Describe what you want to do in natural language, and the AI can create pipelines, configure nodes, connect workflows, and execute operations on your behalf.

This revolutionary feature bridges the gap between human intent and technical execution. Simply tell your AI assistant "create a pipeline that downloads a video, scales it to 1080p, adds a watermark in the bottom right, and exports it as MP4," and watch as STREAMLINE builds the entire workflow automatically.

### Pipeline Validation & Error Prevention

Before executing any pipeline, STREAMLINE automatically validates your workflow, checking for missing connections, invalid parameters, and incompatible node combinations. The validation system provides clear, actionable error messages, helping you fix issues before they cause processing failures.

The application understands the relationships between nodes and ensures that video outputs connect to video inputs, audio outputs connect to audio inputs, and all required parameters are properly configured. This intelligent validation prevents common mistakes and ensures your pipelines execute successfully.

### Export & Execution

Once your pipeline is complete, STREAMLINE can export it as a JSON configuration file compatible with command-line execution, or execute it directly from within the application. The execution engine provides real-time progress tracking, detailed logging, and error reporting, giving you complete visibility into the processing workflow.

For batch processing, you can save pipeline templates and apply them to multiple files or folders. The system automatically handles file naming, output organization, and error recovery, making it perfect for automated video processing workflows.

### Custom Node Development

Advanced users can extend STREAMLINE's capabilities by creating custom nodes. The application supports both built-in TypeScript nodes and runtime-loaded JavaScript nodes, allowing developers to add specialized video processing operations tailored to their specific needs.

Custom nodes integrate seamlessly with the visual editor, appearing in the node library alongside built-in nodes. They support all the same features including preview generation, parameter validation, and pipeline integration, ensuring a consistent user experience regardless of node origin.

### Dark Theme & Modern UI

STREAMLINE features a beautiful, modern dark theme optimized for extended video editing sessions. The interface is clean and uncluttered, focusing attention on your workflow while providing easy access to all tools and features.

The responsive design adapts to different screen sizes, working seamlessly on desktop monitors, laptops, and tablets. Keyboard shortcuts, mouse gestures, and touch interactions are all supported, allowing you to work the way that feels most natural.

---

## Use Cases

### Content Creators

Social media creators can quickly adapt videos for different platforms, applying the right aspect ratios, resolutions, and formats for Instagram, TikTok, YouTube, and more. Add watermarks, create thumbnails, and batch process entire folders of content with ease.

### Video Production Teams

Professional video production teams can create reusable pipeline templates for common tasks like color correction, format conversion, and proxy generation. Share configurations across team members, ensuring consistent output quality and workflow efficiency.

### Developers & Automation

Developers can integrate STREAMLINE's JSON export format into automated workflows, using the visual editor to design pipelines that are then executed programmatically. The MCP server enables AI-driven automation, allowing intelligent systems to create and modify video processing workflows dynamically.

### Educators & Trainers

Educators can use STREAMLINE to teach video processing concepts visually, showing students how different operations affect video output without requiring them to learn complex command-line syntax. The visual representation makes abstract concepts concrete and understandable.

### Personal Projects

Hobbyists and personal users can tackle video editing projects that would otherwise require expensive software or extensive technical knowledge. Resize home videos, add subtitles, create montages, and perform basic color correction—all through an intuitive visual interface.

---

## Technical Excellence

### Built on Industry Standards

STREAMLINE leverages FFMPEG, the industry-standard multimedia framework used by major video platforms and professional editing software. This ensures compatibility with virtually every video format and codec, and guarantees that your processed videos will work anywhere.

### Cross-Platform Compatibility

Available for macOS, Windows, and Linux, STREAMLINE provides a consistent experience across all major operating systems. The Electron framework ensures native performance and system integration while maintaining a unified codebase.

### Performance & Reliability

The application is designed for performance, handling large video files and complex pipelines efficiently. Background processing, progress tracking, and error recovery ensure that even lengthy operations complete successfully.

### Extensible Architecture

STREAMLINE's plugin-based architecture allows for easy extension and customization. The node system is designed to accommodate new operations, and the MCP server enables integration with external tools and services.

---

## Why Choose STREAMLINE?

### Accessibility

STREAMLINE democratizes professional video processing, making advanced FFMPEG capabilities accessible to users without command-line expertise. The visual interface removes technical barriers, allowing anyone to create sophisticated video workflows.

### Efficiency

Visual workflows are faster to create and easier to modify than command-line scripts. The node-based approach encourages experimentation and iteration, enabling users to refine their pipelines quickly and see results immediately.

### Power

Despite its user-friendly interface, STREAMLINE provides access to the full power of FFMPEG. Every operation available in FFMPEG can be represented as a node, ensuring that you're never limited by the tool—only by your creativity.

### Innovation

The integration of AI control through the MCP server represents a forward-thinking approach to video editing. As AI capabilities evolve, STREAMLINE users will benefit from increasingly sophisticated automation and assistance.

### Professional Quality

STREAMLINE produces professional-quality output suitable for broadcast, streaming, and distribution. The underlying FFMPEG engine ensures that your videos meet industry standards for quality and compatibility.

---

## Getting Started

STREAMLINE is available as a desktop application for macOS, Windows, and Linux. Installation is straightforward, and the application includes comprehensive documentation, example pipelines, and a helpful tutorial system to get you started.

The application is free to use and open-source, with an active community of developers and users contributing improvements, custom nodes, and support. Whether you're processing a single video or building automated workflows for thousands of files, STREAMLINE provides the tools you need to succeed.

---

## The Future of Video Editing

STREAMLINE represents a new paradigm in video editing—one where visual workflows replace complex scripts, where AI assistance augments human creativity, and where professional-quality video processing is accessible to everyone. As video content becomes increasingly important across all industries, tools like STREAMLINE will become essential for creators, developers, and businesses alike.

Join the visual video editing revolution. Transform your video processing workflows. Experience the power of STREAMLINE.

---

## Design System

To ensure the website matches STREAMLINE's visual identity, use the following design tokens extracted from the application:

### Color Palette

**Base Colors:**
- **Background Dark**: `rgba(13, 13, 13, 1)` / `#0D0D0D` - Deepest background layer
- **Background**: `rgba(26, 26, 26, 1)` / `#1A1A1A` - Primary background
- **Background Light**: `rgba(38, 38, 38, 1)` / `#262626` - Elevated surfaces, cards
- **Border**: `rgba(51, 51, 51, 1)` / `#333333` - Borders and dividers
- **Text**: `rgba(242, 242, 242, 1)` / `#F2F2F2` - Primary text color
- **Text Muted**: `rgba(191, 191, 191, 1)` / `#BFBFBF` - Secondary text, labels

**Accent Colors:**
- **Primary**: `rgba(139, 239, 108, 1)` / `#8BEF6C` - Main accent, CTAs, active states (bright green)
- **Secondary**: `rgba(208, 108, 239, 1)` / `#D06CEF` - Secondary accent (purple)
- **Success**: `rgba(99, 179, 99, 1)` / `#63B363` - Success states, positive feedback
- **Warning**: `rgba(224, 176, 82, 1)` / `#E0B052` - Warnings, caution states
- **Danger**: `rgba(194, 64, 64, 1)` / `#C24040` - Errors, destructive actions
- **Info**: `rgba(82, 158, 224, 1)` / `#529EE0` - Informational messages, links

**Usage Guidelines:**
- Use Background Dark for hero sections and deep UI elements
- Use Background for main content areas and modals
- Use Background Light for cards, input fields, and elevated components
- Use Primary (bright green) for primary CTAs, active states, and key highlights
- Use Text for body copy and primary content
- Use Text Muted for labels, captions, and secondary information

### Typography

**Primary Font Family:**
- **Font Stack**: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
- **Google Fonts Import**: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap`

**Font Variants:**
- **Headings**: Open Sans (weights: 600-800 for headings)
- **Body Text**: Open Sans (weights: 400-500 for body, 300 for light text)
- **Monospace**: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace` (for code snippets and technical content)

**Font Weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700
- Extra-bold: 800

### Border Radius

**Base Radius**: `1.5rem` (24px)

**Derived Radius Values:**
- **Large (lg)**: `1.5rem` (24px) - Cards, modals, major components
- **Medium (md)**: `calc(1.5rem - 2px)` (22px) - Buttons, inputs
- **Small (sm)**: `calc(1.5rem - 4px)` (20px) - Small badges, tags
- **Extra Small**: `6px` - Small UI elements, tooltips
- **Circular**: `50%` - Avatars, icons, circular buttons

### Spacing System

Use a consistent spacing scale based on 4px increments:
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

**Component Spacing:**
- Section padding: 64px - 96px vertical
- Card padding: 24px - 32px
- Button padding: 12px - 16px horizontal, 8px - 12px vertical
- Input padding: 12px - 16px
- Grid gaps: 24px - 32px

### Shadows

**Small Shadow:**
```css
inset 0 1px 2px rgba(255, 255, 255, 0.19),
0 1px 2px rgba(0, 0, 0, 0.19),
0 2px 4px rgba(0, 0, 0, 0.08)
```

**Standard Shadow:**
```css
inset 0 1px 2px rgba(255, 255, 255, 0.19),
0 2px 4px rgba(0, 0, 0, 0.19),
0 4px 8px rgba(0, 0, 0, 0.08)
```

**Node Shadow (for cards/components):**
```css
0 4px 12px rgba(0, 0, 0, 0.2)
```

**Node Shadow Hover:**
```css
0 6px 16px rgba(0, 0, 0, 0.3)
```

**Node Shadow Selected (with primary color):**
```css
0 6px 16px rgba(139, 239, 108, 0.3)
```

### Component Styles

**Buttons:**
- Primary buttons: Primary color background (`#8BEF6C`), dark text (`#0D0D0D`)
- Secondary buttons: Background Light (`#262626`), Text color (`#F2F2F2`)
- Danger buttons: Danger color (`#C24040`), Text color (`#F2F2F2`)
- Border radius: Medium (22px)
- Padding: 12px - 16px horizontal, 8px - 12px vertical
- Hover: Slightly darker shade, subtle shadow increase

**Cards:**
- Background: Background Light (`#262626`)
- Border: Border color (`#333333`), 1px solid
- Border radius: Large (24px)
- Padding: 24px - 32px
- Shadow: Standard shadow
- Hover: Shadow increases, border may highlight with Primary color

**Input Fields:**
- Background: Background Light (`#262626`)
- Border: Border color (`#333333`), 1px solid
- Border radius: Medium (22px)
- Padding: 12px - 16px
- Text color: Text (`#F2F2F2`)
- Placeholder: Text Muted (`#BFBFBF`)
- Focus: Border changes to Primary color (`#8BEF6C`)

**Links:**
- Default: Info color (`#529EE0`)
- Hover: Lighter shade of Info color
- Visited: Slightly muted Info color

### Layout Guidelines

**Container Widths:**
- Max content width: 1200px - 1400px
- Section padding: 32px - 64px horizontal
- Grid columns: 12-column system with 24px gaps

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Grid System:**
- Use CSS Grid or Flexbox with consistent gaps
- Maintain 24px - 32px spacing between major sections
- Use Background Dark for full-width sections
- Use Background for content containers

### Visual Hierarchy

**Headings:**
- H1: Open Sans, 800 weight, 48px - 64px size, Text color
- H2: Open Sans, 700 weight, 36px - 48px size, Text color
- H3: Open Sans, 600 weight, 28px - 36px size, Text color
- H4: Open Sans, 600 weight, 24px - 28px size, Text color

**Body Text:**
- Large: 18px - 20px, Regular weight (400)
- Base: 16px, Regular weight (400)
- Small: 14px, Regular weight (400)
- Muted text: Same sizes but Text Muted color

**Line Height:**
- Headings: 1.2 - 1.3
- Body: 1.5 - 1.6
- Tight: 1.4 (for compact layouts)

### Interactive States

**Hover States:**
- Buttons: Slightly darker/lighter shade, shadow increase
- Links: Color shift, underline (optional)
- Cards: Shadow increase, subtle border highlight
- Interactive elements: Subtle scale (1.02 - 1.05) or color shift

**Active States:**
- Primary color border or background
- Slightly reduced shadow
- May use Primary color glow effect

**Focus States:**
- Primary color outline (2px)
- Clear visual indication for accessibility
- Maintains contrast ratios

**Disabled States:**
- Reduced opacity (0.5 - 0.6)
- Text Muted color
- No hover effects
- Cursor: not-allowed

### Accessibility

**Color Contrast:**
- Text on Background: WCAG AA compliant (4.5:1 minimum)
- Text on Background Light: WCAG AA compliant
- Primary color on dark backgrounds: High contrast
- All interactive elements meet contrast requirements

**Focus Indicators:**
- Clear, visible focus rings using Primary color
- 2px outline minimum
- Sufficient contrast against background

---

## Call to Action

**Download STREAMLINE today** and discover how visual workflows can transform your video editing process. Whether you're a content creator, developer, or video professional, STREAMLINE provides the tools you need to create, process, and perfect your video content.

**Start building your first pipeline** in minutes, not hours. Experience the power of visual video editing with STREAMLINE.
