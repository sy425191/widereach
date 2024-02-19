import LandingNavbar from "../components/landing/Navbar.js";
import LandingAccordian from "../components/landing/accordian.js";
import FeatureCard from "../components/landing/featureCard.js";
import HowToStepper from "../components/landing/howToStepper.js";
import WhyCard from "../components/landing/whyCard.js";
import MouseShadowComponent from "../components/lib/mouseShadow.js";

const LandingPage = () => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <LandingNavbar />

      <div className="w-full flex justify-center items-center mt-16">
        <div className="w-full md:w-3/4 select-none relative">
          <h1 className="text-3xl text-slate-300 font-bold text-center">
            Your
            <i className="fa fa-instagram text-4xl text-pink-500 mx-2"></i>
            Reels can be
            <div className="relative mb-2">
              <span className="text-5xl font-extrabold px-3 py-1 rounded tracking-wider mx-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Interactive
              </span>
            </div>
            with the power of AI
          </h1>
          <p className="text-center text-slate-300 mt-5">
            Edit your reels with our AI engine and make them interactive.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-24 md:flex-row justify-center items-center gap-x-24 mt-32 mb-24 select-none">
        <FeatureCard
          title="AI Transcript"
          description="Our AI engine will automatically generate the transcript of your reels."
        />
        <FeatureCard
          title="In-Built Editor"
          description="You can edit your reels with our in-built editor with ease. No need to use any other software."
        />
        <FeatureCard
          title="Multi-Lang"
          description="Supports multiple languages. You can add Transcripts in multiple languages."
        />
      </div>

      <div className="w-full flex justify-center items-center pt-8 pb-24">
        <div className="w-full relative">
          <div className="text-3xl text-slate-300 font-bold text-center mb-8">
            Who Need
            <div className="text-5xl font-extrabold px-3 py-1 rounded tracking-wider mx-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Widereach?
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4 mt-5 text-slate-300">
            <WhyCard
              title="Engage Your Audience"
              description="Our AI engine will automatically detect the objects in your reels and make them interactive."
              idx={1}
            />
            <WhyCard
              title="Increase Conversion"
              description="Our AI engine will automatically detect the objects in your reels and make them interactive."
              idx={2}
            />
            <WhyCard
              title="Boost Sales"
              description="Our AI engine will automatically detect the objects in your reels and make them interactive."
              idx={3}
            />
          </div>
        </div>
      </div>
      <div className="w-full relative mb-24 flex flex-col items-center">
        <div className="text-3xl text-slate-300 font-bold text-center mb-8">
          How to Use
        </div>
        <div className="mx-4 w-1/2 flex items-center justify-center mt-5 text-slate-300">
          <HowToStepper />
        </div>
      </div>

      <div className="w-full relative mb-24 flex flex-col items-center">
        <div className="text-3xl text-slate-300 font-bold text-center mb-8">
          FAQ
        </div>
        <div className="mx-4 w-1/2 flex items-center justify-center mt-5 text-slate-300">
          <LandingAccordian />
        </div>
      </div>

      <div className="">ok</div>
      <MouseShadowComponent context={document} />
    </div>
  );
};

export default LandingPage;
