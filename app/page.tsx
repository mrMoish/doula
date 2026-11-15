'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
    hero: {"eyebrow":"САША КЕРТ · БУЭНОС-АЙРЕС","title":"Русскоязычная доула в Буэнос-Айресе","subtitle":"Рождение ребёнка — большой путь. Не обязательно проходить его одной","body":"Я сопровождаю женщин во время беременности и родов. Со мной можно говорить по-русски или по-испански. Если хотите узнать, как проходит сопровождение, напишите мне.","primary":"Познакомиться","secondary":"Обсудить роды","imageAlt":"Мама держит новорождённого у окна"},
    intro: {"kicker":"01 · ОБО МНЕ","title":"Меня зовут Саша Керт","body":"Я доула, работаю в Буэнос-Айресе. Ко мне обращаются, когда хочется заранее обсудить роды и познакомиться с человеком, который может быть рядом в этот день. Мы поговорим о ваших вопросах и о том, какой помощи вы ждёте.","note":"Начать можно с обычного разговора. Без обязательства сразу принимать решение.","imageAlt":"Саша Керт в медицинской форме и голубой шапочке"},
    services: {"kicker":"02 · СОПРОВОЖДЕНИЕ","title":"Помощь во время беременности и родов","intro":"У каждой женщины свои вопросы о предстоящих родах. Сначала мы познакомимся, а затем обсудим, какой формат сопровождения вам подходит.","items":[{"number":"01","title":"Во время беременности","text":"Поговорим о том, как вы представляете роды, что вас беспокоит и какие вопросы хочется задать врачу. Подготовимся к встрече с малышом в удобном вам темпе."},{"number":"02","title":"Во время родов","text":"Я могу находиться рядом, поддерживать вас и помогать донести ваши пожелания до команды. За медицинскую помощь отвечают врач и акушерка."}]},
    pricing: { kicker: '03 · ЦЕНЫ', title: 'Стоимость услуг', intro: 'Цены указаны в долларах США.', currency: 'USD', items: [{ number: '01', title: 'Сопровождение родов', price: '$300', value: 300 }, { number: '02', title: 'Приём у врача', price: '$20', value: 20 }] },
    education: {"kicker":"04 · РОЛЬ ДОУЛЫ","title":"Что делает доула на родах","body":"Когда предстоят роды в другой стране, вопросов обычно много. Иногда проще сначала обсудить их на русском, чтобы понять, что именно хочется спросить у медицинской команды. Я могу выслушать вас и помочь подготовиться к этому разговору.","points":["Моя роль — подготовка и немедицинская поддержка во время беременности и родов.","Я не ставлю диагнозы и не назначаю лечение. Медицинские решения вы обсуждаете с врачом и акушеркой."],"note":"Информация на сайте не заменяет консультацию врача."},
    process: {"kicker":"05 · ЗНАКОМСТВО","title":"Как мы договоримся","steps":[{"number":"01","title":"Напишите мне","text":"Расскажите в WhatsApp, на каком вы сроке и что хотели бы узнать. Можно по-русски или по-испански."},{"number":"02","title":"Созвонимся","text":"Обсудим ваши ожидания от родов. Вы сможете задать любые вопросы о том, как я работаю."},{"number":"03","title":"Уточним детали","text":"Если решим работать вместе, обсудим доступность, условия и стоимость сопровождения."}],"cta":"Написать Саше в WhatsApp"},
    faq: {"kicker":"06 · ВОПРОСЫ","title":"Частые вопросы","items":[{"q":"Вы русскоязычная доула в Буэнос-Айресе?","a":"Да. Меня зовут Саша Керт. Я работаю доулой в Буэнос-Айресе и сопровождаю женщин во время беременности и родов. Говорю по-русски и по-испански."},{"q":"Где проходят встречи?","a":"Я работаю в Буэнос-Айресе. Место и формат встречи, а также возможность сопровождения родов обсуждаем лично."},{"q":"Как доула помогает во время беременности?","a":"Мы можем поговорить о предстоящих родах, ваших пожеланиях и вопросах к врачу. Конкретный формат подготовки обсудим при знакомстве."},{"q":"Что вы делаете во время родов?","a":"Я могу быть рядом и поддерживать вас в пределах роли доулы. Медицинские процедуры проводят специалисты, а вопросы лечения вы решаете с врачом."},{"q":"Сколько стоит сопровождение?","a":"Сопровождение родов стоит 300 USD. На сайте также указан приём у врача за 20 USD. Перед записью уточним, что входит в каждую услугу."},{"q":"На каком языке можно общаться?","a":"На русском или испанском. Русский — мой основной язык общения."},{"q":"Когда лучше написать?","a":"Можно связаться со мной на любом сроке беременности. Напишите предполагаемую дату родов и свои вопросы, а я скажу, есть ли возможность сопровождения."}]},
    final: {"eyebrow":"БУДЕМ НА СВЯЗИ","title":"Расскажите, что вас волнует","body":"Не знаете, с чего начать? Напишите мне в WhatsApp. Можно коротко рассказать о сроке беременности и задать первый вопрос. Я отвечу и объясню, как мы можем познакомиться.","cta":"Написать в WhatsApp","instagram":"Instagram Саши"},
    footer: {"line":"Саша Керт. Русскоязычная доула в Буэнос-Айресе. Беременность и роды."},
  },
  es: {
    nav: { about: 'Sobre mí', services: 'Acompañamiento', pricing: 'Precios', faq: 'Preguntas', contact: 'Escribirle a Sasha' },
    hero: {"eyebrow":"SASHA KERT · BUENOS AIRES","title":"Doula de habla rusa en Buenos Aires","subtitle":"El nacimiento de tu bebé es un camino importante. No tenés que recorrerlo sola","body":"Soy Sasha. Acompaño a mujeres durante el embarazo y el parto. Podemos hablar en ruso o en español. Si querés saber cómo trabajo, escribime.","primary":"Conoceme","secondary":"Hablemos del parto","imageAlt":"Madre con su bebé recién nacido junto a una ventana"},
    intro: {"kicker":"01 · SOBRE MÍ","title":"Soy Sasha Kert","body":"Trabajo como doula en Buenos Aires. Podés escribirme si querés conversar sobre el parto y conocer a la persona que podría acompañarte ese día. Hablaremos de tus dudas y del apoyo que estás buscando.","note":"Podemos empezar con una conversación, sin tener que decidir nada de inmediato.","imageAlt":"Sasha Kert con uniforme azul y gorro celeste"},
    services: {"kicker":"02 · ACOMPAÑAMIENTO","title":"Durante el embarazo y el parto","intro":"Cada mujer llega con preguntas distintas. Primero nos conocemos y después vemos qué tipo de acompañamiento necesitás.","items":[{"number":"01","title":"Durante el embarazo","text":"Hablamos de cómo imaginás el parto, qué te preocupa y qué te gustaría preguntarle a tu médica o médico. Podemos preparar esas preguntas juntas."},{"number":"02","title":"Durante el parto","text":"Puedo estar a tu lado, escucharte y ayudarte a expresar tus preferencias al equipo. La atención médica corresponde a los profesionales de salud."}]},
    pricing: { kicker: '03 · PRECIOS', title: 'Precios claros', intro: 'Los precios están expresados en dólares estadounidenses.', currency: 'USD', items: [{ number: '01', title: 'Acompañamiento durante el parto', price: '$300', value: 300 }, { number: '02', title: 'Consulta con un médico', price: '$20', value: 20 }] },
    education: {"kicker":"04 · MI FUNCIÓN","title":"¿Qué hace una doula en el parto?","body":"Parir en otro país puede traer muchas preguntas. A veces ayuda conversar primero en ruso para ordenar lo que querés plantearle al equipo médico. Puedo escucharte y ayudarte a prepararte para esa charla.","points":["Mi trabajo es acompañarte durante el embarazo y el parto, sin realizar tareas médicas.","No hago diagnósticos ni indico tratamientos. Las decisiones médicas las tomás con tu equipo de salud."],"note":"La información de este sitio no reemplaza una consulta médica."},
    process: {"kicker":"05 · PARA EMPEZAR","title":"Cómo nos organizamos","steps":[{"number":"01","title":"Escribime","text":"Contame por WhatsApp de cuántas semanas estás y qué te gustaría saber. Podemos hablar en ruso o español."},{"number":"02","title":"Hablamos","text":"Conversamos sobre tus expectativas para el parto. También podés preguntarme cómo trabajo."},{"number":"03","title":"Acordamos los detalles","text":"Si decidimos seguir adelante, revisamos mi disponibilidad, las condiciones y el precio."}],"cta":"Escribirme por WhatsApp"},
    faq: {"kicker":"06 · PREGUNTAS","title":"Preguntas frecuentes","items":[{"q":"¿Sos una doula de habla rusa en Buenos Aires?","a":"Sí. Soy Sasha Kert, doula en Buenos Aires. Acompaño durante el embarazo y el parto. Hablo ruso y español."},{"q":"¿Dónde son los encuentros?","a":"Trabajo en Buenos Aires. Conversamos de manera individual sobre el lugar, el formato y la posibilidad de acompañamiento durante el parto."},{"q":"¿Cómo ayuda una doula durante el embarazo?","a":"Podemos hablar sobre el parto, tus preferencias y las preguntas que quieras hacerle a tu equipo médico. Definimos juntas el formato de preparación."},{"q":"¿Qué hacés durante el parto?","a":"Puedo acompañarte y darte apoyo dentro de mi función como doula. Los procedimientos y las decisiones médicas corresponden al equipo de salud."},{"q":"¿Cuánto cuesta el acompañamiento?","a":"El acompañamiento durante el parto cuesta 300 USD. En el sitio también figura una consulta con un médico por 20 USD. Antes de reservar, aclaramos qué incluye cada servicio."},{"q":"¿En qué idiomas podemos hablar?","a":"En ruso o español. Mi idioma principal es el ruso."},{"q":"¿Cuándo conviene escribirte?","a":"Podés escribirme en cualquier momento del embarazo. Contame tu fecha probable de parto y tus dudas, y te diré si tengo disponibilidad."}]},
    final: {"eyebrow":"HABLEMOS","title":"Contame qué te preocupa","body":"Si no sabés por dónde empezar, escribime por WhatsApp. Podés contarme de cuántas semanas estás y hacerme una primera pregunta. Te responderé y vemos cómo conocernos.","cta":"Escribirme por WhatsApp","instagram":"Instagram de Sasha"},
    footer: {"line":"Sasha Kert. Doula de habla rusa en Buenos Aires. Embarazo y parto."},
  },
  en: {
    nav: { about: 'About', services: 'Support', pricing: 'Prices', faq: 'Questions', contact: 'Write to Sasha' },
    hero: {"eyebrow":"SASHA KERT · BUENOS AIRES","title":"Russian-speaking doula in Buenos Aires","subtitle":"Having a baby is a big change. You don't have to navigate it alone","body":"I'm Sasha, a doula offering pregnancy and birth support in Buenos Aires. I communicate in Russian and Spanish. You can read about my work here and contact me if you have questions.","primary":"Meet Sasha","secondary":"Ask about birth support","imageAlt":"Mother holding her newborn beside a window"},
    intro: {"kicker":"01 · ABOUT ME","title":"I'm Sasha Kert","body":"I work as a doula in Buenos Aires. If you're preparing for birth and want to meet someone who might be there with you, we can talk about your questions and what sort of support you are looking for.","note":"We can start with a conversation. You don't have to make a decision straight away.","imageAlt":"Sasha Kert wearing blue scrubs and a light blue cap"},
    services: {"kicker":"02 · SUPPORT","title":"Pregnancy and birth support","intro":"Every person has different questions about birth. We can get to know each other first and discuss what kind of support would suit you.","items":[{"number":"01","title":"During pregnancy","text":"We can talk about your plans for birth, what concerns you and the questions you want to ask your medical team."},{"number":"02","title":"During birth","text":"I can be there with you, offer support and help you communicate your preferences. Medical care is provided by your healthcare team."}]},
    pricing: { kicker: '03 · PRICING', title: 'Clear pricing', intro: 'Prices are listed in US dollars.', currency: 'USD', items: [{ number: '01', title: 'Birth support', price: '$300', value: 300 }, { number: '02', title: 'Doctor appointment', price: '$20', value: 20 }] },
    education: {"kicker":"04 · ABOUT DOULA SUPPORT","title":"What does a doula do during birth?","body":"Giving birth in another country can bring up questions you may find easier to discuss in Russian. I can listen and help you prepare questions for your medical team.","points":["My role is non-medical support during pregnancy and birth.","I don't diagnose conditions or prescribe treatment. You make medical decisions with your doctor or midwife."],"note":"Information on this site is not a substitute for medical advice."},
    process: {"kicker":"05 · GETTING STARTED","title":"How we get started","steps":[{"number":"01","title":"Send me a message","text":"Tell me how far along you are and what you'd like to know. Please write in Russian or Spanish."},{"number":"02","title":"Let's talk","text":"We can discuss your expectations for birth, and you can ask me how I work."},{"number":"03","title":"Agree on details","text":"If we decide to work together, we'll discuss my availability, terms and price."}],"cta":"Message Sasha on WhatsApp"},
    faq: {"kicker":"06 · QUESTIONS","title":"Common questions","items":[{"q":"Are you a Russian-speaking doula in Buenos Aires?","a":"Yes. I'm Sasha Kert, a doula working in Buenos Aires. I support women during pregnancy and birth and communicate in Russian and Spanish."},{"q":"Where do you meet clients?","a":"I work in Buenos Aires. We discuss the location, format and birth-support availability individually."},{"q":"How can a doula help during pregnancy?","a":"We can talk about your birth plans, preferences and questions for your doctor. The preparation format is agreed together."},{"q":"What does a doula do during birth?","a":"I can be present and provide non-medical support. Your healthcare team handles medical procedures and medical decisions."},{"q":"How much does support cost?","a":"Birth support costs USD 300. The site also lists a doctor appointment for USD 20. Please ask what each service includes before booking."},{"q":"What languages do you speak?","a":"Russian and Spanish. Russian is my primary language."},{"q":"When should I get in touch?","a":"You can contact me at any point during pregnancy. Share your expected due date and questions so I can check availability."}]},
    final: {"eyebrow":"GET IN TOUCH","title":"Have a question about birth support?","body":"You can contact me on WhatsApp. Let me know how far along you are and what you'd like to ask. I communicate in Russian and Spanish.","cta":"Message on WhatsApp","instagram":"Sasha's Instagram"},
    footer: {"line":"Sasha Kert. Russian-speaking doula in Buenos Aires. Pregnancy and birth."},
  },
}

const supportJourney = {
  ru: {
    eyebrow: 'ПОДДЕРЖКА НА КАЖДОМ ЭТАПЕ',
    title: 'От подготовки к приезду до первых дней с малышом',
    link: 'Подробнее о сопровождении',
    stages: [
      { title: 'До приезда в Аргентину', points: [
        'Первичная консультация и знакомство.',
        'Помощь с выбором клиники и врача.',
        'Информация о медицинской системе Аргентины.',
        'Подготовка к беременности, родам и переезду.',
      ] },
      { title: 'Во время беременности в Аргентине', points: [
        'Сопровождение на приёмах у врачей.',
        'Перевод и помощь в коммуникации с медицинским персоналом.',
        'Помощь с обследованиями, направлениями и записями.',
        'Организационная поддержка на протяжении беременности.',
      ] },
      { title: 'Поддержка во время родов', points: [
        'Сопровождение в роддоме.',
        'Помощь в общении с врачами и медицинской командой.',
        'Перевод информации и рекомендаций.',
        'Эмоциональная поддержка женщины до и во время родов.',
      ] },
      { title: 'После рождения малыша', points: [
        'Сопровождение при выписке.',
        'Помощь с оформлением документов ребёнка.',
        'Организационная поддержка после родов.',
      ] },
    ],
  },
  es: {
    eyebrow: 'APOYO EN CADA ETAPA',
    title: 'Desde la preparación del viaje hasta los primeros días con tu bebé',
    link: 'Conocer más sobre el acompañamiento',
    stages: [
      { title: 'Antes de llegar a Argentina', points: [
        'Primera consulta y presentación.',
        'Ayuda para elegir una clínica y un médico.',
        'Información sobre el sistema de salud argentino.',
        'Preparación para el embarazo, el parto y la mudanza.',
      ] },
      { title: 'Durante el embarazo en Argentina', points: [
        'Acompañamiento a consultas médicas.',
        'Traducción y ayuda para comunicarse con el personal médico.',
        'Ayuda con estudios, derivaciones y turnos.',
        'Apoyo organizativo durante el embarazo.',
      ] },
      { title: 'Durante el parto', points: [
        'Acompañamiento en la maternidad.',
        'Ayuda para comunicarse con los médicos y el equipo de salud.',
        'Traducción de información y recomendaciones.',
        'Apoyo emocional antes y durante el parto.',
      ] },
      { title: 'Después del nacimiento', points: [
        'Acompañamiento durante el alta hospitalaria.',
        'Ayuda con los trámites de documentación del bebé.',
        'Apoyo organizativo después del parto.',
      ] },
    ],
  },
  en: {
    eyebrow: 'SUPPORT AT EVERY STAGE',
    title: 'From preparing for your trip to your first days with your baby',
    link: 'Learn more about support',
    stages: [
      { title: 'Before arriving in Argentina', points: [
        'Initial consultation and introduction.',
        'Help choosing a clinic and doctor.',
        'Information about the Argentine healthcare system.',
        'Preparing for pregnancy, birth and relocation.',
      ] },
      { title: 'During pregnancy in Argentina', points: [
        'Accompaniment to medical appointments.',
        'Translation and help communicating with medical staff.',
        'Help with tests, referrals and appointments.',
        'Organizational support throughout pregnancy.',
      ] },
      { title: 'Support during birth', points: [
        'Accompaniment at the maternity hospital.',
        'Help communicating with doctors and the medical team.',
        'Translation of information and recommendations.',
        'Emotional support before and during labor.',
      ] },
      { title: 'After your baby is born', points: [
        'Accompaniment during hospital discharge.',
        'Help with your baby’s documents.',
        'Organizational support after birth.',
      ] },
    ],
  },
} satisfies Record<Locale, { eyebrow: string; title: string; link: string; stages: { title: string; points: string[] }[] }>

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
        <a className="wordmark" href="#top" aria-label="Sasha Kert home">sasha<span>kert</span></a>
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

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="eyebrow">{supportJourney[locale].eyebrow}</p>
          <h2 id="journey-title">{supportJourney[locale].title}</h2>
        </div>
        <div className="journey-grid">
          {supportJourney[locale].stages.map((stage, index) => (
            <article className="journey-card" key={stage.title}>
              <span className="journey-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{stage.title}</h3>
              <ul>{stage.points.map(point => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <Link className="travel-teaser-link" href="/rody-v-argentine">{supportJourney[locale].link} <ArrowUpRight size={17} aria-hidden="true" /></Link>
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

      <footer className="site-footer"><div><a className="wordmark footer-mark" href="#top">sasha<span>kert</span></a><p>{t.footer.line}</p></div></footer>
    </main>
  )
}

// Content is intentionally centralized here so Sasha can verify service details and update translations without duplicating page layouts.
// Images in public/images are replaceable assets; see README.md for the asset workflow.


