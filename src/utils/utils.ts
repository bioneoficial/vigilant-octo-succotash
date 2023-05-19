import { openModal } from "@/Redux/Reducers/modalSlice";
import { setPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { PrivacyItem, cupom, user } from "@/types/types";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { modalTypeEnum } from "./enums";
import {  selectUser } from "@/Redux/Reducers/userSlice";

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
