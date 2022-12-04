import { Wrapper, Container } from './styles';
import Homecomp from './comps/Homecomp';
import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase/firebase.config';
import { AuthErrorCodes } from '@firebase/auth';

export default function HomePage() {
  const[postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
    };

    getPosts();

  });


  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
          <h3>{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}