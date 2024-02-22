import asyncHandler from 'express-async-handler';
import * as model from '../model/picturesModel.js';

export const getPictures = asyncHandler(async (req, res) => {
  let pictures = await model.getPictures();
  res.status(200).json(pictures);
});

export const postPictures = asyncHandler(async (req, res) => {
  res.status(200).json(await model.postPictures(req.body.isoriginal, req.body.timestamp, req.body.img, req.body.image));
});