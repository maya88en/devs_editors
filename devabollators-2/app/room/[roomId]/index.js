// pages/index.js
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../components/Editor"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <div>
        <h1>Hello world!</h1>
        <DynamicComponent />
      </div>
    </>
  );
};

export default Index;