/**
 * Script to extract node icons from Video_FFMPEG-Scriptflow node definitions
 * and save them as SVG files in the website's static folder
 */

const fs = require('fs');
const path = require('path');

const nodesDir = path.join(__dirname, '../../Video_FFMPEG-Scriptflow/src/nodes');
const outputDir = path.join(__dirname, '../static/img/node-icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Node ID to icon filename mapping
const nodeIconMap = {
  'ff_a_compressor': 'audio-compressor.svg',
  'ff_a_deesser': 'audio-deesser.svg',
  'ff_a_delay': 'audio-delay.svg',
  'ff_a_echo': 'audio-echo.svg',
  'ff_a_equalizer': 'audio-equalizer.svg',
  'ff_a_fade': 'audio-fade.svg',
  'ff_a_highpass': 'audio-highpass.svg',
  'ff_a_limiter': 'audio-limiter.svg',
  'ff_a_loop': 'audio-loop.svg',
  'ff_a_lowpass': 'audio-lowpass.svg',
  'ff_a_pad': 'audio-pad.svg',
  'ff_a_reverse': 'audio-reverse.svg',
  'ff_a_setrate': 'audio-setrate.svg',
  'ff_a_tempo': 'audio-tempo.svg',
  'ff_a_volume': 'audio-volume.svg',
  'ff_aspect_ratio': 'aspect-ratio.svg',
  'ff_audio': 'audio.svg',
  'ff_avgblur': 'avgblur.svg',
  'ff_blur': 'blur.svg',
  'ff_boxblur': 'boxblur.svg',
  'ff_colorchannelmixer': 'colorchannelmixer.svg',
  'ff_colorcorrect': 'colorcorrect.svg',
  'ff_colorize': 'colorize.svg',
  'ff_colorkey': 'colorkey.svg',
  'ff_colorlevels': 'colorlevels.svg',
  'ff_colortemperature': 'colortemperature.svg',
  'ff_colour_adjust': 'colour-adjust.svg',
  'ff_colour_balance': 'colour-balance.svg',
  'ff_colour_contrast': 'colour-contrast.svg',
  'ff_concat': 'concat.svg',
  'ff_convert': 'convert.svg',
  'ff_crop': 'crop.svg',
  'ff_custom': 'custom.svg',
  'ff_cut': 'cut.svg',
  'ff_dblur': 'dblur.svg',
  'ff_download': 'download.svg',
  'ff_drawbox': 'drawbox.svg',
  'ff_exposure': 'exposure.svg',
  'ff_extract_frames': 'extract-frames.svg',
  'ff_flip': 'flip.svg',
  'ff_fps': 'fps.svg',
  'ff_gblur': 'gblur.svg',
  'ff_grep': 'grep.svg',
  'ff_grouptime': 'grouptime.svg',
  'ff_hue': 'hue.svg',
  'ff_huesaturation': 'huesaturation.svg',
  'ff_image': 'image.svg',
  'ff_input': 'input.svg',
  'ff_lut': 'lut.svg',
  'ff_middle': 'middle.svg',
  'ff_negate': 'negate.svg',
  'ff_orientation': 'orientation.svg',
  'ff_output': 'output.svg',
  'ff_overlay': 'overlay.svg',
  'ff_pad': 'pad.svg',
  'ff_perspective': 'perspective.svg',
  'ff_proxy': 'proxy.svg',
  'ff_rotate': 'rotate.svg',
  'ff_scale': 'scale.svg',
  'ff_sharpen': 'sharpen.svg',
  'ff_smartblur': 'smartblur.svg',
  'ff_stack': 'stack.svg',
  'ff_subtitles': 'subtitles.svg',
  'ff_text': 'text.svg',
  'ff_thumbnail': 'thumbnail.svg',
  'ff_transcode': 'transcode.svg',
  'ff_transition': 'transition.svg',
  'ff_unsharp': 'unsharp.svg',
  'ff_vibrance': 'vibrance.svg',
  'ff_watch': 'watch.svg',
  'ff_watermark': 'watermark.svg',
};

// Read all node files
const nodeFiles = fs.readdirSync(nodesDir).filter(file => file.endsWith('.ts'));

let extracted = 0;
let skipped = 0;

nodeFiles.forEach(file => {
  const filePath = path.join(nodesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract node ID
  const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
  if (!idMatch) return;
  
  const nodeId = idMatch[1];
  const iconFilename = nodeIconMap[nodeId];
  
  if (!iconFilename) {
    console.log(`No icon mapping for ${nodeId}`);
    skipped++;
    return;
  }
  
  // Try to extract inline SVG from getNodeIcon
  // Match: svg: '...' where ... can contain escaped quotes
  // Use a more sophisticated regex that handles the full string
  const svgMatchSingle = content.match(/svg:\s*'((?:[^'\\]|\\.)*)'/s);
  const svgMatchDouble = content.match(/svg:\s*"((?:[^"\\]|\\.)*)"/s);
  const svgMatch = svgMatchSingle || svgMatchDouble;
  
  if (svgMatch && svgMatch[1].includes('<svg')) {
    let svgContent = svgMatch[1];
    // Unescape the content
    svgContent = svgContent.replace(/\\(.)/g, '$1');
    
    const outputPath = path.join(outputDir, iconFilename);
    fs.writeFileSync(outputPath, svgContent);
    console.log(`Extracted ${nodeId} -> ${iconFilename} (${svgContent.length} bytes)`);
    extracted++;
  } else {
    // Try to find icon file path and copy it
    const iconPathMatch = content.match(/icon:\s*['"]([^'"]+\.svg)['"]/);
    if (iconPathMatch) {
      const iconPath = iconPathMatch[1].replace('./assets/svg/', '');
      const sourcePath = path.join(__dirname, '../../Video_FFMPEG-Scriptflow/public/assets/svg', iconPath);
      if (fs.existsSync(sourcePath)) {
        const outputPath = path.join(outputDir, iconFilename);
        fs.copyFileSync(sourcePath, outputPath);
        console.log(`Copied ${nodeId} -> ${iconFilename} from ${iconPath}`);
        extracted++;
      } else {
        console.log(`Icon file not found for ${nodeId}: ${iconPath}`);
        skipped++;
      }
    } else {
      console.log(`No icon found for ${nodeId}`);
      skipped++;
    }
  }
});

console.log(`\nExtracted: ${extracted}, Skipped: ${skipped}`);
