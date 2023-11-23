import TituloPagina from "./componentes/TituloPagina"
import RowFotos from "./componentes/RowFotos"
import UltimaFoto from "./componentes/UltimaFoto"


export default function App(){

var ftDetaque = 0;

  const fotoDestaque = () => {
    ftDetaque = document.getElementById("numero_destaque").value
    if (ftDetaque < 0){
      document.getElementById("numero_destaque").value = 31
    }
    if (ftDetaque > 31){
      document.getElementById("numero_destaque").value = 0
    }
    ftDetaque = document.getElementById("numero_destaque").value
  }

  return(
    <div style={{backgroundColor: "black", margin: 0, padding: 15}}>
      <br/>
      <TituloPagina/>
      <br/>
      <br/>
      <div style={{backgroundColor: "#585658", padding: 15, marginLeft: 500, marginRight: 500}}>
          <input id="numero_destaque" style={{padding: 15, marginLeft: 125, marginRight: 125}} onChange={() => fotoDestaque()} type="number"></input>
      </div>
      <br/>
      <RowFotos imgDestaque={ftDetaque}
        id1="1" imagem1="dia1.jpg" titulo1="Dia 1 - Cristal" imagem1Link="https://i.pinimg.com/564x/65/c6/0f/65c60fe0bef1e9342ca0c9a9efefadf6.jpg"
        id2="2" imagem2="dia2.jpg" titulo2="Dia 2 - Traje/Terno" imagem2Link="https://i.pinimg.com/564x/0b/54/e3/0b54e358e3d84e7e8f2fafad6c786a8c.jpg"
        id3="3" imagem3="dia3.jpg" titulo3="Dia 3 - Navio" imagem3Link=""
        id4="4" imagem4="dia4.jpg" titulo4="Dia 4 - Nó" imagem4Link=""
        id5="5" imagem5="dia5.jpg" titulo5="Dia 5 - Corvo" imagem5Link=""
      />
      <RowFotos
        id1="6" imagem1="dia6.jpg" titulo1="Dia 6 - Espírito"
        id2="7" imagem2="dia7.jpg" titulo2="Dia 7 - Ventilador"
        id3="8" imagem3="dia8.jpg" titulo3="Dia 8 - Relógio"
        id4="id9" imagem4="dia9.jpg" titulo4="Dia 9 - Pressão"
        id5="id10" imagem5="dia10.jpg" titulo5="Dia 10 - Picareta/Pegar"
      />
      <RowFotos
        id1="id11" imagem1="dia11.jpg" titulo1="Dia 11 - Azedo"
        id2="id12" imagem2="dia12.jpg" titulo2="Dia 12 - Emperrado/Preso"
        id3="id13" imagem3="dia13.jpg" titulo3="Dia 13 - Teto/Telhado"
        id4="id14" imagem4="dia14.jpg" titulo4="Dia 14 - Tick"
        id5="id15" imagem5="dia15.jpg" titulo5="Dia 15 - Capacete"
      />
      <RowFotos
        id1="id16" imagem1="dia16.jpg" titulo1="Dia 16 - Bússula"
        id2="id17" imagem2="dia17.jpg" titulo2="Dia 17 - Colidir"
        id3="id18" imagem3="dia18.jpg" titulo3="Dia 18 - Lua"
        id4="id19" imagem4="dia19.jpg" titulo4="Dia 19 - Loop"
        id5="id20" imagem5="dia20.jpg" titulo5="Dia 20 - Broto"
      />
      <RowFotos
        id1="id21" imagem1="dia21.jpg" titulo1="Dia 21 - Peludo"
        id2="id22" imagem2="dia22.jpg" titulo2="Dia 22 - Abrir"
        id3="id23" imagem3="dia23.jpg" titulo3="Dia 23 - Vazar"
        id4="id24" magem4="dia24.jpg" titulo4="Dia 24 - Extinto"
        id5="id25" imagem5="dia25.jpg" titulo5="Dia 25 - Splat"
      />
      <RowFotos
        id1="id26" imagem1="dia26.jpg" titulo1="Dia 26 - Conectar"
        id2="id27" imagem2="dia27.jpg" titulo2="Dia 27 - Fagulha/Faísca"
        id3="id28" imagem3="dia28.jpg" titulo3="Dia 28 - Crocante"
        id4="id29" imagem4="dia29.jpg" titulo4="Dia 29 - Tapa-Olho"
        id5="id30" imagem5="dia30.jpg" titulo5="Dia 30 - Minhoca"
      />
      <UltimaFoto
        imagem="dia31.jpg" titulo="Dia 31 - Arriscar"
      />
      <br/>
    </div>
  )
}