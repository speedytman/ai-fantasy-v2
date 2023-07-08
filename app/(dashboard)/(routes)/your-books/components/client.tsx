"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const YourBookClient = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1>Your Books (0)</h1>
          <p>Add or Manage your books here.</p>
        </div>
        <Button onClick={() => router.push(`/your-books/new`)}>Add New</Button>
      </div>
    </>
  );
};

export default YourBookClient;
