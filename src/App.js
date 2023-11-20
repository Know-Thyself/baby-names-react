import React from 'react'
import './App.css'
import babyNames from './babyNamesData.json'
import BoysAndGirlsNames from './BoysAndGirlsNames'

function App() {
	return (
		<main key='main' className='main'>
			<h2 key='main-header' className='names-header'>
				All About Awesome Baby Names!
			</h2>
			<BoysAndGirlsNames babyNames={babyNames} />
		</main>
	)
}

export default App
