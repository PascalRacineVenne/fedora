import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import App from './App';
import { theme } from './styles/theme';
import './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={theme} wave={{ disabled: true }}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
