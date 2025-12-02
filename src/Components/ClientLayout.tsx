"use client";

import NavBar from "./NavBar";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
