"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { ShadButton } from "../Buttons/ShadButton";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // toast notification
      toast.error("There was an error signing in with Google.");
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      // toast notification
      toast.error("There was an error signing in with Github.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-2 justify-center", className)}
      {...props}
    >
      <h1>Sign In with</h1>
      <ShadButton
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <FcGoogle className="mr-2" size={20} />}
        Google
      </ShadButton>
      <div className="relative h-fit w-full my-4">
        <div className="absolute flex items-center justify-center bg-transparent h-full w-full pt-1">
          <div className="bg-zinc-700 h-[1px] w-3/4" />
        </div>
        <div className="absolute flex items-center justify-center bg-transparent h-full w-full">
          <div className="text-zinc-700 z-10 text-xl p-2 rounded-full bg-black hover:cursor-default">
            or
          </div>
        </div>
      </div>
      <ShadButton
        onClick={loginWithGithub}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <AiFillGithub className="mr-2" size={20} />}
        Github
      </ShadButton>
    </div>
  );
};

export default UserAuthForm;
