import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/index'
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
)
