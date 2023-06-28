"use client";

import { Box } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import HomeContent from "./components/HomeContent";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Box className="h-full p-2 overflow-y-auto">
        <HomeContent />
      </Box>
    </>
  );
};

export default Home;
