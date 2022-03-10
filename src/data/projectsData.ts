import DiscordBotLogo from 'assets/projectLogos/discordbotglow.png';
import LedControlLogo from 'assets/projectLogos/ledcontrol.png';
import FourierSeries from 'assets/projectLogos/fouriertransform.png';
import Initials from 'assets/icons/initials-split.svg';

export type ProjectData = {
  id: number;
  imageSrc: StaticImageData;
  imageAlt: string;
  desc: string;
  title: string;
  tags: string[];
  codeLink: string;
  demoLink: string;
};

const data: ProjectData[] = [
  {
    id: 3,
    imageSrc: FourierSeries,
    imageAlt: 'Fourier Series Logo',
    desc: "A fun little (WIP) project that visualizes how a fourier series approximates a periodic continuous signal with discrete sum of periodic functions. My ultimate goal for this project is for it to be able to visualize ANY svg image. Inspired by 3B1B's video: https://youtu.be/r6sGWTCMz2k",
    title: 'Fourier Series Visualization',
    tags: ['html', 'css', 'js'],
    codeLink: 'https://github.com/realGiB/fourier-series-from-path',
    demoLink: 'https://fourier-series-from-path.vercel.app/',
  },
  {
    id: 2,
    imageSrc: LedControlLogo,
    imageAlt: 'Led Control Logo',
    desc: 'This project was both a website and a server/microcontroller for me to drive a RGB LED strip through a raspberry pi. The website and raspberry pi communicated through the HTTP protocol. This is the website end of the project. No, you cant control my strip from the demo 🤭',
    title: 'Led Strip Controller',
    tags: ['python', 'Vue', 'linux', 'html', 'css', 'js', 'http'],
    codeLink: 'https://github.com/realGiB/led-control-vue',
    demoLink: 'https://led-control-vue.vercel.app/',
  },
  {
    id: 1,
    imageSrc: DiscordBotLogo,
    imageAlt: 'Discord Bot Logo',
    desc: "A discord moderation and meme bot designed for personal use. I made this because there weren't any bots available that did what I needed them to.",
    title: 'Personal Discord Bot',
    tags: ['js', 'node', 'DISCORD.JS'],
    codeLink: 'https://github.com/realGiB/yeet-discord-bot',
    demoLink: '',
  },
  {
    id: 4,
    imageSrc: Initials,
    imageAlt: 'Website Logo',
    desc: 'My personal website to display my portfolio. Built to be responsive, adaptable, and bold. Welcome!',
    title: 'Portfolio Website',
    tags: ['React', 'node', 'next', 'html', 'css', 'js'],
    codeLink: 'https://github.com/realGiB/portfolio',
    demoLink: 'https://realgib.com',
  },
];
export default data;
