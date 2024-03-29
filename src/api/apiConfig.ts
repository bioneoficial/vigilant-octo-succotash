const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;
const userRoute = process.env.NEXT_PUBLIC_API_USER_ROUTE;
const pingRoute = process.env.NEXT_PUBLIC_API_PING_ROUTE;
const loginRoute = process.env.NEXT_PUBLIC_API_LOGIN_ROUTE;
const passwordRoute = process.env.NEXT_PUBLIC_API_PASSWORD_ROUTE;
const contentRoute = process.env.NEXT_PUBLIC_API_CONTENTHOME_ROUTE;
const couponRoute = process.env.NEXT_PUBLIC_API_COUPON_ROUTE;
const privacyRoute = process.env.NEXT_PUBLIC_API_PRIVACY_ROUTE;
const conteudoRoute = process.env.NEXT_PUBLIC_API_CONTEUDO_ROUTE;
const episodioRoute = process.env.NEXT_PUBLIC_API_EPISODIO_ROUTE;

export const apiConfig = {
    pingApiUrl: `${apiUrl}:${apiPort}${pingRoute}`,
    userApiUrl: `${apiUrl}:${apiPort}${userRoute}`,
    loginApiUrl: `${apiUrl}:${apiPort}${loginRoute}`,
    passwordApiUrl: `${apiUrl}:${apiPort}${userRoute}${passwordRoute}`,
    contentApiUrl: `${apiUrl}:${apiPort}${contentRoute}`,
    couponApiUrl: `${apiUrl}:${apiPort}${couponRoute}`,
    privacyApiUrl: `${apiUrl}:${apiPort}${privacyRoute}`,
    conteudoApiUrl: `${apiUrl}:${apiPort}${conteudoRoute}`,
    episodioApiUrl: `${apiUrl}:${apiPort}${episodioRoute}`,

  };