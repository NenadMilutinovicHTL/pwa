import asyncHandler from 'express-async-handler';
import * as model from '../model/picturesModel.js';
import fs from 'fs';
import path from 'path';

const dirname =
  'C:\\Users\\nenad\\OneDrive\\Dokumente\\5CHITM\\MEDT\\MYPWA\\fr\\BildBearbeitung\\BildBearbeitung\\client\\';

export const getPictures = asyncHandler(async (req, res) => {
  let pictures = await model.getPictures();
  res.status(200).json(pictures);
});

export const postPictures = asyncHandler(async (req, res) => {
  // formatting date
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}${month}${year}${hours}${minutes}`;

  // saving in /images
  const filename = `pic_${formattedDate}.png`;
  const filepath = path.join(dirname, 'public', 'images', filename);
  console.log('base64:', req.body.img);
  fs.writeFileSync(filepath, req.body.img.split(',')[1], 'base64');

  res
    .status(200)
    .json(
      await model.postPictures(
        req.body.isOriginal,
        req.body.timestamp,
        req.body.img,
        req.body.image
      )
    );
});

export const deletePictures = asyncHandler(async (req, res) => {
  res.status(200).json(await model.deletePictures(req.params.id));
});

export const updatePictures = asyncHandler(async (req, res) => {
  res.status(200).json(await model.updatePictures(req.body.image, req.params.id));
});
