import { Box } from "@/components";
import NewBookForm from "./components/NewBookForm";

const Home = () => {
  return (
    <>
      <Box className="h-full w-full p-2 overflow-y-auto flex flex-col items-center">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-3xl mb-4">Create New Book</h1>
          <NewBookForm />
        </div>
      </Box>
    </>
  );
};

export default Home;
