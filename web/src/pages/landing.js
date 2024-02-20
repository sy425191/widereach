import LandingNavbar from "../components/landing/Navbar.js";
import LandingAccordian from "../components/landing/accordian.js";
import FeatureCard from "../components/landing/featureCard.js";
import WhoCard from "../components/landing/whoCard.js";

const LandingPage = () => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <LandingNavbar />

      <div className="w-full flex justify-center items-center mt-16">
        <div className="w-full md:w-3/4 relative">
          <h1 className="text-3xl text-slate-300 font-bold text-center">
            Level up your
            <i className="fa fa-instagram text-4xl text-pink-500 mx-2"></i>
            Reel with the power of AI to
            <div className="relative mb-2">
              <span className="text-5xl font-extrabold px-3 py-1 rounded tracking-wider mx-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Widereach
              </span>
            </div>
            to make them interactive.
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
            <WhoCard
              title="Educational Content Creators"
              description="Informative Content Creators Generally talk about a lot of things in their reels. Our AI engine will automatically detect the transcript of your reels and place them in video."
              idx={1}
            />
            <WhoCard
              title="Digital Infleuncers"
              description="Influencers need to put fancy captions in their reels. Our AI engine will suggest great captions for them."
              idx={2}
            />
            <WhoCard
              title="Budding Creators"
              description="Budding creators can use our detailed analysis on their reels to improve their content and make it more audience friendly."
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

    </div>
  );
};

export default LandingPage;
