import LeadForm from "./ui/lead-form";

export default function Home() {
  return (
    <main className="py-10 sm:py-16">
      <section className="grid gap-8 sm:grid-cols-2 items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-wide text-white/70">Танцевальная студия «Хип-хоп Щелчок»</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight heading-gradient">
            Раскройте творческий потенциал вашего ребенка!
          </h1>
          <p className="text-white/80 max-w-prose">
            Тренировки с удовольствием: сила, пластичность, баланс и дисциплина. Брейкинг —
            олимпийская дисциплина. Первое занятие — бесплатно.
          </p>
          <div className="flex gap-3">
            <a href="#lead" className="btn-primary">Записаться на пробное</a>
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5">Тарифы</a>
          </div>
        </div>
        <div className="relative">
          <div className="card">
            <ul className="grid gap-4 text-white/90">
              <li>Физподготовка: сила, гибкость, координация</li>
              <li>Успеваемость: концентрация и внимание</li>
              <li>Дисциплина и командный дух</li>
              <li>Друзья и полезный досуг — спорт вместо гаджетов</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="card">
          <h3 className="text-xl font-semibold">Пробное занятие</h3>
          <p className="text-sm text-white/70">60 минут</p>
          <p className="mt-4 text-3xl font-bold">Бесплатно</p>
          <ul className="mt-4 text-white/90 space-y-2">
            <li>Групповая тренировка</li>
            <li>Знакомство с тренером</li>
            <li>Консультация</li>
          </ul>
          <a href="#lead" className="btn-primary mt-6">Записаться</a>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Абонемент</h3>
          <p className="text-sm text-white/70">8 занятий в месяц</p>
          <p className="mt-4 text-3xl font-bold">7000 ₽</p>
          <ul className="mt-4 text-white/90 space-y-2">
            <li>2 занятия в неделю</li>
            <li>Групповые тренировки</li>
            <li>Консультация</li>
          </ul>
          <a href="#lead" className="btn-primary mt-6">Купить</a>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Индивидуально</h3>
          <p className="text-sm text-white/70">По согласованию</p>
          <p className="mt-4 text-3xl font-bold">от 2000 ₽</p>
          <ul className="mt-4 text-white/90 space-y-2">
            <li>Персональный план</li>
            <li>Гибкий график</li>
            <li>Быстрый прогресс</li>
          </ul>
          <a href="#lead" className="btn-primary mt-6">Оставить заявку</a>
        </div>
      </section>

      <section id="lead" className="mt-20">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">Запишитесь на бесплатный урок</h2>
          <p className="text-white/70 mb-6">Заполните форму — мы свяжемся с вами.</p>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
