import Footer from "./Page-components/Footer";
import CTA from "./Page-components/cta";
import FeaturedProjects from "./Page-components/featuredProjects";
import NavBar from "./Page-components/navBar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <CTA />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
