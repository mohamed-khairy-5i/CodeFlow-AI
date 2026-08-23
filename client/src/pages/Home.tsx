/**
 * Design reminder — Luminous Command Deck: a precise RTL product landscape where
 * midnight surfaces, measured violet/cyan signals, and purposeful asymmetry make
 * an AI-guided workflow feel calm, capable, and immediately practical.
 */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  Code2,
  Github,
  Layers3,
  MousePointer2,
  Rocket,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    number: "01",
    title: "تحويل الفكرة إلى واجهة",
    description: "اكتب ما في ذهنك بلغة بسيطة، ثم شاهد البنية والصفحات تتشكل في مسار واضح.",
  },
  {
    icon: WandSparkles,
    number: "02",
    title: "تعديل سريع",
    description: "غيّر النصوص والأقسام والتفاصيل من خلال توجيهات قصيرة، من دون التعقيد التقني المعتاد.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "نشر أسهل",
    description: "هيّئ مشروعك ليكون جاهزًا للمشاركة، ثم انتقل من المسودة إلى أداة قابلة للاستخدام.",
  },
];

const workflow = [
  {
    step: "01",
    title: "اكتب الفكرة",
    description: "صِف المشكلة التي تريد حلها ومن سيستخدم الأداة.",
    icon: Code2,
  },
  {
    step: "02",
    title: "راجع النتيجة",
    description: "شاهد الواجهة الأولى، ثم وجّه التعديلات التي تناسبك.",
    icon: MousePointer2,
  },
  {
    step: "03",
    title: "انشر مشروعك",
    description: "جهّز النسخة النهائية لتصبح نقطة انطلاق حقيقية.",
    icon: Layers3,
  },
];

const questions = [
  {
    question: "هل أحتاج إلى خبرة برمجية كي أبدأ؟",
    answer: "لا. ابدأ بوصف فكرتك وما تريد أن تنجزه الأداة. يمنحك CodeFlow AI نقطة بداية منظمة يمكنك مراجعتها وتطويرها خطوة بخطوة.",
  },
  {
    question: "هل ستكون النتيجة مناسبة للموبايل؟",
    answer: "نعم. تُبنى التجربة مع مراعاة الشاشات الصغيرة من البداية، حتى تتمكن من مراجعة الفكرة ومشاركتها من أي جهاز.",
  },
  {
    question: "هل أستطيع تعديل ما تم إنشاؤه؟",
    answer: "بالتأكيد. الفكرة ليست أن تحصل على نتيجة جامدة، بل أن تستمر في توجيهها: عدّل المحتوى والأقسام والوظائف بحسب احتياج مشروعك.",
  },
  {
    question: "ما نوع الأدوات التي يمكن أن أبدأ بها؟",
    answer: "يمكنك البدء بأدوات داخلية بسيطة، نماذج استقبال الطلبات، صفحات عمليات، لوحات متابعة خفيفة، أو أي تجربة رقمية تساعد مشروعك على العمل بوضوح أكبر.",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand-mark" href="#top" aria-label="العودة إلى بداية صفحة CodeFlow AI">
      <img
        src="/manus-storage/codeflow-symbol_cee3b4b5.png"
        alt="رمز CodeFlow AI"
        className="brand-symbol"
      />
      {!compact && (
        <span className="brand-wordmark">
          <span className="brand-arabic">كودفلو</span>
          <span className="brand-type" dir="ltr">CodeFlow <b>AI</b></span>
        </span>
      )}
    </a>
  );
}

function ArrowLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return (
    <a className={`text-link ${inverse ? "text-link--inverse" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowLeft aria-hidden="true" size={17} strokeWidth={2.1} />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="site-shell" dir="rtl">
      <div className="ambient-orb ambient-orb--violet" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--cyan" aria-hidden="true" />

      <header className="site-header" aria-label="التنقل الرئيسي">
        <div className="shell-container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="روابط الأقسام">
            <a href="#features">المزايا</a>
            <a href="#workflow">كيف تعمل</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </nav>
          <a className="nav-cta" href="#start">
            <span>ابدأ تجربتك</span>
            <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="shell-container hero-layout">
          <div className="hero-copy reveal-item">
            <div className="eyebrow"><span className="eyebrow-dot" />مسار أوضح لبناء الأدوات الرقمية</div>
            <h1 id="hero-title">حوّل فكرتك إلى <em>أداة حقيقية</em> بالذكاء الاصطناعي</h1>
            <p className="hero-description">
              يساعد <span dir="ltr">CodeFlow AI</span> أصحاب المشاريع الصغيرة والمؤسسين على بناء أدوات رقمية مفيدة أسرع، من أول وصف للفكرة إلى واجهة يمكن مراجعتها وتطويرها.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#start">
                <span>ابدأ تجربتك</span>
                <ArrowLeft size={19} aria-hidden="true" />
              </a>
              <a className="secondary-button" href="#workflow">
                <span className="play-dot" aria-hidden="true"><ChevronLeft size={15} /></span>
                شاهد كيف تعمل
              </a>
            </div>
            <div className="hero-note"><span className="hero-note-line" />ابدأ بوصف بسيط. طوّر النتيجة على وتيرتك.</div>
          </div>

          <div className="hero-visual reveal-item" aria-label="تصور لواجهة إنشاء أدوات رقمية">
            <img
              className="hero-art"
              src="/manus-storage/codeflow-hero-abstract_2b46ea71.jpg"
              alt="مسار ضوئي تجريدي بنفسجي وسماوي يرمز لتحويل الأفكار إلى أدوات رقمية"
            />
            <div className="product-window" dir="ltr">
              <div className="window-topbar">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="window-address"><span /> <b>AI</b></div>
                <div className="window-state"><i /></div>
              </div>
              <div className="builder-layout">
                <aside className="builder-rail" aria-hidden="true">
                  <span className="rail-logo">C</span>
                  <span className="rail-icon rail-icon--active" />
                  <span className="rail-icon" />
                  <span className="rail-icon" />
                  <span className="rail-spacer" />
                  <span className="rail-avatar" />
                </aside>
                <div className="builder-canvas">
                  <div className="canvas-head">
                    <div><span className="small-bar" /><span className="small-bar small-bar--short" /></div>
                    <span className="status-chip"><i /> live</span>
                  </div>
                  <div className="canvas-banner"><span className="banner-shine" /><div className="banner-copy"><i /><i /><i /></div><span className="banner-orb" /></div>
                  <div className="canvas-blocks"><div /><div /><div /></div>
                  <div className="canvas-table"><div className="table-head"><i /><i /><i /></div><div className="table-row"><i /><i /><i /></div><div className="table-row"><i /><i /><i /></div><div className="table-row"><i /><i /><i /></div></div>
                </div>
                <aside className="builder-inspector" aria-hidden="true">
                  <div className="inspector-tabs"><i className="active" /><i /></div>
                  <span className="inspector-label" /><span className="input-line" /><span className="input-line" /><span className="inspector-label inspector-label--two" /><div className="toggle-row"><i /><i /></div><span className="input-line input-line--short" /><span className="violet-button" />
                </aside>
              </div>
            </div>
            <div className="float-chip float-chip--idea"><Sparkles size={15} /> فكرتك</div>
            <div className="float-chip float-chip--ready"><Check size={14} /> جاهز للمراجعة</div>
          </div>
        </div>
      </section>

      <section className="trust-section" aria-label="فوائد CodeFlow AI">
        <div className="shell-container trust-row">
          <p className="trust-lead">أدوات واضحة لمشاريع تتحرك بسرعة</p>
          <div className="trust-items">
            <div><span className="trust-icon"><Check size={16} /></span>بدون تعقيد</div>
            <div><span className="trust-icon"><Check size={16} /></span>جاهز للموبايل</div>
            <div><span className="trust-icon"><Check size={16} /></span>قابل للتطوير</div>
          </div>
        </div>
      </section>

      <section id="features" className="section-block features-section" aria-labelledby="features-title">
        <div className="shell-container">
          <div className="section-heading section-heading--split reveal-item">
            <div>
              <p className="section-kicker"><span>01</span> ما الذي يقرّبك من فكرتك؟</p>
              <h2 id="features-title">مسار عملي،<br />وليس شاشة معقدة.</h2>
            </div>
            <p>كل خطوة مصممة لتقلّل الوقت بين ما تتصوره وما تراجعه بالفعل. ابدأ من الفكرة، ثم اجعل تفاصيل مشروعك أكثر وضوحًا.</p>
          </div>
          <div className="feature-cards">
            <div className="feature-signal-rail" aria-hidden="true"><span /><i /><i /><i /></div>
            {features.map(({ icon: Icon, number, title, description }) => (
              <article className="feature-card reveal-item" key={number}>
                <div className="feature-card-top"><span className="feature-number">{number}</span><span className="feature-icon"><Icon size={22} strokeWidth={1.8} /></span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="feature-rule"><span /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="section-block workflow-section" aria-labelledby="workflow-title">
        <div className="workflow-grid-decoration" aria-hidden="true" />
        <div className="shell-container">
          <div className="workflow-heading reveal-item">
            <div>
              <p className="section-kicker"><span>02</span> طريقة العمل</p>
              <h2 id="workflow-title">خطوات قليلة<br />تدفع الفكرة للأمام.</h2>
            </div>
            <div className="workflow-readout" aria-label="ملخص مسار إنشاء المشروع">
              <span className="readout-label">مسار الإنشاء</span>
              <div className="readout-line"><i /><b /><b /><b /></div>
              <div className="readout-meta"><span>فكرة</span><span>واجهة</span><span>مراجعة</span></div>
            </div>
          </div>
          <div className="workflow-track">
            {workflow.map(({ step, title, description, icon: Icon }) => (
              <article className="workflow-step reveal-item" key={step}>
                <div className="workflow-node"><span>{step}</span><div className="workflow-icon"><Icon size={23} strokeWidth={1.8} /></div></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="workflow-foot reveal-item"><span className="workflow-foot-line" />تنتقل خلال مسار بسيط، مع مساحة للمراجعة والتعديل في كل خطوة.</div>
        </div>
      </section>

      <section className="showcase-section" aria-labelledby="showcase-title">
        <div className="shell-container showcase-frame">
          <div className="showcase-copy reveal-item">
            <p className="section-kicker"><span>03</span> راقب فكرتك وهي تتضح</p>
            <h2 id="showcase-title">شاهد الأداة<br />قبل أن تصبح مشروعًا كبيرًا.</h2>
            <p>تمنحك الواجهة نقطة ملموسة للنقاش والتطوير بدل أن تبقى فكرتك في ملاحظات متناثرة. راجع التدفق، عدّل التفاصيل، وشارك ما وصلت إليه.</p>
            <ArrowLink href="#start">ابدأ بفكرة بسيطة</ArrowLink>
          </div>
          <div className="showcase-visual reveal-item">
            <div className="showcase-art-frame">
              <img src="/manus-storage/codeflow-dashboard-art_69c9ea4b.jpg" alt="تصور فني لواجهة لوحة تحكم ومنشئ أدوات مدعوم بالذكاء الاصطناعي" />
              <div className="showcase-scan" aria-hidden="true" />
            </div>
            <div className="showcase-badge"><span className="badge-spark"><Sparkles size={15} /></span><span>اقتراحات ذكية<br /><b>تظهر في سياق عملك</b></span></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-block faq-section" aria-labelledby="faq-title">
        <div className="shell-container faq-layout">
          <div className="faq-intro reveal-item">
            <p className="section-kicker"><span>04</span> أسئلة شائعة</p>
            <h2 id="faq-title">وضوح أكثر<br />قبل أن تبدأ.</h2>
            <p>إن كانت فكرتك في بدايتها، فهذا هو المكان المناسب لطرحها. إليك بعض الإجابات التي تساعدك على رسم الخطوة التالية.</p>
            <div className="faq-symbol" aria-hidden="true">?</div>
          </div>
          <Accordion type="single" collapsible className="faq-list reveal-item">
            {questions.map(({ question, answer }, index) => (
              <AccordionItem value={`item-${index}`} key={question} className="faq-item">
                <AccordionTrigger className="faq-trigger"><span className="faq-number">0{index + 1}</span><span>{question}</span></AccordionTrigger>
                <AccordionContent className="faq-answer"><p>{answer}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="start" className="final-cta-section" aria-labelledby="cta-title">
        <img src="/manus-storage/codeflow-grid-detail_59f92402.jpg" alt="" className="cta-texture" aria-hidden="true" />
        <div className="cta-violet-arc" aria-hidden="true" />
        <div className="shell-container final-cta-inner reveal-item">
          <p className="section-kicker section-kicker--light"><span>05</span> الخطوة الأولى لا تحتاج إلى تعقيد</p>
          <h2 id="cta-title">ابدأ بفكرة بسيطة.<br /><em>دعها تأخذ شكلًا.</em></h2>
          <p>اكتب ما تتمنى أن ينجزه مشروعك، ثم امنحه نقطة بداية يمكن أن تنمو معها.</p>
          <a className="primary-button primary-button--light" href="mailto:hello@codeflow.ai?subject=CodeFlow%20AI%20Start">
            <span>ابدأ تجربتك</span>
            <ArrowUpLeft size={19} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell-container footer-main">
          <div className="footer-brand"><BrandMark /><p>مسار هادئ لتحويل الأفكار الصغيرة إلى أدوات رقمية مفيدة.</p></div>
          <div className="footer-links"><a href="#features">المزايا</a><a href="#workflow">كيف تعمل</a><a href="#faq">الأسئلة الشائعة</a></div>
          <a className="footer-github" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} />GitHub <ArrowUpLeft size={14} /></a>
        </div>
        <div className="shell-container footer-bottom"><span>© 2026 CodeFlow AI. جميع الحقوق محفوظة.</span><span dir="ltr">Built for ideas in motion.</span></div>
      </footer>
    </main>
  );
}
