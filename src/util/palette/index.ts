// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Palette {
	export enum Color {
		PRIMARY = 'primary',
		SECONDARY = 'secondary',
		ACCENT = 'accent'
	}
	export interface Unit {
		color: string;
		backgroundColor: string;
		borderColor?: string;
	}

	export enum Action {
		BASE = 'base',
		HOVER = 'hover',
		ACTIVE = 'active'
	}

	export type Group<T = Unit> = {
		[key in Action]: T;
	};

	export type Harmony<T = Unit> = {
		[key in Color]: Group<T>;
	};

	export const ColorUnit: Harmony = {
		primary: {
			base: { color: '#333333', backgroundColor: '#ebeef2', borderColor: '#bebfc2' },
			hover: { color: '#333333', backgroundColor: '#dfe2e6', borderColor: '#bebfc2' },
			active: { color: '#FFFFFF', backgroundColor: '#333333', borderColor: '#333333' }
		},
		secondary: {
			base: { color: '#262626', backgroundColor: '#7e899a', borderColor: '#a6aeba' },
			hover: { color: '#228b22', backgroundColor: '#7e899a', borderColor: '#228b22' },
			active: { color: '#228b22', backgroundColor: '#7e899a', borderColor: '#228b22' }
		},
		accent: {
			base: { color: '#F9F5EB', backgroundColor: '#6ba543', borderColor: '#6ba543' },
			hover: { color: '#F9F5EB', backgroundColor: '#73b349', borderColor: '#73b349' },
			active: { color: '#F9F5EB', backgroundColor: '#669e41', borderColor: '#669e41' }
		}
	};
}
