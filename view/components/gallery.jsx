// this gallery accpet data in the form of array having object values 
// {
// image:'',
// text:'',
// }
class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gallerydata:this.props.data
        }
    }

    render() {
        
            const tempgallery = []
            var key = 0;
            this.state.gallerydata.forEach(item => {
                tempgallery.push(
                    <div className="col-lg-4 mb-30" key={key++}>
                        <div className="gallery-content">
                            <img src={item.image} alt="" />
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            });
         
        return (
            
                    <div className="row">
                        {tempgallery}
                    </div>
                

        )
    }
}

