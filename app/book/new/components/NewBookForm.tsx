import { Input } from "@/components";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const NewBookForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      image: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};
  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};

export default NewBookForm;
