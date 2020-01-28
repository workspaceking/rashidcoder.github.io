class FormDynamic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.FormType = {
            Input: "input",
            Select: "select",
            TextArea: "textarea",
            Button: "button",
        }
    }



    render() {
        // props are not state they are separate thing; kindly keep them separate don't assign props to state
        // there will a single case in 100 for doing this
        const data = this.props.data
        const type = this.FormType;
        var style = {
            // in general cases use like this, but for specifi element specify elements 
            // padding: "10px",
            // like this e.g
            input_inside: {
                padding: "10px"
            }

        }
        var form_dom = []
        var key = 0
        data.form.forEach(item => {
            switch (item.fieldtype) {
                case type.Input:
                    form_dom.push(<span style={style.input_inside} key={key++} className={`input-inside type-2  ${item.col}`}>
                        <label >{item.label}</label>
                        <input type={item.type} className={item.className} placeholder={item.placeholder} />
                    </span>)
                    break;
                case type.Select:
                    form_dom.push(
                        <span style={style.input_inside} key={key++} className={`input-inside type-2 with-select ${item.col}`}>
                            <label >{item.label}</label>
                            <select className={item.className} name="" id="">
                                {item.option.map(option =>
                                    <option key={key++} value={option.value}>{option.text}</option>
                                )}
                            </select>
                        </span>
                    )
                    break;
                case type.TextArea:
                    form_dom.push(
                        <span style={style.input_inside} key={key++} className={`input-inside type-2  ${item.col}`} >
                            <label >{item.label}</label>
                            <textarea name={item.name} className={item.className} id="" placeholder={item.placeholder} cols={item.cols} rows={item.rows}></textarea>
                        </span>
                    )
                    break;
                case type.Button:
                    form_dom.push(
                        <span style={style.input_inside} key={key++} className={`submit-btn ${item.col}`}>
                            <button className={item.className} type={item.type}>
                                <Link className="defaultcolor" to={item.route} >
                                    <li >{item.label}</li>
                                </Link>
                            </button>
                        </span>
                    )
                case type.isNewLine:
                    form_dom.push(
                        <br key={key++} />
                    )
                    break;
                default:
                    break;
            }

        });

        return (
            <form key={key++} action={data.action} method={data.method}>
                <span className={data.className}>
                    {form_dom}
                </span>
            </form>
        )
    }
}





// this is formdynamic







// this component accept the data having formate and render input select textarea and button
// data: {
//     action: "post",
//     form: [
//         {
//             fieldtype: "input",
//             label: "COMPANY NAME",
//             type: "text",
//             placeholder: "",
//             className: "xyz"
//         },
//         {
//             fieldtype: "select",
//             label: "CATEGORIE(S)",
//             className: "xyz",
//             option: [
//                 {
//                     value: `1`,
//                     text: "Add a category"
//                 },
//                 {
//                     value: `2`,
//                     text: "Add a category"
//                 },
//                 {
//                     value: `3`,
//                     text: "Add a category"
//                 }
//             ]
//         },
//         {
//             fieldtype: "textarea",
//             label: "COMPANY PRESENTATION",
//             className: "xyz",
//             name: "companyPresentation",
//             cols: "30",
//             rows: 10
//         },
//         {
//             fieldtype: "button",
//             type: "submit",
//             label: "Save",
//             className: "round-btn",
//         }

//     ]
// }