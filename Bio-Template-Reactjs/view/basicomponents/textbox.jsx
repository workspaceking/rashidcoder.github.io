class TextBox extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div class="input-inside type-2">
                <label for="">{this.props.label}</label>
                <input type={this.props.type}  placeholder="" />
            </div>
        )
    }
}


