src/
├── components/
│   └── ItemList.tsx        # Optimized 1:1 Instagram-style catalog layout grid
├── context/
│   └── ThemeContext.tsx    # State management for cross-component selections
├── data/
│   └── items.ts            # Decoupled database mimicking production-ready structures
├── pages/
│   ├── ThemeSelectionPage.tsx  # Full-bleed landing page and preditive category selector
│   └── HomePage.tsx        # Multi-step layout workflow with invoice-style review systems
└── types/
└── index.ts            # Shared strict TypeScript interfaces

---

## 🚀 Key Features Implemented

1. **Full-Bleed Hero & Section Snap:** Immersive layout configuration utilizing explicit vertical window boundaries (`100vh`) avoiding mid-scroll breaks or unstyled page gaps.
2. **Predictive Search & Tag Binding:** Enhanced Material UI `Autocomplete` combined with interactive category grid blocks acting as instantaneous reactive input triggers.
3. **Instagram-Style Visual Feed:** The catalog enforces a fixed proportional box layout (`pt: "100%"`) ensuring symmetrical card rendering regardless of image orientation anomalies.
4. **Invoice-Style Review Modal:** A widened, high-contrast review block featuring subtle dashes, bold black total banners, and targeted native WhatsApp API payloads.

---

## 🔧 Installation & Setup

To run this project locally, ensure you have **Node.js** installed, then execute the following sequence:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/pam-art-events.git](https://github.com/your-username/pam-art-events.git)
   cd pam-art-events
2. Install all production and strict type dependencies:
