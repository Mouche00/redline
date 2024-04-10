import { useEffect, useState } from "react"

const Clock = () => {
    const [date, setDate] = useState(new Date)

    const refreshClock = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const timer = setInterval(refreshClock, 60000)
        return function cleanup() {
            clearInterval(timer)
        }
    }, [])

    // console.log(date.toLocaleTimeString())
    return (
        <>
            <p className="text-8xl text-neutral-200">{`${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '')}${date.getMinutes()}`}</p>
            {/* <p className="text-4xl text-neutral-200">{date.toDateString()}</p> */}
        </>
        
    )
}

export default Clock