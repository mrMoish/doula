'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Camera, ChevronDown, Menu, Send, X } from 'lucide-react'

type Locale = 'ru' | 'es' | 'en'

type Copy = {
  nav: { about: string; services: string; pricing: string; faq: string; contact: string }
  hero: { eyebrow: string; title: string; subtitle: string; body: string; primary: string; secondary: string; imageAlt: string }
  intro: { kicker: string; title: string; body: string; note: string; imageAlt: string }
  services: { kicker: string; title: string; intro: string; items: { number: string; title: string; text: string }[] }
  pricing: { kicker: string; title: string; intro: string; currency: string; items: { number: string; title: string; price: string; value: number }[] }
  education: { kicker: string; title: string; body: string; points: string[]; note: string }
  process: { kicker: string; title: string; steps: { number: string; title: string; text: string }[]; cta: string }
  faq: { kicker: string; title: string; items: { q: string; a: string }[] }
  final: { eyebrow: string; title: string; body: string; cta: string; instagram: string }
  footer: { line: string }
}

const copy: Record<Locale, Copy> = {
  ru: {
    nav: { about: 'Обо мне', services: 'Сопровождение', pricing: 'Цены', faq: 'Вопросы', contact: 'Написать Саше' },
    hero: { eyebrow: 'БУЭНОС-АЙРЕС · АРГЕНТИНА', title: 'Русскоязычная доула в Буэнос-Айресе — сопровождение беременности и родов', subtitle: 'Рождение ребёнка — большой путь. Не обязательно проходить его одной', body: 'Бережная поддержка от русскоязычной доулы во время беременности, родов и после рождения малыша — в Буэнос-Айресе.', primary: 'Познакомиться', secondary: 'Обсудить сопровождение', imageAlt: 'Мать с новорождённым у окна' },
    intro: { kicker: '01 · ОБО МНЕ', title: 'Давайте познакомимся', body: 'Меня зовут Саша. Я рядом, чтобы внимательно выслушать вас, помочь сориентироваться в новом опыте и сохранить пространство для ваших решений.', note: 'С уважением к вашему темпу, выбору и истории — без оценок и готовых сценариев.', imageAlt: 'Саша в синей форме и голубой шапочке' },
    services: { kicker: '02 · СОПРОВОЖДЕНИЕ', title: 'Поддержка на каждом этапе', intro: 'Формат сопровождения мы определяем вместе — в зависимости от вашей ситуации, запросов и моей текущей доступности.', items: [{ number: '01', title: 'Беременность', text: 'Разговоры, подготовка и эмоциональная опора в период ожидания малыша.' }, { number: '02', title: 'Роды', text: 'Непрерывное присутствие и поддержка ваших решений во время родов — в рамках моей роли доулы.' }, { number: '03', title: 'После рождения', text: 'Бережный переход в новую жизнь, пространство для вопросов и забота о вас после встречи с малышом.' }] },
    pricing: { kicker: '03 · ЦЕНЫ', title: 'Стоимость услуг', intro: 'Цены указаны в долларах США.', currency: 'USD', items: [{ number: '01', title: 'Сопровождение родов', price: '$300', value: 300 }, { number: '02', title: 'Приём у врача', price: '$20', value: 20 }] },
    education: { kicker: '04 · ВАЖНО ЗНАТЬ', title: 'Беременность и роды в новой стране — с поддержкой на родном языке', body: 'Когда рядом человек, с которым можно говорить по-русски, бывает проще задавать вопросы, выражать тревоги и обсуждать личные предпочтения. В Буэнос-Айресе я могу быть внимательным собеседником и дополнительной опорой на вашем пути.', points: ['Доула не заменяет акушера-гинеколога, акушерку, психолога или другого квалифицированного специалиста.', 'Моя поддержка — эмоциональная, информационная и практическая; медицинские решения принимаются вместе с вашей командой специалистов.', 'Каждая история индивидуальна. Мы заранее обсуждаем границы сопровождения и то, что важно именно вам.'], note: 'Общая информация не является медицинской рекомендацией.' },
    process: { kicker: '05 · КАК ЭТО ПРОИСХОДИТ', title: 'Три шага к знакомству', steps: [{ number: '01', title: 'Вы пишете', text: 'Расскажите немного о себе и о том, что сейчас важно. Можно на русском или испанском.' }, { number: '02', title: 'Мы созваниваемся', text: 'Задаём вопросы друг другу и понимаем, подходит ли вам мой формат поддержки.' }, { number: '03', title: 'Договариваемся', text: 'Если наши ожидания совпадают, обсуждаем детали, границы и доступность.' }], cta: 'Написать в WhatsApp' },
    faq: { kicker: '06 · ВОПРОСЫ', title: 'То, о чём часто спрашивают', items: [{ q: 'Где вы работаете?', a: 'Я базируюсь в Буэнос-Айресе. Точную географию и формат встреч мы обсуждаем индивидуально в переписке.' }, { q: 'Сколько стоит сопровождение?', a: 'Сопровождение родов — $300, приём у врача — $20. Цены указаны в долларах США.' }, { q: 'Вы сопровождаете на русском языке?', a: 'Да, русский — мой основной язык общения. Также мы можем общаться на испанском.' }, { q: 'Когда лучше написать?', a: 'Можно написать на любом этапе беременности или уже после рождения малыша. Я отвечу и расскажу, могу ли взять ваше сопровождение.' }, { q: 'Где найти русскоязычную доулу в Буэнос-Айресе?', a: 'Саша Кертс — доула в Буэнос-Айресе, Аргентина. Она предлагает поддержку во время беременности, родов и после рождения ребёнка на русском языке. Чтобы обсудить формат и доступность, напишите Саше в WhatsApp через этот сайт.' }, { q: 'Как доула помогает во время беременности?', a: 'Саша предлагает разговоры, подготовку и эмоциональную поддержку в ожидании малыша. Можно обсудить вопросы, тревоги и личные предпочтения. Формат сопровождения согласовывается индивидуально.' }, { q: 'Какую поддержку можно получить во время родов?', a: 'В рамках роли доулы Саша может быть рядом во время родов, поддерживать эмоционально и практически, помогать сохранять пространство для ваших решений. Медицинские вопросы решаются вместе с квалифицированными специалистами.' }, { q: 'Можно ли обратиться к доуле после родов?', a: 'Да. Саша предлагает бережную поддержку после рождения малыша: пространство для вопросов, разговоров и адаптации к новому этапу. Формат и доступность обсуждаются индивидуально.' }, { q: 'Заменяет ли доула врача или акушерку?', a: 'Нет. Доула не ставит диагнозы, не назначает лечение и не принимает медицинские решения. Её роль — эмоциональная, информационная и практическая поддержка наряду с медицинской помощью.' }] },
    final: { eyebrow: 'БУДЕМ НА СВЯЗИ', title: 'Давайте познакомимся', body: 'Вы можете написать мне, рассказать, что вас интересует, и задать вопросы о сопровождении.', cta: 'Обсудить сопровождение', instagram: 'Смотреть Instagram' },
    footer: { line: 'Поддержка беременности, родов и послеродового периода на русском языке · Buenos Aires' },
  },
  es: {
    nav: { about: 'Sobre mí', services: 'Acompañamiento', pricing: 'Precios', faq: 'Preguntas', contact: 'Escribirle a Sasha' },
    hero: { eyebrow: 'BUENOS AIRES · ARGENTINA', title: 'Doula de habla rusa en Buenos Aires — acompañamiento durante el embarazo y el parto', subtitle: 'Nacer es un gran viaje. No tenés que atravesarlo sola', body: 'Acompañamiento cálido de una doula que habla ruso durante el embarazo, el parto y el posparto, en Buenos Aires.', primary: 'Conoceme', secondary: 'Hablemos del acompañamiento', imageAlt: 'Madre con su bebé recién nacido junto a una ventana' },
    intro: { kicker: '01 · SOBRE MÍ', title: 'Conozcámonos', body: 'Soy Sasha. Estoy para escucharte con atención, acompañarte a orientarte en una experiencia nueva y cuidar el espacio para tus decisiones.', note: 'Con respeto por tus tiempos, tus elecciones y tu historia — sin juicios ni guiones predeterminados.', imageAlt: 'Sasha con uniforme azul y gorro celeste' },
    services: { kicker: '02 · ACOMPAÑAMIENTO', title: 'Apoyo en cada etapa', intro: 'Definimos el formato juntas, según tu situación, tus necesidades y mi disponibilidad actual.', items: [{ number: '01', title: 'Embarazo', text: 'Conversaciones, preparación y apoyo emocional durante la espera.' }, { number: '02', title: 'Parto', text: 'Presencia continua y apoyo a tus decisiones durante el parto, dentro de mi rol como doula.' }, { number: '03', title: 'Posparto', text: 'Un pasaje cuidado a la nueva vida, espacio para preguntas y apoyo después de la llegada de tu bebé.' }] },
    pricing: { kicker: '03 · PRECIOS', title: 'Precios claros', intro: 'Los precios están expresados en dólares estadounidenses.', currency: 'USD', items: [{ number: '01', title: 'Acompañamiento durante el parto', price: '$300', value: 300 }, { number: '02', title: 'Consulta con un médico', price: '$20', value: 20 }] },
    education: { kicker: '04 · PARA SABER', title: 'Embarazo y parto en un país nuevo, con apoyo en tu idioma', body: 'Cuando podés hablar en tu idioma, puede ser más fácil hacer preguntas, expresar preocupaciones y conversar sobre tus preferencias. En Buenos Aires, puedo ser una escucha atenta y un apoyo adicional en tu camino.', points: ['Una doula no reemplaza a tu obstetra, partera, psicóloga ni a ningún otro profesional calificado.', 'Mi apoyo es emocional, informativo y práctico; las decisiones médicas se toman con tu equipo de profesionales.', 'Cada historia es única. Conversamos de antemano sobre los límites del acompañamiento y lo que es importante para vos.'], note: 'La información general no constituye consejo médico.' },
    process: { kicker: '05 · CÓMO FUNCIONA', title: 'Tres pasos para conocernos', steps: [{ number: '01', title: 'Me escribís', text: 'Contame un poco sobre vos y qué necesitás hoy. Podemos hablar en ruso o español.' }, { number: '02', title: 'Conversamos', text: 'Nos hacemos preguntas y vemos si mi forma de acompañar es adecuada para vos.' }, { number: '03', title: 'Acordamos', text: 'Si hay sintonía, conversamos los detalles, los límites y la disponibilidad.' }], cta: 'Escribirme por WhatsApp' },
    faq: { kicker: '06 · PREGUNTAS', title: 'Lo que suelen preguntar', items: [{ q: '¿Dónde trabajás?', a: 'Estoy en Buenos Aires. La zona exacta y el formato de los encuentros los conversamos de manera individual.' }, { q: '¿Cuánto cuesta el acompañamiento?', a: 'El acompañamiento durante el parto cuesta $300 y la consulta con un médico, $20. Los precios están expresados en dólares estadounidenses.' }, { q: '¿Acompañás en ruso?', a: 'Sí, el ruso es mi idioma principal de comunicación. También podemos conversar en español.' }, { q: '¿Cuándo es mejor escribirte?', a: 'Podés escribirme en cualquier momento del embarazo o después del nacimiento. Te voy a responder y contarte si puedo acompañarte.' }, { q: '¿Dónde encontrar una doula de habla rusa en Buenos Aires?', a: 'Sasha Kerts es una doula en Buenos Aires, Argentina. Ofrece acompañamiento durante el embarazo, el parto y el posparto en ruso. Para conversar sobre el formato y su disponibilidad, podés escribirle por WhatsApp desde este sitio.' }, { q: '¿Cómo acompaña una doula durante el embarazo?', a: 'Sasha ofrece conversaciones, preparación y apoyo emocional durante la espera. Podés hablar de tus dudas, inquietudes y preferencias. El formato del acompañamiento se acuerda de manera individual.' }, { q: '¿Qué apoyo ofrece una doula durante el parto?', a: 'Dentro de su rol como doula, Sasha puede acompañarte durante el parto con presencia, apoyo emocional y práctico, y respeto por tus decisiones. Las cuestiones médicas se resuelven junto a profesionales calificados.' }, { q: '¿Puedo contactar a una doula después del parto?', a: 'Sí. Sasha ofrece apoyo respetuoso después del nacimiento: un espacio para hacer preguntas, conversar y adaptarte a esta nueva etapa. El formato y la disponibilidad se conversan individualmente.' }, { q: '¿Una doula reemplaza a la médica o a la partera?', a: 'No. Una doula no diagnostica, no indica tratamientos ni toma decisiones médicas. Su función es ofrecer apoyo emocional, informativo y práctico como complemento de la atención médica.' }] },
    final: { eyebrow: 'HABLEMOS', title: 'Conozcámonos', body: 'Podés escribirme, contarme qué te interesa y hacerme tus preguntas sobre el acompañamiento.', cta: 'Hablemos del acompañamiento', instagram: 'Ver Instagram' },
    footer: { line: 'Acompañamiento durante el embarazo, parto y posparto en ruso · Buenos Aires' },
  },
  en: {
    nav: { about: 'About', services: 'Support', pricing: 'Prices', faq: 'Questions', contact: 'Write to Sasha' },
    hero: { eyebrow: 'BUENOS AIRES · ARGENTINA', title: 'Russian-speaking doula in Buenos Aires — pregnancy and birth support', subtitle: 'Birth is a big journey. You do not have to walk it alone', body: 'Gentle support from a Russian-speaking doula through pregnancy, birth and postpartum in Buenos Aires.', primary: 'Meet Sasha', secondary: 'Talk about support', imageAlt: 'Mother holding her newborn beside a window' },
    intro: { kicker: '01 · ABOUT', title: 'Let’s get to know each other', body: 'I’m Sasha. I’m here to listen closely, help you find your bearings in a new experience and make room for your own decisions.', note: 'With respect for your pace, your choices and your story — without judgement or a ready-made script.', imageAlt: 'Sasha wearing blue scrubs and a light blue cap' },
    services: { kicker: '02 · SUPPORT', title: 'Support at every stage', intro: 'We shape the format together, based on your situation, what you need and my current availability.', items: [{ number: '01', title: 'Pregnancy', text: 'Conversations, preparation and emotional support while you wait to meet your baby.' }, { number: '02', title: 'Birth', text: 'Continuous presence and support for your decisions during birth, within my role as a doula.' }, { number: '03', title: 'Postpartum', text: 'A cared-for transition into new life, room for questions and support after your baby arrives.' }] },
    pricing: { kicker: '03 · PRICING', title: 'Clear pricing', intro: 'Prices are listed in US dollars.', currency: 'USD', items: [{ number: '01', title: 'Birth support', price: '$300', value: 300 }, { number: '02', title: 'Doctor appointment', price: '$20', value: 20 }] },
    education: { kicker: '04 · GOOD TO KNOW', title: 'Pregnancy and birth in a new country, with support in your own language', body: 'Speaking in your own language can make it easier to ask questions, express concerns and talk through personal preferences. In Buenos Aires, I can offer an attentive conversation and an additional layer of support on your journey.', points: ['A doula does not replace your obstetrician, midwife, psychologist or any other qualified professional.', 'My support is emotional, informational and practical; medical decisions belong with your professional care team.', 'Every story is different. We discuss the boundaries of support and what matters to you in advance.'], note: 'General information is not medical advice.' },
    process: { kicker: '05 · THE PROCESS', title: 'Three steps to meeting', steps: [{ number: '01', title: 'You write', text: 'Tell me a little about yourself and what matters right now. You can write in Russian or Spanish.' }, { number: '02', title: 'We talk', text: 'We ask each other questions and see whether my way of supporting feels right for you.' }, { number: '03', title: 'We agree', text: 'If it feels like a fit, we discuss the details, boundaries and availability.' }], cta: 'Message on WhatsApp' },
    faq: { kicker: '06 · QUESTIONS', title: 'Questions that come up often', items: [{ q: 'Where do you work?', a: 'I am based in Buenos Aires. We can discuss the exact area and meeting format individually.' }, { q: 'How much does support cost?', a: 'Birth support is $300, and a doctor appointment is $20. Prices are listed in US dollars.' }, { q: 'Do you support in Russian?', a: 'Yes, Russian is my primary language. We can also communicate in Spanish.' }, { q: 'When is the best time to write?', a: 'You can write at any point during pregnancy or after your baby is born. I will reply and let you know whether I can support you.' }, { q: 'Where can I find a Russian-speaking doula in Buenos Aires?', a: 'Sasha Kerts is a doula based in Buenos Aires, Argentina. She offers pregnancy, birth and postpartum support in Russian and can also communicate in Spanish. Contact her via WhatsApp on this website to discuss options and availability.' }, { q: 'How can a doula help during pregnancy?', a: 'Sasha offers conversations, preparation and emotional support while you are expecting. You can discuss questions, concerns and personal preferences. The form of support is agreed individually.' }, { q: 'What support can a doula provide during birth?', a: 'Within her role as a doula, Sasha can offer presence, emotional and practical support during birth while respecting your decisions. Medical matters are handled together with qualified healthcare professionals.' }, { q: 'Can I contact a doula after giving birth?', a: 'Yes. Sasha offers gentle postpartum support: space for questions, conversations and adjusting to a new stage of life. The format and availability are discussed individually.' }, { q: 'Does a doula replace a doctor or midwife?', a: 'No. A doula does not diagnose conditions, prescribe treatment or make medical decisions. Her role is to provide emotional, informational and practical support alongside medical care.' }] },
    final: { eyebrow: 'LET’S CONNECT', title: 'Let’s get to know each other', body: 'Write to me, tell me what you are looking for and ask any questions about support.', cta: 'Talk about support', instagram: 'See Instagram' },
    footer: { line: 'Russian-language pregnancy, birth and postpartum support · Buenos Aires' },
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
const portraitImageSrc = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0980-YpA6BVQaYkgR46UW0ZIgJs8T9XpGfv.jpeg'
const telegramUrl = 'https://t.me/kertsasha'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>('ru')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[locale]

  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sasha Kerts home">sasha<span>kerts</span></a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main navigation">
          <button onClick={() => goTo('about')}>{t.nav.about}</button>
          <button onClick={() => goTo('services')}>{t.nav.services}</button>
          <button onClick={() => goTo('pricing')}>{t.nav.pricing}</button>
          <button onClick={() => goTo('faq')}>{t.nav.faq}</button>
          <a className="nav-contact" href={whatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp · ${t.nav.contact}`}><WhatsAppIcon size={15} /><span>{t.nav.contact}</span><ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Language selector">
            {(['ru', 'es', 'en'] as Locale[]).map((item) => <button key={item} className={locale === item ? 'active' : ''} onClick={() => setLocale(item)} aria-pressed={locale === item}>{item.toUpperCase()}</button>)}
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="hero-subtitle">{t.hero.subtitle}</p><p className="hero-body">{t.hero.body}</p><div className="button-row"><button className="button button-dark" onClick={() => goTo('about')}>{t.hero.primary} <ArrowUpRight size={16} /></button><a className="text-link" href={whatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp · ${t.hero.secondary}`}><WhatsAppIcon size={16} /><span>{t.hero.secondary}</span><ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        <div className="hero-image"><Image src="/images/sasha-hero.png" alt={t.hero.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 54vw" /></div>
        <span className="hero-index">01 / 08</span>
      </section>

      <section className="intro section-grid" id="about"><div className="section-label"><span>{t.intro.kicker}</span></div><div className="portrait-frame"><Image src={portraitImageSrc} alt={t.intro.imageAlt} fill sizes="(max-width: 768px) 88vw, 38vw" /></div><div className="intro-copy"><h2>{t.intro.title}</h2><p>{t.intro.body}</p><p className="italic-note">{t.intro.note}</p></div></section>

      <section className="services section-pad" id="services"><div className="section-heading"><p className="eyebrow">{t.services.kicker}</p><h2>{t.services.title}</h2><p>{t.services.intro}</p></div><div className="service-grid">{t.services.items.map((item) => <article className="service-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-line" /></article>)}</div></section>

      <section className="pricing section-pad" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">{t.pricing.kicker}</p>
          <h2>{t.pricing.title}</h2>
          <p>{t.pricing.intro}</p>
        </div>
        <div className="pricing-grid">
          {t.pricing.items.map((item) => (
            <article className="pricing-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p className="pricing-amount">
                <data value={item.value}>{item.price}</data>
                <span>{t.pricing.currency}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="education"><div className="education-inner"><div><p className="eyebrow">{t.education.kicker}</p><h2>{t.education.title}</h2></div><div className="education-copy"><p className="lead">{t.education.body}</p><ul>{t.education.points.map((point) => <li key={point}><span>✦</span>{point}</li>)}</ul><p className="disclaimer">{t.education.note}</p></div></div></section>

      <section className="process section-pad"><div className="section-heading process-heading"><p className="eyebrow">{t.process.kicker}</p><h2>{t.process.title}</h2></div><div className="steps-grid">{t.process.steps.map((step) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div><a className="button button-outline" href={whatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp · ${t.process.cta}`}><WhatsAppIcon size={17} />{t.process.cta}</a></section>

      <section className="faq section-pad" id="faq"><div className="faq-title"><p className="eyebrow">{t.faq.kicker}</p><h2>{t.faq.title}</h2></div><div className="faq-list">{t.faq.items.map((item) => <details className="faq-item" key={item.q}><summary><span>{item.q}</span><ChevronDown size={18} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></section>

      <section className="final-cta"><div><p className="eyebrow">{t.final.eyebrow}</p><h2>{t.final.title}</h2><p>{t.final.body}</p><div className="contact-actions"><a className="contact-action contact-action--whatsapp" href={whatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp · ${t.final.cta}`}><WhatsAppIcon size={18} /><span>{t.final.cta}</span><ArrowUpRight size={15} aria-hidden="true" /></a><a className="contact-action contact-action--telegram" href={telegramUrl} target="_blank" rel="noopener noreferrer"><Send size={16} aria-hidden="true" /><span>Telegram · @kertsasha</span><ArrowUpRight size={15} aria-hidden="true" /></a><a className="contact-action contact-action--instagram" href="https://www.instagram.com/kertsasha/" target="_blank" rel="noopener noreferrer"><Camera size={16} aria-hidden="true" /><span>{t.final.instagram}</span><ArrowUpRight size={15} aria-hidden="true" /></a></div></div><span className="final-mark">SK</span></section>

      <footer className="site-footer"><div><a className="wordmark footer-mark" href="#top">sasha<span>kerts</span></a><p>{t.footer.line}</p></div></footer>
    </main>
  )
}

// Content is intentionally centralized here so Sasha can verify service details and update translations without duplicating page layouts.
// Images in public/images are replaceable assets; see README.md for the asset workflow.


