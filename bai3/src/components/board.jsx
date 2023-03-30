import { useState } from "react"
import Square from "./square"
import { useEffect } from "react"

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [lastGame, setLastGame] = useState(null)
    const [lastPlayer, setLastPlayer] = useState(null)
    // const [lastPlayedTime, setLastPlayedTime] = useState(new Date())
    const [timer, setTimer] = useState(3)

    const handlePlay = (position) => {

        const newGame = game.map((g, index) => {
            if (index === position) {

                return player ? "X" : "O"
            }

            // console.log(g);
            return g

        })
        setLastGame([...game])
        setLastPlayer(player)
        if (checkWinner()) {
            return true

        }
        setGame(newGame)
        setPlayer(!player)
        setTimer(3)
        // setLastPlayedTime(new Date())

    }






    const players = () => {
        if (checkWinner()) {
            return null
        }
        return player ? "X" : "O"
    }
    const digital = (winner) => {

        return <div class="box">
            <div class="inner">
                <span>Người chiến thắng là {winner === "X" ? "X" : "O"}</span>
            </div>
            <div class="inner">
                <span className="font-black">Game Over</span>
            </div>
        </div>

    }

    const listWinner = [
        [0, 1, 2], [0, 4, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ]
    const handlReset = () => {

        setGame([null, null, null, null, null, null, null, null, null])
        document.querySelectorAll(".square").forEach((square) => {
            square.classList.remove("bg-yellow-500");


        });
        setLastGame(null)
        setLastPlayer(null)
        setTimer([3])





    }

    // const dennguoc = (time = 3000) => {

    //     if (checkWinner()) {
    //         setTimeout(() => {
    //             handlReset()
    //         }, time);
    //     }
    // }
    // const randomPlay = () => {
    //     const emptyPositions = game.reduce((acc, val, index) => {
    //         if (val === null) acc.push(index)
    //         return acc
    //     }, [])
    //     if (emptyPositions.length > 0) {
    //         const randomIndex = Math.floor(Math.random() * emptyPositions.length)
    //         const position = emptyPositions[randomIndex]
    //         handlePlay(position)
    //     }
    // }
    const handleAutoPlay = () => {

        const emptyGame = game.map((square, index) => square ? null : index).filter(item => item != null)
        const position = emptyGame[Math.floor(Math.random() * emptyGame.length)];

        handlePlay(position)
        setTimer(3)



    }
    // const Conter = () => {
    //     const [conter, setConter] = useState(3)
    //     if (!checkWinner()) {

    //         setTimeout(() => {
    //             setConter(conter - 1)
    //         }, 1000)
    //         if (conter < 0) {
    //             setConter(3)

    //         }
    //         return <>
    //             <h1>time: {conter}</h1>
    //         </>

    //     }

    // }

    useEffect(() => {



        if (!checkWinner()) {
            if (timer < 0) {
                handleAutoPlay()
            }

            const interval = setInterval(() => {
                setTimer(timer - 1)
            }, 700)

            return () => clearInterval(interval)
        }

    }, [timer])




    const checkWinner = () => {
        for (let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                // const color = [p1, p2, p3]
                if (game[p1]) {
                    document.querySelectorAll(".square")[p1].classList.add("bg-yellow-500");
                    document.querySelectorAll(".square")[p2].classList.add("bg-yellow-500");
                    document.querySelectorAll(".square")[p3].classList.add("bg-yellow-500");
                    return digital(game[p1]);
                }


            }




            // console.log(game[p2]);

        }
        return null
    }
    const handleUndo = () => {
        if (lastGame && lastPlayer !== null && !checkWinner()) {
            setGame(lastGame)
            setPlayer(lastPlayer)
            setLastGame(null)
            setLastPlayer(null)
            setTimer(3)

        }
        // console.log(setPlayer(lastGame));
    }



    return <>
        <h2>{timer}</h2>
        <h2 className="pt-4 font-bold">Lượt tiếp theo:{players()}</h2>
        <h2 className="pt-4 font-bold my-2 h-20"> {checkWinner()}</h2>
        <div className="grid grid-cols-3 gap-2 w-[240px] ">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
        <div className="">

            <button className="bg-sky-500 px-6 py-3 mt-4" onClick={handlReset}>Reset</button>
            <button className="bg-red-500 px-6 py-3 mt-4" onClick={handleUndo}>Đi lại</button>


        </div>

    </>

}

export default Board