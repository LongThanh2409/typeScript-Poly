import { useState } from "react"
import Avavtar from "./components/avatar"

// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () => {
    // const user = {
    //     name: "Đỗ Thành Long",
    //     age: 19,
    // }
    // JSX
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const [counter, setcounter] = useState(10)
    const [times, setTime] = useState(today.getSeconds())
    // function increaseCounter() {
    //     setcounter(counter + 1)
    // }
    function showTime() {

        setInterval(() => {
            setTime(time)
        }, 1000)



    }
    console.log(time);
    showTime()
    // console.log(counter);
    return <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1>{time}</h1>
        <button onClick={showTime} className="border p-3 bg-red-500 hover:bg-red-600">Tăng dần</button>
    </div>
    // <div>
    //     <h1>Hello world</h1>
    //     <Avavtar user={user} showInfo={() => console.log(user)}>
    //         <h2>Lớp we17304</h2>
    //     </Avavtar>
    // </div>

}

export default App