import { useState, useEffect } from "react";

function DateAndTime() {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        // Set up the interval
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-GB');
            const formattedTime = date.toLocaleTimeString('en-GB');
            const currentDateTime = `${formattedDate} - ${formattedTime}`;
            setDateTime(currentDateTime);
        }, 1000);


        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="date-time">
            <h2>{dateTime}</h2>
        </div>
    );
}

export default DateAndTime;
