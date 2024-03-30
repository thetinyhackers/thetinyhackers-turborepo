export default defineAppConfig({
  availableLocales: [
    // { code: 'ar', icon: 'i-flagpack-sa', name: 'العربية', nameAlts: ['Arabic'] },
    // { code: 'bn', icon: 'i-flagpack-bd', name: 'বাংলা', nameAlts: ['Bengali'] },
    // { code: 'da', icon: 'i-flagpack-dk', name: 'Dansk', nameAlts: ['Danish'] },
    // { code: 'de', icon: 'i-flagpack-de', name: 'Deutsch', nameAlts: ['German'] },
    { code: 'en', icon: 'i-flagpack-us', name: 'English', nameAlts: [] },
    // { code: 'es', icon: 'i-flagpack-es', name: 'Español', nameAlts: ['Spanish'] },
    // { code: 'fa', icon: 'i-flagpack-ir', name: 'فارسی', nameAlts: ['Persian'] },
    { code: 'fr', icon: 'i-flagpack-fr', name: 'Français', nameAlts: ['French'] },
    // { code: 'hi', icon: 'i-flagpack-in', name: 'हिन्दी', nameAlts: ['Hindi'] },
    // { code: 'id', icon: 'i-flagpack-id', name: 'Bahasa Indonesia', nameAlts: ['Indonesian'] },
    // { code: 'it', icon: 'i-flagpack-it', name: 'Italiano', nameAlts: ['Italian'] },
    { code: 'ja', icon: 'i-flagpack-jp', name: '日本語', nameAlts: ['Japanese'] },
    // { code: 'jv', icon: 'i-flagpack-id', name: 'Basa Jawa', nameAlts: ['Javanese'] },
    // { code: 'ko', icon: 'i-flagpack-kr', name: '한국어', nameAlts: ['Korean'] },
    // { code: 'mr', icon: 'i-flagpack-in', name: 'मराठी', nameAlts: ['Marathi'] },
    // { code: 'nl', icon: 'i-flagpack-nl', name: 'Nederlands', nameAlts: ['Dutch'] },
    // { code: 'pa', icon: 'i-flagpack-in', name: 'ਪੰਜਾਬੀ', nameAlts: ['Punjabi'] },
    // { code: 'pl', icon: 'i-flagpack-pl', name: 'Polski', nameAlts: ['Polish'] },
    // { code: 'pt', icon: 'i-flagpack-pt', name: 'Português', nameAlts: ['Portuguese'] },
    // { code: 'ru', icon: 'i-flagpack-ru', name: 'Русский', nameAlts: ['Russian'] },
    // { code: 'sv', icon: 'i-flagpack-se', name: 'Svenska', nameAlts: ['Swedish'] },
    // { code: 'sw', icon: 'i-flagpack-ke', name: 'Kiswahili', nameAlts: ['Swahili'] },
    // { code: 'th', icon: 'i-flagpack-th', name: 'ไทย', nameAlts: ['Thai'] },
    // { code: 'tr', icon: 'i-flagpack-tr', name: 'Türkçe', nameAlts: ['Turkish'] },
    // { code: 'uk', icon: 'i-flagpack-ua', name: 'Українська', nameAlts: ['Ukrainian'] },
    // { code: 'ur', icon: 'i-flagpack-pk', name: 'اردو', nameAlts: ['Urdu'] },
    // { code: 'vi', icon: 'i-flagpack-vn', name: 'Tiếng Việt', nameAlts: ['Vietnamese'] },
    // { code: 'zh', icon: 'i-flagpack-cn', name: '中文', nameAlts: ['Chinese'] },
  ],

  seo: {
    siteName: 'The Tiny Hackers',
  },

  socialLinks: [
    {
      'aria-label': 'The Tiny Hackers on YouTube',
      'icon': 'i-fa-youtube',
      'target': '_blank',
      'to': 'https://www.youtube.com/@thetinyhackers',
    },
    {
      'aria-label': 'The Tiny Hackers on Instagram',
      'icon': 'i-simple-icons-instagram',
      'target': '_blank',
      'to': 'https://www.instagram.com/thetinyhackers/',
    },
    // {
    //   'aria-label': 'The Tiny Hackers on TikTok',
    //   'icon': 'i-simple-icons-tiktok',
    //   'target': '_blank',
    //   'to': 'https://www.tiktok.com/@thetinyhackers',
    // },
    // {
    //   'aria-label': 'The Tiny Hackers on X',
    //   'icon': 'i-simple-icons-x',
    //   'target': '_blank',
    //   'to': 'https://x.com/thetinyhackers',
    // },
    {
      'aria-label': 'The Tiny Hackers on GitHub',
      'icon': 'i-simple-icons-github',
      'target': '_blank',
      'to': 'https://github.com/thetinyhackers/thetinyhackers-turborepo',
    },
  ],

  ui: {
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    gray: 'slate',
    icons: {
      dynamic: true,
    },
    primary: 'indigo',
  },
})
