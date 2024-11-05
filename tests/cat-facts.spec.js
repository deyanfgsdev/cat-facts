// @ts-check
import { test, expect } from '@playwright/test'

import { CAT_PREFIX_IMAGE_URL } from '../src/hooks/useCatImage'

const PROD_URL = 'https://cat-facts-olive.vercel.app/'

test('has a cat fact', async ({ page }) => {
  await page.goto(PROD_URL)

  const factElem = await page.locator('.main__cat-fact')
  const factText = await factElem.textContent()

  await expect(factText?.length).toBeGreaterThan(0)
})

test('has a cat image', async ({ page }) => {
  await page.goto(PROD_URL)

  const imageElem = await page.locator('.main__cat-image')
  const imageSrc = await imageElem.getAttribute('src')

  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBe(true)
})
