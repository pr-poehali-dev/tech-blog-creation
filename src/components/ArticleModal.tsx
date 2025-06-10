import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal = ({ article, isOpen, onClose }: ArticleModalProps) => {
  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-purple-600 text-white">
              {article.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={14} />
                {article.date}
              </span>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
            {article.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="prose prose-lg max-w-none">
            <p>
              Это демонстрационная статья. В реальном приложении здесь был бы
              полный контент статьи с подробным разбором технологии, примерами
              кода и практическими советами.
            </p>

            <h3>Основные преимущества</h3>
            <ul>
              <li>Высокая производительность</li>
              <li>Простота использования</li>
              <li>Активное сообщество</li>
              <li>Хорошая документация</li>
            </ul>

            <h3>Практические примеры</h3>
            <p>
              Здесь бы были конкретные примеры использования технологии, код и
              пошаговые инструкции для разработчиков.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t">
            {article.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
