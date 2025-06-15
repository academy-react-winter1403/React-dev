import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";

const VoiceNavigation = () => {
  const navigate = useNavigate();
  const [showBoxFlag, setShowBoxFlag] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  let recognition;
  const startedVoice = () => {
    setShowBoxFlag(true);
    // بررسی پشتیبانی مرورگر
    if (!("webkitSpeechRecognition" in window)) {
      console.error("مرورگر شما از تشخیص صوت پشتیبانی نمی‌کند!");
      return;
    }

    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false; // تشخیص مداوم
    recognition.interimResults = true; // فقط نتایج نهایی

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      console.log("تشخیص داده شد:", transcript);
      setVoiceText(transcript);
      // تغییر مسیر با react-router-dom
      navigate(`/${encodeURIComponent(transcript)}`, { replace: true });
    };

    // recognition.onerror = (event) => {
    //     console.error("خطا در تشخیص صوت:", event.error);
    // };

    // تمیزکاری هنگام unmount
    // return () => {
    //     recognition.stop();
    // };
    recognition.start();
    console.log(recognition);
  };

  const closeBtnClick = () => {
    setShowBoxFlag(false);
  };

  return (
    <div
      className="voice-control w-3xs h-48 fixed
        right-9 bottom-9 z-[100] flex flex-col justify-end"
    >
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={`w-3xs h-48 rounded-[50px_2px_50px_2px] flex flex-col justify-between p-3 ${
          showBoxFlag ? "bg-white shadow-2xl shadow-gray-600" : "bg-transparent"
        }`}
      >
        <div className="text-container h-[70%]">
          {showBoxFlag && (
            <>
              <p
                className="w-[50px] flex items-center cursor-pointer p-0.5 rounded-[8px]
                bg-orange-500"
                onClick={closeBtnClick}
              >
                <IoIosCloseCircle color="white" />
                <span className="text-[12px] font-bold mt-[-4px] text-white">
                  {" "}
                  بستن{" "}
                </span>
              </p>
              <p className="font-bold mt-3"> صحبت کنید😊😊: </p>
              <p className="text-[20px] text-orange-500 font-bold mt-1.5 text-end mr-2">
                {voiceText}
              </p>
            </>
          )}
        </div>
        <div
          className="w-[60px] h-[60px] bg-orange-500 rounded-[50%] shadow
          flex items-center justify-center cursor-pointer"
          onClick={startedVoice}
        >
          <FaMicrophoneAlt size={30} color="white" />
        </div>
      </motion.div>
    </div>
  );
};

export default VoiceNavigation;
