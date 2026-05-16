import Head from 'next/head';
import Image from 'next/image';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1o-c4X7phQ7bwSBbSBYOUXBRbDioUwc79tHm2je3NQ-iuW5fNyeyML-sHi2kOfkjvTdDapeCkL';
const WHATSAPP_URL = 'https://wa.me/67575700800';
const EMAIL_URL = 'mailto:info@patspng.com';

function BrandMark({ small = false }) {
  return (
    <div
      className={`${small ? 'h-10 w-10' : 'h-14 w-14'} flex shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/10`}
    >
      <Image
        src="/prime-icon.jpg"
        alt="Prime Accounting & Tax Solutions logo mark"
        width={small ? 40 : 56}
        height={small ? 40 : 56}
        className="rounded-xl object-contain"
        priority={small}
      />
    </div>
  );
}

function PrimeLogo({ compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <BrandMark small />
        <span className="hidden text-sm font-semibold text-[#050505] sm:inline">Prime</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/prime-logo.jpg"
        alt="Prime Accounting & Tax Solutions"
        width={520}
        height={132}
        className="h-auto w-full max-w-[520px] object-contain"
        priority
      />
    </div>
  );
}

function XeroLogo({ size = 'md' }) {
  const sizeClass = size === 'sm' ? 'h-12 w-12' : 'h-20 w-20';
  const imageSize = size === 'sm' ? 48 : 80;

  return (
    <div className={`${sizeClass} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#13B5D1] shadow-lg`}>
      <Image
        src="/xero-logo.png"
        alt="Xero logo"
        width={imageSize}
        height={imageSize}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function XeroBadge() {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-white/15 bg-white text-[#050505] shadow-xl">
      <div className="flex items-center gap-4 border-b border-[#13B5D1]/20 bg-[#F7FAFC] p-4">
        <XeroLogo size="sm" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1579B8]">Certified Advisor</div>
          <div className="mt-1 text-xl font-bold">Bronze Partner</div>
        </div>
      </div>
      <div className="p-4">
        <Image
          src="/xero-bronze-badge.png"
          alt="Xero Bronze Partner and Certified Advisor badges"
          width={620}
          height={250}
          className="h-auto w-full rounded-2xl bg-white object-contain"
        />
      </div>
    </div>
  );
}

function CheckIcon({ className = '' }) {
  return <span className={`inline-flex shrink-0 items-center justify-center font-bold ${className}`}>✓</span>;
}

function Button({ children, variant = 'primary', className = '', href = CALENDAR_URL }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#1579B8] focus:ring-offset-2';
  const styles =
    variant === 'outline'
      ? 'border border-[#1579B8]/35 bg-white text-[#050505] hover:bg-[#EAF5FB]'
      : variant === 'light'
        ? 'bg-white text-[#050505] hover:bg-[#EAF5FB]'
        : 'bg-[#050505] text-white hover:bg-[#0B5F95]';

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl border border-[#1579B8]/15 bg-white shadow-sm shadow-[#1579B8]/5 ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

const services = [
  {
    icon: 'BK',
    title: 'Bookkeeping & Monthly Accounting',
    text: 'Organized records, regular reporting, and practical support so your business stays ready for tax and management decisions.',
  },
  {
    icon: 'TX',
    title: 'GST, SWT & Corporate Tax',
    text: 'Support for GST returns, salary and wages tax, corporate income tax, withholding taxes, and IRC compliance requirements.',
  },
  {
    icon: 'IPA',
    title: 'IPA Compliance',
    text: 'Annual returns, foreign enterprise certification, status reports, and other company compliance requirements.',
  },
  {
    icon: 'XO',
    title: 'Xero Setup & Migration',
    text: 'As a Xero Bronze Partner, we help set up Xero, migrate existing records, clean up accounts, and train your team.',
  },
  {
    icon: 'RC',
    title: 'Receipt Capture App',
    text: 'For businesses without in-house accountants, clients can take photos of receipts and invoices through an app — we handle the rest.',
  },
  {
    icon: 'CO',
    title: 'Company Formation & Tax Clearance',
    text: 'Support with company setup, TIN registration, tax clearance certificates, certificates of compliance, and related documentation.',
  },
];

const process = [
  'We understand your business, records, and compliance obligations.',
  'We set up or clean up your accounting system and document workflow.',
  'You submit receipts, invoices, and documents through a simple app or agreed process.',
  'We maintain your bookkeeping, monitor due dates, and prepare compliance filings.',
  'You receive practical reports, updates, and advice to stay tax-ready.',
];

const faqs = [
  {
    q: 'Do you work with businesses that do not have in-house accountants?',
    a: 'Yes. We can provide a simple app-based workflow where your team takes photos of receipts and invoices, while Prime handles the bookkeeping and compliance work.',
  },
  {
    q: 'Can you help us move to Xero?',
    a: 'Yes. Prime is a Xero Bronze Partner. We help with Xero setup, migration from existing records, chart of accounts setup, bank feeds, opening balances, and staff training.',
  },
  {
    q: 'Do you offer fixed monthly accounting support?',
    a: 'Yes. Fixed monthly support can be structured based on your business size, transaction volume, and compliance requirements.',
  },
  {
    q: 'Can you assist with both IRC and IPA compliance?',
    a: 'Yes. We assist with tax compliance, GST, salary and wages tax, corporate income tax, IPA annual returns, and related business compliance requirements.',
  },
];

export default function PrimePngModernHomepage() {
  return (
    <>
      <Head>
        <title>Prime Accounting & Tax Solutions | PNG Accounting, Tax & Compliance</title>
        <meta
          name="description"
          content="Prime helps small and medium-sized businesses in Papua New Guinea stay organized, compliant, and tax-ready through bookkeeping, IRC and IPA compliance support, Xero cloud accounting, and fixed monthly service options."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Prime Accounting & Tax Solutions" />
        <meta property="og:description" content="Accounting, tax and compliance support for PNG businesses." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/prime-icon.jpg" />
      </Head>

      <main className="min-h-screen bg-[#F7FAFC] text-[#050505]">
        <header className="sticky top-0 z-50 border-b border-[#1579B8]/15 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <PrimeLogo compact />
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#050505]/75 md:flex">
              <a href="#services" className="hover:text-[#1579B8]">Services</a>
              <a href="#xero" className="hover:text-[#1579B8]">Xero</a>
              <a href="#process" className="hover:text-[#1579B8]">Process</a>
              <a href="#faq" className="hover:text-[#1579B8]">FAQ</a>
            </nav>
            <Button>Book a Consultation</Button>
          </div>
        </header>

        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[#F7FAFC]" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#1579B8]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex flex-col gap-5">
                <PrimeLogo />
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1579B8]/20 bg-white px-4 py-2 text-sm font-medium text-[#050505]/75 shadow-sm shadow-[#1579B8]/5">
                  <span className="text-[#1579B8]">✦</span>
                  Smart systems. Tax-ready. Always.
                </div>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#050505] md:text-6xl">
                Accounting, Tax & Compliance Support for PNG Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#050505]/65">
                Prime helps small and medium-sized businesses in Papua New Guinea stay organized, compliant, and tax-ready through bookkeeping, IRC and IPA compliance support, Xero cloud accounting, and fixed monthly service options.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="px-7 py-4 text-base">
                  Book a Consultation <span className="ml-2">→</span>
                </Button>
                <Button href="#services" variant="outline" className="px-7 py-4 text-base">
                  View Services
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#050505]/65">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-[#1579B8]/5"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> Xero Bronze Partner</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-[#1579B8]/5"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> 20+ years PNG experience</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-[#1579B8]/5"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> IRC & IPA compliance</span>
              </div>
            </div>

            <div>
              <Card className="border-black bg-[#050505] text-white shadow-2xl shadow-black/20">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 rounded-3xl bg-white/10 p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-white/70">Modern accounting workflow</p>
                      <XeroLogo size="sm" />
                    </div>
                    <h2 className="mt-3 text-3xl font-bold">From receipts to compliance filings — handled.</h2>
                    <p className="mt-4 leading-7 text-white/70">
                      Your team submits receipts and invoices through a simple app. We organize the records, maintain the accounts, monitor deadlines, and prepare the required filings.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {['Receipt capture app', 'Xero setup and migration', 'Monthly bookkeeping', 'GST, SWT and income tax support', 'IPA annual returns'].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                        <CheckIcon className="h-5 w-5 text-[#7DD3FC]" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['For SMEs', 'Built for business owners who need reliable accounting support without hiring a full in-house finance team.'],
              ['For growing teams', 'Supports better workflows through Xero, receipt capture, staff training, and organized document collection.'],
              ['For compliance', 'Designed to help businesses stay on top of IRC, IPA, tax, and reporting obligations.'],
            ].map(([title, text]) => (
              <Card key={title}>
                <CardContent className="p-7">
                  <h3 className="text-xl font-bold text-[#050505]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#050505]/65">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#050505] md:text-5xl">Everything your business needs to stay organized and compliant.</h2>
              <p className="mt-5 text-lg leading-8 text-[#050505]/65">
                From monthly bookkeeping to tax compliance and Xero implementation, Prime provides practical support designed around the realities of running a business in Papua New Guinea.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon, title, text }) => (
                <Card key={title} className="bg-[#F7FAFC] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-[#1579B8]/10">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1579B8] text-white">
                      <span className="text-sm font-bold">{icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#050505]">{title}</h3>
                    <p className="mt-3 leading-7 text-[#050505]/65">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="xero" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] bg-[#050505] p-8 text-white shadow-xl shadow-black/20 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <XeroLogo />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7DD3FC]">Xero Bronze Partner</p>
                  <p className="mt-1 text-sm text-white/70">Cloud accounting setup, migration, training, and receipt-capture workflow.</p>
                </div>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Move your accounting to the cloud with confidence.</h2>
              <p className="mt-5 leading-8 text-white/70">
                We help businesses set up Xero properly, migrate existing records, train users, and create a simple workflow for submitting receipts and invoices.
              </p>
              <XeroBadge />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Xero account setup',
                'Migration from existing records',
                'Chart of accounts setup',
                'Bank feed support',
                'Receipt capture workflow',
                'Xero training for owners and staff',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#7DD3FC]" />
                  <span className="leading-7 text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1579B8]">How we work</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#050505] md:text-5xl">A clear process from setup to compliance.</h2>
                <p className="mt-5 leading-8 text-[#050505]/65">
                  We combine professional accounting judgment with modern tools so business owners can spend less time chasing paperwork and more time running the business.
                </p>
              </div>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div key={item} className="flex gap-5 rounded-3xl border border-[#1579B8]/15 bg-[#F7FAFC] p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1579B8] font-bold text-white">{index + 1}</div>
                    <p className="pt-2 leading-7 text-[#050505]/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2rem] border border-[#1579B8]/15 bg-white p-8 shadow-sm shadow-[#1579B8]/5 md:grid-cols-[1fr_0.8fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Fixed monthly support</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#050505] md:text-5xl">Predictable accounting support for your business.</h2>
              <p className="mt-5 leading-8 text-[#050505]/65">
                Instead of dealing with accounting only when a deadline is near, Prime can provide fixed monthly support based on your business size, transaction volume, and compliance needs.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-3xl bg-[#EAF5FB] p-6">
              {['Monthly bookkeeping', 'Compliance deadline monitoring', 'Receipt and invoice handling', 'GST and tax support', 'Management-ready records'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-[#1579B8]" />
                  <span className="font-medium text-[#050505]/75">{item}</span>
                </div>
              ))}
              <Button className="mt-4 py-4">Request a Fixed Monthly Quote</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1579B8]">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#050505] md:text-5xl">Common questions</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map(({ q, a }) => (
                <Card key={q} className="bg-[#F7FAFC]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#050505]">{q}</h3>
                    <p className="mt-3 leading-7 text-[#050505]/65">{a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#050505] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Ready to simplify your accounting and tax compliance?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Contact Prime to discuss bookkeeping, tax compliance, IPA requirements, Xero setup, migration, training, or fixed monthly accounting support.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Button href={CALENDAR_URL} variant="light" className="py-4 text-base">
                <span className="mr-2">✉</span> Book a Consultation
              </Button>
              <Button href={EMAIL_URL} variant="outline" className="border-white/30 bg-transparent py-4 text-base text-white hover:bg-white/10">
                Send an Inquiry
              </Button>
              <Button href={WHATSAPP_URL} variant="outline" className="border-white/30 bg-transparent py-4 text-base text-white hover:bg-white/10">
                WhatsApp: +675 7570 0800
              </Button>
            </div>
          </div>
        </section>

        <footer className="bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-[#050505]/55 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <PrimeLogo compact />
              <div>
                <strong className="text-[#050505]">Prime</strong> — Accounting, Tax & Compliance Support for PNG Businesses
                <div className="mt-1">Smart systems. Tax-ready. Always.</div>
              </div>
            </div>
            <XeroLogo size="sm" />
          </div>
        </footer>
      </main>
    </>
  );
}
