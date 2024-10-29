import Github from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    providers: [
        Github({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: import.meta.env.AUTH_SECRET,
    trustHost: import.meta.env.AUTH_TRUST_HOST,
    session: {
        maxAge: 60 * 60 * 24,
        updateAge: 60 * 60,
    }
});