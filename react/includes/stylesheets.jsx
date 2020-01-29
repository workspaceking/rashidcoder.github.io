const StyleSheets = () => {

    var temp = []
    var key = 0
    
    app_config.ui.stylesheets.forEach(item => {
        temp.push(
            <link key={key++} rel={item.rel} type={item.type} href={item.href} />
        )
    });



    return (
        temp
    )
}

ReactDOM.render(<StyleSheets />, document.getElementById('head'));