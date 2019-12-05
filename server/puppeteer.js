const puppeteer = require('puppeteer')
const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 4000
const BASE_URL = 'https://twitter.com/'

const whitelist = 'http://localhost:8080/'
const corsOptions = {
	origin: function(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
}

app.get('/tw-profile/:handler', cors(corsOptions), async (req, res) => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(`${BASE_URL}${req.params.handler}`)

	try {
		const twFollowing = await page.evaluate(
			() =>
				document.querySelector('.ProfileNav-item--following').firstElementChild
					.children[2].dataset.count
		)

		const twFollowers = await page.evaluate(
			() =>
				document.querySelector('.ProfileNav-item--followers').firstElementChild
					.children[2].dataset.count
		)
		const avatar = await page.evaluate(
			() =>
				document.querySelector('.ProfileAvatar').firstElementChild.children[0]
					.src
		)

		const twProfileName = await page.evaluate(
			() =>
				document.querySelector('.ProfileHeaderCard').firstElementChild
					.children[0].innerText
		)
		const twHandler = await page.evaluate(
			() =>
				document.querySelector('.ProfileHeaderCard').children[1]
					.firstElementChild.children[0].innerText
		)

		res.json({
			twFollowers,
			twFollowing,
			avatar,
			twHandler,
			twProfileName,
		})
		await browser.close()
	} catch (e) {
		res.json(e)
	}

	// if (!twFollowers || !twFollowing || !avatar || !twHandler || !twProfileName) {
	// }
})

app.listen(PORT, () =>
	console.log(`server listening on http://localhost:${PORT}`)
)
