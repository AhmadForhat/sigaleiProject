import React from "react"
const ellipsis = require('text-ellipsis')
import moment from "moment"
import 'moment/locale/pt-br'

import jsImg from './image/js.svg'
import htmlImg from './image/html.svg'
import cssImg from './image/css.svg'
import semImg from './image/semImage.svg'

const imgLanguage = (language) => {
    if(language === 'JavaScript') return jsImg
    if(language === 'HTML') return htmlImg
    if(language === 'CSS') return cssImg
    return semImg
}

function InfoRepo({data}) {
    const {name, owner, forks, created_at, updated_at, primaryLanguage, url} = data
    return(
         <>
         <div style={{width: '20%', minWidth: '250px', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin: '10px auto'}}>
         <a href={url} target= 'blank' ><h2 style={{textAlign: 'center'}}>{ellipsis(name,15)} </h2></a>
            <div style={{display: 'flex' }}>
                <div>
                    <p>
                        {`Criador: ${owner.login}`}
                    </p>
                    <p>
                        {`Forks: ${forks.totalCount}`}
                    </p>
                    <p>
                        {`Criado: ${moment(created_at).format('DD/MMM/YY')}`}
                    </p>
                    <p>
                        {`Atualizado: ${moment(updated_at).format('DD/MMM/YY')}`}
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '0 auto'}}>
                    <img src={imgLanguage(primaryLanguage.name)} alt='imagem da linguagem' style={{width: '50px'}}></img>
                </div>
            </div>
            <div style={{ margin: '0 auto', width: '100%',  textAlign: 'center', marginTop:'20px'}}>
                <a href={`/${name}`}>Saiba Mais</a>
            </div>
         </div>

        </>
     )
  }

export default InfoRepo