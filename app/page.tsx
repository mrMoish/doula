'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react'

type Locale = 'ru' | 'es' | 'en'

type Copy = {
  nav: { about: string; services: string; faq: string; contact: string }
  hero: { eyebrow: string; title: string; body: string; primary: string; secondary: string; imageAlt: string }
  intro: { kicker: string; title: string; body: string; note: string; imageAlt: string }
  services: { kicker: string; title: string; intro: string; items: { number: string; title: string; text: string }[] }
  education: { kicker: string; title: string; body: string; points: string[]; note: string }
  process: { kicker: string; title: string; steps: { number: string; title: string; text: string }[]; cta: string }
  faq: { kicker: string; title: string; items: { q: string; a: string }[] }
  final: { eyebrow: string; title: string; body: string; cta: string; instagram: string }
  footer: { line: string; privacy: string }
}

const copy: Record<Locale, Copy> = {
  ru: {
    nav: { about: 'Обо мне', services: 'Сопровождение', faq: 'Вопросы', contact: 'Написать Саше' },
    hero: { eyebrow: 'БУЭНОС-АЙРЕС · АРГЕНТИНА', title: 'Рождение ребёнка — большой путь. Не обязательно проходить его одной', body: 'Бережная поддержка на русском языке во время беременности, родов и после рождения малыша — в Буэнос-Айресе.', primary: 'Познакомиться', secondary: 'Обсудить сопровождение', imageAlt: 'Мать с новорождённым у окна' },
    intro: { kicker: '01 · ОБО МНЕ', title: 'Давайте познакомимся', body: 'Меня зовут Саша. Я рядом, чтобы внимательно выслушать вас, помочь сориентироваться в новом опыте и сохранить пространство для ваших решений.', note: 'С уважением к вашему темпу, выбору и истории — без оценок и готовых сценариев.', imageAlt: 'Портрет доулы Саши Кертс' },
    services: { kicker: '02 · СОПРОВОЖДЕНИЕ', title: 'Поддержка на каждом этапе', intro: 'Формат сопровождения мы определяем вместе — в зависимости от вашей ситуации, запросов и моей текущей доступности.', items: [{ number: '01', title: 'Беременность', text: 'Разговоры, подготовка и эмоциональная опора в период ожидания малыша.' }, { number: '02', title: 'Роды', text: 'Непрерывное присутствие и поддержка ваших решений во время родов — в рамках моей роли доулы.' }, { number: '03', title: 'После рождения', text: 'Бережный переход в новую жизнь, пространство для вопросов и забота о вас после встречи с малышом.' }] },
    education: { kicker: '03 · ВАЖНО ЗНАТЬ', title: 'Беременность и роды в новой стране — с поддержкой на родном языке', body: 'Когда рядом человек, с которым можно говорить по-русски, бывает проще задавать вопросы, выражать тревоги и обсуждать личные предпочтения. В Буэнос-Айресе я могу быть внимательным собеседником и дополнительной опорой на вашем пути.', points: ['Доулa не заменяет акушера-гинеколога, акушерку, психолога или другого квалифицированного специалиста.', 'Моя поддержка — эмоциональная, информационная и практическая; медицинские решения принимаются вместе с вашей командой специалистов.', 'Каждая история индивидуальна. Мы заранее обсуждаем границы сопровождения и то, что важно именно вам.'], note: 'Общая информация не является медицинской рекомендацией.' },
    process: { kicker: '04 · КАК ЭТО ПРОИСХОДИТ', title: 'Три шага к знакомству', steps: [{ number: '01', title: 'Вы пишете', text: 'Расскажите немного о себе и о том, что сейчас важно. Можно на русском, испанском или английском.' }, { number: '02', title: 'Мы созваниваемся', text: 'Задаём вопросы друг другу и понимаем, подходит ли вам мой формат поддержки.' }, { number: '03', title: 'Договариваемся', text: 'Если наши ожидания совпадают, обсуждаем детали, границы и доступность.' }], cta: 'Написать в WhatsApp' },
    faq: { kicker: '05 · ВОПРОСЫ', title: 'То, о чём часто спрашивают', items: [{ q: 'Где вы работаете?', a: 'Я базируюсь в Буэнос-Айресе. Точную географию и формат встреч мы обсуждаем индивидуально в переписке.' }, { q: 'Сколько стоит сопровождение?', a: 'Стоимость и возможные форматы зависят от вашего запроса и моей доступности. Напишите мне, чтобы обсудить актуальные условия.' }, { q: 'Вы сопровождаете на русском языке?', a: 'Да, русский — мой основной язык общения. Также мы можем общаться на испанском или английском.' }, { q: 'Когда лучше написать?', a: 'Можно написать на любом этапе беременности или уже после рождения малыша. Я отвечу и расскажу, могу ли взять ваше сопровождение.' }] },
    final: { eyebrow: 'БУДЕМ НА СВЯЗИ', title: 'Давайте познакомимся', body: 'Вы можете написать мне, рассказать, что вас интересует, и задать вопросы о сопровождении.', cta: 'Обсудить сопровождение', instagram: 'Смотреть Instagram' },
    footer: { line: 'Поддержка беременности, родов и послеродового периода на русском языке · Buenos Aires', privacy: 'Только необходимая переписка — без форм и лишних данных.' },
  },
  es: {
    nav: { about: 'Sobre mí', services: 'Acompañamiento', faq: 'Preguntas', contact: 'Escribirle a Sasha' },
    hero: { eyebrow: 'BUENOS AIRES · ARGENTINA', title: 'Nacer es un gran viaje. No tenés que atravesarlo sola', body: 'Acompañamiento cálido en ruso durante el embarazo, el parto y el posparto, en Buenos Aires.', primary: 'Conoceme', secondary: 'Hablemos del acompañamiento', imageAlt: 'Madre con su bebé recién nacido junto a una ventana' },
    intro: { kicker: '01 · SOBRE MÍ', title: 'Conozcámonos', body: 'Soy Sasha. Estoy para escucharte con atención, acompañarte a orientarte en una experiencia nueva y cuidar el espacio para tus decisiones.', note: 'Con respeto por tus tiempos, tus elecciones y tu historia — sin juicios ni guiones predeterminados.', imageAlt: 'Retrato de Sasha Kerts, doula' },
    services: { kicker: '02 · ACOMPAÑAMIENTO', title: 'Apoyo en cada etapa', intro: 'Definimos el formato juntas, según tu situación, tus necesidades y mi disponibilidad actual.', items: [{ number: '01', title: 'Embarazo', text: 'Conversaciones, preparación y apoyo emocional durante la espera.' }, { number: '02', title: 'Parto', text: 'Presencia continua y apoyo a tus decisiones durante el parto, dentro de mi rol como doula.' }, { number: '03', title: 'Posparto', text: 'Un pasaje cuidado a la nueva vida, espacio para preguntas y apoyo después de la llegada de tu bebé.' }] },
    education: { kicker: '03 · PARA SABER', title: 'Embarazo y parto en un país nuevo, con apoyo en tu idioma', body: 'Cuando podés hablar en tu idioma, puede ser más fácil hacer preguntas, expresar preocupaciones y conversar sobre tus preferencias. En Buenos Aires, puedo ser una escucha atenta y un apoyo adicional en tu camino.', points: ['Una doula no reemplaza a tu obstetra, partera, psicóloga ni a ningún otro profesional calificado.', 'Mi apoyo es emocional, informativo y práctico; las decisiones médicas se toman con tu equipo de profesionales.', 'Cada historia es única. Conversamos de antemano sobre los límites del acompañamiento y lo que es importante para vos.'], note: 'La información general no constituye consejo médico.' },
    process: { kicker: '04 · CÓMO FUNCIONA', title: 'Tres pasos para conocernos', steps: [{ number: '01', title: 'Me escribís', text: 'Contame un poco sobre vos y qué necesitás hoy. Podemos hablar en ruso, español o inglés.' }, { number: '02', title: 'Conversamos', text: 'Nos hacemos preguntas y vemos si mi forma de acompañar es adecuada para vos.' }, { number: '03', title: 'Acordamos', text: 'Si hay sintonía, conversamos los detalles, los límites y la disponibilidad.' }], cta: 'Escribirme por WhatsApp' },
    faq: { kicker: '05 · PREGUNTAS', title: 'Lo que suelen preguntar', items: [{ q: '¿Dónde trabajás?', a: 'Estoy en Buenos Aires. La zona exacta y el formato de los encuentros los conversamos de manera individual.' }, { q: '¿Cuánto cuesta el acompañamiento?', a: 'El valor y los formatos posibles dependen de tu consulta y de mi disponibilidad. Escribime para conocer las condiciones actuales.' }, { q: '¿Acompañás en ruso?', a: 'Sí, el ruso es mi idioma principal de comunicación. También podemos conversar en español o inglés.' }, { q: '¿Cuándo es mejor escribirte?', a: 'Podés escribirme en cualquier momento del embarazo o después del nacimiento. Te voy a responder y contarte si puedo acompañarte.' }] },
    final: { eyebrow: 'HABLEMOS', title: 'Conozcámonos', body: 'Podés escribirme, contarme qué te interesa y hacerme tus preguntas sobre el acompañamiento.', cta: 'Hablemos del acompañamiento', instagram: 'Ver Instagram' },
    footer: { line: 'Acompañamiento durante el embarazo, parto y posparto en ruso · Buenos Aires', privacy: 'Solo la conversación necesaria — sin formularios ni datos de más.' },
  },
  en: {
    nav: { about: 'About', services: 'Support', faq: 'Questions', contact: 'Write to Sasha' },
    hero: { eyebrow: 'BUENOS AIRES · ARGENTINA', title: 'Birth is a big journey. You do not have to walk it alone', body: 'Gentle Russian-language support through pregnancy, birth and the early postpartum season in Buenos Aires.', primary: 'Meet Sasha', secondary: 'Talk about support', imageAlt: 'Mother holding her newborn beside a window' },
    intro: { kicker: '01 · ABOUT', title: 'Let’s get to know each other', body: 'I’m Sasha. I’m here to listen closely, help you find your bearings in a new experience and make room for your own decisions.', note: 'With respect for your pace, your choices and your story — without judgement or a ready-made script.', imageAlt: 'Portrait of doula Sasha Kerts' },
    services: { kicker: '02 · SUPPORT', title: 'Support at every stage', intro: 'We shape the format together, based on your situation, what you need and my current availability.', items: [{ number: '01', title: 'Pregnancy', text: 'Conversations, preparation and emotional support while you wait to meet your baby.' }, { number: '02', title: 'Birth', text: 'Continuous presence and support for your decisions during birth, within my role as a doula.' }, { number: '03', title: 'Postpartum', text: 'A cared-for transition into new life, room for questions and support after your baby arrives.' }] },
    education: { kicker: '03 · GOOD TO KNOW', title: 'Pregnancy and birth in a new country, with support in your own language', body: 'Speaking in your own language can make it easier to ask questions, express concerns and talk through personal preferences. In Buenos Aires, I can offer an attentive conversation and an additional layer of support on your journey.', points: ['A doula does not replace your obstetrician, midwife, psychologist or any other qualified professional.', 'My support is emotional, informational and practical; medical decisions belong with your professional care team.', 'Every story is different. We discuss the boundaries of support and what matters to you in advance.'], note: 'General information is not medical advice.' },
    process: { kicker: '04 · THE PROCESS', title: 'Three steps to meeting', steps: [{ number: '01', title: 'You write', text: 'Tell me a little about yourself and what matters right now. Russian, Spanish or English are all welcome.' }, { number: '02', title: 'We talk', text: 'We ask each other questions and see whether my way of supporting feels right for you.' }, { number: '03', title: 'We agree', text: 'If it feels like a fit, we discuss the details, boundaries and availability.' }], cta: 'Message on WhatsApp' },
    faq: { kicker: '05 · QUESTIONS', title: 'Questions that come up often', items: [{ q: 'Where do you work?', a: 'I am based in Buenos Aires. We can discuss the exact area and meeting format individually.' }, { q: 'How much does support cost?', a: 'Pricing and possible formats depend on your request and my availability. Write to me to discuss current options.' }, { q: 'Do you support in Russian?', a: 'Yes, Russian is my primary language. We can also communicate in Spanish or English.' }, { q: 'When is the best time to write?', a: 'You can write at any point during pregnancy or after your baby is born. I will reply and let you know whether I can support you.' }] },
    final: { eyebrow: 'LET’S CONNECT', title: 'Let’s get to know each other', body: 'Write to me, tell me what you are looking for and ask any questions about support.', cta: 'Talk about support', instagram: 'See Instagram' },
    footer: { line: 'Russian-language pregnancy, birth and postpartum support · Buenos Aires', privacy: 'Only the conversation we need — no forms or unnecessary data.' },
  },
}

const whatsappMessages: Record<Locale, string> = {
  ru: 'Добрый день, хочу записаться на консультацию.',
  es: 'Hola, Sasha. Buen día, quisiera coordinar una consulta.',
  en: "Hello, Sasha. Good afternoon, I'd like to book a consultation.",
}
const whatsappPhone = '5491132849594'
const whatsappUrl = (locale: Locale) =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessages[locale])}`
const telegramUrl = 'https://t.me/kertsasha'

export default function Page() {
  const [locale, setLocale] = useState<Locale>('ru')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const t = copy[locale]

  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sasha Kerts home">sasha<span>kerts</span></a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main navigation">
          <button onClick={() => goTo('about')}>{t.nav.about}</button>
          <button onClick={() => goTo('services')}>{t.nav.services}</button>
          <button onClick={() => goTo('faq')}>{t.nav.faq}</button>
          <a className="nav-contact" href={whatsappUrl(locale)} target="_blank" rel="noreferrer">{t.nav.contact} <ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Language selector">
            {(['ru', 'es', 'en'] as Locale[]).map((item) => <button key={item} className={locale === item ? 'active' : ''} onClick={() => setLocale(item)} aria-pressed={locale === item}>{item.toUpperCase()}</button>)}
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="hero-body">{t.hero.body}</p><div className="button-row"><button className="button button-dark" onClick={() => goTo('about')}>{t.hero.primary} <ArrowUpRight size={16} /></button><a className="text-link" href={whatsappUrl(locale)} target="_blank" rel="noreferrer">{t.hero.secondary} <ArrowUpRight size={16} /></a></div></div>
        <div className="hero-image"><Image src="/images/sasha-hero.png" alt={t.hero.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 54vw" /></div>
        <span className="hero-index">01 / 07</span>
      </section>

      <section className="intro section-grid" id="about"><div className="section-label"><span>{t.intro.kicker}</span></div><div className="portrait-frame"><Image src="/images/sasha-portrait.png" alt={t.intro.imageAlt} fill sizes="(max-width: 768px) 88vw, 38vw" /></div><div className="intro-copy"><h2>{t.intro.title}</h2><p>{t.intro.body}</p><p className="italic-note">{t.intro.note}</p></div></section>

      <section className="services section-pad" id="services"><div className="section-heading"><p className="eyebrow">{t.services.kicker}</p><h2>{t.services.title}</h2><p>{t.services.intro}</p></div><div className="service-grid">{t.services.items.map((item) => <article className="service-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-line" /></article>)}</div></section>

      <section className="education"><div className="education-inner"><div><p className="eyebrow">{t.education.kicker}</p><h2>{t.education.title}</h2></div><div className="education-copy"><p className="lead">{t.education.body}</p><ul>{t.education.points.map((point) => <li key={point}><span>✦</span>{point}</li>)}</ul><p className="disclaimer">{t.education.note}</p></div></div></section>

      <section className="process section-pad"><div className="section-heading process-heading"><p className="eyebrow">{t.process.kicker}</p><h2>{t.process.title}</h2></div><div className="steps-grid">{t.process.steps.map((step) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div><a className="button button-outline" href={whatsappUrl(locale)} target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.process.cta}</a></section>

      <section className="faq section-pad" id="faq"><div className="faq-title"><p className="eyebrow">{t.faq.kicker}</p><h2>{t.faq.title}</h2></div><div className="faq-list">{t.faq.items.map((item, index) => <div className="faq-item" key={item.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{item.q}</span>{openFaq === index ? <X size={18} /> : <ChevronDown size={18} />}</button>{openFaq === index && <p>{item.a}</p>}</div>)}</div></section>

      <section className="final-cta"><div><p className="eyebrow">{t.final.eyebrow}</p><h2>{t.final.title}</h2><p>{t.final.body}</p><div className="button-row"><a className="button button-light" href={whatsappUrl(locale)} target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.final.cta}</a><a className="instagram-link" href="https://www.instagram.com/kertsasha/" target="_blank" rel="noreferrer">{t.final.instagram} <ArrowUpRight size={16} /></a><a className="contact-link" href={telegramUrl} target="_blank" rel="noopener noreferrer">Telegram · @kertsasha <ArrowUpRight size={16} /></a></div></div><span className="final-mark">SK</span></section>

      <footer className="site-footer"><div><a className="wordmark footer-mark" href="#top">sasha<span>kerts</span></a><p>{t.footer.line}</p></div><div className="footer-right"><a href="https://www.instagram.com/kertsasha/" target="_blank" rel="noreferrer">Instagram</a><br /><a href={telegramUrl} target="_blank" rel="noopener noreferrer">Telegram · @kertsasha</a><p>{t.footer.privacy}</p></div></footer>
    </main>
  )
}

// Content is intentionally centralized here so Sasha can verify service details and update translations without duplicating page layouts.
// Images in public/images are replaceable assets; see README.md for the asset workflow.


