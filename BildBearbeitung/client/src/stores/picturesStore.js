import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const usePicturesStore = defineStore('picturesStore', () => {
  const pictures = ref([]);

  const getPictures = async () => {
  const result = await axios.get("api/picture/pictures");
  pictures.value = result.data;
  };

  // const getPictures = async () => {
  //   pictures.value = [
  //     {
  //       isOriginal: 'false',
  //       timestamp: '10.06.2023 07:20',
  //       img: ['binary data'],
  //       image: 'house.png',
  //     },
  //     {
  //       isOriginal: 'true',
  //       timestamp: '10.06.2023 07:40',
  //       img: ['binary data'],
  //       image: 'fox.png',
  //     },
  //     {
  //       isOriginal: 'false',
  //       timestamp: '10.06.2023 07:43',
  //       img: ['binary data'],
  //       image: 'cat.png',
  //     },
  //     {
  //       isOriginal: 'true',
  //       timestamp: '10.06.2023 07:45',
  //       img: ['binary data'],
  //       image: 'friends.png',
  //     },
  //   ];
  // };

  const postPicture = async (picture) => {
    console.log(picture);
    await axios.post('api/picture/insert', picture);
  };

  return { pictures, getPictures, postPicture, pictures };
});
