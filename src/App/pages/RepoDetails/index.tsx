import React from 'react';
import GraphicCommits from '../../components/GraphicCommits/index.tsx'

const RepoDetails = ({data}) => {
    const [repoInfo] = data
    return (
        <div style={{height: '100%',display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', marginTop:'80px'}}>
            <a style={{alignSelf:'center'}} href={repoInfo.url}>{repoInfo.name}</a>
            <div style={{height:'400px', width:'90%', alignSelf:'center'}}>
                <GraphicCommits data={repoInfo}/>
            </div>
        </div>
    )
}

export default RepoDetails