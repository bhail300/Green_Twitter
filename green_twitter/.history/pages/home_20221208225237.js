import { Wrapper, Container, Center } from './styles';
import Homecomp from './comps/Homecomp';
import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase/firebase.config';
import { AuthErrorCodes } from '@firebase/auth';
import { useRouter } from 'next/router';
import ImageExampleImage from './comps/images';
import CircularButton from './comps/circularButton';



export default function HomePage() {

  const router = useRouter()

  const[postLists, setPostList] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  },[]);

  const makePost = () => {
   router.push('/createpost');

  }
  


  return (

    <Container>
    <Center>
   
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
          </div>

          
          
        );
        
      })}

      <div>

      <button onClick={makePost}>Create a post </button>

      </div>

      <div>
        <Homecomp/>
      </div>
      
    </div>
    
    </Center>
     <CircularButton />
        </Container>

    
  );
}