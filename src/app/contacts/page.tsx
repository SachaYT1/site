export default function ContactsPage() {
  return (
    <main className="py-10 sm:py-16">
      <section className="grid gap-6 sm:grid-cols-2 items-start">
        <div className="card">
          <h1 className="text-3xl font-bold heading-gradient">Контакты</h1>
          <div className="mt-4 space-y-2 text-white/90">
            <p>
              Телефон: <a className="underline" href="tel:+79333261316">+7 933 326 13 16</a>
            </p>
            <p>Город: Москва</p>
            <p>Email: <a className="underline" href="mailto:hiphop_sсhelchok@bk.ru">hiphop_sсhelchok@bk.ru</a></p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://t.me/aa_zobova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Telegram"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              title="Telegram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white group-hover:text-accent-400 transition">
                <path fill="currentColor" d="M9.036 15.803l-.376 5.3c.538 0 .77-.231 1.047-.507l2.514-2.412 5.213 3.828c.957.528 1.64.251 1.902-.885l3.447-16.124h.001c.306-1.427-.515-1.982-1.436-1.635L1.063 9.52C-.332 10.059-.31 10.86.83 11.214l5.507 1.718L19.74 5.96c.623-.407 1.19-.182.723.224"/>
              </svg>
            </a>
            <a
              href="https://wa.me/79333261316"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть WhatsApp"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              title="WhatsApp"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 text-white group-hover:text-accent-400 transition">
                <path fill="currentColor" d="M19.11 17.74c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.53.08-.81.38-.27.3-1.06 1.04-1.06 2.53 0 1.49 1.09 2.93 1.24 3.13.15.2 2.14 3.26 5.19 4.57.73.31 1.31.49 1.76.63.74.24 1.42.21 1.96.13.6-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                <path fill="currentColor" d="M27.27 4.73A13.94 13.94 0 0016 .02C7.18.02.02 7.18.02 16c0 2.81.74 5.56 2.15 7.98L.02 32l8.23-2.12A15.9 15.9 0 0016 32c8.82 0 15.98-7.16 15.98-16 0-4.27-1.66-8.28-4.71-11.27zM16 29.3c-2.56 0-5.07-.69-7.26-2l-.52-.31-4.89 1.26 1.3-4.77-.33-.55A12.86 12.86 0 013.3 16C3.3 8.9 8.9 3.3 16 3.3S28.7 8.9 28.7 16 23.1 29.3 16 29.3z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="card">
          <h2 className="text-3xl font-bold heading-gradient">Как нас найти</h2>
          <div className="mt-4 text-white/90 space-y-2">
            <p>Адрес: Боровское шоссе 43</p>
            <p>Метро: Новопеределкино, выход 4</p>
            <p>
              <a
                className="underline text-accent-500 hover:text-accent-400 transition"
                href="https://yandex.ru/maps/-/CLq~eVPP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть на Яндекс.Картах
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


