import { ReactNode } from "react";

export interface Data {
  personid: number;

  name: string;
  city: string;
  date: Date;
}
export interface Login {
  users: string;
  pass: string;
}
export interface SignUp {
  users: string;
  email: string;
  pass: string;
}

export interface list_data {
    id: string;
    video: string;
    icon: ReactNode;
    title: string;
    name: string;
    describe1: string;
    describe2: string;
    bg: string;
    text: string;
    style: string;
  }