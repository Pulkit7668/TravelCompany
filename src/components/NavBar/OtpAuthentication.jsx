import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; 

const OtpAuthentication = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  // Handle menu visibility toggle
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClose = () => {
    navigate(-1);
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-gray-500 flex items-center justify-center h-screen">
    <div className="bg-white w-full max-w-4xl h-[50vh] rounded-xl shadow-lg overflow-hidden flex relative xs:h-full">
      {/* Menu Icon */}
      <button
        onClick={handleMenuClick}
        className="absolute top-3 left-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none md:hidden"
      >
        <HiMenu size={24} className="text-gray-600" />
      </button>

      {/* Menu */}
      {menuVisible && (
        <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-50 w-[100%] h-[30vh] z-10 flex justify-center p-4 transition-all duration-300 ease-in-out">
          <div className="bg-white w-64 p-5 rounded-lg">
            <button
              onClick={handleMenuClick}
              className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full"
            >
              <AiOutlineClose size={20} className="text-gray-600" />
            </button>
            <h2 className="font-bold text-xl text-center mb-4">Login Menu</h2>
            <div className="text-center">
              <p className="text-lg">Username</p>
              <p className="text-lg">Profile Picture</p>
              <button className="mt-4 py-2 px-4 bg-red-500 rounded-full text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden flex">
        {/* Close Button (Navigating back to the previous page) */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <AiOutlineClose size={20} className="text-gray-600" />
        </button>

        {/* Left Section */}
        <div
          className="w-1/2 bg-cover bg-center p-8 text-white flex flex-col justify-center xs:hidden"
          style={{
            backgroundImage:
              "url('https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dpbi1iYWNrZ3JvdW5kLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciJ9fX0=')",
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Why choose us?</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvbG9naW4vZnJlZS10cmF2ZWwucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImhlaWdodCI6MjAwLCJmaXQiOiJjb3ZlciJ9fX0="
                alt="Calendar Icon"
                className="w-10 h-10"
              />
              <span>Unlimited travel plans for free!</span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvbG9naW4vZGlzY291bnQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImhlaWdodCI6MjAwLCJmaXQiOiJjb3ZlciJ9fX0="
                alt="Discount Icon"
                className="w-10 h-10"
              />
              <span>Exclusive deals: Up to 70% off!</span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvbG9naW4vb2ZmaWNlci5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDAsImZpdCI6ImNvdmVyIn19fQ=="
                alt="Support Icon"
                className="w-10 h-10"
              />
              <span>Expert support, 24x7!</span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvbG9naW4vbmlnaHQtc3RheS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDAsImZpdCI6ImNvdmVyIn19fQ=="
                alt="Security Icon"
                className="w-10 h-10"
              />
              <span>Data security for your peace of mind</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-1/2 xs:w-full p-8 text-center">
          <div className="mb-8 xs:mt-20">
            <h2 className="text-3xl font-bold">Enter You number</h2>
          </div>

          {/* Recaptcha Container */}
          <div id="recaptcha-container" />
          {/* OTP Form */}
          {showOTP ? (
            <>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 0.5rem",
                  fontSize: "1.5rem",
                  borderRadius: "0.5rem",
                  border: "2px solid #ccc",
                  textAlign: "center",
                  color: "#333",
                }}
              />
              <button
                onClick={onOTPVerify}
                className="bg-yellow-300 w-full flex gap-1 items-center justify-center py-2.5 text-white text-lg rounded-lg mt-10"
              >
                {loading ? (
                  <CgSpinner size={20} className="animate-spin" />
                ) : (
                  "Verify OTP"
                )}
              </button>
            </>
          ) : (
            <>
              <PhoneInput
                country={"in"}
                value={ph}
                onChange={setPh}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
              <button
                onClick={onSignup}
                className="bg-yellow-300 w-full flex gap-1 items-center justify-center py-2.5 text-white text-lg rounded-lg mt-10"
              >
                {loading ? (
                  <CgSpinner size={20} className="animate-spin" />
                ) : (
                  "Send OTP"
                )}
              </button>
            </>
          )}
        </div>
      </div>

      <Toaster />
    </div>
    </section>
  );
};

export default OtpAuthentication;
