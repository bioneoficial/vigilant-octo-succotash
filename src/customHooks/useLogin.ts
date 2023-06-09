import { useMutation, UseMutationResult, MutationFunction    } from 'react-query';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/api/auth';
import { loginSuccess } from '@/Redux/Reducers/sessionSlice';
import { LoginResponse } from '@/types/types';

interface LoginParams {
    email: string;
    password: string;
  }
  
  function useLogin(
    onSuccess: (data: LoginResponse) => void,
    onError: (error: unknown) => void
  ): UseMutationResult<LoginResponse, unknown, LoginParams, unknown> {
    const dispatch = useDispatch();
    
    return useMutation<LoginResponse, unknown, LoginParams, unknown>(
      loginUser as MutationFunction<LoginResponse, LoginParams>,
      {
        onSuccess: (data: LoginResponse) => {
          dispatch(loginSuccess(data));
          onSuccess(data);
        },
        onError,
      }
    );
  }

export default useLogin;
