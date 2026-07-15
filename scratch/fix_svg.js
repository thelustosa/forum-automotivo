import fs from 'fs';

const svgPath = 'C:\\Users\\lucas.coelho\\Documents\\forum\\jdm.svg';
const cssPath = 'c:\\Users\\lucas.coelho\\Documents\\forum\\src\\index.css';

try {
  // Read original SVG (without preserveAspectRatio)
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const base64Svg = Buffer.from(svgContent).toString('base64');
  
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Replace the background-image base64
  const regex = /background-image:\s*url\('data:image\/svg\+xml;base64,[^']+'\);/;
  const newBgImage = `background-image: url('data:image/svg+xml;base64,${base64Svg}');`;
  cssContent = cssContent.replace(regex, newBgImage);
  
  // Also replace the logo-icon styling to use background-size: contain and background-position: right center
  cssContent = cssContent.replace(/background-size:\s*100%\s*100%;/, 'background-size: contain;\n  background-position: right center;');
  
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Successfully fixed SVG distortion and updated CSS.');
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
