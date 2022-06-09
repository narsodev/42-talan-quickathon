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

  const handleShowCam = () => {
	setScan(scan => !scan)
  }

  const handleScan = result => {
	const { data } = result
	const number = Number(data.split(":")[1])
	if (!Number.isNaN(number)) {
		setCount(Number(count) + Number(result.data.split(":")[1]))
		alert(`¡Sumados ${number} EspetoCoins!`)
	}
	else
		alert('Código no válido')
	setScan(false)
  }

  const handleError = error => {
	console.error(error)
	alert(error)
	setScan(false)
  }

  const camStyle = {
	height: 240,
	width: 320
  }

  const handleBuy = (price, item) => {
	const number = Number(price)
	if (Number.isNaN(Number) || count < number)
	{
		alert('Lo siento eres pobre,')
		return
	} else {
		setCount(count - number)
		alert(`¡Disfruta de tu ${item}!`)
	}
  }

  return (
	<>
		<header>
			<h1>Málaga's Treasure</h1>
			<section className='points'>
				<span>{count}</span><IconEspeto />
			</section>
		</header>
    	<main>
			<img src="https://1001beach.com/img/posts/3514/1200/playa_de_maro-2.jpg" alt="Playa de Maro" />
			<section className='form'>
				<h2>¿Quieres conseguir puntos?</h2>
				<button className='button-scan' onClick={handleShowCam}>Registrar QR</button>
				{
					scan && <QrReader
					className='qr'
					onScan={handleScan}
					onError={handleError}
					style={camStyle}
					/>
				}
			</section>
			<h2 className='tienda'>Tienda</h2>
			<section className='shop'>
				<button onClick={() => handleBuy(20, 'mojito')}>
					<article>
						<img src="https://www.comedera.com/wp-content/uploads/2022/04/mojito.jpg" alt="Mojito" />
						<h3>Mojito</h3>
						<h4>20 <IconEspeto /></h4>
					</article>
				</button>
				<button onClick={() => handleBuy(50, 'kayak')}>
					<article>
						<img src="https://m.media-amazon.com/images/I/61usYLIMwdL._AC_SL1200_.jpg" alt="Kayak" />
						<h3>Kayak</h3>
						<h4>50 <IconEspeto /></h4>
					</article>
				</button>
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
