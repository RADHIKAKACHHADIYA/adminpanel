import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
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
              slider: url,
              name: data.name
            });
            console.log("Document written with ID: ", docRef)
            let adddata = {
              slider: url,
              name: data.name,
            }
            console.log(adddata, "===")
            dispatch({ type: ActionTypes.ADD_SLIDER, payload: adddata })
          })
      })
  } catch (e) {
    console.log(e)
  }
}

export const fetchSlider = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "slider"));
  const sliderArr = []
  querySnapshot.forEach((doc) => {
    console.log(doc.data())
    let data = {
      id: doc.id,
      slider: doc.data().slider,
      name: doc.data().name
    }
    sliderArr.push(data)
  });
  dispatch({ type: ActionTypes.FATCH_SLIDER, payload: sliderArr })

}

export const deleteSlider = (name, id) => (dispatch) => {

  const desertRef = ref(storage1, 'slider/' + name);

  deleteObject(desertRef)
    .then(async () => {
      await deleteDoc(doc(db, "slider", id));
      dispatch({ type: ActionTypes.DELETE_SLIDER, payload: id })
    }).catch((error) => {
      console.log(error)
    });
}

export const updateSlider = (oldData, data) => (dispatch) => {
  console.log(oldData, data)
  const desertRef = ref(storage1, 'slider/' + oldData.name);
  const imageRef = ref(storage1, '/slider/' + data.name);

  deleteObject(desertRef)
    .then(async () => {
      uploadBytes(imageRef, data)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then(async (url) => {
              const slideRef = doc(db, "slider", oldData.id);
              await updateDoc(slideRef, {
                name: data.name,
                slider: url
              });

              let uData = {
                name: data.name,
                slider: url,
                id: oldData.id
              }
              console.log(uData)

              dispatch({ type: ActionTypes.UPDATE_SLIDER, payload: uData })
            })
        }).catch((error) => {
          console.log(error)
        });
    })

}