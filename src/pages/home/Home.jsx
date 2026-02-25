import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      /* ================= PARALLAX HOME ================= */
      const moon = document.querySelector(".moon"); //bulannya kurang diperbesar
      const ast = document.querySelector(".ast"); // astronotnya terbang ke kanan, bukan ke bawah
      const title = document.querySelector(".title");
      const p2 = document.querySelector(".p2"); //geser kiri
      const p3 = document.querySelector(".p3"); //geser kanan

      if (moon) moon.style.transform = `translateY(${value * 0.8}px)`;
      if (ast) ast.style.transform = `translateY(${value * 1.2}px)`;
      if (title) title.style.transform = `translateY(${value * 0.5}px)`;
      if (p2) p2.style.transform = `translateY(${value * 0.2}px)`;
      if (p3) p3.style.transform = `translateY(${value * 0.1}px)`;

      /* ================= PARALLAX ABOUT ================= */
      const about = document.querySelector(".about");
      if (!about) return;

      const aboutTop = about.offsetTop;
      const offset = value - aboutTop;

      // Animasi hanya jalan saat section about terlihat di viewport
      if (value >= aboutTop - window.innerHeight) {
        const moon2 = document.querySelector(".moon2");
        const water = document.querySelector(".water");
        const grass = document.querySelector(".grass");
        const kabut = document.querySelector(".kabut");
        const man = document.querySelector(".man");
        const perahu = document.querySelector(".perahu");

        if (moon2) moon2.style.transform = `translateY(${offset * 0.3}px)`;
        if (water) water.style.transform = `translateY(${offset * 0.15}px)`;
        if (grass) grass.style.transform = `translateY(${offset * 0.1}px)`;
        if (kabut) kabut.style.transform = `translateY(${offset * 0.25}px)`;
        if (man) man.style.transform = `translateY(${offset * 0.12}px)`;
        if (perahu) perahu.style.transform = `translateY(${offset * 0.18}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-wrapper">
      <header className="header">
        <img src="/home-img/logo.png" alt="logo" className="logo" />
        <ul className="navlist">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#region-section">Region</a></li>
          <li><a href="#fasilitas">Content</a></li>
          <li><a href="#ticket">Contact</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </header>

      {/* SECTION: HOME */}
      <section className="parallax-home" id="home">
        <img src="/home-img/sky.jpg" alt="" className="layer sky" />
        <img src="/home-img/moon.png" alt="" className="layer moon" />
        <h1 className="title">Planetarium Jakarta</h1>
        <img src="/home-img/p3.png" alt="" className="layer p3" />
        <img src="/home-img/p2.png" alt="" className="layer p2" />
        <img src="/home-img/ast.png" alt="" className="layer ast" />
      </section>

      {/* SEKSI ABOUT (FIXED) */}
      <section className="about" id="about">
        {/* Latar Belakang Lingkungan */}
        <img src="/about-img/desert-NoSky.png" className="about-layer sky-bg" alt="" />
        <img src="/about-img/desert-moon.png" className="about-layer moon2" alt="" />
        <img src="/about-img/desert.png" className="about-layer desert" alt="" />
        
        {/* Air dan Objek di Atas Air */}
        <div className="water-container">
            <img src="/about-img/water.png" className="about-layer water" alt="" />
            {/* PERAHU: Pastikan menggunakan file PNG transparan agar tidak ada kotak putih */}
            <img src="/about-img/perahukertas.jpg" className="about-layer perahu" alt="boat" />
        </div>

        {/* Tanaman Depan & Kabut */}
        <img src="/about-img/grass.png" className="about-layer grass" alt="" />
        <img src="/about-img/kabut.png" className="about-layer kabut" alt="" />

        {/* Kotak Informasi Sesuai Gambar */}
        <div className="info-content-wrapper">
            <div className="info-box-modern">
                <h2>About Planetarium</h2>
                <p>
                    Planetarium Jakarta menghadirkan pengalaman eksplorasi luar angkasa
                    dengan teknologi simulasi modern yang imersif dan edukatif.
                </p>
                {/* Opsional: Tombol Read More jika ingin mengikuti gambar kedua */}
                <button className="read-more-btn">Read More!</button>
            </div>
        </div>
      </section>

      {/* SECTION: REGION */}
      <section className="region-section">
        <div className="region-container">
          <div className="region-header">
            <h2>Jelajahi Berdasarkan Wilayah</h2>
            <p>Temukan kekayaan musik tradisional dari berbagai pulau di Indonesia</p>
          </div>

          <div className="region-grid">
            <div className="region-card bg-sumatera">
              <h3>Sumatera</h3>
              <p>Talempong, Saluang, Gordang Sambilan</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
            <div className="region-card bg-jawa">
              <h3>Jawa</h3>
              <p>Gamelan, Angklung, Rebab</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
            <div className="region-card bg-kalimantan">
              <h3>Kalimantan</h3>
              <p>Sampek (Sape), Garantung</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
            <div className="region-card bg-sulawesi">
              <h3>Sulawesi</h3>
              <p>Kolintang, Keso-keso</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
            <div className="region-card bg-papua">
              <h3>Papua</h3>
              <p>Tifa, Pikon, Krombi</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
            <div className="region-card bg-bali">
              <h3>Bali & Nusa Tenggara</h3>
              <p>Sasando, Gamelan Gong Kebyar</p>
              <a href="#" className="explore-link">Jelajahi <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;