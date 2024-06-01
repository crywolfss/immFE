import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [error, setError] = useState(null);
  const { email, no_hp } = location.state || {};



  const [otp_code, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp_code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp_code.join("");
    // console.log("OTP Code: ", otpCode);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/otp-verification",
        {
          email: email,
          otp_code: otpCode,
        }
      );

      console.log(response.data.success);

      if (response.data.success == true) {
        // Navigate to the OTP verification page
        navigate("/imm-verification-success", { state: { email, no_hp } });


      } else {
        setError(response.data.message || "Verification failed");
      }

      const data = await response.json();
      console.log(data);
      // Handle success or failure accordingly
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };


  const handleResendOtp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/otp", {
        email: email,
        no_hp: no_hp,
      });

      if (response.data.success) {
        // Optionally show a success message
        setError("Kode OTP berhasil dikirim ulang");
      } else {
        setError(response.data.message || "Failed to resend OTP");
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const countdown = () => {
    for (let i = secondsRemaining; i >= 0; i--) {
        setTimeout(() => {
            setSecondsRemaining(i);
            if (i === 0) {
            }
        }, (secondsRemaining - i) * 1000);
    }
};

countdown();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="relative px-6 pt-10 pb-9 mx-auto w-full max-w-lg">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Masukan Kode Verifikasi Anda</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>
                Masukkan kode verifikasi. Cek email anda untuk menerima kode
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                  {otp_code.map((data, index) => {
                    return (
                      <div key={index} className="w-16 h-16">
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          name="otp_code"
                          maxLength="1"
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      </div>
                    );
                  })}
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <div className="flex flex-col items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Belum menerima kode? tunggu {secondsRemaining}</p>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="flex flex-row items-center text-[#0F1F3E]"
                  >
                    Kirim ulang kode
                  </button>
                </div>

                <button
                  type="submit"
                  className="flex flex-col items-center justify-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Verifikasi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
