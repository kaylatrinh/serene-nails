'use client'

import {InlineWidget} from "react-calendly";

export default function Calendly() {
    return (
       <InlineWidget
            data-url="https://calendly.com/peter-nguyen-calendly/30min"
            data-resize="true"
            url={"https://calendly.com/peter-nguyen-calendly/30min"}
       />
    )
}
