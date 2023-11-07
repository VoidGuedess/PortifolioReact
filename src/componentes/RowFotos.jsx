export default function RowFotos(props){
    const abreDesenho = (url) => {
      window.open(url, "_blank", "noreferrer")
    }

    return(
      <div style={{backgroundColor: "black", placeContent:"center", padding: 15}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", placeContent:"center"}}>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem1}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo1}</h4>
            <button style={{width: 216}} role="link" onClick={() => abreDesenho(props.imagem1Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem2}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo2}</h4>
            <button style={{width: 216}} role="link" onClick={() => abreDesenho(props.imagem2Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem3}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo3}</h4>
            <button style={{width: 216}} role="link" onClick={() => abreDesenho(props.imagem3Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem4}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo4}</h4>
            <button style={{width: 216}} role="link" onClick={() => abreDesenho(props.imagem4Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem5}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo5}</h4>
            <button style={{width: 216}} role="link" onClick={() => abreDesenho(props.imagem5Link)}>Ver Desenho</button>
          </div>
        </div>
      </div>
    )
  }