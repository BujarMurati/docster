module.exports = {
  title: 'Docster',
  tagline: 'Statically extract docstrings from your python',
  url: 'https://bujarmurati.github.io/docster',
  baseUrl: '/docster/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'BujarMurati', // Usually your GitHub org/user name.
  projectName: 'docster', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSideBar: true,
    navbar: {
      title: 'Docster',
      logo: {
        alt: 'My Site Logo',
        src: '/docster/img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/BujarMurati/docster',
          label: 'Github Repo',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bujar Murati. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Please change this to your repo.
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
