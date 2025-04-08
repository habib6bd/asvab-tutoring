import Welcome from "./welcome/page";
import TopCourses from "./topcourses/page";
import Teachers from "./teachers/page";
import FaqPage from "./faqpage/page";
import ReviewsPage from "./reviewpage/page";
import OurPackagesPage from "./packages/page";

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <TopCourses />
      <Teachers />
      <FaqPage />
      <ReviewsPage />
      <OurPackagesPage />
    </div>
  );
}
