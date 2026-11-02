# 👗✨ TEMMY WEARS

### Style Your Confidence. Wear Your Story.

**Temmy Wears** is a stylish fashion website concept for showcasing clothing, shoes, jewellery, and accessories. It features a full-screen video background, colourful brand typography, and a direct WhatsApp contact link so customers can reach the business easily.

---

## 🌟 Website Features

- 🎥 **Full-screen video background** using the supplied video.
- 🎨 **Styled, colourful TEMMY WEARS branding** with a gradient text effect.
- 📱 **Responsive layout** for mobile phones, tablets, and computers.
- 💬 **WhatsApp contact button** for quick customer enquiries.
- 🛍️ Space to add clothing, shoes, jewellery, and accessories.
- ✨ A modern hero section with a dark overlay so the brand name remains readable.

## 📞 Contact Temmy Wears

- **Phone:** +234 806 434 9486
- **WhatsApp:** [Chat with Temmy Wears](https://wa.me/2348064349486)

The WhatsApp link opens a chat with the supplied number. The customer must press Send to send a message.

---

## 📁 Project Files

```text
temmy-wears/
├── README.md
└── public/
    └── videos/
        └── background-video.mp4
```

Keep the video at `public/videos/background-video.mp4` so the example below can find it.

## 🧩 Example Website Background

Add this HTML to your page and the CSS to your stylesheet. If you are using React or Next.js, adapt the HTML attributes to JSX (for example, `class` becomes `className`).

### HTML

```html
<main class="hero">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="/videos/background-video.mp4" type="video/mp4">
    Your browser does not support embedded videos.
  </video>

  <div class="hero-overlay"></div>

  <header class="topbar">
    <a class="brand" href="#" aria-label="Temmy Wears home">
      TEMMY <span>WEARS</span>
    </a>

    <a
      class="whatsapp-button"
      href="https://wa.me/2348064349486?text=Hello%20Temmy%20Wears%2C%20I%27d%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat on WhatsApp
    </a>
  </header>

  <section class="hero-content">
    <p class="eyebrow">FASHION • STYLE • CONFIDENCE</p>
    <h1>Wear Your <span>Confidence.</span></h1>
    <p class="hero-description">
      Discover a look that speaks for you. Find your next favourite style
      with Temmy Wears.
    </p>
    <a
      class="main-button"
      href="https://wa.me/2348064349486?text=Hello%20Temmy%20Wears%2C%20please%20send%20me%20your%20available%20items."
      target="_blank"
      rel="noopener noreferrer"
    >
      Shop With Us
    </a>
    <p class="phone-number">Call / WhatsApp: +234 806 434 9486</p>
  </section>
</main>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

.hero {
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: column;
  color: #fff;
  background: #17121b;
  isolation: isolate;
}

.hero-video,
.hero-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-video {
  z-index: -2;
  object-fit: cover;
}

.hero-overlay {
  z-index: -1;
  background: linear-gradient(
    110deg,
    rgba(13, 8, 20, 0.82),
    rgba(22, 10, 28, 0.42),
    rgba(10, 10, 10, 0.58)
  );
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 26px clamp(20px, 6vw, 80px);
}

.brand {
  color: #ff4fa3;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 900;
  letter-spacing: 2px;
  text-decoration: none;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.4);
}

.brand span {
  color: #ffd166;
}

.whatsapp-button,
.main-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 13px 22px;
  color: #fff;
  background: #159b5a;
  font-weight: 700;
  text-decoration: none;
  transition: transform 180ms ease, filter 180ms ease;
}

.whatsapp-button:hover,
.main-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.hero-content {
  width: min(760px, 100%);
  margin: auto 0;
  padding: 55px clamp(20px, 8vw, 110px) 90px;
}

.eyebrow {
  color: #ffd166;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 4px;
}

.hero-content h1 {
  margin: 15px 0;
  font-size: clamp(2.7rem, 8vw, 6rem);
  line-height: 1.02;
  font-weight: 900;
}

.hero-content h1 span {
  display: block;
  color: #ff4fa3;
  background: linear-gradient(90deg, #ff4fa3, #ffd166, #8be9fd);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  max-width: 560px;
  color: #f4edf6;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.7;
}

.main-button {
  margin-top: 16px;
  color: #241323;
  background: linear-gradient(90deg, #ffd166, #ff8cc6);
}

.phone-number {
  margin-top: 24px;
  color: #fff;
  font-weight: 700;
}

@media (max-width: 520px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .whatsapp-button {
    padding: 10px 16px;
  }

  .hero-content {
    padding-top: 35px;
    padding-bottom: 55px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-button,
  .main-button {
    transition: none;
  }
}
```

## ▶️ Run the Website Locally

This README contains a design example, not a complete installed website. To preview it, place the HTML in your project's page file and the CSS in your stylesheet, then run the development server for your chosen framework.

For example, in a configured Node.js project:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. In most Next.js projects, this is `http://localhost:3000`.

## 🌐 Publish It Online

1. Put the project files in a GitHub repository.
2. Deploy the website using a host that supports your framework.
3. Upload `background-video.mp4` with the site assets.
4. Test the video background on mobile and desktop.
5. Test the WhatsApp button.
6. Add a custom domain if desired.

**Performance tip:** Background videos can be large. Compress the video for web use, keep a suitable poster image as a fallback, and consider using a lower-resolution version on mobile. Some mobile browsers may delay or block autoplay; muted playback and `playsinline` improve compatibility.

---

## 💖 Brand Message

**TEMMY WEARS — Bold Looks. Beautiful Style. Your Confidence.**

*Fashion that lets your personality shine.*
