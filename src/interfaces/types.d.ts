export interface HeadquarterProps {
  description: string;
  address: string;
  logo: string;
  ruc: string;
  url: string;
  phone: string;
  rubro: string;
  _id: string;
}

export interface MessageProps {
  message: string;
  datetime: string;
  headquarterFrom: string;
  headquarterTo: string;
  company: string;
}
