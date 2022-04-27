import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import * as ActionTypes from '../ActionType';

export const fetchUsersLogin = () => async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userArr = []
    querySnapshot.forEach((doc) => {
        let data = {
            id: doc.id,
            email: doc.data().email,
            password: doc.data().password,
            status: doc.data().status
        }
        userArr.push(data)
        dispatch({ type: ActionTypes.FATCH_USERLOGIN, payload: userArr })
    });
}

export const deleteUserLogin = (id) => async (dispatch) => {
    await deleteDoc(doc(db, "users", id));
    dispatch({ type: ActionTypes.DELETE_USERLOGIN, payload: id })
}

// export const updateUserLogin = () => async (dispatch) => {
//     const washingtonRef = doc(db, "user");
//     await updateDoc(washingtonRef, {
//         capital: true
//     });
//     dispatch({ type: ActionTypes.EDIT_USERLOGIN })
// }
export const updateUserLogin = (data) => async(dispatch) => {
    const userRef = doc(db, "users", data.id);
    await updateDoc(userRef, {
        status: !data.status
    });

    let uData = {
        ...data, 
        status: !data.status 
    }

    dispatch({ type: ActionTypes.EDIT_USERLOGIN, payload: uData })
}