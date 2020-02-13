// this testimonial accpet data in the form of array having object values 
// {
// image:'',
// name:'',
// companyname:'',
// description:''
// }
class Testimonial extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data:this.props.data
        }
    }
    render() {
        
            const tempTestimonial = []
            var key=0;
            this.state.data.forEach(item => {
                tempTestimonial.push(
                    <div className="col-lg-4" key={key++}>
                        <div className="single-client" data-relative="yes">
                            <div className="client-img">
                                <img src={item.image} alt="" />
                            </div>
                            <h5>{item.name}</h5>
                            <h4>{item.companyname}</h4>
                            <p> <img src="assets/img/inverted.svg" alt="" />{item.description}<img src="assets/img/inverted.svg" alt="" /></p>
                        </div>
                    </div>
                )
            });
         
        return (
            
                    <div className="row">
                        {tempTestimonial}
                    </div>

        )
    }
}


