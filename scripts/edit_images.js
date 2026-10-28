const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/assets/images');
const outDir = path.join(srcDir, 'edited');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processImages() {
  console.log('Processing client images...');

  // 1. pic6.jpeg -> Visiting Card
  await sharp(path.join(srcDir, 'pic6.jpeg'))
    .extract({ left: 10, top: 472, width: 640, height: 408 })
    .modulate({ brightness: 1.04, saturation: 1.12 })
    .sharpen({ sigma: 1.2 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'visiting_card_official.jpg'));
  console.log('1. visiting_card_official.jpg processed');

  // 2. pic1.jpeg -> Exterior Building & Primary Loan Board
  await sharp(path.join(srcDir, 'pic1.jpeg'))
    .extract({ left: 300, top: 60, width: 750, height: 580 })
    .modulate({ brightness: 1.06, saturation: 1.15 })
    .sharpen()
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'exterior_board_focused.jpg'));
  
  // Full view enhanced
  await sharp(path.join(srcDir, 'pic1.jpeg'))
    .modulate({ brightness: 1.05, saturation: 1.1 })
    .sharpen()
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'exterior_full.jpg'));
  console.log('2. pic1 exterior processed');

  // 3. pic2.jpeg -> Top Signboard & Building Facade
  await sharp(path.join(srcDir, 'pic2.jpeg'))
    .extract({ left: 320, top: 70, width: 480, height: 230 })
    .modulate({ brightness: 1.1, saturation: 1.2 })
    .sharpen({ sigma: 1.5 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'signboard_gold_black.jpg'));

  await sharp(path.join(srcDir, 'pic2.jpeg'))
    .modulate({ brightness: 1.05, saturation: 1.1 })
    .sharpen()
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'facade_full.jpg'));
  console.log('3. pic2 facade processed');

  // 4. pic3.jpeg -> Client Consultation Desk
  await sharp(path.join(srcDir, 'pic3.jpeg'))
    .extract({ left: 300, top: 120, width: 920, height: 780 })
    .modulate({ brightness: 1.08, saturation: 1.08 })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'client_consultation.jpg'));
  
  await sharp(path.join(srcDir, 'pic3.jpeg'))
    .modulate({ brightness: 1.05, saturation: 1.05 })
    .sharpen()
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'office_panoramic.jpg'));
  console.log('4. pic3 consultation processed');

  // 5. pic4.jpeg -> Advisory Session Close-up
  await sharp(path.join(srcDir, 'pic4.jpeg'))
    .extract({ left: 100, top: 180, width: 1100, height: 750 })
    .modulate({ brightness: 1.06, saturation: 1.06 })
    .sharpen({ sigma: 1.1 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'advisory_session.jpg'));
  console.log('5. pic4 advisory processed');

  // 6. pic5.jpeg -> Office Infrastructure & Consultation Zone
  await sharp(path.join(srcDir, 'pic5.jpeg'))
    .extract({ left: 80, top: 120, width: 1100, height: 800 })
    .modulate({ brightness: 1.07, saturation: 1.07 })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'office_infrastructure.jpg'));
  console.log('6. pic5 infrastructure processed');

  console.log('All client images edited and optimized successfully!');
}

processImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
