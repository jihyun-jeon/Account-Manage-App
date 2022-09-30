import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { patchNameRequest, deleteRequest } from '../../store/usersSlice';
import { userNameMasking } from '../../utils/masking';
import { EditOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const ModifyUserName = ({ text, record }) => {
  let [isDisable, setIsDisable] = useState(true);
  const [nameValue, setNameValue] = useState(text);
  const maskingName = userNameMasking(text);

  const accountInputEL = useRef();
  const dispatch = useDispatch();

  return (
    <div className="flex mr-[1rem] w-44 ">
      {isDisable ? (
        <>
          <Link to={{ pathname: `/users/${record.id}` }}>
            <input
              type="text"
              value={maskingName}
              ref={accountInputEL}
              disabled={isDisable}
              onChange={e => setNameValue(e.target.value)}
              className="w-2/3 mr-2"
            />
          </Link>
          <button
            type="button"
            className="w-1/4 px-3 mr-3 "
            onClick={() => {
              setIsDisable(false);
              accountInputEL.current.focus();
            }}
          >
            <EditOutlined className="text-rose-400" />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={nameValue}
            ref={accountInputEL}
            disabled={isDisable}
            onChange={e => setNameValue(e.target.value)}
            className="w-2/3  bg-lime-200"
          />
          <div className="w-1/4  ">
            <button
              type="button"
              className="mx-2"
              onClick={() => {
                setIsDisable(true);
                setNameValue(text);
              }}
            >
              <CloseCircleOutlined className="text-gray-500" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsDisable(true);
                dispatch(patchNameRequest({ userId: record.id, modifiedName: nameValue })); // put요청
              }}
            >
              <CheckCircleOutlined className="text-green-600" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="mr-[-30px]"
      value={id}
      id="delButton"
      onClick={e => {
        const result = window.confirm('삭제하시겠습니까?');
        if (result) {
          const userId = e.target.closest('#delButton').value;
          dispatch(deleteRequest(userId));
        }
      }}
    >
      <CloseCircleOutlined />
    </button>
  );
};
