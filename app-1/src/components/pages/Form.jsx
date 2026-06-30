import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const registerSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Use at least 6 characters")
      .required("Password is required"),
     
  });  
   
  
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
  
    validationSchema: registerSchema,
// داله للستدعاء القيم و مسح القيم بعد الطباعه فى الكونسل 
     onSubmit: (values,{resetForm }) => {

console.log("Submitted");

      console.log(values);

      resetForm(); //لمسح القيم المسجله فى الواجه فقط 

       console.log("Reset Done");
    },
  }); 
  


 





return (
  <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="logo"
        className="mx-auto h-10 w-auto"
      />

      <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-white">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={formik.handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-100">
            First Name
          </label>

          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-100">
            Email address
          </label>

          <div className="mt-2">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>

            <a
              href="#"
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Forgot password?
            </a>
          </div>

          <div className="mt-2">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-2 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
        >
          Sign In
        </button>
      </form>

      <p className="mt-10 text-center text-sm text-gray-400">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold text-indigo-400 hover:text-indigo-300"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
);
}