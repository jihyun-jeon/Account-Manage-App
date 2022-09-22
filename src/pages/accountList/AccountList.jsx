import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountsRequest } from '../../store/accountSlice';
import { getUserDetailRequest } from '../../store/userDetailSlice';

import 'antd/dist/antd.css';
import { Table } from 'antd';

const DATA = [
  {
    id: '1',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
  {
    id: '2',
    broker: '유안타증권', // 필터
    userName: 'Mrs. Tommy 탁',
    acountName: 'Savings Account',
    accountNum: '00-00000000-00',
    assets: '822639894.36',
    payments: '822639894.36',
    createdAt: '2019-09-01',
    status: 'true', // 필터
    isActive: 'true', // 필터
  },
];

const columns = [
  {
    title: '브로커',
    dataIndex: 'broker',
  },
  {
    title: '고객명',
    dataIndex: 'userName',
  },
  {
    title: '계좌명',
    dataIndex: 'acountName',
  },
  {
    title: '계좌번호',
    dataIndex: 'accountNum',
  },
  {
    title: '평가금액',
    dataIndex: 'assets',
  },
  {
    title: '입금금액',
    dataIndex: 'payments',
  },
  {
    title: '계좌개설일',
    dataIndex: 'createdAt',
  },
  {
    title: '계좌상태',
    dataIndex: 'status',
  },
  {
    title: '활성화여부',
    dataIndex: 'isActive',
  },
];
const dataArr = [];

for (let i = 0; i < DATA.length; i += 1) {
  dataArr.push({
    key: i,
    id: i,
    broker: DATA[i].broker,
    userName: DATA[i].userName,
    acountName: DATA[i].acountName,
    accountNum: DATA[i].accountNum,
    assets: DATA[i].assets,
    payments: DATA[i].payments,
    createdAt: DATA[i].createdAt,
    status: DATA[i].status,
    isActive: DATA[i].isActive,
  });
}

const AccountList = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector(state => state.accounts);
  const { userDetails } = useSelector(state => state.userDetails);
  // console.log('accounts', accounts);
  // console.log('userDetails', userDetails);

  useEffect(() => {
    dispatch(getAccountsRequest());
    dispatch(getUserDetailRequest());
  }, []);

  return (
    <div>
      <div className="h-24 mb-10 border-zinc-900 border-2">filter</div>
      <Table className="" columns={columns} dataSource={dataArr} />;
    </div>
  );
};

export default AccountList;
