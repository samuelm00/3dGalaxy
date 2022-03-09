import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Galaxy = dynamic(() => import("../components/Galaxy"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Galaxy />
    </div>
  );
};

export default Home;
