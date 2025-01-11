import { useState, useEffect } from "react";

function DateAndTime() {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-GB');
            const formattedTime = date.toLocaleTimeString('en-GB');
            const currentDateTime = `${formattedDate} - ${formattedTime}`;
            setDateTime(currentDateTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-xl font-medium mb-5">
            <h2>{dateTime}</h2>
        </div>
    );
}

export default DateAndTime;
