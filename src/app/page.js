import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import NewProduct from "@/components/NewProduct";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <div id="AllNewProducts"> <NewProduct />
      </div>
     
    </>
  );
}
