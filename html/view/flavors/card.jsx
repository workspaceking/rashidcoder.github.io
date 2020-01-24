class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data:this.props.data
        }
    }

    render() {

        return (
            
          <div className={this.props.className}>
              {this.props.children}
           </div>
            
        )
    }
}
