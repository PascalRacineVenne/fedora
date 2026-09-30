import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#5a8192',
    colorText: '#2b2b2e',
    colorTextBase: '#2b2b2e',
    colorBgBase: '#fff',
    colorBorder: '#bebebd',
    colorLink: '#2b2b2e',
    colorLinkHover: '#2b2b2e',
    colorLinkActive: '#2b2b2e',
    fontFamily: "'Chivo', sans-serif",
    fontSize: 18,
    borderRadius: 0,
    // antd link/button color transitions would animate hovers the original design does not
    motion: false,
  },
  components: {
    Layout: {
      bodyBg: '#fff',
      headerBg: 'transparent',
      headerPadding: 0,
      headerHeight: 'auto',
      footerBg: 'transparent',
      footerPadding: 0,
    },
  },
};
