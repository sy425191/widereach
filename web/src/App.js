import Login from "./components/auth/Login.js";
import SignUp from "./components/auth/Signup.js";
import AuthScreen from "./pages/auth.js";
import Dashboard from "./pages/dashboard.js";
import LandingPage from "./pages/landing.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MagicCenter from "./pages/magicPage.js";
import { EditorProvider } from "./context/editorContext.js";
import { VideoPlayerProvider } from "./context/videoPlayerContext.js";
import MyVideosPage from "./pages/myVideos.js";

function App() {
  return (
    <div className="bg-slate-950 text-white w-full h-screen overflow-y-auto">
      <EditorProvider>
        <VideoPlayerProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthScreen />}>
                <Route path="" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="reset" element={<div> ok </div>} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<MagicCenter />} />
                <Route path="videos" element={<MyVideosPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </VideoPlayerProvider>
      </EditorProvider>
    </div>
  );
}

export default App;
