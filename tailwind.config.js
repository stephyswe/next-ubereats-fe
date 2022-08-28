/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const plugin = require('tailwindcss/plugin');
const clamp = require('@tailwindcss/line-clamp');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '767px' },
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        uberMove: ['UberMove', 'sans-serif'],
        uberMoveText: ['UberMoveText', 'sans-serif'],
      },
      colors: {
        black: 'var(--tw-color-black)',
        black08: 'var(--tw-color-black-08)',
        black02: 'var(--tw-color-black-02)',
        gray: {
          50: 'var(--tw-color-gray-50)',
          100: 'var(--tw-color-gray-100)',
          200: 'var(--tw-color-gray-200)',
          300: 'var(--tw-color-gray-300)',
          400: 'var(--tw-color-gray-400)',
          500: 'var(--tw-color-gray-500)',
          600: 'var(--tw-color-gray-600)',
        },
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    clamp,
    forms,
    plugin(({ addComponents, theme, addUtilities }) => {
      addUtilities({
        /** Background-Gradients */
        '.bg-gradient-rgb-right': {
          background:
            'linear-gradient(to right, rgb(255, 255, 255) 10%, rgba(255, 255, 255, 0) 90%)',
        },
        '.bg-gradient-rgb-left': {
          background:
            'linear-gradient(to left, rgb(255, 255, 255) 10%, rgba(255, 255, 255, 0) 90%)',
        },
        '.bg-gradient-rgba-center': {
          background:
            'radial-gradient(at center center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        },
        '.bg-gradient-rgba-cart': {
          background:
            'linear-gradient(rgba(255, 255, 255, 0) 2.5%, rgba(255, 255, 255, 0.92) 55.35%)',
        },
        /** Transitions */

        /** 100 */
        '.transition-bg-ease-100': {
          transition: 'background 100ms ease 0s',
        },
        '.transition-width-easeInout-150': {
          transition: 'width 150ms ease-in-out 0s',
        },

        /** 200 */
        '.transition-bg-ease-200': {
          transition: 'background 200ms ease',
        },
        '.transition-transform-ease-200': {
          transition: 'transform 200ms ease 0s',
        },
        '.transition-btn-200': {
          transition: 'background 200ms cubic-bezier(0, 0, 1, 1) 0s',
        },

        /** 300 */
        '.transition-all-300': {
          transition: 'all 300ms ease 0s',
        },
        '.transition-height-opacity-300': {
          transition: 'height 300ms ease 0s, opacity 300ms ease 0s',
        },
        '.transition-bs-ease-300': {
          transition: 'box-shadow 300ms ease-in-out',
        },

        /** 400 */
        '.transition-all-ease-400': {
          transition: 'all 400ms ease 0s',
        },
        '.transition-all-ease-in-out-400': {
          transition: 'all 400ms ease-in-out',
        },
        '.transition-ease-400': {
          transition: 'all 400ms ease 0s',
        },
        '.sidebar-transition': {
          transition:
            'opacity 400ms ease-in-out, width 0s 400ms, height 0s 400ms',
        },
        '.transition-width-opacity-400': {
          transition: 'max-width 400ms ease, opacity 400ms ease 100ms',
        },

        /** 500 */

        '.transition-transform-easeInout-500': {
          transition: 'transform 500ms ease-in-out 0s',
        },
        '.transition-opacity-ease-500': {
          transition: 'opacity 500ms ease 0s',
        },
        '.transition-500': {
          transition: 'transform 500ms',
          transform: 'scaleX(1)',
        },

        /** Transition Property */
        '.transition-background': {
          transitionProperty: 'background',
        },
        '.transition-timing-cubic': {
          transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
        },
        '.clip-rect': {
          clip: 'rect(0, 0, 0, 0)',
        },
        '.clip-rect-1': {
          clip: 'rect(1px, 1px, 1px, 1px)',
        },

        /** Transforms */
        '.transform-3d': {
          transform: 'translate3d(0px, 0px, 0px)',
        },
        '.transform-hover-map-home': {
          transform: 'scale(1.333, 1.333)',
        },

        /** Box Shadow */

        /** Rgb */
        '.box-shadow-checkbox-default': {
          boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px',
        },
        '.box-shadow-checkbox-hover': {
          boxShadow: 'rgb(0 0 0 / 16%) 0px 2px 8px',
        },
        '.box-shadow-map-12': {
          boxShadow: 'rgb(0 0 0 / 12%) 0px 4px 16px',
        },
        '.box-shadow-map-12-negative': {
          boxShadow: 'rgb(0 0 0 / 12%) 0px -4px 16px',
        },
        '.box-shadow-rgb-gray': {
          boxShadow: 'rgb(226 226 226) 0px -2px 0px inset',
        },
        '.box-shadow-rgb-0': {
          boxShadow: 'rgb(0 0 0) 0px -2px 0px inset',
        },
        '.box-shadow-rgb-10': {
          boxShadow: '0px 0px 10px rgb(0 0 0 / 10%)',
        },
        '.box-shadow-rgb-grey': {
          boxShadow: 'rgb(226 226 226) 0px -2px 0px inset',
        },
        '.box-shadow-rgb-store-item': {
          boxShadow: '0px 4px 16px rgb(0 0 0 / 12%)',
        },

        /** Rgb - Double */
        '.box-shadow-rgb-double': {
          boxShadow:
            '0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)',
        },
        'box-shadow-rgb-button': {
          boxShadow:
            'rgb(0 0 0 / 10%) 0px 0px 8px, rgb(0 0 0 / 4%) 0px 4px 4px',
        },
        '.box-shadow-rgb-secondary': {
          boxShadow:
            'rgb(0 0 0 / 10%) 0px 0px 12px, rgb(0 0 0 / 4%) 0px 6px 6px',
        },
        '.box-shadow-rgb-btn': {
          boxShadow:
            '0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)',
        },

        /** Default */
        '.box-shadow-sidebar-25-10': {
          boxShadow: '0px 0px 25px rgb(0 0 0 / 10%);',
        },
        '.box-shadow-modal-dish': {
          boxShadow: '0px -4px 16px rgb(0 0 0 / 12%);',
        },
        '.box-shadow-inset-eee': {
          boxShadow: 'inset 0px -1px 0px #eeeeee',
        },

        /** Loading Elements */

        /** Main */
        '.sandbox-main': {
          minHeight: 'calc(100% - 96px)',
          height: 'calc(100% - 96px)',
          width: '100%',
          flexDirection: 'column',
          display: 'flex',
          boxSizing: 'initial',
        },
        '.loading-init': {
          backgroundImage:
            'linear-gradient(120deg, #e2e2e2 20%, #f6f6f6 28%, #e2e2e2 43%)',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationFillMode: 'forwards',
          animationDuration: '2s',
          animationName: 'loadingAnimation',
        },

        /** Items */
        '.loading-item-round': {
          background:
            'radial-gradient(circle at 100%, transparent 24px, #ffffff 24px)',
        },
        '.loading-item-round-finish': {
          background:
            'radial-gradient(circle at 0%, transparent 24px, #ffffff 24px)',
        },
        '.loading-restaurant-item': {
          background: 'radial-gradient(transparent 14px, #ffffff 14px)',
        },

        /** Initials */
        '.loading-init-one': {
          height: '20px',
          position: 'relative',
        },
        '.loading-init-two': {
          zIndex: '-1',
          bottom: '0',
          backgroundSize: '100vw 100%',
          right: '0',
          position: 'absolute',
          left: '0',
          top: '0',
        },
        '.loading-bg-full': {
          backgroundSize: '100vw 100%',
        },
        '.loading-border': {
          boxSizing: 'initial',
        },

        /** Extra elements */
        '.rounded-500': {
          borderRadius: '500px',
        },
        '.h-calc-2': {
          height: 'calc(100% - 8px)',
        },
        '.flex-1-36': {
          flex: '1 0 36px',
        },
        '.webkit-color-transparent': {
          WebkitTapHighlightColor: 'transparent',
        },
        '.webkit-line-clamp-3': {
          WebkitLineClamp: '3',
        },
        '.webkit-line-clamp-2': {
          WebkitLineClamp: '2',
        },
        '.webkit-orient-vertical': {
          WebkitBoxOrient: 'vertical',
        },
        '.webkit': {
          display: '-webkit-box',
        },
        '.scroll-snap-x': {
          scrollSnapType: 'x mandatory',
        },
        '.scroll-align-start': {
          scrollSnapAlign: 'start',
        },
      });
    }),
  ],
};
