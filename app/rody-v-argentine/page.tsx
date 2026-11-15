import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './landing.module.css'

const pageUrl = 'https://doula-nine.vercel.app/rody-v-argentine'
const pageTitle = 'Роды в Аргентине с русскоязычной доулой | Саша Керт'
const pageDescription = 'Планируете роды в Аргентине? Я Саша Керт, русскоязычная доула в Буэнос-Айресе. Мы можем познакомиться дистанционно ещё до вашего приезда.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Sasha Kert',
    images: [{
      url: 'https://doula-nine.vercel.app/images/sasha-hero.png',
      alt: 'Сопровождение беременности и родов в Буэнос-Айресе',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const whatsappUrl =
  'https://wa.me/5491132849594?text=' +
  encodeURIComponent('Здравствуйте, Саша! Планирую приехать в Аргентину для родов. Хотела бы обсудить сопровождение и дистанционное знакомство.')

const questions = [
  {
    question: 'Можно ли связаться с доулой ещё до приезда в Аргентину?',
    answer: 'Да. Мы можем познакомиться и обсудить ваши вопросы дистанционно, пока вы ещё в другой стране. Формат, время и условия разговора согласуем в переписке.',
  },
  {
    question: 'С какими вопросами вы можете обратиться ко мне заранее?',
    answer: 'Можем поговорить о том, как вы представляете роды, какой поддержки ожидаете, что вызывает вопросы и о чём хотите поговорить с врачом. Медицинские решения остаются за вами и вашей медицинской командой.',
  },
  {
    question: 'Где я сопровождаю роды?',
    answer: 'Я работаю в Буэнос-Айресе. Возможность сопровождения в конкретном роддоме или клинике, а также мою доступность на ваши даты мы обсудим лично.',
  },
  {
    question: 'На каких языках можно общаться?',
    answer: 'Я говорю на русском и испанском. Русский — мой основной язык. Я помогаю русскоязычным женщинам, которые планируют роды в Аргентине.',
  },
  {
    question: 'Сколько стоит моё сопровождение родов?',
    answer: 'Стоимость моего сопровождения родов — 300 USD. Формат и стоимость дистанционной консультации до приезда мы обсудим отдельно. Я заранее расскажу, что входит в сопровождение.',
  },
  {
    question: 'Заменяю ли я врача или акушерку?',
    answer: 'Нет. Я оказываю немедицинскую поддержку: не ставлю диагнозы, не назначаю лечение и не провожу медицинские процедуры. За медицинскую помощь отвечает ваша команда специалистов.',
  },
]

const testimonials = [
  {
    label: '01 · Подробный отзыв',
    fragments: [
      'Добрый вечер. Хотела написать отзыв на доулу-переводчика Сашу.',
      'Саша сопровождала меня на родах в Лос Аркос в апреле и на куче визитов к врачам и в лаборатории за пару месяцев до родов.',
      'Саша очень чуткая, доброжелательная и тёплая.',
      'Она всегда искренне старается помочь, подсказывает с выбором лаборатории, записывала и сопровождала меня везде, всегда очень оперативно отвечала на сообщения и искренне интересовалась моим состоянием и самочувствием.',
      '… сейчас я с уверенностью могу сказать, что Саша - это лучший выбор.',
    ],
    detail: 'Сопровождение родов и визитов к врачам · фрагменты одного отзыва',
  },
  {
    label: '02 · Благодарность',
    fragments: [
      'Спасибо большое тебе ещё раз 🫶',
      'ты создана быть доулой😊 так замечательно помогала !!',
    ],
    detail: 'Личное сообщение · один отзыв',
  },
  {
    label: '03 · Отзыв о поддержке',
    fragments: [
      'Саша просто моя бесконечная любовь 😁❤️ и слов благодарности подобрать для Саши мне очень тяжело, так как меня переполняют одни эмоции.',
      'Человек-солнышко, настолько заботливый, настолько ответственный, чуткий 🥹',
      'смогла подобрать мне лучших специалистов, прекрасного врача и прекрасную акушерку, о которых можно только мечтать)) и это полностью заслуга Саши 🫂❤️',
      'Доула с оценкой 100 из 10, как модно сейчас говорить 😁❤️',
    ],
    detail: 'Помощь с поиском медицинских специалистов · фрагменты одного отзыва',
  },
  {
    label: '04 · После сопровождения',
    fragments: [
      'Ооо, спасибо, Саша🥰',
      'Мы тоже рады, что именно ты у нас была)',
    ],
    detail: 'Личное сообщение · один отзыв',
  },
]

export default function BirthInArgentinaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Саша Керт — на главную">sasha<span>kert</span></Link>
        <nav className={styles.headerNav} aria-label="Навигация по странице">
          <Link href="/">На главную</Link>
          <a href="#how-it-works">Как мы начнём</a>
          <a className={styles.headerContact} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Написать мне</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Саша Керт · Буэнос-Айрес, Аргентина</p>
          <h1>Роды в Аргентине с русскоязычной доулой</h1>
          <p className={styles.heroLead}>Планируете приехать рожать в Буэнос-Айрес? Давайте познакомимся ещё до поездки.</p>
          <p className={styles.heroText}>Меня зовут Саша Керт. Я сопровождаю женщин во время беременности и родов. Мы можем созвониться дистанционно, пока вы ещё в России или другой стране, и спокойно обсудить, какая поддержка вам нужна.</p>
          <div className={styles.actions}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>Обсудить сопровождение <span aria-hidden="true">↗</span></a>
            <a href="#before-arrival" className={styles.secondaryAction}>Что можно сделать до приезда</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src="/images/sasha-hero.png"
            alt="Мама с новорождённым ребёнком"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className={styles.section} id="before-arrival">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>01 · До приезда</p>
          <h2>Начать можно из другой страны</h2>
        </div>
        <div className={styles.sectionBody}>
          <p className={styles.lead}>Не обязательно ждать прилёта, чтобы задать первые вопросы.</p>
          <p>Если вы планируете роды в Аргентине, можно заранее написать мне и договориться о дистанционном разговоре. Вы расскажете, на каком сроке находитесь, когда предполагаете приехать и что для вас важно во время родов.</p>
          <p>Обсудим ваши ожидания, мою роль и возможность сопровождения в Буэнос-Айресе. Если уже выбрали клинику или врача, сможем поговорить о вопросах, которые вы хотите задать медицинской команде.</p>
          <p className={styles.smallNote}>Дистанционное знакомство не заменяет медицинскую консультацию. Его формат и стоимость согласуются отдельно.</p>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.supportIntro}>
          <p className={styles.eyebrow}>02 · В Буэнос-Айресе</p>
          <h2>Поддержка во время беременности и родов</h2>
          <p>Каждые роды проходят по-своему. Поэтому мне важно сначала услышать вас, а не предлагать готовый сценарий.</p>
        </div>
        <div className={styles.supportGrid}>
          <article className={styles.supportCard}>
            <span className={styles.cardNumber}>01</span>
            <h3>Во время беременности</h3>
            <p>Поговорим о ваших пожеланиях, предстоящих родах и вопросах к врачу. Сможем обсудить, чего вы ждёте от доулы в этот день.</p>
          </article>
          <article className={styles.supportCard}>
            <span className={styles.cardNumber}>02</span>
            <h3>Во время родов</h3>
            <p>Я могу быть рядом, поддерживать вас и помогать выразить пожелания команде. Медицинские процедуры и решения остаются в ведении специалистов.</p>
          </article>
        </div>
        <figure className={styles.birthPhoto}>
          <Image
            src="/images/sasha-kert-doula-newborn-buenos-aires.jpeg"
            alt="Доула Саша Керт держит новорождённого малыша в родильном отделении Буэнос-Айреса"
            width={1056}
            height={1408}
            sizes="(max-width: 800px) 100vw, 65vw"
          />
        </figure>
      </section>

      <section className={styles.aboutSection} id="about-sasha" aria-labelledby="about-sasha-title">
        <div className={styles.aboutPortrait}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0980-YpA6BVQaYkgR46UW0ZIgJs8T9XpGfv.jpeg"
            alt="Саша Керт — русскоязычная доула в Буэнос-Айресе"
            fill
            sizes="(max-width: 800px) 88vw, 36vw"
          />
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>Знакомство · Обо мне</p>
          <h2 id="about-sasha-title">Кто будет рядом с вами на родах?</h2>
          <p>Меня зовут Саша Керт. Я русскоязычная доула в Буэнос-Айресе. Помогаю женщинам подготовиться к родам и сопровождаю их в этот день. Мы можем познакомиться дистанционно, ещё до вашего приезда в Аргентину.</p>
          <p>Мне важно услышать, как вы представляете роды, что вас волнует и какой помощи вы ждёте. А вы сможете решить, подхожу ли я вам.</p>
          <Link className={styles.aboutLink} href="/#about">
            Подробнее обо мне <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.testimonialsSection} id="reviews" aria-labelledby="testimonials-title">
        <div className={styles.testimonialsHeading}>
          <p className={styles.eyebrow}>Отзывы</p>
          <h2 id="testimonials-title">Что говорят женщины, которых я сопровождала</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map(({ label, fragments, detail }) => (
            <figure className={styles.testimonialCard} key={label}>
              <div className={styles.testimonialTop}>
                <span className={styles.testimonialLabel}>{label}</span>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
              </div>
              <blockquote>
                {fragments.map((fragment, index) => (
                  <p className={styles.quoteFragment} key={index}>{fragment}</p>
                ))}
              </blockquote>
              <figcaption>{detail}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>03 · Знакомство</p>
          <h2>Как мы начнём</h2>
        </div>
        <div className={styles.steps}>
          <article>
            <span>01</span>
            <h3>Напишите из любой страны</h3>
            <p>Можно коротко рассказать о сроке беременности, предполагаемой дате родов и вопросах. Я общаюсь на русском и испанском.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Обсудим всё дистанционно</h3>
            <p>Договоримся об удобном формате знакомства. Вы узнаете, как я работаю, и сможете рассказать, какую поддержку ищете.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Уточним сопровождение</h3>
            <p>Обсудим доступность на ваши даты, стоимость, место родов и условия. Так будет понятнее, можем ли мы работать вместе.</p>
          </article>
        </div>
      </section>

      <section className={styles.priceSection}>
        <div>
          <p className={styles.eyebrow}>Стоимость</p>
          <h2>Сопровождение родов</h2>
          <p>Уточним, что входит в услугу, прежде чем договариваться. Дистанционный разговор до приезда обсуждается отдельно.</p>
        </div>
        <div className={styles.price}>300 <span>USD</span></div>
      </section>

      <section className={styles.faqSection} id="questions">
        <div className={styles.faqHeading}>
          <p className={styles.eyebrow}>04 · Вопросы</p>
          <h2>Что важно знать до поездки</h2>
          <p>Если вашего вопроса здесь нет, напишите мне напрямую.</p>
        </div>
        <div className={styles.faqList}>
          {questions.map(({ question, answer }) => (
            <details key={question} className={styles.faqItem}>
              <summary>{question}<span aria-hidden="true">＋</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.lastSection}>
        <p className={styles.eyebrow}>Можно написать уже сейчас</p>
        <h2>Поговорим о ваших планах?</h2>
        <p>Неважно, в какой стране вы сейчас находитесь. Напишите мне в WhatsApp, расскажите о предполагаемой дате родов и задайте первый вопрос.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.lastAction}>Написать мне в WhatsApp <span aria-hidden="true">↗</span></a>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.logo}>sasha<span>kert</span></Link>
        <p>Саша Керт · Русскоязычная доула в Буэнос-Айресе</p>
        <Link href="/">Все услуги и контакты</Link>
      </footer>
    </main>
  )
}
