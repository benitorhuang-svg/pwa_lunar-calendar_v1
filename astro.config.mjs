import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA({
            mode: 'development',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: 'autoUpdate',
            manifest: {
                name: '農民曆 PWA',
                short_name: '農民曆',
                description: '沉浸式時間藝術品',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp,woff,woff2}'],
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^\/$/],
            },
        }),
    ],
});
