"use client";

import { Box } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Box className="h-full p-2 overflow-y-auto">Search</Box>
    </>
  );
};

export default Home;
