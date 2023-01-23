import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Meeting from './meeting';

let payload={
  meetingNumber:'',
  role:0,
  sdkKey:'',
  sdkSecret:'',
  passWord:'',
  userName:'Testing',
  userEmail:'',
  leaveUrl:'https://localhost:3000'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App/>
  // },
  {
    path: '/',
    element: <Meeting payload={payload}/>
  }
  // {
  //   path: '/meeting',
  //   element:<Meeting payload={payload}/>
  // }
]);

root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
