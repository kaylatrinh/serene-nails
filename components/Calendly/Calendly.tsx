'use client'

import {InlineWidget} from "react-calendly";
import React from "react";

export default function Calendly() {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL as string ?? '';
    return (
       <InlineWidget
            data-url={calendlyUrl}
            data-resize="true"
            url={calendlyUrl}
       />
    )
}
