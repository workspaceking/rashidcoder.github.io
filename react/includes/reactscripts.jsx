const ReactScripts = () => {

    var temp = []
    var key = 0
    
    app_config.ui.scripts.reactscripts.forEach(item => {
        temp.push(
            <script  key={key++} crossorigin src={item.src}></script>
        )
    });



    return (
        temp
    )
}
ReactDOM.render(<ReactScripts />, document.getElementById('react'));