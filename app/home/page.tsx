"use client";

import { Box } from "@/components";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import HomeContent from "./components/HomeContent";

const Home = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      {!user ? null : (
        <Box className="h-full p-2 overflow-y-auto">
          <HomeContent />
        </Box>
      )}
    </>
  );
};

export default Home;
