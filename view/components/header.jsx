class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerMenu: this.props.headerData.headerMenu,
            dropDownOptionArray: this.props.headerData.dropDownOptionArray,
            logo: this.props.headerData.Logo
        }
    }
    componentDidMount() {

        jQuery(document).ready(function () {
            jQuery('select').niceSelect();
        });
    }
    render() {
        const { headerMenu, dropDownOptionArray, logo } = this.state

        const tempHeader = []
        var key = 0;
        headerMenu.forEach(item => {
            tempHeader.push(

                <li key={key++}>
                    <Link  to={item.link} >{item.text}</Link>
                </li>
            )
        });
        const tempDropDownOption = []
        dropDownOptionArray.forEach(item => {
            tempDropDownOption.push(
                <option key={key++} value={item.value}>{item.text}</option>
            )
        });

        return (
            <div>
                <div className="offCanvasMenu">
                    <ul className="mobileMenu">
                        {tempHeader}
                    </ul>
                    <div className="close-MobileMenu">
                        <i className="fal fa-times"></i>
                    </div>
                </div>
                <div className="off-canvas-overlay"></div>

                <header className="header-area bdr-bottom" data-z-index="5">
                    <div className="container-fluid">
                        <div className="header-flex-wrap">
                            <div className="logo"><a href={logo.link}><img src={logo.path} alt="" /></a></div>
                            <nav className="d-none d-lg-block">
                                <ul className="main-menu">
                                    {tempHeader}
                                </ul>
                            </nav>
                            <div className="language" >
                                <div className="mobile-bar" id="m-menu"><i className="fal fa-bars"></i></div>
                                <select name="#" id="lan-select">
                                    {tempDropDownOption}
                                </select>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}