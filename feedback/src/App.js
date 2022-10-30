import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Post from "./components/Post";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FeedbackProvider>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </FeedbackProvider>
            }
          ></Route>

          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/post/:id" element={<Post />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
