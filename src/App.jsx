// src/App.jsx
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Suara Nusantara</h1>
        <p>Edukasi Alat Musik Tradisional Indonesia</p>
      </header>

      <main className="main-content">
        <div className="instrument-card">
          {/* Kamu bisa ganti teks ini dengan tag <img> nanti */}
          <div style={{ height: '200px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            [ Area Foto Alat Musik ]
          </div>
          <h3>Gamelan Jawa</h3>
          <p style={{ color: '#d1d1d1', fontSize: '0.9rem' }}>Ensembel musik yang menonjolkan metalofon, gambang, gendang, dan gong.</p>
        </div>

        <div className="description">
          <h2>Mengenal Harmoni Bambu & Kayu</h2>
          <p>
            Alat musik tradisional bukan sekadar benda, melainkan identitas bangsa. 
            Dari dentuman Gong yang megah hingga petikan Sasando yang syahdu, 
            mari pelajari sejarah dan cara memainkannya.
          </p>
          <button className="btn-explore">Mulai Belajar</button>
        </div>
      </main>

      <footer style={{ marginTop: 'auto', padding: '2rem', fontSize: '0.8rem' }}>
        © 2026 Proyek Edukasi Budaya
      </footer>
    </div>
  )
}

export default App