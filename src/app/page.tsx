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
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#lead" className="btn-primary">Записаться на пробное</a>
            {/* Mobile-only duplicate of sticker to avoid overlap and stack buttons */}
            <a
              href="#lead"
              className="sticker-attention sm:hidden rounded-full bg-[#e11d74] text-white text-sm font-semibold px-5 py-3 shadow-lg shadow-pink-500/30 ring-1 ring-white/20 hover:brightness-110 transition"
            >
              Идёт набор: от 7 лет
            </a>
          </div>
        </div>
        <div className="relative z-10 hidden sm:block" />
        
        {/* Sticker in bottom right corner (desktop/tablet only) */}
        <div className="absolute bottom-6 right-6 z-20 hidden sm:block">
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
          <div className="group card hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-1 ring-purple-300/30 group-hover:scale-110 transition-transform">
                <Image src="/confidence.svg" alt="Уверенность в себе" width={24} height={24} className="opacity-90 group-hover:opacity-100 transition-opacity" />
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">Уверенность</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">в себе</p>
              </div>
            </div>
          </div>
          
          <div className="group card hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-300/30 group-hover:scale-110 transition-transform">
                <Image src="/strength.svg" alt="Физическая форма" width={24} height={24} className="opacity-90 group-hover:opacity-100 transition-opacity" />
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">Физическая</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">форма</p>
              </div>
            </div>
          </div>
          
          <div className="group card hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-green-500/20">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 ring-1 ring-green-300/30 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-green-300 group-hover:text-green-200 transition-colors"><path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeWidth="1.6"/><path d="M3 20a7 7 0 0 1 18 0" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-green-300 transition-colors">Команда</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">и друзья</p>
              </div>
            </div>
          </div>
          
          <div className="group card hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-pink-500/20">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 ring-1 ring-pink-300/30 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-pink-300 group-hover:text-pink-200 transition-colors"><path d="M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-pink-300 transition-colors">Творческие</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">способности</p>
              </div>
            </div>
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
