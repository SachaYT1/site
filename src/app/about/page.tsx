import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-10 sm:py-16">
      {/* Hero */}
      <section className="rounded-2xl p-6 sm:p-10 bg-white/5 border border-white/10 backdrop-blur">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight heading-gradient">
          Мы создаём пространство, где мечты становятся реальностью!
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl">
          Хип-хоп студия «Щелчок» — это место, где каждый ребёнок может раскрыть свой
          талант, обрести уверенность и найти друзей. Мы объединяем, вдохновляем и ведём к
          результатам через любовь к танцу.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/about_6.jpeg"
              alt="Тренировки студии — кадр 1"
              width={800}
              height={600}
              className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/about_7.jpeg"
              alt="Тренировки студии — кадр 2"
              width={800}
              height={600}
              className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/about_4.jpeg"
              alt="Тренировки студии — кадр 3"
              width={800}
              height={600}
              className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/about_1.jpeg"
              alt="Тренировки студии — кадр 4"
              width={800}
              height={600}
              className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-6">
          <a href="tel:+79333261316" className="btn-primary">📞 Записаться на пробное: +7 933 326 13 16</a>
        </div>
      </section>

      {/* Content sections */}
      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <article className="card sm:col-span-2">
          <h2 className="text-2xl font-bold heading-gradient">О нас</h2>
          <p className="mt-3 text-white/80">
            Хип-хоп студия «Щелчок» — это не просто танцевальная школа, а целая вселенная,
            где дети растут как личности и артисты. Мы создали пространство, в котором
            обучение танцу идёт рука об руку с поддержкой, уважением и дружбой.
          </p>
          <h3 className="mt-6 text-xl font-semibold">История создания</h3>
          <p className="mt-2 text-white/80">
            Наша история началась с простой идеи: дать детям место, где они смогут
            учиться танцам, развиваться и верить в себя. Сегодня «Щелчок» — это сообщество,
            которое вдохновляет и объединяет.
          </p>

          <h3 className="mt-6 text-xl font-semibold">Наша философия</h3>
          <p className="mt-2 text-white/80">
            Мы верим, что танец — это язык, который объединяет и помогает выразить себя.
            Наша миссия — не просто научить движениям, а помочь детям обрести уверенность,
            раскрыть потенциал и найти друзей.
          </p>

          <h3 className="mt-6 text-xl font-semibold">Команда профессионалов</h3>
          <p className="mt-2 text-white/80">
            Наши преподаватели — опытные хореографы и танцоры, победители и призёры
            соревнований всероссийского и международного уровня, участники известных шоу.
            Мы находим подход к каждому ученику и делаем занятия увлекательными.
          </p>
        </article>

        <aside className="card space-y-3">
          <h3 className="text-xl font-semibold">В нашей студии</h3>
          <ul className="text-white/90 space-y-2 list-disc pl-5">
            <li>Групповые занятия для командного духа</li>
            <li>Индивидуальные тренировки для техники</li>
            <li>Подготовка к концертам и фестивалям</li>
            <li>Заботливая атмосфера и поддержка</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold">Атмосфера и подход</h3>
          <ul className="text-white/90 space-y-2 list-disc pl-5">
            <li>Каждый ребёнок чувствует себя важным</li>
            <li>Здоровая, доброжелательная среда</li>
            <li>Ценность индивидуальности и творчества</li>
            <li>Развитие тела и личности</li>
          </ul>
        </aside>
      </section>

      {/* Infographic-like features */}
      <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card text-center p-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" className="text-white/90"><path d="M5 12l4 4L19 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="mt-3 text-white/80">Современные методики обучения</p>
          </div>
          <div className="card text-center p-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" className="text-white/90"><circle cx="12" cy="12" r="7" strokeWidth="1.8"/><path d="M12 5v7l4 1" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-3 text-white/80">Системный прогресс и дисциплина</p>
          </div>
          <div className="card text-center p-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" className="text-white/90"><path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeWidth="1.8"/><path d="M3 20a7 7 0 0 1 18 0" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-3 text-white/80">Командная работа и новые друзья</p>
          </div>
          <div className="card text-center p-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" className="text-white/90"><path d="M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="mt-3 text-white/80">Развитие творчества и артистизма</p>
          </div>
        </div>
      </section>

      {/* Bottom image */}
      <section className="mt-14">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/inspiration.jpeg"
            alt="Выступление учеников студии на сцене"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0b12]/40 via-transparent to-transparent" />
        </div>
      </section>
    </main>
  );
}


