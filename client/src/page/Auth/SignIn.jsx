// import React, { useState } from "react";
// import { api } from "../../utils/api";
// import { useNavigate } from "react-router-dom";
// import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
// import { toast } from "react-toastify";
// import { useDispatch } from "../../redux/store";

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [setError] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!email || !password)
//       toast.error("You must provide an email and a password.");
//     dispatch(loginStart());

//     await api
//       .post("/auth/login", {
//         email,
//         password,
//       })
//       .then((response) => {
//         console.log(response.data);

//         dispatch(loginSuccess(response.data));
//         toast.done(response.message);
//         navigate("/");
//       })
//       .catch(function (error) {
//         console.log(error);
//         dispatch(loginFailure());
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div className="app-container">
//       <div className="form-control">
//         <label>Email</label>
//         <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="form-control">
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="form-control">
//         <label></label>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./SignIn.css";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "../../redux/store";

const SignIn = () => {
  const [email, setEmail] = useState("akash9@gmail.com");
  const [password, setPassword] = useState("Akash@123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password)
      toast.error("You must provide an email and a password.");
    dispatch(loginStart());

    await api
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);

        dispatch(loginSuccess(response.data));
        toast.done(response.message);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        dispatch(loginFailure());
        toast.error(error.message);
      });
  };

  return (
    <div className="body">
      <div class="background-log">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="username"
        />

        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />

        <button className="button" onClick={handleLogin}>
          Log In
        </button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
