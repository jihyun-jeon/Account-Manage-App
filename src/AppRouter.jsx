import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderLayout from './components/Header';
import AccountList from './pages/accountList/AccountList';
import AccountDetail from './pages/accountDetail/AccountDetail';
import UserList from './pages/userList/userList';
import UserDetail from './pages/userDetail/UserDetail';
import Auth from './components/Auth';

const AppRouter = () => {
  return (
    <Auth>
      <HeaderLayout>
        <Routes>
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/account-detail/:id" element={<AccountDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
        </Routes>
      </HeaderLayout>
    </Auth>
  );
};

export default AppRouter;
