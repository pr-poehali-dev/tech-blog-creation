import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ArticleModal from "@/components/ArticleModal";
import { useState } from "react";

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadArticle = (article: any) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const articles = [
    {
      title: "Почему Rust завоевывает мир системного программирования",
      excerpt:
        "Глубокий анализ преимуществ Rust над C++ и почему крупные компании переходят на него",
      category: "Языки программирования",
      readTime: "8 мин",
      date: "15 дек 2024",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
      tags: ["Rust", "Systems", "Performance"],
    },
    {
      title: "Astro vs Next.js: Битва за будущее веб-разработки",
      excerpt:
        "Сравнение подходов к статической генерации и серверному рендерингу",
      category: "Фреймворки",
      readTime: "12 мин",
      date: "12 дек 2024",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop",
      tags: ["Astro", "Next.js", "SSG"],
    },
    {
      title: "AI-инструменты для разработчиков в 2025",
      excerpt:
        "Обзор лучших AI-ассистентов, которые революционизируют процесс разработки",
      category: "Инструменты",
      readTime: "10 мин",
      date: "10 дек 2024",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      tags: ["AI", "Tools", "Productivity"],
    },
    {
      title: "WebAssembly: Новая эра производительности в браузере",
      excerpt:
        "Как WASM меняет возможности веб-приложений и открывает новые горизонты",
      category: "Технологии",
      readTime: "15 мин",
      date: "8 дек 2024",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      tags: ["WebAssembly", "Performance", "Browser"],
    },
    {
      title: "Deno 2.0: Серьезный конкурент Node.js",
      excerpt:
        "Новые возможности Deno и почему он может изменить JavaScript экосистему",
      category: "Runtime",
      readTime: "7 мин",
      date: "5 дек 2024",
      image:
        "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&h=300&fit=crop",
      tags: ["Deno", "JavaScript", "Runtime"],
    },
    {
      title: "Микрофронтенды: Архитектура будущего?",
      excerpt:
        "Анализ плюсов и минусов микрофронтендной архитектуры на реальных примерах",
      category: "Архитектура",
      readTime: "11 мин",
      date: "3 дек 2024",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
      tags: ["Architecture", "Microfrontends", "Scalability"],
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
            📝 Свежие статьи
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Блог о технологиях
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Глубокие разборы новых технологий, личный опыт и практические советы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <Card className="lg:col-span-2 group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-purple-600 text-white">
                    {articles[0].category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Топ статья
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {articles[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {articles[0].readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {articles[0].date}
                    </span>
                  </div>
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleReadArticle(articles[0])}
                >
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать статью
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {article.date}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    onClick={() => handleReadArticle(article)}
                  >
                    <Icon name="ArrowRight" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            <Icon name="BookOpen" size={16} className="mr-2" />
            Показать все статьи
          </Button>
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default BlogSection;
