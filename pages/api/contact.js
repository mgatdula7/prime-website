export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  // Recommended setup: create a free Formspree form and add its endpoint
  // as a Vercel environment variable named FORMSPREE_ENDPOINT.
  // Example value: https://formspree.io/f/xxxxxxxx
  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    return res.status(500).json({
      error:
        "The contact form is not connected yet. Please add FORMSPREE_ENDPOINT in Vercel, or email info@patspng.com directly.",
    });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
        subject: "New website inquiry - Prime Accounting & Tax Solutions",
        _replyto: email,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({
        error:
          text || "The form service did not accept the message. Please try again or email info@patspng.com directly.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error:
        "The message could not be sent. Please try again or email info@patspng.com directly.",
    });
  }
}
