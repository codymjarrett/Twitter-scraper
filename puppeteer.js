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

	const twProfileName = await page.evaluate(
		() =>
			document.querySelector('.ProfileHeaderCard').firstElementChild.children[0].innerText
	)
	const twHandler = await page.evaluate(
		() =>
			document.querySelector('.ProfileHeaderCard').children[1].firstElementChild
				.children[0].innerText
	)

	await browser.close()

	return {
        twProfileName,
        twHandler,
		avatar,
		twFollowing,
		twFollowers,
	}
}

module.exports = func
