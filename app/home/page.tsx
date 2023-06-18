"use client";

import { Header } from "@/components";
import useNavigation from "@/hooks/useNavigation";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    router.push("/");
  }

  return <>{!user ? <Header /> : <Header />}</>;
};

export default Home;
