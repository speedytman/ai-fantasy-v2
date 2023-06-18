"use client";

import React, { useEffect, useState } from "react";

import { AuthModal } from "@/components";

const ModalProvider = () => {
  //this ensures that none of the modals can be opened or seen during serverside rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  //If not in serverside rendering the modals will be available
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
