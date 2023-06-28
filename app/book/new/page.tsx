"use client";

import { Box } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import NewBookContent from "./components/NewBookContent";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Box className="h-full p-2 overflow-y-auto">
        <NewBookContent />
      </Box>
    </>
  );
};

export default Home;
