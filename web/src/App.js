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
import { useAuth } from "./context/useAuth.js";
import Logout from "./components/auth/logout.js";

function App() {
  const user = useAuth();
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
                <Route path="logout" element={<Logout />} />
                <Route path="reset" element={<div> ok </div>} />
              </Route>
              {user.user && (
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="" element={<MagicCenter />} />
                  <Route path="videos" element={<MyVideosPage />} />
                  <Route
                    path="plan"
                    element={
                      <div> Plan & Billing section will be activated soon </div>
                    }
                  />
                </Route>
              )}
            </Routes>
          </BrowserRouter>
        </VideoPlayerProvider>
      </EditorProvider>
    </div>
  );
}

export default App;
