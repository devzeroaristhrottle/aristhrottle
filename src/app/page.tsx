import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
// import Secondpage from "@/components/Secondpage";


export default function Home() {
  return (
    <div className="text-center">
     
      <Navbar/>
      <Homepage />
      {/* <Secondpage/> */}
    </div>
  );
}
