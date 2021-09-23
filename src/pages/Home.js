import { Slider, AboutUs, Products, ContactUs } from "../components";

function Home() {
   return (
      <>
         <Slider />
         <AboutUs />
         <Products showTitle={true} />
         <ContactUs />
      </>
   );
}

export default Home;
