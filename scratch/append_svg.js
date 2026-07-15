import fs from 'fs';

const svgPath = 'C:\\Users\\lucas.coelho\\Documents\\forum\\jdm.svg';
const cssPath = 'c:\\Users\\lucas.coelho\\Documents\\forum\\src\\index.css';

try {
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const base64Svg = Buffer.from(svgContent).toString('base64');
  
  const cssRule = `
.logo-the-row {
  display: flex;
  align-items: center;
}

.logo-icon {
  display: inline-block;
  width: 18px;
  height: 11px;
  background-image: url('data:image/svg+xml;base64,${base64Svg}');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 4px;
}
`;

  fs.appendFileSync(cssPath, cssRule, 'utf8');
  console.log('SVG successfully converted and appended to index.css');
} catch (err) {
  console.error('Error processing SVG:', err);
  process.exit(1);
}
