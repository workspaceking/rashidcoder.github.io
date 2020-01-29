const Scripts = () => {

    var temp = []
    var key = 0
    
    app_config.ui.scripts.footerscripts.forEach(item => {
        temp.push(
            <script  key={key++} type={"text/javascript"} src={item.src}></script>
        )
    });



    return (
        temp
    )
}
ReactDOM.render(<Scripts />, document.getElementById('footer'));