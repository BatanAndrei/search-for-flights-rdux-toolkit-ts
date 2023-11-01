import { ReactNode } from "react";

export type TchildrenProps = {  
    children: ReactNode;
}

export interface Iticket { // типы данных с серверв
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: string;
    startTime: string;
    endTime: string;
    duration: number;
    date: string;
    transfers: number | null;
}

export type Tpropse = {
    icon: string
}

export type TfetchTicketsError = {  // тип описывает структуру объекта ошибки запроса к серверу
    message: string;
  };

  export type TtikcetsState = { // типы для обработки запроса статусов к серверу
    list: Iticket[];
    error: string | null;
    status: "loading" | "idle";
  };
