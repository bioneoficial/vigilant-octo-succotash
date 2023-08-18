/* eslint-disable @typescript-eslint/no-explicit-any */
import { openModal } from "@/Redux/Reducers/modalSlice";
import { setPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { PrivacyItem, RegisterFormErrors, RegisterFormFields, ToastService, user } from "@/types/types";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { modalTypeEnum } from "./enums";
import {  selectUser } from "@/Redux/Reducers/userSlice";
import {  SetStateAction } from 'react';
import axios from "axios";
import { apiConfig } from "@/api/apiConfig";


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
  privacyItem: PrivacyItem,
  dispatch: Dispatch<AnyAction>
): void => {
  if (privacyItem) {
    dispatch(setPrivacyItem(privacyItem));
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
    console.error(err)
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

export const handleEmailError = (err: any, toastService: ToastService, setEmailErrorMessage: (errorMessage: string) => void):void => {
  console.log(err)
  if(err.response.data.message === 'Email já cadastrado'){
    toastService.error(`Email error: ${err.response.data.message}`);
    setEmailErrorMessage(err.response.data.message);
  } else {
    toastService.error(`Unknown error: ${err.message}`);
  }
}

export const handlePasswordResetError= (err: any, toastService: ToastService): void => {
  console.error(err)
  switch(err.code){
    case 'ERR_NETWORK':
      toastService.error(`Network error: ${err.message}`);
      break;
    case 'ERR_BAD_RESPONSE':
        toastService.error(`Bad response error: ${err.message}`);
      break;
    default:
      toastService.error(`${err.message}`);
  }
}

export const withErrorHandler = async(apiFunc: (...args: unknown[]) => Promise<unknown>, errorHandler: (...args: any[]) => void): Promise<unknown> => {
  try {
    return await apiFunc();
  } catch(err) {
    errorHandler(err);
  }
}

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^[^\s]{6,20}$/;
  return passwordRegex.test(password);
}

export const useAuth = (): string => {
  const storedData = JSON.parse(
    localStorage.getItem("funktoonToken") ||
      sessionStorage.getItem("funktoonToken") ||
      "{}"
  );
  const token = storedData.token || "";
  return token;
};

export const handleContentClick = async (router: NextRouter, conteudo_id: number): Promise<void> => {
  try {
    const response = await axios.get(
      `${apiConfig.conteudoApiUrl}/${conteudo_id}`
    );
    const slug = response.data.slug;
    router.push(`/conteudo/${slug}`);
    sessionStorage.setItem("content", JSON.stringify(response.data));
  } catch (err) {
    console.error("Failed to fetch content by ID:", err);
  }
};
