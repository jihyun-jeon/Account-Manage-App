import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNowRoute } from '../../store/nowRouteSlice';
import { oneAccountRequest } from '../../api/axios';
import { ACCOUNT_STATUS, BROKERS } from '../../const';
import { useParams } from 'react-router-dom';
import makeReturnRate from '../../utils/MakeReturnRate';
import { accountUnmasking } from '../../utils/masking';

const AccountDetail = () => {
  const [accountData, setAccountData] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    oneAccountRequest(id).then(response => setAccountData(response.data[0]));
    dispatch(setNowRoute('계좌 상세'));
  }, []);

  return (
    <div>
      {accountData.id && (
        <div className="px-14 pt-4">
          <ul className="grid w-full grid-cols-4 pb-10 my-10  gap-10 border-b-2 border-stone-300">
            <li>
              <p className="font-extrabold">계좌명</p>
              <p>{accountData.name}</p>
            </li>
            <li>
              <p className="font-extrabold">계좌번호</p>
              <p>{accountUnmasking(accountData.number, accountData.broker_id)}</p>
            </li>
            <li>
              <p className="font-extrabold">증권사</p>
              <p>{BROKERS[accountData.broker_id]}</p>
            </li>
            <li>
              <p className="font-extrabold">고객명</p>
              <p>{accountData.user.name}</p>
            </li>
          </ul>

          <ul className="grid w-full grid-cols-4 pb-10 my-10  gap-10 border-b-2 border-stone-300">
            <li>
              <p className="font-extrabold">평가금액</p>
              <p>{Math.floor(accountData.payments).toLocaleString()}</p>
            </li>
            <li>
              <p className="font-extrabold">입금금액</p>
              <p>{Math.floor(accountData.assets).toLocaleString()}</p>
            </li>
            <li>
              <p className="font-extrabold">수익률</p>
              <p>{makeReturnRate(accountData)}%</p>
            </li>
          </ul>

          <ul className="grid w-full grid-cols-4 pb-10 my-10  gap-10 border-b-2 border-stone-300">
            <li>
              <p className="font-extrabold">계좌 상태</p>
              <p>{ACCOUNT_STATUS[accountData.status]}</p>
            </li>
            {/* <li>
              <p className="font-extrabold">활성화여부</p>
              <p>{accountData.user.setting.is_active ? '활성' : '비활성'}</p>
            </li> */}
            <li>
              <p className="font-extrabold">계좌 개설일</p>
              <p>{accountData.created_at}</p>
            </li>
            <li>
              <p className="font-extrabold">계좌 업데이트일</p>
              <p>{accountData.updated_at}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDetail;
