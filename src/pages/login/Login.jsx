import { useEffect } from 'react';
import { auth, firebase } from '../../firebase';
import { useForm } from 'react-hook-form';
import { postLoginRequest } from '../../store/userNameSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // // <회원가입>
  // useEffect(() => {
  //   fetch('/api/users/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: 'admin@admin.com',
  //       password: 'admin123!',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // const loginData = { email: data.email, password: data.password };

    // dispatch(postLoginRequest(loginData)).then(result => {
    //   // [p3-1] console.log(result); // {error:{}, payload: undifined, type: "POST_LOGIN/rejected"" }
    //   if (result.error) {
    //     // [에러처리 질문clear] 에러 메시지보도 메세지에에 따른 처리 가능
    //     // [[4-1]] <에러처리 할 수 있는 곳2> - 컴포넌트 안에 있으니까 컴포넌트 안에서 에러메세지 띄우는 등의 "dom요소 관련된 에러처리"를 할 수 있음.
    //     // (에러시 dom요소를 다루기에 좋음)
    //     alert('로그인 정보가 옳지 않습니다');
    //     return;
    //   }

    //   navigate('/accounts?');
    // });

    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => auth.signInWithEmailAndPassword(data.email, data.password))
      .then(() => navigate('/accounts', { replace: true }))
      .catch(() => alert('로그인 정보가 옳지 않습니다'));
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-300 ">
      <h1 className="text-4xl mt-32 mb-10">Account Management App</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center pt-10 border-[1px] border-black w-4/12 bg-gray-200 rounded-md text-lg"
      >
        <label className="py-3 w-full ml-20">
          <p className="w-10">Email</p>
          <input
            className="w-5/6 p-2 rounded-md"
            placeholder="이메일을 입력하세요"
            type="email"
            {...register('email', {
              required: true,
              validate: value => value.length > 0,
            })}
          />
        </label>
        {errors.email && <p className="text-red-400">이메일을 입력하세요.</p>}

        <label className="py-3 w-full ml-20">
          <p>Password</p>
          <input
            className="w-5/6 p-2 rounded-md"
            placeholder="8글자 이상(1개이상의 영문, 숫자, 특수문자 포함)"
            type="password"
            {...register('password', {
              required: true,
              validate: {
                positiveLength: value => value.length >= 8,
                lessThanHundred: value => pwIsValid(value),
              },
            })}
          />
        </label>
        {errors.password && errors.password.type === 'required' && (
          <p className="boreder-2 text-red-900">비밀번호를 입력하세요!</p>
        )}
        {errors.password && errors.password.type === 'positiveLength' && (
          <p className="boreder-2 text-red-900">8자리 이상 입력하세요!</p>
        )}
        {errors.password && errors.password.type === 'lessThanHundred' && (
          <p className="boreder-2 text-red-900"> 영문 , 숫자, 특수문자 최소 1개 이상 포함</p>
        )}

        <button type="submit" className="boreder-2 bg-blue-400 w-4/6 rounded-md p-4 my-10">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;

const pwIsValid = txt => {
  const reg = new RegExp(/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/);
  return reg.test(txt) ? true : false;
};
