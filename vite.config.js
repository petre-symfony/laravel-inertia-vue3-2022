import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    resolve: {
        alias:{
            '@' : path.resolve(__dirname, './resources/js')
        },
        extensions: ['.vue', '.js']
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
