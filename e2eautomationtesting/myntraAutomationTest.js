import puppeteer from "puppeteer"
;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    devtools: false,
    args: ["--start-maximized"],
  })

  // Open a new page
  const page = await browser.newPage()
  await page.goto("https://www.myntra.com/")
  console.log("Page loaded")

  // Set the viewport
  await page.setViewport({ width: 1920, height: 1080 })

  // Click on the Men category button
  const todaysMenCategoryClick = ".desktop-navLink > a"
  await page.waitForSelector(todaysMenCategoryClick)
  await page.click(todaysMenCategoryClick)
  console.log("Clicked on Todays mobile deals")

  // Click on cart button
  const cart = ".desktop-cart > span"
  await page.waitForSelector(cart)
  await page.click(cart)
  console.log("Clicked on cart")

  /*  const selectJeansCategory = ".image-hand"
  await page.waitForSelector(selectJeansCategory)
  await page.click(selectJeansCategory)
  console.log("Clicked on Jeans category") */

  // Click on add from wishlist button
  const emptyCartButton = ".emptyCart-base-addFromWishlist > div"
  await page.waitForSelector(emptyCartButton)
  await page.click(emptyCartButton)
  console.log("Clicked on Empty Cart Button")

  // Click on login button
  const loginButton = ".wishlistLogin-button"
  await page.waitForSelector(loginButton)
  await page.click(loginButton)
  console.log("Clicked on Login Button")

  // Enter phone number
  const phoneInputField = ".form-group > input"
  await page.waitForSelector(phoneInputField)
  await page.type(phoneInputField, "8584071291")
  console.log("Entered Phone Number")

  // Click on continue button for login
  const continueButton = ".submitBottomOption"
  await page.waitForSelector(continueButton)
  await page.click(continueButton)
  console.log("Clicked on Continue Button")

  await page.waitForTimeout(5000)
  await browser.close()
})()
