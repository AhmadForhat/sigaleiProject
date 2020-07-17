import axios from 'axios'


const fetch = (state) => {
  const source = axios.CancelToken.source()    
  const run = async () => {
        try {
          } catch (error) {
            console.log(error)
        } finally {
            console.log('finalizou')
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetch