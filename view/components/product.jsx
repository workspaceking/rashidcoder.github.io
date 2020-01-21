class Product extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productSliderData:this.props.data
        }
    }
    render() {

        const tempProductSlider = []
        var key = 0;
         this.state.productSliderData.forEach(item => {
             tempProductSlider.push(
                <div className="" key={key++}>
                     <div className="product-content-wrap">
                         <div className="product-img">
                             <img src={item.image} alt="" />
                             <div className="img-trans-content">
                                 <p>{item.certificationdata.heading}</p>
                                 <p>{item.certificationdata.description}</p>
                             </div>
                         </div>
                         <div className="product-content">
                             <a href={item.link} className="tag">{item.Linktext}</a>
                             <div className="place"><span><img src="assets/img/place-indicator.svg" alt="" />{item.location}</span></div>
                            <div className="about-prouct">
                                 <h4>{item.productname}</h4>
                                 <p>{item.discription}</p>
                             </div>
                             <div className="price">
                                 <p>{item.weight}</p>
                                 <p>{item.price}</p>
                             </div>
                         </div>
                     </div>
                 </div>
             )
        })
        return (
            <div>
           {tempProductSlider}
           </div>
        )
    }
}









