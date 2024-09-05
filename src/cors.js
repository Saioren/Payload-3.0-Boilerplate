export const cors = [
    process.env.PAYLOAD_PUBLIC_APP_URL,
    process.env.ENVIRONMENT === 'stage' ? 'http://localhost:3000' : undefined,
    'https://your-vercel-deployment.app',
    'https://www.your-domain-name.com',
    'https://your-domain-name.com',
].filter(Boolean);
