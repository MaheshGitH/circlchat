import MainArea from "./components/MainArea";
import NavBar from "./components/NavBar";
import AdditionalLink from "./components/WelcomeArea/AdditionalLink";
import GetStartedBtn from "./components/WelcomeArea/GetStartedBtn";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col items-center lg:gap-36 transition-[gap] duration-1000">
      <NavBar />
      <MainArea />
      <GetStartedBtn />
      <AdditionalLink />
    </div>
  );
}
