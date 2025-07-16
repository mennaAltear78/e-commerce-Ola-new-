import { useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsWifiOff } from "react-icons/bs";

function InternetConnectionProvider({ Children }) {
  const toast = useToast();
  const toastIdRef = useRef();
  const [isOnline, setIsOnLine] = useState(true);

  function closeToast() {
    toast.close(toastIdRef.current);
  }

  function showToast() {
    toastIdRef.current = toast({
      title: "you are offline",
      description: "please check your internet connection",
      status: "worning",
      duration: null,
      isClosable: true,
      icon: <BsWifiOff size={20} />,
    });
  }

  useEffect(() => {
    setIsOnLine(navigator.onLine);
  }, [navigator.onLine]);

  window.addEventListener("online", (event) => {
    console.log("You are back online.");
    setIsOnLine(true);
    closeToast();
  });

  window.addEventListener("offline", (event) => {
    console.log("The network connection has been lost.");
    setIsOnLine(false);
    // showToast()
  
  });


  if (!isOnline) {
    return <>{Children} {showToast}</>;
  }
  return Children ;
}

export default InternetConnectionProvider;
