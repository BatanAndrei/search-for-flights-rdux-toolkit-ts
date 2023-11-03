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
    date?: string;
    transfers: number;
}

export type Tcompany = { // тип пропса в компоненте GlobalSvg
    company: string;
}

export interface IpropseTickets { // типы пропсов
    id: number;
    from: string;
    to: string;
    price: number;
    company: string;
    currency: string;
    startTime: string;
    endTime: string;
    duration: number;
    transfers: number;

}

export type TfetchTicketsError = {  // тип описывает структуру объекта ошибки запроса к серверу
    message: string;
  };

  export type TtikcetsState = { // типы для обработки запроса статусов к серверу
    listTickets: Iticket[];
    error: string | null;
    status: "loading" | "idle";
    btnCheap: Boolean;
    btnFast: Boolean;
    btnOptimal: Boolean;
  };

/*   export type TbtnState = {
    btnCheap: Boolean,
    btnFast: Boolean,
    btnOptimal: Boolean,
  }
 */