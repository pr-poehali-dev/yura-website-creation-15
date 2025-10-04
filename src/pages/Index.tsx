import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'Проект Alpha',
      description: 'Корпоративный веб-сайт для технологической компании',
      category: 'Веб-разработка',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Проект Beta',
      description: 'Мобильное приложение для управления задачами',
      category: 'Мобильная разработка',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Проект Gamma',
      description: 'Дизайн-система для финтех стартапа',
      category: 'UI/UX Дизайн',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Запуск нового проекта для международного клиента',
      date: '15 сентября 2024',
      excerpt: 'Мы рады объявить о начале работы над крупным проектом в сфере e-commerce'
    },
    {
      id: 2,
      title: 'Студия получила награду Best Design 2024',
      date: '10 сентября 2024',
      excerpt: 'Наша работа была признана лучшей в категории корпоративного дизайна'
    },
    {
      id: 3,
      title: 'Обновление портфолио: 50+ новых работ',
      date: '5 сентября 2024',
      excerpt: 'Добавили свежие кейсы из различных индустрий'
    }
  ];

  const downloads = [
    { id: 1, name: 'Презентация студии 2024', size: '8.5 MB', type: 'PDF' },
    { id: 2, name: 'Прайс-лист услуг', size: '2.1 MB', type: 'PDF' },
    { id: 3, name: 'Кейс-стади: Проект Alpha', size: '15.3 MB', type: 'PDF' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-primary">ON Studio</h1>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}>
              Главная
            </button>
            <button onClick={() => scrollToSection('news')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'news' ? 'text-primary' : 'text-foreground'}`}>
              Новости
            </button>
            <button onClick={() => scrollToSection('projects')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'projects' ? 'text-primary' : 'text-foreground'}`}>
              Сборки
            </button>
            <button onClick={() => scrollToSection('downloads')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'downloads' ? 'text-primary' : 'text-foreground'}`}>
              Загрузки
            </button>
            <button onClick={() => scrollToSection('about')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-foreground'}`}>
              О студии
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Создаем операционные системы на базе PowerPoint
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Наши проекты славятся красивым дизайном, красивыми анимациями и крутыми обновлениями
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Наши проекты
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
      </section>

      <section id="news" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 blur-2xl rounded-full animate-pulse opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-700 to-blue-900 blur-xl rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
              <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-6 rounded-3xl shadow-2xl border-4 border-white/30 transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Icon name="Newspaper" size={56} className="text-white drop-shadow-2xl" />
              </div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">Новости</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="outline" size="sm" className="border-blue-700 bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:from-blue-800 hover:to-blue-600">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 blur-2xl rounded-full animate-pulse opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-700 to-blue-900 blur-xl rounded-full animate-pulse opacity-40" style={{animationDelay: '0.3s'}}></div>
              <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-6 rounded-3xl shadow-2xl border-4 border-white/30 transform rotate-12 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <Icon name="Briefcase" size={56} className="text-white transform -rotate-12 drop-shadow-2xl" />
              </div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">Сборки проектов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 blur-2xl rounded-full animate-pulse opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-700 to-blue-900 blur-xl rounded-full animate-pulse opacity-50" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-800 blur-lg rounded-full animate-pulse opacity-30" style={{animationDelay: '0.8s'}}></div>
              <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-6 rounded-3xl shadow-2xl border-4 border-white/40 transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                <Icon name="Download" size={56} className="text-white drop-shadow-2xl" />
              </div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">Загрузки</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((file) => (
              <Card key={file.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 blur-lg rounded-full animate-pulse opacity-50"></div>
                      <div className="relative p-5 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-2xl shadow-xl border-2 border-white/30 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                        <Icon name="FileText" size={40} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{file.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{file.type} • {file.size}</p>
                      <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-700 to-blue-900 blur-2xl opacity-50 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 rounded-full shadow-2xl border-8 border-white/50 transform hover:scale-125 hover:rotate-12 transition-all duration-500">
                  <Icon name="Users" size={72} className="text-white drop-shadow-2xl" />
                </div>
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">О студии</h2>
            <p className="text-lg text-muted-foreground mb-6">
              ON Studio - это команда профессионалов, создающие проекты на базе PowerPoint с 2021 года. Они профессионалы в своем деле!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">9</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold">ON Studio</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm opacity-70">
            © 2025 ON Studio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;