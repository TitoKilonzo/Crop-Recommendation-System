// ─── Feature Definitions ─────────────────────────────────────────────────────
export const FEATURES = [
  {
    key: 'nitrogen',
    symbol: 'N',
    name: 'Nitrogen',
    icon: '🌿',
    color: '#4CAF50',
    gradFrom: '#1B5E20',
    gradTo: '#4CAF50',
    particleType: 'leaf',
    bgHue: '120',
    min: 0, max: 140, default: 60, step: 1, unit: 'kg/ha',
    importance: 0.84,
    accuracy: 0.71,
    fiScore: 0.79,
    anovaF: 0.72,
    spearman: 0.68,
    desc: 'Primary macronutrient fueling leaf growth & chlorophyll production. High N levels favour leafy crops; low N suits root vegetables and legumes.',
    range: '0 – 140 kg/ha',
    idealCrops: ['rice', 'maize', 'cotton', 'jute'],
  },
  {
    key: 'phosphorus',
    symbol: 'P',
    name: 'Phosphorus',
    icon: '🪨',
    color: '#FF8F00',
    gradFrom: '#E65100',
    gradTo: '#FF8F00',
    particleType: 'crystal',
    bgHue: '30',
    min: 5, max: 145, default: 60, step: 1, unit: 'kg/ha',
    importance: 0.72,
    accuracy: 0.64,
    fiScore: 0.68,
    anovaF: 0.65,
    spearman: 0.61,
    desc: 'Drives root development, flowering and energy transfer in plants (ATP). High P benefits fruiting crops; low P suits most cereals.',
    range: '5 – 145 kg/ha',
    idealCrops: ['pomegranate', 'grapes', 'apple', 'banana'],
  },
  {
    key: 'potassium',
    symbol: 'K',
    name: 'Potassium',
    icon: '⚡',
    color: '#FDD835',
    gradFrom: '#F57F17',
    gradTo: '#FDD835',
    particleType: 'spark',
    bgHue: '55',
    min: 5, max: 205, default: 80, step: 1, unit: 'kg/ha',
    importance: 0.91,
    accuracy: 0.76,
    fiScore: 0.87,
    anovaF: 0.82,
    spearman: 0.78,
    desc: 'Regulates water uptake, enzyme activation, and disease resistance. High K suits water-hungry tropical fruits; low K suits pulses.',
    range: '5 – 205 kg/ha',
    idealCrops: ['banana', 'coconut', 'watermelon', 'mango'],
  },
  {
    key: 'ph',
    symbol: 'pH',
    name: 'Soil pH',
    icon: '⚗️',
    color: '#00BCD4',
    gradFrom: '#006064',
    gradTo: '#00BCD4',
    particleType: 'bubble',
    bgHue: '190',
    min: 3.5, max: 9.5, default: 6.5, step: 0.1, unit: 'pH',
    importance: 0.96,
    accuracy: 0.82,
    fiScore: 0.94,
    anovaF: 0.91,
    spearman: 0.88,
    desc: 'Master variable controlling nutrient solubility across all crop types. Creates the strongest separability across all 22 crop classes.',
    range: '3.5 – 9.5',
    idealCrops: ['blueberry', 'potato', 'rice', 'coffee'],
  },
];

export const WINNER_KEY = 'ph';

// ─── Selection Method Data ────────────────────────────────────────────────────
export const METHODS = [
  { name: 'Random Forest', shortName: 'RF Imp.', n: { score: 0.84 }, p: { score: 0.72 }, k: { score: 0.91 }, ph: { score: 0.96 } },
  { name: 'Mutual Info', shortName: 'MI', n: { score: 0.79 }, p: { score: 0.68 }, k: { score: 0.87 }, ph: { score: 0.94 } },
  { name: 'ANOVA F-Score', shortName: 'ANOVA', n: { score: 0.72 }, p: { score: 0.65 }, k: { score: 0.82 }, ph: { score: 0.91 } },
  { name: 'Spearman ρ', shortName: 'Spearman', n: { score: 0.68 }, p: { score: 0.61 }, k: { score: 0.78 }, ph: { score: 0.88 } },
];

// ─── pH Range → Crop Mapping (for quick client-side hints) ────────────────────
export const PH_RANGES = [
  { min: 3.5, max: 5.0, crops: ['blueberry', 'cranberry'], label: 'Strongly Acidic' },
  { min: 5.0, max: 5.8, crops: ['rice', 'coffee', 'tea'], label: 'Moderately Acidic' },
  { min: 5.8, max: 6.5, crops: ['maize', 'wheat', 'chickpea'], label: 'Slightly Acidic' },
  { min: 6.5, max: 7.0, crops: ['lentil', 'mungbean', 'cotton'], label: 'Neutral–Optimal' },
  { min: 7.0, max: 7.8, crops: ['mango', 'banana', 'coconut'], label: 'Slightly Alkaline' },
  { min: 7.8, max: 9.5, crops: ['pomegranate', 'grapes'], label: 'Moderately Alkaline' },
];

// ─── Crop Reference ───────────────────────────────────────────────────────────
export const CROP_EMOJIS = {
  rice: '🌾', wheat: '🌾', maize: '🌽', chickpea: '🫘', kidneybeans: '🫘',
  pigeonpeas: '🫘', mothbeans: '🫘', mungbean: '🫘', blackgram: '🫘',
  lentil: '🫘', pomegranate: '🍎', banana: '🍌', mango: '🥭',
  grapes: '🍇', watermelon: '🍉', muskmelon: '🍈', apple: '🍎',
  orange: '🍊', papaya: '🍈', coconut: '🥥', cotton: '🌸',
  jute: '🌿', coffee: '☕', default: '🌱',
};

export const DATASET_STATS = {
  samples: 2200,
  crops: 22,
  features: 4,
  bestAccuracy: 82,
  bestFeature: 'pH',
};
