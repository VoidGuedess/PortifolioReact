import TituloPagina from "./componentes/TituloPagina"
import RowFotos from "./componentes/RowFotos"
import UltimaFoto from "./componentes/UltimaFoto"

export default function App(){
  return(
    <div style={{backgroundColor: "black", margin: 0, padding: 15}}>
      <br/>
      <TituloPagina/>
      <br/>
      <br/>
      <RowFotos
        imagem1="dia1.jpg" titulo1="Dia 1 - Cristal" imagem1Link="https://i.pinimg.com/564x/65/c6/0f/65c60fe0bef1e9342ca0c9a9efefadf6.jpg"
        imagem2="dia2.jpg" titulo2="Dia 2 - Traje/Terno" imagem2Link="https://i.pinimg.com/564x/0b/54/e3/0b54e358e3d84e7e8f2fafad6c786a8c.jpg"
        imagem3="dia3.jpg" titulo3="Dia 3 - Navio" imagem3Link=""
        imagem4="dia4.jpg" titulo4="Dia 4 - Nó" imagem4Link=""
        imagem5="dia5.jpg" titulo5="Dia 5 - Corvo" imagem5Link=""
      />
      <RowFotos
        imagem1="dia6.jpg" titulo1="Dia 6 - Espírito"
        imagem2="dia7.jpg" titulo2="Dia 7 - Ventilador"
        imagem3="dia8.jpg" titulo3="Dia 8 - Relógio"
        imagem4="dia9.jpg" titulo4="Dia 9 - Pressão"
        imagem5="dia10.jpg" titulo5="Dia 10 - Picareta/Pegar"
      />
      <RowFotos
        imagem1="dia11.jpg" titulo1="Dia 11 - Azedo"
        imagem2="dia12.jpg" titulo2="Dia 12 - Emperrado/Preso"
        imagem3="dia13.jpg" titulo3="Dia 13 - Teto/Telhado"
        imagem4="dia14.jpg" titulo4="Dia 14 - Tick"
        imagem5="dia15.jpg" titulo5="Dia 15 - Capacete"
      />
      <RowFotos
        imagem1="dia16.jpg" titulo1="Dia 16 - Bússula"
        imagem2="dia17.jpg" titulo2="Dia 17 - Colidir"
        imagem3="dia18.jpg" titulo3="Dia 18 - Lua"
        imagem4="dia19.jpg" titulo4="Dia 19 - Loop"
        imagem5="dia20.jpg" titulo5="Dia 20 - Broto"
      />
      <RowFotos
        imagem1="dia21.jpg" titulo1="Dia 21 - Peludo"
        imagem2="dia22.jpg" titulo2="Dia 22 - Abrir"
        imagem3="dia23.jpg" titulo3="Dia 23 - Vazar"
        imagem4="dia24.jpg" titulo4="Dia 24 - Extinto"
        imagem5="dia25.jpg" titulo5="Dia 25 - Splat"
      />
      <RowFotos
        imagem1="dia26.jpg" titulo1="Dia 26 - Conectar"
        imagem2="dia27.jpg" titulo2="Dia 27 - Fagulha/Faísca"
        imagem3="dia28.jpg" titulo3="Dia 28 - Crocante"
        imagem4="dia29.jpg" titulo4="Dia 29 - Tapa-Olho"
        imagem5="dia30.jpg" titulo5="Dia 30 - Minhoca"
      />
      <UltimaFoto
        imagem="dia31.jpg" titulo="Dia 31 - Arriscar"
      />
      <br/>
    </div>
  )
}