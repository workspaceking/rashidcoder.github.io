class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data:this.props.data
        }
    }

    render() {

        // var tempdata = []
        // var key = 0;
        // this.state.data.forEach(item => {
        //     tempdata.push(
        //         <div className="element-item" key={key++}>
        //             <span><img src={item.image} alt="" /></span>
        //             <p>{item.description}<br /> {item.price}</p>
        //         </div>
        //     )
        // });

        // ya data direct product ko ja a ga
        // is data ka kiya krain gay phr ??? jo upper say ;loop out ho k aa rha hy ?

        return (
            
          <div className={this.props.className}>
              {this.props.children}
           </div>
            
        )
    }
}
