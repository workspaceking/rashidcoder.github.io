class EditDeleteCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    render() {
        var tempcard = []
        var key = 0
        this.state.data.forEach(item => {
            tempcard.push(
                <div key={key++} className="product-sh-item">
                    <div className="sh-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="right-content">
                        <a href={item.link} className="tag blue-bg" >{item.linktext}</a>
                        <p>{item.title}</p>
                        <div className="croud-btn">
                            <a href={item.editlink}>Edit</a>
                            <a href={item.deletelink}>Delete</a>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            tempcard
        )
    }
}
