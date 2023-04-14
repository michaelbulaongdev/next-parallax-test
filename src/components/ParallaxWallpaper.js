import {ParallaxBanner} from 'react-scroll-parallax';

export default function ParallaxWallpaper() {
	return (
		<ParallaxBanner
			layers={[
				{
					image:
						'https://c0.wallpaperflare.com/preview/130/72/1008/sky-cloud-epic-orange.jpg',
					speed: -15,
				},
			]}
			className='half'
		/>
	);
}
