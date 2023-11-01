import { ReactNode } from "react";

export type TchildrenProps = {
    children: ReactNode;
}

export interface Iticket {
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

export type TfetchTicketsError = {
    message: string;
  };

  export type TtikcetsState = {
    status: "loading" | "idle";
    error: string | null;
    list: Iticket[];
  };
