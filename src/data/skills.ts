import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';

export const skills = [
  // Row 1: Picture Card
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
    title: "WeighMyBru Scale",
    description: "Our smart coffee scale combines precision engineering with affordable pricing for the perfect brewing experience.",
    image: pic1.src,
  },
  // Row 1: Smart Coffee Intelligence Text
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    title: "Smart Coffee Intelligence",
    description: "WiFi & Bluetooth connectivity seamlessly integrates with your favorite brewing apps like Bean Conqueror and GaggiMate for perfect shots every time.",
  },
  // Row 2: Built for Coffee Lovers Text  
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    title: "Built for Coffee Lovers",
    description: "Designed by home baristas for home baristas. Every feature is crafted around real brewing workflows, from espresso dialing to pour-over perfection.",
  },
  // Row 2: Picture Card
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
    title: "Brewing Setup",
    description: "Perfect integration with your coffee brewing workflow and equipment setup.",
    image: pic2.src,
  },
  // Row 3: Picture Card
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
    title: "Community Image",
    description: "WeighMyBru community and Creative Commons licensed development.",
    image: pic3.src,
  },
  // Row 3: Community & Creative Commons Text
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>`,
    title: "Community & Creative Commons",
    description: "Join a growing community of coffee lovers. CC BY-NC-SA 4.0 licensed development means transparent progress, user-driven features, and endless customization possibilities.",
  },
];

export type Skill = (typeof skills)[number];

