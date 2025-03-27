'use client'

import EmailForm from "@/components/Email/EmailForm";
import Calendly from "@/components/Calendly/Calendly";
import * as React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function Booking() {

  const [alignment, setAlignment] = React.useState('email');

  const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
  ) => {
      if (newAlignment !== null) {
          setAlignment(newAlignment);
      }
  };

  return (
      <div id="booking" className="overflow-overlay">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-950 text-opacity-75">Book With Us</h2>
        <h6 className="text-xl text-center">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="email">Email</ToggleButton>
                <ToggleButton value="calendly">Calendar</ToggleButton>
            </ToggleButtonGroup>
        </h6>
        { alignment === 'email' && <EmailForm/> }
        { alignment === 'calendly' && <Calendly/> }
      </div>
  )
}

