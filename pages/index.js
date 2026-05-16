import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function FullPrimeLogo({ compact = false, className = "" }) {
  return (
    <Image
      src="/prime-logo.jpg"
      alt="Prime Accounting & Tax Solutions"
      width={compact ? 220 : 520}
      height={compact ? 54 : 128}
      priority={!compact}
      className={`h-auto w-auto ${compact ? "max-w-[190px] md:max-w-[220px]" : "max-w-[420px] md:max-w-[520px]"} ${className}`}
    />
  );
}

function XeroTripleBadge({ compact = false }) {
  return (
    <Image
      src="/xero-bronze-certified-badge.png"
      alt="Xero Bronze Partner Certified Advisor"
      width={compact ? 230 : 640}
      height={compact ? 86 : 238}
      className={`h-auto ${compact ? "max-w-[210px]" : "w-full max-w-[640px]"}`}
    />
  );
}

function CheckIcon({ className = "" }) {
  return <span className={`inline-flex shrink-0 items-center justify-center font-bold ${className}`}>✓</span>;
}

function Button({ children, variant = "primary", className = "", onClick, href, type = "button" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#1579B8] focus:ring-offset-2";
  const styles =
    variant === "outline"
      ? "border border-[#1579B8]/35 bg-white text-[#1F2937] hover:bg-[#EAF5FB]"
      : variant === "grey"
      ? "bg-[#EEF3F7] text-[#1F2937] hover:bg-[#E1E8EF]"
      : variant === "light"
      ? "bg-white text-[#1F2937] hover:bg-[#EAF5FB]"
      : "bg-[#1579B8] text-white hover:bg-[#0B5F95]";

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-[#1579B8]/12 bg-white shadow-sm shadow-slate-200/80 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const services = [
  {
    icon: "BK",
    title: "Bookkeeping & Monthly Accounting",
    text: "Organized records, regular reporting, and practical support so your business stays ready for tax and management decisions.",
  },
  {
    icon: "TX",
    title: "GST, SWT & Corporate Tax",
    text: "Support for GST returns, salary and wages tax, corporate income tax, withholding taxes, and IRC compliance requirements.",
  },
  {
    icon: "IPA",
    title: "IPA Compliance",
    text: "Annual returns, foreign enterprise certification, status reports, and other company compliance requirements.",
  },
  {
    icon: "XO",
    title: "Xero Setup & Migration",
    text: "As a Xero Bronze Partner, we help set up Xero, migrate existing records, clean up accounts, and train your team.",
  },
  {
    icon: "RC",
    title: "Receipt Capture App",
    text: "For businesses without in-house accountants, clients can take photos of receipts and invoices through an app — we handle the rest.",
  },
  {
    icon: "CO",
    title: "Company Formation & Tax Clearance",
    text: "Support with company setup, TIN registration, tax clearance certificates, certificates of compliance, and related documentation.",
  },
];

const xeroFeatures = [
  {
    title: "Xero account setup",
    text: "We configure your Xero file properly, including users, tax settings, bank accounts, invoice settings, and chart of accounts.",
  },
  {
    title: "Migration from existing records",
    text: "We help move your existing records into Xero, including opening balances, contacts, unpaid invoices, bills, and prior data where available.",
  },
  {
    title: "Chart of accounts setup",
    text: "We build a practical chart of accounts suited to your business, reporting needs, and PNG compliance requirements.",
  },
  {
    title: "Bank feed support",
    text: "We help connect bank feeds, set up reconciliation rules, and create a simple process for matching transactions.",
  },
  {
    title: "Receipt capture workflow",
    text: "Your team takes photos of receipts and invoices through an app. We organize, review, and process them into your records.",
  },
  {
    title: "Xero training for owners and staff",
    text: "We train owners and staff to send invoices, upload receipts, review reports, and use Xero confidently.",
  },
];

const process = [
  "We understand your business, records, and compliance obligations.",
  "We set up or clean up your accounting system and document workflow.",
  "You submit receipts, invoices, and documents through a simple app or agreed process.",
  "We maintain your bookkeeping, monitor due dates, and prepare compliance filings.",
  "You receive practical reports, updates, and advice to stay tax-ready.",
];

const faqs = [
  {
    q: "Do you work with businesses that do not have in-house accountants?",
    a: "Yes. We can provide a simple app-based workflow where your team takes photos of receipts and invoices, while Prime handles the bookkeeping and compliance work.",
  },
  {
    q: "Can you help us move to Xero?",
    a: "Yes. Prime is a Xero Bronze Partner. We help with Xero setup, migration from existing records, chart of accounts setup, bank feeds, opening balances, and staff training.",
  },
  {
    q: "Do you offer fixed monthly accounting support?",
    a: "Yes. Fixed monthly support can be structured based on your business size, transaction volume, and compliance requirements.",
  },
  {
    q: "Can you assist with both IRC and IPA compliance?",
    a: "Yes. We assist with tax compliance, GST, salary and wages tax, corporate income tax, IPA annual returns, and related business compliance requirements.",
  },
];

function InquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1579B8]">Inquiry form</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F2937]">Request accounting support</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-100 px-3 py-1 text-xl leading-none text-slate-600 hover:bg-slate-200">
            ×
          </button>
        </div>

        <form
          className="mt-6 space-y-4"
          action="https://formsubmit.co/info@patspng.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New website inquiry - Prime Accounting & Tax Solutions" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.patspng.com/thank-you" />

          <div>
            <label className="block text-sm font-semibold text-slate-700">Email address</label>
            <input name="email" type="email" required placeholder="your@email.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#1579B8] focus:ring-2 focus:ring-[#1579B8]/20" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell us what you need help with..." className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#1579B8] focus:ring-2 focus:ring-[#1579B8]/20" />
          </div>
          <p className="text-xs leading-5 text-slate-500">
            Your message will be sent to info@patspng.com. The first test submission may require email activation from FormSubmit.
          </p>
          <Button type="submit" className="w-full py-4 text-base">Send</Button>
        </form>
      </div>
    </div>
  );
}

export default function PrimePngModernHomepage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const bookingLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1o-c4X7phQ7bwSBbSBYOUXBRbDioUwc79tHm2je3NQ-iuW5fNyeyML-sHi2kOfkjvTdDapeCkL";
  const whatsappLink = "https://wa.me/67575700800";

  return (
    <>
      <Head>
        <title>Prime Accounting & Tax Solutions | PNG Accounting, Tax & Compliance</title>
        <meta
          name="description"
          content="Prime helps small and medium-sized businesses in Papua New Guinea stay organized, compliant, and tax-ready through bookkeeping, IRC and IPA compliance support, Xero cloud accounting, and fixed monthly service options."
        />
      </Head>

      <main className="min-h-screen bg-[#F4F7FA] text-[#1F2937]">
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />

        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
            <a href="#home" className="flex items-center" aria-label="Prime Accounting & Tax Solutions homepage">
              <FullPrimeLogo compact />
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#services" className="hover:text-[#1579B8]">Services</a>
              <a href="#xero" className="hover:text-[#1579B8]">Xero</a>
              <a href="#process" className="hover:text-[#1579B8]">Process</a>
              <a href="#faq" className="hover:text-[#1579B8]">FAQ</a>
            </nav>
            <div className="hidden items-center gap-3 sm:flex">
              <Button href={whatsappLink} variant="grey">WhatsApp</Button>
              <Button href={bookingLink}>Book a Consultation</Button>
            </div>
          </div>
        </header>

        <section id="home" className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[#F4F7FA]" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#1579B8]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-slate-300/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex flex-col gap-5">
                <FullPrimeLogo />
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1579B8]/20 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/80">
                  <span className="text-[#1579B8]">✦</span>
                  Smart systems. Tax-ready. Always.
                </div>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#111827] md:text-6xl">
                Accounting, Tax & Compliance Support for PNG Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Prime helps small and medium-sized businesses in Papua New Guinea stay organized, compliant, and tax-ready through bookkeeping, IRC and IPA compliance support, Xero cloud accounting, and fixed monthly service options.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={bookingLink} className="px-7 py-4 text-base">
                  Book a Consultation <span className="ml-2">→</span>
                </Button>
                <Button variant="outline" className="px-7 py-4 text-base" href="#services">
                  View Services
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-slate-200/80"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> Xero Bronze Partner</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-slate-200/80"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> 20+ years PNG experience</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-slate-200/80"><CheckIcon className="h-4 w-4 text-[#1579B8]" /> IRC & IPA compliance</span>
              </div>
            </div>

            <div>
              <Card className="border-slate-200 bg-white/95 text-[#1F2937] shadow-2xl shadow-slate-300/40">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 rounded-3xl bg-[#EEF3F7] p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-[#1579B8]">Modern accounting workflow</p>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#13B5D1] text-lg font-light lowercase text-white shadow-md">xero</div>
                    </div>
                    <h2 className="mt-3 text-3xl font-bold text-[#111827]">From receipts to compliance filings — handled.</h2>
                    <p className="mt-4 leading-7 text-slate-600">
                      Your team submits receipts and invoices through a simple app. We organize the records, maintain the accounts, monitor deadlines, and prepare the required filings.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ["Capture receipts", "Upload receipts and invoices through the app."],
                      ["Organize records", "We classify, code, and maintain your bookkeeping records."],
                      ["Xero cloud accounting", "We set up, migrate, and manage your Xero workflow."],
                      ["Monitor deadlines", "GST, SWT, corporate tax, IPA annual returns, and related dates."],
                      ["Prepare filings", "Tax-ready books and compliance support when filings are due."],
                    ].map(([title, text]) => (
                      <div key={title} className="flex items-start gap-3 rounded-2xl bg-[#F4F7FA] px-4 py-3">
                        <CheckIcon className="mt-1 h-5 w-5 text-[#1579B8]" />
                        <div>
                          <div className="font-semibold text-[#1F2937]">{title}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                        </div>
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
              ["For SMEs", "Built for business owners who need reliable accounting support without hiring a full in-house finance team."],
              ["For growing teams", "Supports better workflows through Xero, receipt capture, staff training, and organized document collection."],
              ["For compliance", "Designed to help businesses stay on top of IRC, IPA, tax, and reporting obligations."],
            ].map(([title, text]) => (
              <Card key={title}>
                <CardContent className="p-7">
                  <h3 className="text-xl font-bold text-[#1F2937]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">Everything your business needs to stay organized and compliant.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                From monthly bookkeeping to tax compliance and Xero implementation, Prime provides practical support designed around the realities of running a business in Papua New Guinea.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon, title, text }) => (
                <Card key={title} className="bg-[#F4F7FA] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-300/60">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1579B8] text-white">
                      <span className="text-sm font-bold">{icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1F2937]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="xero" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] bg-[#EEF3F7] p-8 text-[#1F2937] shadow-xl shadow-slate-300/50 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <XeroTripleBadge compact />
              </div>
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Xero Bronze Partner</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">Move your accounting to the cloud with confidence.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                We help businesses set up Xero properly, migrate existing records, train users, and create a simple workflow for submitting receipts and invoices.
              </p>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1579B8]">Certified Advisor</p>
                <div className="mt-4 flex justify-center">
                  <XeroTripleBadge />
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {xeroFeatures.map(({ title, text }) => (
                <div key={title} className="flex min-h-[11rem] items-start gap-3 rounded-2xl bg-white p-5 shadow-sm shadow-slate-200/70">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#1579B8]" />
                  <div>
                    <h3 className="font-semibold leading-7 text-[#1F2937]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">How we work</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">A clear process from setup to compliance.</h2>
                <p className="mt-5 leading-8 text-slate-600">
                  We combine professional accounting judgment with modern tools so business owners can spend less time chasing paperwork and more time running the business.
                </p>
              </div>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div key={item} className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F4F7FA] p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1579B8] font-bold text-white">{index + 1}</div>
                    <p className="pt-2 leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:grid-cols-[1fr_0.8fr] md:p-12">
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Fixed monthly support</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">Predictable accounting support for your business.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                Instead of dealing with accounting only when a deadline is near, Prime can provide fixed monthly support based on your business size, transaction volume, and compliance needs.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-3xl bg-[#EAF5FB] p-6">
              {[
                "Monthly bookkeeping",
                "Compliance deadline monitoring",
                "Receipt and invoice handling",
                "GST and tax support",
                "Management-ready records",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-[#1579B8]" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
              <Button onClick={() => setIsInquiryOpen(true)} className="mt-4 py-4">Request a Fixed Monthly Quote</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">Common questions</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map(({ q, a }) => (
                <Card key={q} className="bg-[#F4F7FA]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#1F2937]">{q}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#3F4752] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Ready to simplify your accounting and tax compliance?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/80">
                Contact Prime to discuss bookkeeping, tax compliance, IPA requirements, Xero setup, migration, training, or fixed monthly accounting support.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Button href={bookingLink} variant="light" className="py-4 text-base">
                <span className="mr-2">✉</span> Book a Consultation
              </Button>
              <Button onClick={() => setIsInquiryOpen(true)} variant="grey" className="py-4 text-base">
                Send an Inquiry
              </Button>
              <Button href={whatsappLink} variant="light" className="py-4 text-base">
                Message us on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        <footer className="bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-slate-500 md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <FullPrimeLogo compact />
              <div>Smart systems. Tax-ready. Always.</div>
            </div>
            <XeroTripleBadge compact />
          </div>
        </footer>
      </main>
    </>
  );
}
