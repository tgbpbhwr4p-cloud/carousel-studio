# 🎨 Carousel Studio

Instagram Carousel Designer - läuft auf deinem Hostinger VPS.

## Was du bekommst

- **Multi-Slide Editor** - beliebig viele Slides, per Klick wechseln
- **Canvas-Tools** - Text, Rechtecke, Kreise, Bilder hochladen
- **Templates** - Dark Gradient, Bold White, Quote Card, Minimal Light
- **Backgrounds** - Solid Colors + Custom Gradient (vertikal / horizontal)
- **Properties Panel** - Farbe, Schriftart, Größe, Bold/Italic/Underline, Opacity, Position
- **Formate** - 1:1 (Feed), 4:5 (Portrait), 9:16 (Story/Reel)
- **Export** - PNG per Slide oder ZIP aller Slides in voller Auflösung (1080px)

---

## Deploy auf dem VPS (Docker)

### Voraussetzungen
```bash
# Docker & Docker Compose installieren (falls nicht vorhanden)
curl -fsSL https://get.docker.com | sh
apt install docker-compose-plugin -y
```

### 1. Dateien auf den VPS kopieren
```bash
# Per Git (empfohlen):
git clone https://github.com/tgbpbhwr4p-cloud/carousel-studio /opt/carousel-studio
```

### 2. Starten
```bash
cd /opt/carousel-studio
docker compose up -d --build
```

Das war's. Die App läuft auf Port **3000**.

### 3. Im Browser öffnen
```
http://DEINE_VPS_IP:3000
```

---

## Lokale Entwicklung

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Firewall (Port 3000 öffnen)
```bash
ufw allow 3000/tcp
ufw reload
```

---

## Projekt-Struktur

```
carousel-studio/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Entry point
│   └── globals.css        # Tailwind + custom styles
├── components/
│   ├── Studio.tsx         # Haupt-Komponente
│   ├── SlidePanel.tsx     # Linke Sidebar
│   ├── Toolbar.tsx        # Obere Toolbar
│   └── PropertiesPanel.tsx # Rechte Sidebar
├── lib/
│   ├── types.ts           # TypeScript-Types
│   ├── fabricHelpers.ts   # Fabric.js Utilities
│   └── exportHelpers.ts   # Export-Funktionen
├── Dockerfile
├── docker-compose.yml
└── package.json
```

---

## Technologien

- **Next.js 14** - React Framework
- **Fabric.js 5** - Canvas-Rendering
- **Tailwind CSS** - Styling
- **Docker** - Deployment
