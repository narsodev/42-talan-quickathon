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
					className='qr'
					onScan={result => {
						const { data } = result
						const number = Number(data.split(":")[1])
						if (!Number.isNaN(number))
							setCount(Number(count) + Number(result.data.split(":")[1]))
						else
							alert('Código no válido')
						setScan(false)
					}}
					onError={error => {
						console.error(error)
						alert(error)
						setScan(false)
					}}
					style={
						{
							height: 240,
							width: 320
						}
					}
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
