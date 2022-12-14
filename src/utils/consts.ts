import { RolEnum } from "../interfaces/enums";
import { UserProps } from "../interfaces/types";

export const sharedStyles = {
  height: "calc((100vh) - 130px)",
};

export const tempUsers: Array<UserProps> = [
  {
    t_doc: "DNI",
    profile_picture: "https://filesym.s3.us-east-2.amazonaws.com/filesym/d1a1d079-ee0a-4a08-b41a-fdc002bd8a37",
    status: true,
    headquarters: ["609d7b575097690017dd8b93", "609d7b5c5097690017dd8b94"],
    rol: RolEnum.SUPERNAP,
    _id: "611e7ab1c1f071224c6c87ab",
    user: "supernap",
    n_doc: "71546119",
    headquarter: "609d7b575097690017dd8b93",
    fullname: "USUARIO GLOBAL",
    address: "Lima",
    phone: 99999999,
    email: "gaordonezh@gmail.com",
  },
  {
    t_doc: "DNI",
    profile_picture: "",
    status: true,
    headquarters: [
      "60b11e27f8b97f3a70b8a74c",
      "60b11e27f8b97f3a70b8a750",
      "60e5c461328de500159ab85c",
      "60e5cd48328de500159ab9a6",
      "61421f2e5030bb0016145653",
    ],
    rol: RolEnum.ADMIN,
    _id: "60bf8180f03f6c0017b814d9",
    user: "71546119",
    n_doc: "71546119",
    headquarter: "60b11e27f8b97f3a70b8a74c",
    fullname: "ALDO ORDOÑEZ",
    address: "Lima",
    phone: 9999999912,
    email: "gaordonezh@gmail.com",
    company: "6112edbd91a66f21b8c42432",
  },
  {
    t_doc: "DNI",
    profile_picture: "",
    status: true,
    headquarters: ["613fa649eeebdf001663a83f"],
    rol: RolEnum.SUPERADMIN,
    _id: "61420e4f5030bb0016145491",
    user: "PRUEBA",
    n_doc: "11111111",
    headquarter: "613fa649eeebdf001663a83f",
    fullname: "PRUEBA",
    address: "XYZ",
    phone: 980318980,
    email: "YURIMONTENEGROB@GMAIL.COM",
    company: "613fa604eeebdf001663a823",
  },
  {
    t_doc: "DNI",
    profile_picture: "",
    status: true,
    headquarters: ["609d7ae45097690017dd8b79"],
    rol: RolEnum.ACCOUNTANT,
    _id: "60a971680cbd8d00172e3f5e",
    headquarter: "609d7ae45097690017dd8b79",
    user: "07733822",
    fullname: "Carmen Buhytron",
    email: "buhytron@hotmail.com",
    n_doc: "07733822",
    address: "LIMA",
    phone: 986637874,
    company: "6112edc391a66f21b8c42436",
  },
];
