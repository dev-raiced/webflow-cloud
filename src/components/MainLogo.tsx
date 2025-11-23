import { FC, SVGProps } from 'react';

const defaultLogo = `<g id="main-logo"><path id="Path_1" data-name="Path 1" d="M132.218,125.231H135.4l-3.956,20.289h8.277l-.222,1.2H128.04Z" transform="translate(-128.04 -124.677)" />
  <path id="Path_2" data-name="Path 2" d="M164.183,138c-.633,3.244-1.551,5.713-3.7,7.375a8.816,8.816,0,0,1-5.666,1.71c-4.4,0-6.852-1.947-6.852-6.346a24.339,24.339,0,0,1,.49-4.4l2.168-11.11H153.8l-2.342,11.98a27,27,0,0,0-.586,4.621c0,2.976,1.678,4.051,4.226,4.051a7.466,7.466,0,0,0,4.684-1.47c1.868-1.473,2.644-3.768,3.165-6.457l2.485-12.724h1.235Z" transform="translate(-130.699 -124.677)" />
  <path id="Path_3" data-name="Path 3" d="M192.987,125.175l-4.241,21.856-12.6-16.823-3.2,16.459h-1.218l4.241-21.856,12.6,16.823,3.2-16.458Z" transform="translate(-133.873 -124.62)" />
  <path id="Path_4" data-name="Path 4" d="M211.325,140.307h-8.451l-3.813,6.331h-1.346l13.326-22.046,4.748,22.046h-3.1Zm-7.722-1.2h7.454l-1.946-9.116Z" transform="translate(-137.342 -124.591)" />
  <path id="Path_5" data-name="Path 5" d="M218.418,154.677l.237-1.3c2.47-1.342,4.891-3.148,6.141-9.7l3.546-18.447h3.181L228.2,142.5C226.093,153.366,218.418,154.677,218.418,154.677Z" transform="translate(-140.105 -124.677)" />
  <path id="Path_6" data-name="Path 6" d="M243.417,126.433l-1.693,8.721h7.85l-.206,1.2h-7.882L239.7,145.52h9.386l-.206,1.2H236.295l4.178-21.492h12.582l-.206,1.2Z" transform="translate(-142.492 -124.677)" />
  <path id="Path_7" data-name="Path 7" d="M277.154,126.433h-6.6l-3.94,20.29h-3.166l3.941-20.29h-6.552l.206-1.2h16.317Z" transform="translate(-145.768 -124.677)" />
  <path id="Path_8" data-name="Path 8" d="M294.5,127.4a7.231,7.231,0,0,0-4.274-1.314c-2.469,0-4.4,1.093-4.4,3.214,0,1.8,1.33,2.8,3.244,4.209,2.976,2.168,4.986,3.91,4.986,7.027,0,4.5-4.146,6.395-8.119,6.395A10.348,10.348,0,0,1,279.605,145l.333-1.694a8.63,8.63,0,0,0,5.95,2.422c3.15,0,5.065-1.74,5.065-4.257,0-1.9-1.092-2.929-3.213-4.669-3.086-2.517-4.716-3.878-4.716-6.409,0-3.656,3.324-5.507,7.328-5.507a10.3,10.3,0,0,1,4.462.886Z" transform="translate(-148.274 -124.63)" /></g>`;

const linkedLogo = `<use href="#main-logo" />`;

type LogoProps = {
  className?: string;
  main?: boolean;
  ariaLabel?: string;
};

const MainLogo: FC<LogoProps> = ({ className, main = true, ariaLabel }) => {
  const logoAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '146.54',
    height: '30',
    viewBox: '0 0 146.54 30',
    className,
    'aria-label': ariaLabel,
    dangerouslySetInnerHTML: { __html: main ? defaultLogo : linkedLogo },
  } as SVGProps<SVGSVGElement>;

  return <svg {...logoAttributes} />;
};

export default MainLogo;
