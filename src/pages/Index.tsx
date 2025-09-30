import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ProblemSection />
      <SolutionsSection />
      <ResourcesSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
