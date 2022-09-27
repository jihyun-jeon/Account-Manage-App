import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNowRoute } from '../../store/nowRouteSlice';

const AccountDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNowRoute('계좌 상세'));
  }, []);

  return <div>accountDetail 내용</div>;
};

export default AccountDetail;
