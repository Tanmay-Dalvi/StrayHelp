import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FeedbackPage from "./pages/FeedbackPage";
import SignUpPage from "./pages/SignUpPage";
import AdoptDogPage from "./pages/AdoptDogPage";
import AdoptCatPage from "./pages/AdoptCatPage";
import VolunteerPage from "./pages/VolunteerPage";
import DoctorsPage from "./pages/DoctorsPage";
import AboutUsPage from "./pages/AboutUsPage";
import DonationPage from "./pages/DonationPage";
import SignInPage from "./pages/SignInPage";
import RescuePage1 from "./pages/RescuePage1";
import RescuePage from "./pages/RescuePage";
import ContactVolPage from "./pages/ContactVolPage";
import QrPage from "./pages/QrPage";
import ChatBotPage from "./pages/ChatBotPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/feedback-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/adopt-dog-page":
        title = "";
        metaDescription = "";
        break;
      case "/adopt-cat-page":
        title = "";
        metaDescription = "";
        break;
      case "/volunteer-page":
        title = "";
        metaDescription = "";
        break;
      case "/doctors-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/donation-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/rescue-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/rescue-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/contact-vol-page":
        title = "";
        metaDescription = "";
        break;
      case "/qr-page":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/feedback-page" element={<FeedbackPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/adopt-dog-page" element={<AdoptDogPage />} />
      <Route path="/adopt-cat-page" element={<AdoptCatPage />} />
      <Route path="/volunteer-page" element={<VolunteerPage />} />
      <Route path="/doctors-page" element={<DoctorsPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/donation-page" element={<DonationPage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route path="/rescue-page-1" element={<RescuePage1 />} />
      <Route path="/rescue-page-2" element={<RescuePage />} />
      <Route path="/contact-vol-page" element={<ContactVolPage />} />
      <Route path="/qr-page" element={<QrPage />} />
      <Route path="/chatbot-page" element={<ChatBotPage />} />
    </Routes>
  );
}
export default App;
