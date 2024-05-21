const middleware = [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'img-src': ["'self'", 'data:', 'blob:', process.env.DO_SPACE_CDN],
					'media-src': ["'self'", 'data:', 'blob:', process.env.DO_SPACE_CDN],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];

export default middleware;