export default function RowFotos(props){

    function tick() {
      //VerificaDestaque();
    }
    
    setInterval(tick, 1000);

    const VerificaDestaque = () => {
      window.alert()
      if (document.getElementById("divRow" + props.imgDestaque).id){
        window.alert(document.getElementById("divRow" + props.imgDestaque).id)
      }
    }

    const abreDesenho = (url) => {
      window.open(url, "_blank", "noreferrer")
    }
    
    const AumentarBotao = (id) => {
      document.getElementById(id).style.height = "35px"
      document.getElementById(id).style.color = "green"
    }
    const DiminuirBotao = (id) => {
      document.getElementById(id).style.height = "25px"
      document.getElementById(id).style.color = "black"
    }

    return(
      <div style={{backgroundColor: "black", placeContent:"center", padding: 15}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", placeContent:"center"}}>
          <div id={"divRow" + props.id1} style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem1}/>
            <h4  style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo1}</h4>
            <button id={props.id1} style={{width: 216}} role="link" onMouseOut={() => DiminuirBotao(props.id1)} onMouseOver={() => AumentarBotao(props.id1)} onClick={() => abreDesenho(props.imagem1Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem2}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo2}</h4>
            <button id={props.id2} style={{width: 216}} role="link" onMouseOut={() => DiminuirBotao(props.id2)} onMouseOver={() => AumentarBotao(props.id2)} onClick={() => abreDesenho(props.imagem2Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem3}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo3}</h4>
            <button id={props.id3} style={{width: 216, height: 25}} role="link" onMouseOver={() => AumentarBotao(props.id3)} onMouseOut={() => DiminuirBotao(props.id3)} onClick={() => abreDesenho(props.imagem3Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem4}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo4}</h4>
            <button id={props.id4} style={{width: 216}} role="link" onMouseOver={() => AumentarBotao(props.id4)} onMouseOut={() => DiminuirBotao(props.id4)} onClick={() => abreDesenho(props.imagem4Link)}>Ver Desenho</button>
          </div>
          <div style={{backgroundColor: "#585658", padding: 15, margin: 5}}>
            <img style={{height: 384, width: 216}} src={props.imagem5}/>
            <h4 style={{textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75), -2px -2px 4px rgba(0, 0, 0, 0.75)', color: 'white'}}>{props.titulo5}</h4>
            <button id={props.id5} style={{width: 216}} role="link" onMouseOver={() => AumentarBotao(props.id5)} onMouseOut={() => DiminuirBotao(props.id5)} onClick={() => abreDesenho(props.imagem5Link)}>Ver Desenho</button>
          </div>
        </div>
      </div>
    )
  }