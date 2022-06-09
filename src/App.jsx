import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import IconHome from './IconHome'
import IconLocation from './IconLocation'
import IconProfile from './IconProfile'
import IconEspeto from './IconEspeto'
import QrReader from 'react-web-qr-reader'

function App() {
  const [count, setCount] = useState(0)
  const [scan, setScan] = useState(false)
  const [data, setData] = useState('')

  return (
	<>
		<header>
			<h1>Malaga's Treasure</h1>
			<section className='points'>
				<span>{count}</span><IconEspeto />
			</section>
		</header>
    	<main>
			<img src="https://1001beach.com/img/posts/3514/1200/playa_de_maro-2.jpg" alt="Playa de Maro" />
			<section className='form'>
				<h2>¿Quieres conseguir puntos?</h2>
				<button onClick={() => setScan(scan => !scan)}>Registrar QR</button>
				{
					scan && <QrReader
					onScan={result => {
						console.log(result)
						setScan(false)
					}}
					onError={error => {
						console.error(error)
						setScan(false)
					}}
					/>
				}
				
			</section>
		</main>
		<footer>
			<IconHome />
			<IconLocation />
			<IconProfile />
		</footer>
	</>
  )
}

export default App
