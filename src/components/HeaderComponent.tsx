import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { useScroll } from "@/hooks/useScroll";

const HeaderComponent = () => {
  const { scrollToSection, openExternalLink } = useScroll();

  const handleReadBlog = () => {
    scrollToSection("blog");
  };

  const handleGitHub = () => {
    openExternalLink("https://github.com");
  };

  const handleSubscribe = () => {
    scrollToSection("tools");
  };

  return (
    <header className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center py-6 mb-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} className="text-white" />
            </div>
            <span className="font-bold text-lg text-gray-800">TechBlog</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#trends"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Тренды
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Статьи
            </a>
            <a
              href="#tools"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Инструменты
            </a>
          </div>

          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handleSubscribe}
          >
            Подписаться
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="mt-32 space-y-8">
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium"
          >
            🚀 Новые технологии 2025
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Технологии
            <br />
            Будущего
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Исследую новые языки программирования, фреймворки и инструменты.
            Делюсь инсайтами о трендах в разработке.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
              onClick={handleReadBlog}
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Читать блог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={handleGitHub}
            >
              <Icon name="Github" size={20} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-purple-100">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600 mt-1">Технологий изучено</div>
          </Card>
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-blue-100">
            <div className="text-3xl font-bold text-blue-600">120+</div>
            <div className="text-gray-600 mt-1">Статей написано</div>
          </Card>
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-indigo-100">
            <div className="text-3xl font-bold text-indigo-600">25k+</div>
            <div className="text-gray-600 mt-1">Читателей в месяц</div>
          </Card>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
