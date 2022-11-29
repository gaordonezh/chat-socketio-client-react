import { RolEnum } from "./enums";

export interface ContactProps {
  description: string;
  address: string;
  logo: string;
  ruc: string;
  url: string;
  phone: string;
  rubro: string;
  company: string;
  _id: string;
}

export interface MessageProps {
  content: string;
  datetime: string;
  company: string;
  room: string;
  sender: string;
}

export interface UserProps {
  _id: string;
  t_doc: string;
  profile_picture: string;
  status: boolean;
  headquarters: Array<string>;
  rol: RolEnum;
  user: string;
  n_doc: string;
  headquarter: string;
  fullname: string;
  address: string;
  phone: number;
  email: string;
  company?: string;
}
