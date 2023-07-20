"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(20),
});

type UsernameFormValues = z.infer<typeof formSchema>;

interface UsernameFormProps {
  initialData: User["username"];
}

const UsernameForm: React.FC<UsernameFormProps> = ({ initialData }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm<UsernameFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: initialData || "",
    },
  });

  const onSubmit = async (data: UsernameFormValues) => {
    try {
      setLoading(true);

      await axios.patch(`/api/profile/username`, data);

      toast({
        title: "Username updated.",
        variant: "default",
      });

      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex gap-2 w-fit items-end p-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={loading} className="ml-auto" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UsernameForm;
