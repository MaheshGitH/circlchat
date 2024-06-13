import MainArea from "./components/MainArea";
import NavBar from "./components/NavBar";
import AdditionalBtn from "./components/WelcomeArea/AdditionalBtn";
import GetStartedBtn from "./components/WelcomeArea/GetStartedBtn";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col">
      <NavBar />
      <MainArea />
      <GetStartedBtn />
      <AdditionalBtn />
    </div>
  );
}
