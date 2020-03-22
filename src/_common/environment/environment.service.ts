export const isClient = GJ_IS_CLIENT;
export const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';

interface SsrContext {
	ua: string;
	url: string;
	meta: any;
	errorCode?: number;
	redirect?: string;
}

export class Environment {
	static env: 'production' | 'development' = GJ_ENVIRONMENT;
	static buildType: 'production' | 'development' = GJ_BUILD_TYPE;
	static isClient = GJ_IS_CLIENT;
	static isSecure = isSecure;

	static ssrContext: SsrContext = {
		ua: '',
		url: '',
		meta: {},
	};

	// Production defaults.
	static baseUrlInsecure = 'http://gamejolt.com';
	static baseUrl = 'https://gamejolt.com';
	static wttfBaseUrl = 'https://gamejolt.com';
	static authBaseUrl = 'https://gamejolt.com';
	static checkoutBaseUrl = 'https://gamejolt.com';
	static helpBaseUrl = 'https://gamejolt.com/help';
	static clientSectionUrl = '';

	static jamsBaseUrl = 'http://jams.gamejolt.com';
	static jamsIoBaseUrl = 'http://jams.gamejolt.io';
	static firesideBaseUrl = 'http://fireside.gamejolt.com';
	static devBaseUrl = 'http://dev.gamejolt.com';
	static gameserverUrl = (isSecure ? 'https' : 'http') + '://gamejolt.net';
	static mediaserverUrl = 'https://m.gjcdn.net';

	static apiHost = 'https://gamejolt.com';
	static graphexHost = 'http://web-01.gamejolt.com:9666';
	static gameserverApiHost = 'https://gamejolt.net';
	static activityStreamHost = 'https://activity.gamejolt.com';
	static chatHost = 'https://chat.gamejolt.com';
	static widgetHost = 'https://widgets.gamejolt.com';
	static gridHost = 'https://grid.gamejolt.com/grid/host';
	static recaptchaSiteKey = '6Led_UAUAAAAAB_ptIOOlAF5DFK9YM7Qi_7z8iKk';
}

if (GJ_ENVIRONMENT === 'development') {
	Environment.baseUrl = GJ_TUNNELS.frontend || 'http://localhost:8080';
	Environment.baseUrlInsecure = GJ_TUNNELS.frontend || 'http://localhost:8080';
	Environment.wttfBaseUrl = GJ_TUNNELS.frontend || 'http://localhost:8080';
	Environment.authBaseUrl = GJ_TUNNELS.frontend || 'http://localhost:8080';
	Environment.checkoutBaseUrl = GJ_TUNNELS.frontend || 'http://localhost:8080';
	Environment.helpBaseUrl = 'http://localhost:8080/help';

	Environment.jamsBaseUrl = 'http://jams.development.gamejolt.com';
	Environment.jamsIoBaseUrl = 'http://jams.development.gamejolt.io';
	Environment.firesideBaseUrl = 'http://fireside.development.gamejolt.com';
	Environment.devBaseUrl = 'http://dev.development.gamejolt.com';
	Environment.gameserverUrl = 'http://development.gamejolt.net';
	Environment.mediaserverUrl = 'http://media.development.gamejolt.com';

	Environment.apiHost = GJ_TUNNELS.backend || 'http://development.gamejolt.com';
	Environment.graphexHost = 'http://localhost:9666';
	Environment.gameserverApiHost = 'http://development.gamejolt.com';
	Environment.activityStreamHost = 'http://activity.development.gamejolt.com';
	Environment.chatHost = 'http://chat.development.gamejolt.com';
	Environment.widgetHost = 'http://localhost:8086';
	Environment.gridHost = 'http://grid:4000/grid/host';
	Environment.recaptchaSiteKey = '6LcwTkEUAAAAAHTT67TB8gkM0ft5hUzz_r_tFFaT';
}

if (GJ_IS_CLIENT) {
	// When it gets packaged up for production, the URL changes.
	if (
		window.location.href.search(/^chrome\-extension\:\/\/game\-jolt\-client\/package\//) !== -1
	) {
		Environment.wttfBaseUrl = 'chrome-extension://game-jolt-client/package/index.html#';
		Environment.authBaseUrl = 'chrome-extension://game-jolt-client/package/auth.html#';
		Environment.checkoutBaseUrl = 'chrome-extension://game-jolt-client/package/checkout.html#';
		Environment.clientSectionUrl = 'chrome-extension://game-jolt-client/package/client.html#';
	} else {
		Environment.wttfBaseUrl = 'chrome-extension://game-jolt-client/index.html#';
		Environment.authBaseUrl = 'chrome-extension://game-jolt-client/auth.html#';
		Environment.checkoutBaseUrl = 'chrome-extension://game-jolt-client/checkout.html#';
		Environment.clientSectionUrl = 'chrome-extension://game-jolt-client/client.html#';
	}
}
