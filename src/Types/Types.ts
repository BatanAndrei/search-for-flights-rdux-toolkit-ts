import { ReactNode } from "react";

export type TchildrenProps = {
    children: ReactNode;
}

export interface Ticket {
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

export interface Tpropse {
    icon: string
}

export type FetchTicketsError = {
    message: string;
  };

  export type TikcetsState = {
    status: "loading" | "idle";
    error: string | null;
    list: Ticket[];
  };
