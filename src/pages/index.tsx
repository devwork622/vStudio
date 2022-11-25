import { type NextPage } from "next";
import { Router, useRouter } from 'next/router'
import Link from "next/link";
import FirstPage from "../pages/FirstPage";

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <>      
      <div className="container items-center flex flex-col justify-center text-center pt-10 pb-10 margin-0-auto">
          <FirstPage />                          
      </div>
      
    </>
  );
};

export default Home;





