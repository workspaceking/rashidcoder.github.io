// this component accept the data to render sidebar having data 
// sidebar:{
//     link:"",
//     image:"",
//     text:"",
// }
class SideBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sidebarData: this.props.data.sidebar

        }
    }

    render() {
        const { sidebarData } = this.state
        var tempsidebar = []
        var key = 0
        sidebarData.forEach(item => {
            tempsidebar.push(
                <li key={key++}>
                    <Link to={item.link} >
                        <a href={item.link}>
                            <span className="img-span">
                                <img src={item.image} alt="" />
                            </span>{item.text}</a>
                    </Link>
                </li>
            )
        });
        return (
            <div className="sideBar">
                <div className="sidebar-inner">
                    <ul className="sd-bar-menu">
                        {tempsidebar}
                    </ul>
                </div>
            </div>
        )
    }
}




// this is sidebar