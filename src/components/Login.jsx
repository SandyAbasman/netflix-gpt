import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_url } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const fullname = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/74963378?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen ">
      <Header />
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img alt="logo" src={BG_url} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 sm:p-8 md:p-12 bg-black text-white rounded-lg bg-opacity-80 mx-2"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded"
        />
        <button
          onClick={handleButtonClick}
          className="p-3 sm:p-4 my-4 sm:my-6 bg-red-700 w-full rounded-lg hover:bg-red-600 transition-colors"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-400 text-sm min-h-5"> {errorMessage}</p>
        <p
          className="py-4 cursor-pointer text-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <span>
              New to Netflix?{" "}
              <span className="underline text-blue-300">Sign Up Now</span>
            </span>
          ) : (
            <span>
              Already registered?{" "}
              <span className="underline text-blue-300">Sign In Now.</span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
