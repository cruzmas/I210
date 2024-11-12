import { app } from "./firebase.js";
import{getFirestore, collection, getDocs,} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"; 

const booksListRef = document.querySelector("#booksList")

const db = getFirestore(app); 

async function getBooks() {
    const booksCollection = collection(db, "books");
    const bookDocs = await getDocs(booksCollection);

for (let i = 0; i < bookDocs.docs.length; i++) {
    const books = bookDocs.docs[i];
    const bookData = books.data();

    booksListRef.innerHTML += `<li>${bookData.title} (${bookData.yearPublished})</li>`

}
}

getBooks();