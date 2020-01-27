class TextBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="input-inside type-2">
                <label for="">{this.props.label}</label>
                <input {...this.props}  />
            </div>
        )
    }
}

// type={this.props.type} name={this.props.name} value={this.props.value} className={this.props.className} placeholder={this.props.label}