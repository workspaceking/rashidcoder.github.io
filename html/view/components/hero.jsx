// this hero component accpet data object  having values
// heroData:{
// backgroundImage:'',
// text:'',
// }
class Hero extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            heroData: this.props.heroData

        }
    }
    render() {
        const { heroData } = this.state
        const herostyle = {
            backgroundImage: heroData.backgroundImage
        }
        return (
            <div className="hero-area" style={herostyle}>
                <div className="container">
                    <div className="hero-content">
                        <p>{heroData.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
