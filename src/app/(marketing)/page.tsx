import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container max-w-5xl text-center mx-auto p-4 flex justify-center items-center h-full w-full">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-semibold tracking-wider">
          Data scraping made easy
        </h1>
        <span className="text-base">
          Power your go-to-market with one platform. Fueled by the most accurate data on 275M contacts and 73M
          companies.
        </span>
        <Link href="/auth/sign-in">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
