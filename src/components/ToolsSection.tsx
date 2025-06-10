import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ToolsSection = () => {
  const tools = [
    {
      name: "Vite",
      description: "Молниеносный build tool для современной веб-разработки",
      category: "Build Tools",
      rating: 5,
      popularity: "98%",
      icon: "Zap",
      color: "from-yellow-500 to-orange-500",
      features: ["HMR", "ES Modules", "TypeScript", "Plugin System"],
      website: "vitejs.dev",
    },
    {
      name: "Cursor",
      description: "AI-powered редактор кода с невероятной автодополнением",
      category: "Code Editors",
      rating: 5,
      popularity: "95%",
      icon: "Edit",
      color: "from-blue-500 to-purple-500",
      features: ["AI Completion", "Chat", "Code Generation", "Refactoring"],
      website: "cursor.sh",
    },
    {
      name: "Biome",
      description: "Универсальный инструмент для форматирования и линтинга",
      category: "Code Quality",
      rating: 4,
      popularity: "87%",
      icon: "Shield",
      color: "from-green-500 to-emerald-500",
      features: [
        "Faster than ESLint",
        "Built-in Formatter",
        "TypeScript",
        "JSON",
      ],
      website: "biomejs.dev",
    },
    {
      name: "Playwright",
      description: "Современный фреймворк для E2E тестирования",
      category: "Testing",
      rating: 5,
      popularity: "92%",
      icon: "Play",
      color: "from-purple-500 to-pink-500",
      features: ["Cross-browser", "Auto-wait", "Screenshots", "Mobile Testing"],
      website: "playwright.dev",
    },
    {
      name: "Bruno",
      description: "Альтернатива Postman с открытым исходным кодом",
      category: "API Testing",
      rating: 4,
      popularity: "75%",
      icon: "Globe",
      color: "from-indigo-500 to-blue-500",
      features: ["Git-friendly", "Offline", "Scripting", "Collections"],
      website: "usebruno.com",
    },
    {
      name: "Warp",
      description: "Современный терминал с AI-помощником",
      category: "Terminal",
      rating: 4,
      popularity: "68%",
      icon: "Terminal",
      color: "from-gray-600 to-gray-800",
      features: ["AI Commands", "Blocks", "Workflows", "Team Sharing"],
      website: "warp.dev",
    },
  ];

  const categories = [
    "Все",
    "Build Tools",
    "Code Editors",
    "Testing",
    "API Testing",
    "Terminal",
  ];

  return (
    <section
      id="tools"
      className="py-20 bg-gradient-to-b from-gray-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 mb-4"
          >
            🛠️ Инструменты разработки
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Лучшие Dev Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подборка современных инструментов, которые делают разработку быстрее
            и приятнее
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "hover:bg-purple-50 hover:text-purple-600"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon
                      name={tool.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Icon
                          key={starIndex}
                          name="Star"
                          size={12}
                          className={
                            starIndex < tool.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 text-xs"
                    >
                      {tool.popularity}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {tool.name}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="w-fit text-xs text-gray-600 mb-3"
                >
                  {tool.category}
                </Badge>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Ключевые особенности:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <Icon name="Link" size={12} className="inline mr-1" />
                    {tool.website}
                  </div>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                  >
                    <Icon name="ExternalLink" size={14} className="mr-1" />
                    Посетить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 border-0 text-white">
            <CardContent className="p-12 text-center">
              <Icon
                name="Mail"
                size={48}
                className="mx-auto mb-6 text-white/80"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Получайте обзоры новых инструментов
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Еженедельная подборка лучших инструментов для разработчиков,
                тренды и личные рекомендации
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="ваш@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
