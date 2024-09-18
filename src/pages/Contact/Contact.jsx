import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';

export const Contact = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        console.log("uid", uid);
      } else {
        console.log("user is logged out")
        navigate('/login');
      }
      });
  }, [])

  return (
    <div>
      <p>Contact Page</p>
    </div>
  );
};

export default Contact;
