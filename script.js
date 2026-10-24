/**
 * ==============================================================================
 * SE.KERTASFOTO — JAVASCRIPT & CONFIGURATION
 * Website Statis Photobooth & Tangible Memory Studio
 * Handcrafted Human Touch, Modern, Cute & Interactive
 * ==============================================================================
 * 
 * PANDUAN PENGATURAN CEPAT UNTUK PEMILIK:
 * 1. Nomor WhatsApp: Ubah 'whatsappNumber' di bawah dengan nomor aktif Anda
 *    (Gunakan format internasional tanpa tanda +, contoh: "6281234567890").
 * 2. Instagram: Ubah 'instagramUrl' & 'instagramHandle' dengan akun studio Anda.
 * 3. Area Layanan: Ubah 'serviceArea' sesuai cakupan operasional Anda.
 * 4. Google Analytics 4: Masukkan ID Pengukuran GA4 Anda di 'ga4MeasurementId'.
 *    Jika dibiarkan kosong (""), pelacakan akan otomatis dinonaktifkan secara aman.
 * ==============================================================================
 */

const SE_CONFIG = {
  // Nama Brand
  brandName: "Se.kertasfoto",
  
  // Kontak WhatsApp Resmi
  whatsappNumber: "628981655905", 

  // Media Sosial
  instagramHandle: "@se.kertasfoto",
  instagramUrl: "https://instagram.com/se.kertasfoto",

  // Area Layanan (Akan tampil di Hero & Footer)
  serviceArea: "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) & Siap Luar Kota",

  // Pengaturan Bar Pengumuman di Atas Navbar
  announcement: {
    enabled: true, // Ubah ke 'false' jika ingin menyembunyikan pengumuman
    text: "✨ Jadwal 2026/2027 sudah dibuka! Booking lebih awal untuk amankan tanggal pernikahan & pesta kamu ♡",
    badge: "JADWAL DIBUKA",
    ctaText: "Lihat Paket",
    ctaLink: "#paket"
  },

  // Konfigurasi Paket Photobooth
  packages: {
    essential: {
      name: "Paket Essential",
      price: "Hubungi untuk Cek Harga",
      duration: "2 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Essential (2 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    },
    signature: {
      name: "Paket Signature",
      price: "Hubungi untuk Cek Harga",
      duration: "3 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Signature (3 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    },
    fullExperience: {
      name: "Paket Full Experience",
      price: "Hubungi untuk Cek Harga",
      duration: "4 Jam Layanan",
      inquiriesMessage: "Halo Se.kertasfoto! Saya tertarik menanyakan Paket Full Experience (4 Jam) untuk acara saya. Boleh info detail ketersediaan tanggal dan rincian harganya? Terima kasih!"
    }
  },

  // Google Analytics 4 (GA4) Measurement ID
  ga4MeasurementId: "" 
};

/* ==============================================================================
   GOOGLE ANALYTICS 4 (GA4) INTEGRATION (PRIVACY-SAFE)
   ============================================================================== */
(function initAnalytics() {
  const measurementId = SE_CONFIG.ga4MeasurementId ? SE_CONFIG.ga4MeasurementId.trim() : "";

  if (measurementId && measurementId.startsWith("G-")) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      send_page_view: true
    });

    console.info(`[Se.kertasfoto] GA4 aktif dengan ID: ${measurementId}`);
  } else {
    window.gtag = function () {};
    console.info("[Se.kertasfoto] GA4 tidak aktif. Masukkan ID Anda di SE_CONFIG.ga4MeasurementId pada script.js.");
  }
})();

function trackEvent(eventName, eventParams = {}) {
  try {
    if (typeof window.gtag === "function" && SE_CONFIG.ga4MeasurementId) {
      window.gtag("event", eventName, eventParams);
    }
  } catch (err) {
    console.warn("Analytics event tracking warning:", err);
  }
}

/* ==============================================================================
   CUTE MECHANICAL CAMERA SHUTTER & FLASH EFFECT
   Synthesizes a realistic gentle camera click using Web Audio API (No external mp3 needed!)
   ============================================================================== */
let audioCtx = null;

function playCameraShutterSound() {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    // First click (shutter opening)
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.05);

    // Second click (shutter closing - 50ms later)
    setTimeout(() => {
      if (!audioCtx) return;
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(650, audioCtx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.05);
      gain2.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(audioCtx.currentTime);
      osc2.stop(audioCtx.currentTime + 0.06);
    }, 55);
  } catch (e) {
    // Silent fallback if audio context is blocked
  }
}

function triggerCameraFlash() {
  const flashEl = document.getElementById("cameraFlashOverlay");
  playCameraShutterSound();
  if (flashEl) {
    flashEl.classList.add("flash-active");
    setTimeout(() => {
      flashEl.classList.remove("flash-active");
    }, 120);
  }
}

/* ==============================================================================
   WHATSAPP LINK BUILDER
   ============================================================================== */
function buildWhatsAppUrl(customMessage) {
  const rawNumber = SE_CONFIG.whatsappNumber ? SE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "") : "";
  const encodedText = encodeURIComponent(customMessage);
  
  if (!rawNumber) {
    showDevToast("Konfigurasi WhatsApp: Masukkan nomor di script.js pada variabel SE_CONFIG.whatsappNumber");
  }
  
  return `https://wa.me/${rawNumber}?text=${encodedText}`;
}

function showDevToast(message) {
  let toast = document.getElementById("devToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "devToast";
    toast.className = "dev-toast";
    toast.innerHTML = `
      <div style="color: #E05A38; font-size: 1.25rem; line-height: 1;">📷</div>
      <div>
        <p style="font-weight: 700; margin-bottom: 2px;">Catatan Pengaturan</p>
        <p style="color: #A8A29E; font-size: 0.8rem; margin: 0;">${message}</p>
      </div>
    `;
    document.body.appendChild(toast);
  } else {
    toast.querySelector("p:last-child").textContent = message;
  }
  
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

/* ==============================================================================
   DOM CONTENT LOADED INITIALIZATION
   ============================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Tahun Hak Cipta Dinamis
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Announcement Bar
  initAnnouncementBar();

  // 3. Navigasi & Mobile Menu
  initNavigation();

  // 4. WhatsApp Click Handlers
  initWhatsAppLinks();

  // 5. Parallax Efisien
  initParallax();

  // 6. Gallery Lightbox
  initGalleryLightbox();

  // 7. FAQ Accordion
  initFaqAccordion();

  // 8. Interactive Photo Strip Color Switcher
  initPhotoStripColorPicker();

  // 9. Interactive Shutter Button ("Say Cheese!")
  initShutterButton();
});

/* ==============================================================================
   1. ANNOUNCEMENT BAR
   ============================================================================== */
function initAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  const closeBtn = document.getElementById("closeAnnouncement");

  if (!bar) return;

  if (!SE_CONFIG.announcement.enabled) {
    bar.style.display = "none";
    return;
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      bar.style.display = "none";
      sessionStorage.setItem("sekertasfoto_announcement_dismissed", "true");
    });
  }

  if (sessionStorage.getItem("sekertasfoto_announcement_dismissed") === "true") {
    bar.style.display = "none";
  }
}

/* ==============================================================================
   2. NAVIGATION & MOBILE MENU
   ============================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbar = document.getElementById("mainNavbar");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileMenuBtn || !mobileMenu) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mobileMenu.classList.contains("active");
    if (isOpen) {
      mobileMenu.classList.add("active");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      setTimeout(() => {
        if (!mobileMenu.classList.contains("active")) {
          mobileMenu.style.display = "none";
        }
      }, 300);
    }
  }

  mobileMenuBtn.addEventListener("click", () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      toggleMenu(false);
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ==============================================================================
   3. WHATSAPP CLICK HANDLERS
   ============================================================================== */
function initWhatsAppLinks() {
  const waButtons = document.querySelectorAll("[data-wa-action]");

  waButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const action = button.getAttribute("data-wa-action");
      let message = "Halo Se.kertasfoto! Saya tertarik ingin tanya paket sewa photobooth untuk acara saya. Boleh info detail paket & ketersediaan tanggalnya? Terima kasih!";
      let packageName = "Pertanyaan Umum";

      if (action === "package") {
        const pkgKey = button.getAttribute("data-wa-package");
        const pkg = SE_CONFIG.packages[pkgKey];
        if (pkg) {
          message = pkg.inquiriesMessage || `Halo Se.kertasfoto! Saya ingin menanyakan ${pkg.name} untuk acara saya.`;
          packageName = pkg.name;
        }
      } else if (action === "experience") {
        const expTitle = button.getAttribute("data-wa-experience") || "Acara";
        message = `Halo Se.kertasfoto! Saya berencana mengadakan acara ${expTitle} dan tertarik menggunakan photobooth Se.kertasfoto. Boleh info paket yang cocok & ketersediaan tanggalnya?`;
        packageName = `Layanan: ${expTitle}`;
      } else if (action === "hero") {
        message = "Halo Se.kertasfoto! Saya ingin menanyakan ketersediaan tanggal dan info paket sewa photobooth untuk acara saya.";
        packageName = "Hero CTA";
      } else if (action === "final") {
        message = "Halo Se.kertasfoto! Saya sedang merencanakan acara spesial dan ingin konsultasi photobooth Se.kertasfoto. Boleh dibantu info ketersediaan tanggal dan paketnya?";
        packageName = "Final CTA";
      }

      trackEvent("whatsapp_click", {
        cta_location: action,
        package_name: packageName
      });

      const waUrl = buildWhatsAppUrl(message);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  });
}

/* ==============================================================================
   4. SIGNATURE PARALLAX FEATURE
   ============================================================================== */
function initParallax() {
  const parallaxSection = document.querySelector(".parallax-section");
  const parallaxImg = document.querySelector(".parallax-img");

  if (!parallaxSection || !parallaxImg) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let isTicking = false;
  let isVisible = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { rootMargin: "100px 0px" });

  observer.observe(parallaxSection);

  function updateParallax() {
    if (isVisible && window.innerWidth > 768) {
      const rect = parallaxSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const distanceFromCenter = sectionCenter - viewportHeight / 2;

      const maxOffset = 35;
      const offset = (distanceFromCenter / viewportHeight) * -maxOffset;
      const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));

      parallaxImg.style.setProperty("--parallax-offset", `${clampedOffset.toFixed(2)}px`);
    }
    isTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateParallax);
      isTicking = true;
    }
  }, { passive: true });

  updateParallax();
}

/* ==============================================================================
   5. PHOTO GALLERY LIGHTBOX (WITH FLASH ON OPEN)
   ============================================================================== */
function initGalleryLightbox() {
  const cards = document.querySelectorAll(".gallery-card");
  const modal = document.getElementById("galleryLightbox");
  if (!modal || cards.length === 0) return;

  const lightboxImg = modal.querySelector(".lightbox-img");
  const lightboxCaption = modal.querySelector(".lightbox-caption");
  const lightboxCounter = modal.querySelector(".lightbox-counter");
  const closeBtn = modal.querySelector(".lightbox-close");
  const prevBtn = modal.querySelector(".lightbox-prev");
  const nextBtn = modal.querySelector(".lightbox-next");

  let currentIndex = 0;
  let lastFocusedElement = null;

  const galleryItems = Array.from(cards).map((card, idx) => {
    const img = card.querySelector("img");
    const captionEl = card.querySelector(".gallery-caption-text");
    return {
      src: img ? img.getAttribute("src") : "",
      alt: img ? img.getAttribute("alt") : "Foto dokumentasi Se.kertasfoto",
      caption: captionEl ? captionEl.textContent.trim() : `Dokumentasi Foto 0${idx + 1}`
    };
  });

  function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

    trackEvent("gallery_view", {
      photo_index: currentIndex + 1,
      photo_title: item.caption
    });
  }

  function openLightbox(index) {
    lastFocusedElement = document.activeElement;
    triggerCameraFlash();
    showImage(index);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  cards.forEach((card, idx) => {
    card.addEventListener("click", () => openLightbox(idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-backdrop")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });
}

/* ==============================================================================
   6. ACCESSIBLE FAQ ACCORDION
   ============================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll(".accordion-neo, .accordion-item");

  items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    if (!header || !content) return;

    // Pastikan awal tertutup rapat
    if (!item.classList.contains("active")) {
      content.style.maxHeight = "0px";
      header.setAttribute("aria-expanded", "false");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      header.setAttribute("aria-expanded", "true");
    }

    header.addEventListener("click", () => {
      const isCurrentlyActive = item.classList.contains("active");

      // Tutup pertanyaan lain yang sedang terbuka
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherHeader = otherItem.querySelector(".accordion-header");
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
          if (otherContent) otherContent.style.maxHeight = "0px";
        }
      });

      if (isCurrentlyActive) {
        // Tutup item ini
        item.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0px";
      } else {
        // Buka item ini dengan meluncur ke bawah secara halus
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";

        trackEvent("faq_toggle", {
          question: header.textContent.trim()
        });
      }
    });
  });

  // Perbarui tinggi konten saat ukuran layar/jendela berubah
  window.addEventListener("resize", () => {
    items.forEach(item => {
      if (item.classList.contains("active")) {
        const content = item.querySelector(".accordion-content");
        if (content) content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }, { passive: true });
}

/* ==============================================================================
   7. INTERACTIVE PHOTO STRIP COLOR PICKER ("Coba Ganti Warna Frame!")
   ============================================================================== */
function initPhotoStripColorPicker() {
  const swatches = document.querySelectorAll(".strip-color-btn");
  const photostrips = document.querySelectorAll(".photostrip, .photostrip-neo");

  if (swatches.length === 0 || photostrips.length === 0) return;

  const themes = ["theme-cream", "theme-yellow", "theme-purple", "theme-noir"];

  swatches.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedTheme = btn.getAttribute("data-theme");
      
      swatches.forEach(b => b.classList.remove("scale-125", "ring-2", "ring-offset-2", "ring-ink"));
      btn.classList.add("scale-125", "ring-2", "ring-offset-2", "ring-ink");

      photostrips.forEach(strip => {
        themes.forEach(t => strip.classList.remove(t));
        strip.classList.add(selectedTheme);
      });

      playCameraShutterSound();
    });
  });
}

/* ==============================================================================
   8. INTERACTIVE SHUTTER BUTTON ("📸 Say Cheese!")
   ============================================================================== */
function initShutterButton() {
  const shutterBtns = document.querySelectorAll(".test-shutter-btn");
  shutterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerCameraFlash();
    });
  });
}
