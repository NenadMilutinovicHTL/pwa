import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const usePicturesStore = defineStore('picturesStore', () => {
  const pictures = ref([]);

  const getPictures = async () => {
    const result = await axios.get('api/picture/');
    pictures.value = result.data;
  };

  const postPictures = async (picture) => {
    await axios.post('api/picture/', picture);
    getPictures();
  };

  const deletePictures = async (picture) => {
    await axios.delete(`api/picture/${picture.id}`);
    getPictures();
  };

  const updatePictures = async (picture, imagename) => {
    picture.image = imagename;
    await axios.patch(`api/picture/${picture.id}`, picture);
    getPictures();
  };

  return { getPictures, postPictures, deletePictures, pictures, updatePictures };
});
