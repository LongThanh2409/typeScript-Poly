const Avavtar = (props) => {
    const { user, showInfo, children } = props
    // console.log(children);
    // Immutable
    // props.user = {
    //     name: "Dinh Quoc Tai"
    // }
    return <div className="">
        {children}
        <h1>{user.name}</h1>
        <img className=" " alt="" src="https://hapoland.vn/wp-content/uploads/2022/09/hao-han-la-gi-3.jpg" />
        <button className="" class="bg-red-200" onClick={showInfo}>Ảo thật đấy</button>
    </div>

}

export default Avavtar