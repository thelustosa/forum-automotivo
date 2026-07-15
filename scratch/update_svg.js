import fs from 'fs';

const svgPath = 'C:\\Users\\lucas.coelho\\Documents\\forum\\jdm.svg';
const cssPath = 'c:\\Users\\lucas.coelho\\Documents\\forum\\src\\index.css';

try {
  let svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Inject preserveAspectRatio="none" into the <svg> tag
  if (!svgContent.includes('preserveAspectRatio')) {
    svgContent = svgContent.replace('<svg ', '<svg preserveAspectRatio="none" ');
  }
  
  const base64Svg = Buffer.from(svgContent).toString('base64');
  
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Regex to match the base64 data inside the background-image url
  const regex = /background-image:\s*url\('data:image\/svg\+xml;base64,[^']+'\);/;
  const newBgImage = `background-image: url('data:image/svg+xml;base64,${base64Svg}');`;
  
  cssContent = cssContent.replace(regex, newBgImage);
  
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Successfully updated index.css with preserveAspectRatio="none" SVG.');
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
