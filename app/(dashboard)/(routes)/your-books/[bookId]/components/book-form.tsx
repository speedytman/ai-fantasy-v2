"use client";

import AlertModal from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Book } from "@prisma/client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextareaAutosize from "react-textarea-autosize";
import ImageUpload from "@/components/ui/image-upload";

const formSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().min(1).max(500),
});

type BookFormValues = z.infer<typeof formSchema>;

interface BookFormProps {
  initialData: Book | null;
}

const BookForm: React.FC<BookFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const pageTitle = initialData ? "Edit Book" : "Create Book";
  const pageDescription = initialData ? "Edit a book" : "Create a new book";
  const toastMessage = initialData ? "Book updated." : "Book created.";
  const action = initialData ? "Save" : "Create";

  const form = useForm<BookFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: BookFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/book/${params.bookId}`, data);
      } else {
        await axios.post(`/api/book`, data);
      }
      router.refresh();
      toast({
        title: toastMessage,
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/book/${params.bookId}`);
      router.refresh();
      router.push("/your-books");
      toast({
        title: "Book deleted.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div>
        Heading
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            Trash
          </Button>
        )}
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            {/* Add Image AI Image Creation and Upload */}
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Title"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder="Description..."
                        className="resize-none min-h-[40dvh]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              {action}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default BookForm;
