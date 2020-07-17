export const useForm = () => {
	const submitForm = (sendToBackend,setIsLoad) => async event => {
		event.preventDefault()
			try {
                await setIsLoad(true)
				await sendToBackend()
                await setIsLoad(false)
			} catch (error) {
                console.log(error)
                await setIsLoad(false)
			}
	}
	return [submitForm]
}