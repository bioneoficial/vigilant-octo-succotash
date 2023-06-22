const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;
const userRoute = process.env.NEXT_PUBLIC_API_USER_ROUTE;
const pingRoute = process.env.NEXT_PUBLIC_API_PING_ROUTE;
const loginRoute = process.env.NEXT_PUBLIC_API_LOGIN_ROUTE;
const passwordRoute = process.env.NEXT_PUBLIC_API_PASSWORD_ROUTE;

export const apiConfig = {
    pingApiUrl: `${apiUrl}:${apiPort}${pingRoute}`,
    userApiUrl: `${apiUrl}:${apiPort}${userRoute}`,
    loginApiUrl: `${apiUrl}:${apiPort}${loginRoute}`,
    passwordApiUrl: `${apiUrl}:${apiPort}${userRoute}${passwordRoute}`,
  };