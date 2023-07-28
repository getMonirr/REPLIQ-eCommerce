import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";

const Registration = () => {
  // use context
  const { googleSignIn, loginUser } = useAuth();

  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        if (userCredential.user) {
          Swal.fire("Sign In Successful", "WelCome Back", "success");
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          Swal.fire("Sign In Successful", "WelCome Back", "success");
          navigate(from);
        }
      })
      .catch((err) => console.log(err?.message));
  };

  return (
    <div className="hero min-h-screen bg-rq-primary">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body bg-white rounded-xl">
            <div>
              <p className="text-2xl font-bold mb-4">Registration here</p>
            </div>
            <div className="mb-4">
              <button
                onClick={handleGoogleSignIn}
                className="capitalize flex justify-center items-center btn  text-black border-base-300 btn-block gap-4 hover:bg-rq-primary hover:text-rq-secondary hover:border-base-300 shadow-xl hover:shadow-none"
              >
                <Player
                  loop
                  autoplay
                  style={{ height: "40px", width: "40px" }}
                  src={
                    "https://assets9.lottiefiles.com/private_files/lf30_29gwi53x.json"
                  }
                ></Player>
                Login With google
              </button>
            </div>
            <div className="divider">OR</div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Phone Number <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="+880-1771-909060"
                  className="input input-bordered"
                  {...register("phoneNumber", {
                    pattern: /^(?:\+?88)?01[135-9]\d{8}$/,
                  })}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-rq-primary text-rq-secondary border-yellow-300 hover:bg-rq-secondary hover:text-rq-primary transition hover:shadow-none shadow-lg"
                >
                  Registration
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mt-4 text-center">
                Already have an account?
                <Link to="/login" className="text-blue-400">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
