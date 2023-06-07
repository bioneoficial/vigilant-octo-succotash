import { openModal } from "@/Redux/Reducers/modalSlice";
import { setPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { PrivacyItem, RegisterFormErrors, RegisterFormFields, ToastService, user } from "@/types/types";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { modalTypeEnum } from "./enums";
import {  selectUser } from "@/Redux/Reducers/userSlice";
import {  SetStateAction } from 'react';


export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const abrirSite = (): Window | null => {
  return window.open("https://funktoon.com/", "_blank");
};

export const handleEditPrivacy = (
  item: PrivacyItem,
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
): void => {
  if (item) {
    dispatch(setPrivacyItem(item));
    router.push(`/dashboard/privacy/${item.id}`);
  }
};

export const handleDeletePrivacy = (
  item: PrivacyItem,
  dispatch: Dispatch<AnyAction>
): void => {
  if (item) {
    dispatch(setPrivacyItem(item));
    dispatch(openModal(modalTypeEnum.delete));
  }
};

export const gambiarraDoSelect = (
  initialValue: string | undefined,
  options: { value: string; text: string }[]
): void => {
  let indexSelected;
  const test = options.find((option, index) => {
    if (option.text === initialValue) indexSelected = index;
    return option.text === initialValue;
  });
  if (test && indexSelected !== undefined) {
    options.splice(indexSelected, 1);
    options.unshift(test);
  }
};

export const handleEditUserModal = (
  item: user,
  dispatch: Dispatch<AnyAction>,
  type: modalTypeEnum,
): void => {
  if (item) {
    console.log(item)
    dispatch(selectUser(item.id));
    dispatch(openModal(type));
  }
};
export const handleEditUser = (
  user: user,
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
): void => {
  if (user) {
    console.log(user)
    dispatch(selectUser(user.id));
    router.push(`/dashboard/usuarios/${user.id}`);

  }
};

export const clearStringState = (...stateActions: Array<React.Dispatch<SetStateAction<string>>>): void => {
  stateActions.forEach((setStateAction) => setStateAction(''));
};

export function validateForm({ name, email, password, confirmPassword }: RegisterFormFields): RegisterFormErrors | null {
  const errors: RegisterFormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (confirmPassword.length < 6 || confirmPassword.length > 20) {
    errors.password = "Senha com no mínimo 6 caracteres e máximo 20";
  }
  if (name.length < 3) {
    errors.name = "Nome não pode ser vazio";
  }
  if (!emailRegex.test(email))  {
    errors.email = "Email não valido";
  }
  if (password.length < 6 || password.length > 20) {
    errors.password = "Senha com no mínimo 6 caracteres e máximo 20";
  }
  if (password !== confirmPassword) {
    errors.password = "Senhas não coincidem";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}


export const handleAxiosError = ( err: any, 
  toastService: ToastService, 
  setEmailErrorMessage: (errorMessage: string) => void): void => {
    console.log(err)
  switch(err.code){
    case 'ERR_NETWORK':
      toastService.error(`Network error: ${err.message}`);
      break;
    case 'ERR_BAD_RESPONSE':
      if(err.response.data.message === 'Email já cadastrado'){
        toastService.error(`Email error: ${err.response.data.message}`);
      setEmailErrorMessage(err.response.data.message);
      } else {
        toastService.error(`Bad response error: ${err.message}`);
      }
      break;
    default:
      toastService.error(`Unknown error: ${err.message}`);
  }
}