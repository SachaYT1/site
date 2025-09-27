export default function ContactsPage() {
  return (
    <main className="py-10 sm:py-16">
      <section className="grid gap-6 sm:grid-cols-2 items-start">
        <div className="card">
          <h1 className="text-3xl font-bold heading-gradient">Контакты</h1>
          <div className="mt-4 space-y-2 text-white/90">
            <p>
              Телефон: <a className="underline" href="tel:+79919714005">+7 991 971 40 05</a>
            </p>
            <p>Город: Москва</p>
            <p>Email: <a className="underline" href="mailto:info@hiphop-shchelkovo.ru">info@hiphop-shchelkovo.ru</a></p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Как нас найти</h2>
          <p className="text-white/80">
            Адрес филиалов уточняйте по телефону — мы подскажем ближайшую площадку и расписание.
          </p>
        </div>
      </section>
    </main>
  );
}


