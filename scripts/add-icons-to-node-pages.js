/**
 * Script to add icons to node reference pages
 */

const fs = require('fs');
const path = require('path');

const nodeIcons = {
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

const docsDir = path.join(__dirname, '../docs/node-reference');

const nodeFiles = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

nodeFiles.forEach(file => {
  const nodeId = file.replace('.md', '');
  const iconFile = nodeIcons[nodeId];
  
  if (!iconFile) {
    console.log(`No icon for ${nodeId}`);
    return;
  }
  
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if icon already added and update if it has inline styles
  if (content.includes('/img/node-icons/')) {
    // Replace inline style with className
    if (content.includes('style=')) {
      content = content.replace(
        /<img src="\/img\/node-icons\/[^"]+" alt="[^"]+" style="[^"]+" \/>/g,
        `<img src="/img/node-icons/${iconFile}" alt="${nodeId} Icon" className="node-icon" />`
      );
      fs.writeFileSync(filePath, content);
      console.log(`Updated icon in ${file}`);
    } else {
      console.log(`Icon already in ${file}`);
    }
    return;
  }
  
  // Find the first heading (# Title)
  const headingMatch = content.match(/^(#\s+.+)$/m);
  if (headingMatch) {
    const heading = headingMatch[1];
    const iconHtml = `<img src="/img/node-icons/${iconFile}" alt="${nodeId} Icon" className="node-icon" />`;
    
    // Add icon after the heading
    content = content.replace(
      heading,
      `${heading}\n\n${iconHtml}`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Added icon to ${file}`);
  } else {
    console.log(`No heading found in ${file}`);
  }
});

console.log(`\nProcessed ${nodeFiles.length} files`);
