import React, { useState, useRef, useEffect } from 'react'


const Timer = () => {

    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00');
    const [color, setColor] = useState(false)
    const [cancelOrder, setCancelOrder] = useState(false)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        // const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total > 0) {
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
            if (minutes < 5) {
                setColor(true)
            }
        }
        if (total === 0) {
            setTimer('00:00')
            setCancelOrder(true)
        }
    }


    const clearTimer = (e) => {
        setTimer('10:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }

    return (
        <div>
            <div className={color ? 'text-red-500 mt-5' : 'text-green-500 mt-5'}>
                <label className="block uppercase tracking-wide text-5xl font-bold mb-4 animate-pulse text-center">{timer}</label>
            </div>
            {cancelOrder && <label className="block uppercase tracking-wide text-3xl font-bold mb-4 text-center text-amber-900">
                Your Order has been cancelled</label>}
        </div>
    )
}

export default Timer;
