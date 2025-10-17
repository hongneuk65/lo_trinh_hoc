import { useEffect, useState } from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(300);


    useEffect(() => {
        if (count === 0) {
            props.onTimeUp();
            return
        };
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [count])

    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Etc/UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const formatTime = (seconds) => dateFormatter.format(new Date(seconds * 1000));

    return (
        <div className="countdown-container">
            {formatTime(count)}
        </div>
    )
}

export default CountDown;