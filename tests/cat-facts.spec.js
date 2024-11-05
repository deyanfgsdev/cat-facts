// @ts-check
import { test, expect } from '@playwright/test'

const PROD_URL = 'https://cat-facts-olive.vercel.app/'

test('has a cat fact', async ({ page }) => {
  await page.goto(PROD_URL)

  const factElem = await page.locator('.main__cat-fact')
  const factText = await factElem.textContent()

  await expect(factText?.length).toBeGreaterThan(0)
})
