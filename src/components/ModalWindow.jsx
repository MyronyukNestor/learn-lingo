import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, database } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // reset,
} from "firebase/auth";
import { ref, set } from "firebase/database";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 7,
  outline: "none",
};

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password required"),
});

const regSchema = yup.object({
  name: yup.string().min(2, "Too short").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password required"),
});

export default function ModalWindow({ open, handleClose, login }) {
  const [user, setUser] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const schema = login === "login" ? loginSchema : regSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      if (login === "login") {
        // ВХІД (без змін)
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } else {
        // РЕЄСТРАЦІЯ + ЗБЕРЕЖЕННЯ В БД
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        // ЗБЕРІГАЄМО В БД
        await set(ref(database, `users/${userCredential.user.uid}`), {
          uid: userCredential.user.uid,
          name: data.name,
          email: data.email,
          role: "teacher",
          createdAt: Date.now(),
        });
      }

      handleClose();
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 className="text-4xl font-semibold mb-3">
          {login === "login" ? "Log In" : "Registration"}
        </h2>
        <p className=" text-md leading-5 mb-6 py-3">
          {login === "login"
            ? "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            : "Thank you for your interest in our platform! In order to register, we need some information. Please provide following information."}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {login !== "login" && (
            <div>
              <input
                {...register("name")}
                placeholder="Name"
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPass ? "password" : "text"}
              {...register("password")}
              placeholder="Password"
              className="w-full border border-gray-400 rounded-md p-3 pr-10 focus:outline-none"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3.5 text-xl cursor-pointer text-gray-600"
            >
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            // onClick={() => login !== "login" && handleSignUp()}
            type="submit"
            className="bg-[#F4C550] hover:bg-[#f8d46e] font-semibold py-3 rounded-md mt-2 shadow-sm transition cursor-pointer"
          >
            {login === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 mb-1 text-gray-500 text-lg">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button className="flex items-center justify-center gap-2 bg-[#2E2E2E] hover:bg-[#3d3d3d] text-white font-medium py-3 rounded-md w-full cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </Box>
    </Modal>
  );
}
