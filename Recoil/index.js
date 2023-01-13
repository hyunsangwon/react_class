import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 부모 트리 어딘가에 나타나는 RecoilRoot 필요 */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
