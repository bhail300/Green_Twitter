
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { useRouter } from 'next/router';
import { auth, db } from "../firebase/firebase.config";





export default function CreatePost() {

    const router = useRouter()

    const[title, setTitle] = useState("");
    const[postText, setPostText] = useState(""); 

    const postsCollectionRef = collection(db, "posts");
   

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
          title,
          postText,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        router.push('/home');
    };


    return (
        <div classname="createPostPage">

            <div className="cpConatiner">
                <h1>Create a post</h1>
                <div className="inputGp">
                    <label> Title: </label>
                    <input placeholder="Title..." onChange={(event) => {setTitle(event.target.value)}}/>
                </div>
                <div className="inputGp">
                    <label> Post: </label>
                    <textarea placeholder="Post..."onChange={(event) => {setPostText(event.target.value)}}/>
                </div>
                <button onClick={createPost}>Post</button>
            </div>
        </div>
    )
}
