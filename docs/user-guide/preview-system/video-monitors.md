# Video Monitors

Video monitors provide professional color analysis tools for video processing and color grading.

## Available Monitors

STREAMLINE includes four professional video monitors:

1. **Waveform Monitor** - Luminance analysis
2. **Vectorscope** - Color analysis
3. **Histogram** - Pixel value distribution
4. **Parade** - RGB channel comparison

## Waveform Monitor

The waveform monitor displays luminance distribution across the image.

### How It Works

- **Vertical Axis**: Brightness (0 = black, 100 = white)
- **Horizontal Axis**: Horizontal position in image
- **Display**: Shows brightness at each horizontal position
- **Scale**: IRE scale (0-100) or percentage

### Reading Waveform

**Exposure Analysis:**
- **High Values**: Bright areas (sky, lights)
- **Low Values**: Dark areas (shadows)
- **Mid Values**: Midtones (skin, objects)
- **Distribution**: Shows exposure balance

**Common Patterns:**
- **Flat Line**: Uniform brightness
- **Peaks**: Bright highlights
- **Valleys**: Dark shadows
- **Curves**: Gradual transitions

### Use Cases

- **Exposure Correction**: Identify over/under exposure
- **Contrast Analysis**: Check contrast range
- **Highlight Protection**: Prevent clipping
- **Shadow Detail**: Verify shadow information

## Vectorscope

The vectorscope displays color information in a circular graph.

### How It Works

- **Center**: Neutral (gray, no color)
- **Distance from Center**: Saturation (intensity)
- **Angle**: Hue (color)
- **Targets**: Color targets (R, G, B, Y, C, M)

### Reading Vectorscope

**Color Analysis:**
- **Center Clustering**: Neutral colors (grays)
- **Outer Edges**: Saturated colors
- **Target Alignment**: Color accuracy
- **Distribution**: Color balance

**Color Targets:**
- **R (Red)**: 11 o'clock position
- **G (Green)**: 7 o'clock position
- **B (Blue)**: 3 o'clock position
- **Y (Yellow)**: 5 o'clock position
- **C (Cyan)**: 1 o'clock position
- **M (Magenta)**: 9 o'clock position

### Use Cases

- **Color Grading**: Adjust color balance
- **Skin Tone**: Verify natural skin tones
- **Color Accuracy**: Check color reproduction
- **Saturation Control**: Monitor saturation levels

## Histogram

The histogram shows pixel value distribution across the image.

### How It Works

- **Horizontal Axis**: Pixel values (0-255 or 0-100%)
- **Vertical Axis**: Number of pixels
- **Channels**: Separate RGB channels
- **Combined**: Overall luminance

### Reading Histogram

**Distribution Analysis:**
- **Left Side**: Dark pixels (shadows)
- **Right Side**: Bright pixels (highlights)
- **Center**: Midtone pixels
- **Peaks**: Common values

**Common Patterns:**
- **Left-Heavy**: Underexposed (too dark)
- **Right-Heavy**: Overexposed (too bright)
- **Centered**: Well-exposed
- **Gaps**: Missing values (posterization)

### Use Cases

- **Exposure Analysis**: Check exposure distribution
- **Contrast Assessment**: Evaluate contrast range
- **Clipping Detection**: Identify clipped highlights/shadows
- **Tonal Balance**: Verify tonal distribution

## Parade

The parade displays RGB channels side-by-side for comparison.

### How It Works

- **Three Displays**: Red, Green, Blue channels
- **Side-by-Side**: Horizontal comparison
- **Same Scale**: Consistent scaling
- **Position**: Horizontal position in image

### Reading Parade

**Channel Comparison:**
- **Equal Channels**: Neutral colors (grays)
- **Red Dominant**: Warm tones
- **Blue Dominant**: Cool tones
- **Green Dominant**: Natural/vegetation

**Color Balance:**
- **Aligned**: Balanced colors
- **Offset**: Color cast present
- **Different Shapes**: Color variations
- **Clipping**: Channel-specific clipping

### Use Cases

- **Color Balance**: Check RGB balance
- **Color Cast Detection**: Identify color casts
- **Channel Analysis**: Analyze individual channels
- **Color Correction**: Guide color adjustments

## Using Monitors

### Accessing Monitors

1. Open Preview Modal
2. Click **Color Scopes** button
3. Select monitor from dropdown:
   - Waveform
   - Vectorscope
   - Histogram
   - Parade

### Monitor Controls

- **Toggle**: Show/hide monitor
- **Size**: Adjust monitor size
- **Position**: Move monitor window
- **Settings**: Configure monitor options

## Professional Workflow

### Color Grading Workflow

1. **Start with Waveform**: Check exposure
2. **Use Histogram**: Verify distribution
3. **Check Vectorscope**: Analyze color
4. **Review Parade**: Compare channels
5. **Adjust Nodes**: Make corrections
6. **Re-check Monitors**: Verify changes

### Exposure Workflow

1. **Waveform**: Identify exposure issues
2. **Histogram**: Check value distribution
3. **Parade**: Verify channel balance
4. **Adjust**: Correct exposure nodes
5. **Monitor**: Watch for clipping

## Best Practices

1. **Use Multiple Monitors**: Combine monitors for complete analysis
2. **Check Before and After**: Compare before/after adjustments
3. **Watch for Clipping**: Monitor for highlight/shadow clipping
4. **Maintain Balance**: Keep color and exposure balanced
5. **Reference Standards**: Use broadcast standards when applicable

## Technical Details

### IRE Scale

- **IRE 0**: Black level
- **IRE 100**: White level
- **IRE 7.5**: Setup level (NTSC)
- **IRE 0**: No setup (digital)

### Color Standards

- **Rec. 709**: HD standard
- **Rec. 2020**: UHD standard
- **sRGB**: Computer display standard
- **DCI-P3**: Cinema standard

## Next Steps

- Learn about [Modal Interface](/docs/user-guide/preview-system/modal-interface) - Preview controls
- Explore [Guides and Grid](/docs/user-guide/preview-system/guides-and-grid) - Alignment tools
- Understand [Audio Monitors](/docs/user-guide/preview-system/audio-monitors) - Audio analysis
