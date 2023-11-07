export default function RowFotos(props){
    return(
      <div style={{backgroundColor: "black", placeContent:"center", padding: 15}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", placeContent:"center"}}>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 576, width: 324}} src={props.imagem}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo}</h4>
          </div>
        </div>
      </div>
    )
  }