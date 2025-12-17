import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('about');
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);
  const [progress1, setProgress1] = useState(84);
  const [progress2, setProgress2] = useState(71);

  const statusMessages = [
    'Вывод средств будет осуществлён через определённое время',
    'Документ оформляется'
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setStatusMessageIndex((prev) => (prev + 1) % statusMessages.length);
    }, 15000);

    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress1((prev) => (prev < 100 ? prev + 1 : prev));
      setProgress2((prev) => (prev < 100 ? prev + 1 : prev));
    }, 3600000); // 1 час = 3600000 мс

    return () => clearInterval(progressInterval);
  }, []);

  const employers = [
    { name: 'Диаб Джамаль-Дин', amount: '338 000₽' },
    { name: 'Чуприков Никита', amount: '338 000₽' },
    { name: 'Саушкин Александра', amount: '338 000₽' }
  ];

  const services = [
    {
      icon: 'ShoppingBag',
      title: 'Работаем с Wildberries',
      description: 'Полная интеграция и поддержка работы на маркетплейсе Wildberries'
    },
    {
      icon: 'Package',
      title: 'Работаем с Ozon',
      description: 'Профессиональная работа с платформой Ozon для вашего бизнеса'
    },
    {
      icon: 'Store',
      title: 'Работаем с Яндекс.Маркет',
      description: 'Эффективные решения для торговли на Яндекс.Маркет'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Защита данных на уровне банков с шифрованием'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для решения ваших вопросов'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold gradient-text">EasyMoney</h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                О компании
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'services' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-7xl font-extrabold mb-6 gradient-text leading-tight">
            EasyMoney
          </h2>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Финансовые решения нового поколения для вашего бизнеса
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full hover-scale">
            Начать работу
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="glass-effect border-2 animate-fade-in">
            <CardContent className="p-12">
              <div className="flex items-center gap-4 mb-6">
                <Icon name="Building2" size={40} className="text-primary" />
                <h3 className="text-4xl font-bold">О компании</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                EasyMoney — профессиональная компания по работе с маркетплейсами. Мы специализируемся на сотрудничестве 
                с ведущими платформами: Wildberries, Ozon и Яндекс.Маркет. Помогаем предпринимателям эффективно 
                развивать бизнес на маркетплейсах.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наши услуги включают: управление продажами, оптимизацию цен, аналитику конкурентов, настройку рекламы, 
                работу с отзывами и рейтингами. Мы берём на себя все сложности работы с маркетплейсами, чтобы вы могли 
                сосредоточиться на развитии своего бизнеса и увеличении прибыли.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 gradient-text">
            Наши услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-effect border-2 hover:border-primary/50 transition-all duration-300 hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="glass-effect border-2 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <Icon name="Mail" size={40} className="text-primary" />
                <h3 className="text-4xl font-bold">Контакты</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-secondary" />
                  <span className="text-lg">+7 (927) 388-39-64</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-secondary" />
                  <span className="text-lg">duduru111@mail.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                  <span className="text-lg">Пензенская область, г. Заречный</span>
                </div>
              </div>
              <Button className="w-full mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full py-6 text-lg hover-scale">
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 animate-slide-in-right">
        <Card className="glass-effect border-2 border-primary/30 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Users" size={28} className="text-primary" />
              <h4 className="text-lg font-bold">Работодатели</h4>
            </div>
            <div className="space-y-3 mb-4">
              {employers.map((employer, index) => (
                <div 
                  key={index} 
                  className="p-3 rounded-lg bg-white/5"
                >
                  <span className="text-sm font-medium">{employer.name}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Общая выплата работодателям:</span>
                <span className="text-2xl font-bold text-primary">338 000₽</span>
              </div>
              
              <div className="space-y-3 mt-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Документ 1</span>
                    <span className="text-primary font-medium">{progress1}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress1}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Документ 2</span>
                    <span className="text-primary font-medium">{progress2}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress2}%` }}></div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground pt-2 border-t border-white/10">
                  Оформление документов
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                <Icon name="Loader2" size={16} className="animate-spin text-primary" />
                <span>{statusMessages[statusMessageIndex]}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="py-8 px-6 border-t border-border/50 mt-20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 EasyMoney</p>
        </div>
      </footer>
    </div>
  );
}