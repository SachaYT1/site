import LeadForm from "./ui/lead-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10 sm:py-16">
      <section className="relative overflow-hidden rounded-2xl grid gap-8 sm:grid-cols-2 items-center p-6 sm:p-10">
        <Image
          src="/background_photo.jpg"
          alt="Танцевальная студия — вдохновляющая атмосфера"
          fill
          priority
          className="object-cover -z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0b0b12]/80 via-[#9333ea]/30 to-transparent" />

        <div className="relative z-10 space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Раскройте творческий потенциал вашего ребенка!
          </h1>
          <p className="text-white/80 max-w-prose">
            Современнный стильный танец — хип-хоп. Тренировки с удовольствием: сила, пластичность, музыкальность и дисциплина. Новые друзья и яркие эмоции. Первое занятие — бесплатно.
          </p>
          <div className="flex gap-3">
            <a href="#lead" className="btn-primary">Записаться на пробное</a>
          </div>
        </div>
        <div className="relative z-10 hidden sm:block" />
        
        {/* Sticker in bottom right corner (instead of logo) */}
        <div className="absolute bottom-6 right-6 z-20">
          <a
            href="#lead"
            className="sticker-attention block rounded-full bg-[#e11d74] text-white text-sm font-semibold px-5 py-3 shadow-lg shadow-pink-500/30 ring-1 ring-white/20 hover:brightness-110 transition"
          >
            Идёт набор: от 7 лет
          </a>
        </div>
      </section>

      {/* Benefits grid below hero */}
      <section className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Image src="/confidence.svg" alt="Уверенность в себе" width={24} height={24} className="opacity-100" />
            </span>
            <p className="text-white/90">Уверенность в себе</p>
          </div>
          <div className="card flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-white/90"><circle cx="12" cy="12" r="7" strokeWidth="1.6"/><path d="M12 5v7l4 1" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </span>
            <p className="text-white/90">Улучшение физической формы</p>
          </div>
          <div className="card flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-white/90"><path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeWidth="1.6"/><path d="M3 20a7 7 0 0 1 18 0" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </span>
            <p className="text-white/90">Навыки командной работы и новые друзья</p>
          </div>
          <div className="card flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-white/90"><path d="M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <p className="text-white/90">Развитие творческих способностей</p>
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
          <p className="mt-4 text-3xl font-bold">5000 ₽</p>
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
