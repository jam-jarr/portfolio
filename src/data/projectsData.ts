import DiscordBotLogo from 'assets/projectLogos/discordbotglow.png';
import LedControlLogo from 'assets/projectLogos/ledcontrol.png';
import FourierSeries from 'assets/projectLogos/fouriertransform.png';

export type ProjectData = {
  id: number;
  imageSrc: StaticImageData;
  imageAlt: string;
  desc: string;
  title: string;
  tags: string[];
}

const data: ProjectData[] = [
  {
    id: 3,
    imageSrc: FourierSeries,
    imageAlt: 'Fourier Series Logo',
    desc: 'three',
    title: '',
    tags: ['one', 'two'],
  },
  {
    id: 1,
    imageSrc: DiscordBotLogo,
    imageAlt: 'Discord Bot Logo',
    desc: 'This project was ',
    title: 'Personal Discord Bot',
    tags: ['javascript', 'node', 'DISCORD.JS'],
  },
  {
    id: 2,
    imageSrc: LedControlLogo,
    imageAlt: 'Led Control Logo',
    desc: 'two',
    title: '',
    tags: ['one', 'two'],
  },
];
export default data;
