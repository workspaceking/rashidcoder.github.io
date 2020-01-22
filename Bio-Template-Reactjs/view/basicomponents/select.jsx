class Select extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }
    

    render() {
        return (
            <div className="input-inside type-2">
                <label for="">{this.props.label}</label>
                <select name={this.props.name}  value={this.props.value} onChange={this.props.onChange} {...this.props}>
                    
                </select>
            </div>

        )
    }
}

// <Form.Field
//         control={Select}
//         options={this.props.options}
//         value={this.props.value}
//         label={{
//           children: this.props.text,
//           htmlFor: "form-select-control-gender"
//         }}
//         placeholder='Select any Option'
//         width={this.props.width}
//         search
//         searchInput={{ id: "form-select-control-" + this.props.name }}
//         id={this.props.id}
//         name={this.props.name}
//         {...this.props}
// type={this.props.type} name={this.props.name} value={this.props.value} className={this.props.className} placeholder={this.props.label}
