// Build a list of available SVG logos from src/assets/logos
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  // Vite v5 style: returns string URLs
  query: '?url',
  import: 'default',
});

type LogoItem = { name: string; logo: string; status?: 'available' | 'coming-soon'; };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // strip trailing "-logo" or "logo" (case-insensitive)
  const withoutLogo = withoutExt.replace(/-?logo$/i, '');
  // normalize separators to spaces
  const normalized = withoutLogo.replace(/[_-]+/g, ' ');
  
  // Special case for GaggiMate - keep it as one word
  if (normalized.toLowerCase() === 'gaggiimate') {
    return 'GaggiMate';
  }
  
  // insert space between camelCase words: GoogleAds -> Google Ads
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Title case each word
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

// Define which integrations are available vs coming soon
const integrationStatus: Record<string, 'available' | 'coming-soon'> = {
  'GaggiMate': 'available',
  'Bean Conqueror': 'available', 
  'Wi Fi': 'available',
  'Bluetooth': 'available',
  'Gaggiuino': 'available',
  'Clever Coffee': 'coming-soon',
  'Weighmybru': 'available',
};

export const logos: LogoItem[] = Object.entries(modules)
  .map(([path, url]) => {
    const name = toNiceName(path);
    return {
      name,
      logo: url as string,
      status: integrationStatus[name] || 'available'
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export type { LogoItem };


