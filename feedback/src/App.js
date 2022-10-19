import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function app() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default app;
