const puppeteer = require('puppeteer')
const url = `https://twitter.com/codymjarrett`

const func = async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(url)

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
			document.querySelector('.ProfileAvatar').firstElementChild.children[0].src
	)

	// console.log(
	// 	`Currently following ${twFollowing} people with ${twFollowers} followers`
	// )
	// console.log(`${avatar} src`)

    await browser.close()
    
	return {
		twFollowing,
		twFollowers,
		avatar,
	}
}

module.exports = func
