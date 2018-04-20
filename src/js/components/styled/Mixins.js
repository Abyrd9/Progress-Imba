export const Shadow = (depth) => {
	switch(depth) {
	case 1:
		return 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
		break;
	case 2:
		return 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'
		break;
	case 3:
		return 'box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);'
		break;
	case 4:
		return 'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
		break;
	case 5:
		return 'box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
		break;
	}
}

export const Colors = {
	Blue: '#566270',
	Tan: '#e0e3da',
	White: '#fffff3',
	PaperWhite: '#E8E8DD',
	Purple: '#a593e0',
	PurpleDark: '#8073ab',
	Gray: '#c9c9c9',
	Black: '#404040',
}

export const Font = `font-family: 'Open Sans', sans-serif; font-weight: 800;`;
export const FontSize = size => {
	switch(size) {
	case "goal":
		return 'font-size: 32px;';
		break;
	case "subgoal":
		return 'font-size: 28px;';
		break;
	case "task":
		return 'font-size: 24px;';
		break;
	}
}
// Media Queries

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}

export const Device = {
	MobileS: `(min-width: ${size.mobileS})`,
	MobileM: `(min-width: ${size.mobileM})`,
	MobileL: `(min-width: ${size.mobileL})`,
	Tablet: `(min-width: ${size.tablet})`,
	Laptop: `(min-width: ${size.laptop})`,
	LaptopL: `(min-width: ${size.laptopL})`,
	Desktop: `(min-width: ${size.desktop})`,
	DesktopL: `(min-width: ${size.desktop})`
};