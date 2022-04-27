import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import { db, storage1 } from '../../firebase';
import * as ActionTypes from '../ActionType';


export const addSlider = (data) => (dispatch) => {
  try {
    const sliderRef = ref(storage1, '/slider/' + data.name);
    uploadBytes(sliderRef, data)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "slider"), {
              slider: url
            });
            console.log("Document written with ID: ", docRef)
          })
      })
  } catch (e) {
    console.log(e)
  }
  dispatch({type: ActionTypes.ADD_SLIDER , payload: {data}})
}

export const fetchSlider = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "slider"));
  const sliderArr = []
  querySnapshot.forEach((doc) => {
    
    let data = {
      id: doc.id,
      slider: doc.data().slider,
    }
    sliderArr.push(data)
  });
  dispatch({ type: ActionTypes.FATCH_SLIDER, payload: sliderArr })

}

// export const deleteSlider = (id) =>  (dispatch) => {
//   const storage = getStorage();

//   const desertRef = ref(storage, 'slider');

//   deleteObject(desertRef)
//     .then((url) => {
//       const docRef =  addDoc(collection(db, "slider"), {
//         slider: url
//       });
//       console.log("Document written with ID: ", docRef)
//     }).catch((error) => {
//       console.log(error)
//     });
//   dispatch({ type: ActionTypes.DELETE_SLIDER, payload: { id } })
// }