const fileNames = [
  "1.3_Edit 2..jpg",
  "3.22.21_03DSC_0637.jpg",
  "8.2019_01DSC_0251.jpg",
  "custon 1_Edit_01.jpg",
  "DSC_0014_0002.jpg",
  "DSC_0094.JPG",
  "DSC_0130.JPG",
  "DSC_0138.JPG",
  "DSC_0140.JPG",
  "DSC_0159_0004_01.jpg",
  "DSC_0230.JPG",
  "DSC_0299.JPG	",
  "DSC_0328_0007_02.jpg	",
  "DSC_0357.JPG	",
  "DSC_0364_0005.jpg",
  "DSC_0499.JPG",
  "DSC_0506.JPG",
  "DSC_0518.JPG",
  "DSC_0562.JPG",
  "DSC_0571.JPG",
  "DSC_0589.JPG",
  "DSC_0596_01.jpg",
  "DSC_0616.NEF",
  "DSC_0637_00001_00002.jpg",
  "Napa Fire 8.1720.JPG",
  "Waalbridge fire 8.21.20.JPG",
];

const cloudFrontDomain = "d2gryjkdo4kdmg.cloudfront.net";

//used to create cloudfront links and populate link array
const makeLinks = (files, domain) => {
  const picLinks = [];
  files.forEach((file) => {
    picLinks.push(`${domain}/${file}`);
  })
  console.log(picLinks);
}

const ranchLinks = [
  'd2gryjkdo4kdmg.cloudfront.net/1.3_Edit 2..jpg',
  'd2gryjkdo4kdmg.cloudfront.net/3.22.21_03DSC_0637.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/8.2019_01DSC_0251.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/custon 1_Edit_01.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0014_0002.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0094.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0130.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0138.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0140.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0159_0004_01.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0230.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0299.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0328_0007_02.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0357.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0364_0005.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0499.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0506.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0518.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0562.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0571.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0589.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0596_01.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0616.NEF',
  'd2gryjkdo4kdmg.cloudfront.net/DSC_0637_00001_00002.jpg',
  'd2gryjkdo4kdmg.cloudfront.net/Napa Fire 8.1720.JPG',
  'd2gryjkdo4kdmg.cloudfront.net/Waalbridge fire 8.21.20.JPG'
]

makeLinks(fileNames, cloudFrontDomain);

export default ranchLinks;