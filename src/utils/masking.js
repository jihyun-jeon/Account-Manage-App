import { BROKER_FORMAT } from '../const';

export const userNameMasking = function (text) {
  if (text.length > 2) {
    let originName = text.split('');
    originName.forEach(function (_, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });
    let joinName = originName.join();
    return joinName.replace(/,/g, '');
  } else {
    let pattern = /^./;
    return text.replace(pattern, '*');
  }
};

export const accountMasking = function (accountNumber, brokerId) {
  const FORMAT = BROKER_FORMAT[brokerId]; // 계좌 형식
  const maskedAccountNum = '**' + accountNumber.slice(2, accountNumber.length - 2) + '**'; // 마킹처리
  let result = '';
  let idx = 0;

  [...FORMAT].forEach(el => {
    if (el === '0') {
      result += maskedAccountNum[idx];
      idx += 1;
    } else {
      result += el;
    }
  });

  return result;
};

export const accountUnmasking = function (accountNumber, brokerId) {
  const FORMAT = BROKER_FORMAT[brokerId]; // 계좌 형식

  let result = '';
  let idx = 0;

  [...FORMAT].forEach(el => {
    if (el === '0') {
      result += accountNumber[idx];
      idx += 1;
    } else {
      result += el;
    }
  });

  return result;
};
