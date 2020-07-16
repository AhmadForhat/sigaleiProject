import React from 'react';
import {useRouteMatch} from "react-router-dom";
import Spinner from '../../components/Spinner'
import InfoRepo from '../../components/InfoRepo'
import RepoDetails from '../RepoDetails'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Dashboard = () => {
    const REPOSITORIES = gql`
    {
        repositoryOwner(login: "torvalds") {
          avatarUrl
          login
          repositories(privacy: PUBLIC, first: 100, ownerAffiliations: OWNER, affiliations: OWNER, isLocked: false, isFork: false) {
            totalCount
            nodes {
              name
              nameWithOwner
              owner {
                login
              }
              url
              forks {
                totalCount
              }
              updatedAt
              createdAt
              primaryLanguage {
                name
              }
              object(expression: "master") {
                ... on Commit {
                  oid
                  history(first: 100, since: "2018-01-01T00:00:00Z") {
                    totalCount
                    nodes {
                      oid
                      messageHeadline
                      additions
                      deletions
                      committedDate
                      author {
                        user {
                          login
                          avatarUrl
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }       
    `
    const { url } = useRouteMatch();
    if(url.split('/')[1]){
        const repositorio = url.split('/')[1]
        return (
            <Query query={REPOSITORIES} variables={{}}>
                {({data, loading}) => (
                            loading ? (
                                <div style = {{display: 'flex', justifyContent:'center',width: '95%',margin: '0 auto', marginTop:'100px'}}>
                                    <Spinner />
                                </div>
                            ) : (
                            <div>
                                <RepoDetails data={data.repositoryOwner.repositories.nodes.filter(repo => {return repo.name === repositorio})}/>
                            </div>
                            ) 
                        )}
            </Query>
        )
    }
    return (
        <>
            <div style = {{display: 'flex', width: '95%', flexWrap: 'wrap', margin: '0 auto', marginBottom:'80px', marginTop:'100px'}}>
                <div style={{width:'100%', display:'flex', flexWrap:'wrap'}}>
                    <Query query={REPOSITORIES} variables={{}}>
                    {({data, loading}) => (
                        loading ? (
                            <div style={{display:'flex', margin:'0 auto', marginTop:'100px'}}>
                                <Spinner />
                            </div>
                        ) : (
                        <>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%'}}>
                                <img style ={{width:'20%', minWidth:'250px', borderRadius:'800px'}} src={data.repositoryOwner.avatarUrl} alt='avatar github'/>
                                <h2 style={{color:'#011C53', marginTop:'20px'}}>Bem vindo, {data.repositoryOwner.login}</h2>
                            </div>
                            {data.repositoryOwner.repositories.nodes.map((commit,index) => {
                                return(
                                <InfoRepo key={index} data={commit}/>
                                )
                            })}
                        </>
                        ) 
                    )}
                    </Query>
                </div>
            </div>
        </>
    )
}

export default Dashboard