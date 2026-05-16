import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Prime Accounting & Tax Solutions</title>
        <meta name="description" content="Thank you for contacting Prime Accounting & Tax Solutions." />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-[#F4F7FA] px-6 py-20 text-[#1F2937]">
        <section className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl shadow-slate-300/50">
          <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#1579B8]">Message sent</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-700">Thank you.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Your message has been sent. We will get in touch with you soon.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#1579B8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B5F95]"
          >
            Back to homepage
          </Link>
        </section>
      </main>
    </>
  );
}
