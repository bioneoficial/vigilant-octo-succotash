// import { Dispatch } from 'redux';
import { ToastService } from '@/types/types';
import { ToastOptions, toast } from 'react-toastify';
// import { setToastSuccess } from '@/Redux/Reducers/toastSuccessReducer';


export default function toastService(): ToastService {
    const options: ToastOptions = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };
  
    const success = (message: string): void => {
        // dispatch(setToastSuccess(true));
        toast.success(message, options);
    };

    const errorT = (message = "Um erro ocorreu, tente novamente."): void => {
        // dispatch(setToastSuccess(false));
        toast.error(message, options);
    };
    // similarly for warn(), info(), etc.
    
    return { success, error: errorT };
}

