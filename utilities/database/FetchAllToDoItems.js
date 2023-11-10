import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

export async function fetchAllToDoItems(userId) {
    try {
        // get a reference to the collection we want to store in (user specific, since we use a userId)
        const userTodoListCollection = collection(db, `todo-list-${userId}`);

        // get all the documents in the user specified collection
        const querySnapshot = await getDocs(userTodoListCollection);

        // extract the data from each document and and return the data from each document
        const todoItems = querySnapshot.docs.map((doc) => doc.data());

        return todoItems;
    } catch (error) {
        console.error("Error storing data:", error);
        throw new Error("Failed to fetch all items in collection!");
    }
}
