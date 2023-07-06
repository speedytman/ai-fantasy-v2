"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

const NewBookForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      image: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};

  const { ref: titleRef, ...rest } = register("title");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <TextareaAutosize
        ref={(e) => {
          titleRef(e);
        }}
      />
    </form>
  );
};

export default NewBookForm;
