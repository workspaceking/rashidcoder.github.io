class FormDynamic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { data } = this.state
        var style = {
            padding: "10px"
        }
        var tempform = []
        var key = 0
        data.form.forEach(item => {
            if (item.fieldtype == "input") {
                key++
                tempform.push(

                    <span style={style} className={'input-inside type-2 ' + item.col}>
                        <label >{item.label}</label>
                        <input type={item.type} className={item.className} placeholder={item.placeholder} />
                    </span>
                )

            }
            else if (item.fieldtype == "select") {
                key++
                tempform.push(
                    <span style={style} key={key++} className={'input-inside type-2 with-select ' + item.col}>
                        <label >{item.label}</label>
                        <select className={item.className} name="" id="">
                            {item.option.map(option =>
                                <option key={key++} value={option.value}>{option.text}</option>
                            )}
                        </select>
                    </span>
                )
            }
            else if (item.fieldtype == "textarea") {
                key++
                tempform.push(
                    <span style={style} key={key++} className={'input-inside type-2 ' + item.col} >
                        <label >{item.label}</label>
                        <textarea name={item.name} className={item.className} id="" cols={item.cols} rows={item.rows}></textarea>
                    </span>
                )
            }
            else if (item.fieldtype == "button") {
                key++
                tempform.push(
                    <span style={style} key={key++} className={'submit-btn business-pge ' + item.col}>
                        <button className={item.className} type={item.type}>{item.label}</button>
                    </span>
                )
            }
            else if (item.isNewLine == true) {
                tempform.push(
                    <br /> 
                )
            }
        });

        return (

            <form action={data.action} method={data.method}>
                {tempform}
                
            </form>
        )
    }
}













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
//                     value: '1',
//                     text: "Add a category"
//                 },
//                 {
//                     value: '2',
//                     text: "Add a category"
//                 },
//                 {
//                     value: '3',
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