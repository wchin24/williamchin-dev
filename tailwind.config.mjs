/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm cream base — editorial warmth
        cream: {
          50:  '#FDFCF8',
          100: '#F9F8F4',
          200: '#F4F3EE',
          300: '#EAE8E0',
          400: '#D6D2C8',
        },
        // Warm ink — not pure black, has warmth
        ink: {
          DEFAULT: '#1A1714',
          soft:    '#3D3934',
          muted:   '#6B6560',
          faint:   '#9D9892',
        },
        // Indigo — the anime accent
        accent: {
          DEFAULT: '#5B4FCF',
          light:   '#7C72E0',
          dark:    '#3D33A8',
          glow:    'rgba(91, 79, 207, 0.15)',
        },
        // Crimson — anime secondary (used sparingly)
        crimson: {
          DEFAULT: '#C8384A',
          light:   '#E04E62',
          dark:    '#A02B3B',
        },
        // Amber — editorial warmth accent
        amber: {
          warm:  '#D4820A',
          light: '#F59E0B',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono:  ['"Geist Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'title':    ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'page': 'clamp(1.25rem, 5vw, 4rem)',
      },
      maxWidth: {
        'content': '720px',
        'wide':    '1100px',
      },
      borderRadius: {
        'card': '12px',
        'pill': '9999px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
      typography: (theme) => ({
        warm: {
          css: {
            '--tw-prose-body':        theme('colors.ink.soft'),
            '--tw-prose-headings':    theme('colors.ink.DEFAULT'),
            '--tw-prose-lead':        theme('colors.ink.muted'),
            '--tw-prose-links':       theme('colors.accent.DEFAULT'),
            '--tw-prose-bold':        theme('colors.ink.DEFAULT'),
            '--tw-prose-counters':    theme('colors.ink.muted'),
            '--tw-prose-bullets':     theme('colors.accent.DEFAULT'),
            '--tw-prose-hr':          theme('colors.cream.300'),
            '--tw-prose-quotes':      theme('colors.ink.soft'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            '--tw-prose-captions':    theme('colors.ink.faint'),
            '--tw-prose-code':        theme('colors.crimson.DEFAULT'),
            '--tw-prose-pre-code':    theme('colors.cream.100'),
            '--tw-prose-pre-bg':      theme('colors.ink.DEFAULT'),
            '--tw-prose-th-borders':  theme('colors.cream.300'),
            '--tw-prose-td-borders':  theme('colors.cream.200'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
