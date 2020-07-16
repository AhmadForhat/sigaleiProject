import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Spinner from '../Spinner'


const removeDuplicates = arrayWithDuplicates => {
	if (!arrayWithDuplicates) throw new Error('function removeDuplicates must receive an array')
	if (!(arrayWithDuplicates instanceof Array)) throw new Error('function removeDuplicates must receive an array')
	return arrayWithDuplicates.flat().reduce((accumulated, current) => {
		if (accumulated.includes(current)) return accumulated
		return [...accumulated, current]
	}, [])
}

const GraphicCommits = ({data}) => {
    const [loading, setLoading] = useState(true)
    const [array, setArray] = useState([])
    useEffect(() => {
        const history = data.object.history.nodes
        const arrayUsers = history.map(item => {
            if(item.author.user != null){
                return item.author.user.login
            }
        })
        const users = removeDuplicates(arrayUsers)
        const arrayHistoryUser = users.map(user => {
            return history.filter(item => {
                if(item.author.user != null){
                    return item.author.user.login === user
                }
            })
        })
        const arrayResults = arrayHistoryUser.map(item => {
            if(item[0]){
                let valorInicialAdd = 0
                let somaAdditions = item.reduce(function (acumulador, valorAtual) {
                    return acumulador + valorAtual.additions;
                },valorInicialAdd)
                let valorInicialDel = 0
                let somaDeletions = item.reduce(function (acumulador, valorAtual) {
                    return acumulador + valorAtual.deletions;
                },valorInicialDel)
                return {
                    nome: item[0].author.user != null ? item[0].author.user.login : null,
                    avatarUrl: item[0].author.user != null ? item[0].author.user.avatarUrl : null,
                    url: item[0].author.user != null ? item[0].author.user.url : null,
                    additions: somaAdditions,
                    deletions: somaDeletions,
                    commits: item.length
                }
            }
        })
        const newArray = arrayResults.map(item => {
            if(item != undefined){
                return item
            }else{
                return {
                    nome: 'undefined',
                    additions: 1,
                    deletions: 1,
                    commits: 1
                }
            }
        })
        function compare( a, b ) {
            if ( a.additions < b.additions ){
              return 1;
            }
            if ( a.additions > b.additions ){
              return -1;
            }
            return 0;
          }
        const orderArray = newArray.sort(compare)
        const removedArray = orderArray.splice(0,8)
        setLoading(false)
        setArray(removedArray)
    },[])
    if(loading) return <Spinner />
    return (
        <>
            <ResponsiveBar
                data={array}
                keys={[ 'commits','additions', 'deletions' ]}
                indexBy="nome"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Users',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'commitsInfo',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
            <h2 style={{marginBottom:'20px'}}>Tops Commit</h2>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>
                {array.map(item => {
                    return(
                        <div style={{display:'flex', flexWrap:'wrap', padding:'20px', justifyContent:'space-around', width:'40%', minWidth:'200px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', marginBottom:'30px', alignSelf:'center'}}>
                            <img style={{width:'10%', minWidth:'150px', borderRadius:'300px'}} src={item.avatarUrl} alt='avatar github'/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                <a href={item.url}>{item.nome}</a>
                                <p>Total de Commits: {item.commits}</p>
                                <p>Total de adições: {item.additions}</p>
                                <p>Total de delets: {item.deletions}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GraphicCommits