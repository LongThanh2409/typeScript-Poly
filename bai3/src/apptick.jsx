// component Base
import { useState } from "react"
import Square from "./components/square"
import Board from "./components/board"
import Products from "./components/products"
// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// State: Là trạng thái (bộ nhớ) của component, nó quyết định componetn được hiện thị như thế nào
const apptick = () => {

    return <div>

        <div
            className="h-[100vh] flex flex-col justify-center items-center">
            {/* <Board>

            </Board> */}
            <Products>

            </Products>

        </div>
    </div>

}

export default apptick