import HeaderComponent from "@/components/HeaderComponent";
import TrendsSection from "@/components/TrendsSection";
import BlogSection from "@/components/BlogSection";
import ToolsSection from "@/components/ToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeaderComponent />
      <TrendsSection />
      <BlogSection />
      <ToolsSection />
    </div>
  );
};

export default Index;
