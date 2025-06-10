import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TrendsSection = () => {
  const trends = [
    {
      title: "Rust",
      category: "Язык программирования",
      description:
        "Системный язык с фокусом на безопасность памяти и производительность",
      trend: "+85%",
      color: "from-orange-500 to-red-500",
      icon: "Zap",
      tags: ["WebAssembly", "Системы", "Blockchain"],
    },
    {
      title: "Astro",
      category: "Фреймворк",
      description: "Статический генератор сайтов с островной архитектурой",
      trend: "+120%",
      color: "from-purple-500 to-pink-500",
      icon: "Rocket",
      tags: ["Static Sites", "Performance", "SEO"],
    },
    {
      title: "Bun",
      category: "Runtime",
      description: "Быстрый JavaScript runtime, bundler и package manager",
      trend: "+200%",
      color: "from-yellow-500 to-orange-500",
      icon: "Package",
      tags: ["JavaScript", "Performance", "Tooling"],
    },
    {
      title: "Tauri",
      category: "Фреймворк",
      description: "Создание нативных приложений с веб-технологиями",
      trend: "+95%",
      color: "from-blue-500 to-cyan-500",
      icon: "Monitor",
      tags: ["Desktop", "Rust", "Cross-platform"],
    },
    {
      title: "tRPC",
      category: "Библиотека",
      description: "Type-safe API для TypeScript full-stack приложений",
      trend: "+150%",
      color: "from-green-500 to-emerald-500",
      icon: "Link",
      tags: ["TypeScript", "API", "Full-stack"],
    },
    {
      title: "Zig",
      category: "Язык программирования",
      description:
        "Современная альтернатива C с простотой и производительностью",
      trend: "+75%",
      color: "from-indigo-500 to-purple-500",
      icon: "Code",
      tags: ["Systems", "C Alternative", "Performance"],
    },
  ];

  return (
    <section
      id="trends"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 mb-4"
          >
            📈 Горячие тренды
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Что сейчас в тренде
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Технологии, которые набирают популярность и меняют индустрию
            разработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${trend.color} flex items-center justify-center`}
                  >
                    <Icon
                      name={trend.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 font-semibold"
                  >
                    {trend.trend}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {trend.title}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="w-fit text-xs text-gray-600"
                >
                  {trend.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {trend.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {trend.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full mt-4 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors"
                >
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
