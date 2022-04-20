import { getStorage, ref } from "firebase/storage";

export const addSlider = (data) =>  (dispatch) => {
    const storage = getStorage();
    const imagesRef = ref(storage, 'slider');
    uploadBytes(storageRef, data).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });      
}