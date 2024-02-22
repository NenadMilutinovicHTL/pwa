import { query } from '../../boilerplate/db/index.js';

export const getPictures = async () => {
  const { rows } = await query('SELECT * FROM pictures;');
  return rows;
};

export const postPictures = async (isOriginal, timestamp, img, image) => {
  const { rows } = await query(
    `INSERT INTO pictures (isOriginal, timestamp, img, image) VALUES($1, $2, $3, $4) returning *`,
    [isOriginal, timestamp, img, image]
  );
  return rows[0];
};
