"use client";
import { Printer } from "lucide-react";
export function CvPrintButton(){return <button className="cv-print" type="button" onClick={()=>window.print()}><Printer size={15}/> PRINT / SAVE AS PDF</button>}
