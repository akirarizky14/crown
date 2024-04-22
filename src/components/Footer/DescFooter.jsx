import '../../css/components/Footer/DescFooter.css'


function DescFooter(props){
    return(
        <div onClick={props.link} className="container-descfooter">
            <div className="title-footer">
                <h3>{props.title}</h3>
            </div>
            <div className="desc-footer">
                <span>{props.desc}</span>
                <span>{props.desc1}</span>
            </div>
        </div>
    )
}

export default DescFooter