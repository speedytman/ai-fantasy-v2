"use client";

import { Box } from "@/components";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
      {!user ? null : <Box className="h-full p-2 overflow-y-auto">Library</Box>}
    </>
  );
};

export default Home;
