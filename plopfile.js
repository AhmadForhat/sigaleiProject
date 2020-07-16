module.exports = plop => {
	plop.setGenerator('react-firebase', {
		description: 'Generator for apps that use React and Firebase',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: "Give a name for the project. Will be used in package.json and in webpack.config.js. Will be the name of the icon that appears on the user's phone home screen",
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Name is required'
				}
			},
			{
				type: 'input',
				name: 'description',
				message: 'Give a description for the project. Will be used in package.json',
			},
			{
				type: 'input',
				name: 'repository',
				message: 'Paste the github repository link. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Repository is required'
				}
			},
			{
				type: 'input',
				name: 'author',
				message: 'Name the author of the project. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Author is required'
				}
			}
		],
		actions: [
			{
				type: 'add',
				path: '.gitignore',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/.##gitignore##'
			},
			{
				type: 'add',
				path: '.npmrc',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/.npmrc'
			},
			{
				type: 'add',
				path: '_redirects',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/_redirects'
			},
			{
				type: 'add',
				path: 'credentials.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/credentials.js'
			},
			{
				type: 'add',
				path: 'logo.png',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/logo.png'
			},
			{
				type: 'add',
				path: 'package.json',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/package.json'
			},
			{
				type: 'add',
				path: 'webpack.config.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/webpack.config.js'
			},
			{
				type: 'add',
				path: 'src/index.css',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/index.css'
			},
			{
				type: 'add',
				path: 'src/index.html',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/index.html'
			},
			{
				type: 'add',
				path: 'src/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/index.js'
			},
			{
				type: 'add',
				path: 'src/sw.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/sw.js'
			},
			{
				type: 'add',
				path: 'src/App/appContext.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/appContext.js'
			},
			{
				type: 'add',
				path: 'src/App/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/index.js'
			},
			{
				type: 'add',
				path: 'src/App/Router.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Router.js'
			},
			{
				type: 'add',
				path: 'src/App/DeleteAccount/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/DeleteAccount/index.js'
			},
			{
				type: 'add',
				path: 'src/App/DeleteAccount/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/DeleteAccount/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/Login/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Login/index.js'
			},
			{
				type: 'add',
				path: 'src/App/Login/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Login/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/Menu/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Menu/index.js'
			},
			{
				type: 'add',
				path: 'src/App/Register/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Register/index.js'
			},
			{
				type: 'add',
				path: 'src/App/Register/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Register/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/Register/styles.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/Register/styles.js'
			},
			{
				type: 'add',
				path: 'src/App/ResendEmail/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/ResendEmail/index.js'
			},
			{
				type: 'add',
				path: 'src/App/ResendEmail/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/ResendEmail/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/ResetPass/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/ResetPass/index.js'
			},
			{
				type: 'add',
				path: 'src/App/ResetPass/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/ResetPass/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/UpdateEmail/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/UpdateEmail/index.js'
			},
			{
				type: 'add',
				path: 'src/App/UpdateEmail/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/UpdateEmail/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/App/UpdatePass/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/UpdatePass/index.js'
			},
			{
				type: 'add',
				path: 'src/App/UpdatePass/sendToBackend.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/App/UpdatePass/sendToBackend.js'
			},
			{
				type: 'add',
				path: 'src/Firebase/firebase-config.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/Firebase/firebase-config.js'
			},
			{
				type: 'add',
				path: 'src/Firebase/index.js',
				templateFile: 'node_modules/@ziro/generator/templates/react-firebase/src/Firebase/index.js'
			}
		]
	})
	plop.setGenerator('lambda-netlify', {
		description: 'Generator for lambda functions deployed to Netlify',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Give a name for the project. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Name is required'
				}
			},
			{
				type: 'input',
				name: 'description',
				message: 'Give a description for the project. Will be used in package.json',
			},
			{
				type: 'input',
				name: 'repository',
				message: 'Paste the github repository link. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Repository is required'
				}
			},
			{
				type: 'input',
				name: 'author',
				message: 'Name the author of the project. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Author is required'
				}
			}
		],
		actions: [
			{
				type: 'add',
				path: '.env',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/.env'
			},
			{
				type: 'add',
				path: '.gitignore',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/.##gitignore##'
			},
			{
				type: 'add',
				path: 'netlify.toml',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/netlify.toml'
			},
			{
				type: 'add',
				path: 'package.json',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/package.json'
			},
			{
				type: 'add',
				path: 'src/templates/main.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/templates/main.js'
			},
			{
				type: 'add',
				path: 'src/templates/request.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/templates/request.js'
			},
			{
				type: 'add',
				path: 'src/lambdas/lambda.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/lambdas/lambda.js'
			}
		]
	})
}