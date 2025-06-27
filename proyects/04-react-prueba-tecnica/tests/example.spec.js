import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('APP MUESTRA RANDOM FACT Y LA IMAGEN', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'WebKit falla en Linux, se omite')
  await page.goto(LOCALHOST_URL)

  const text = page.getByTestId('fact')
  const image = page.getByRole('img')

  console.log('Esperando a que el texto y la imagen aparezcan...')
  console.log(`Texto: ${text}`)
  console.log(`Imagen: ${image}`)

  // Espera a que el texto aparezca
  await expect(text).toHaveText(/.+/)

  // Espera a que el atributo src de la imagen comience con la URL correcta
  await expect(image).toHaveAttribute('src', new RegExp(`^${CAT_PREFIX_IMAGE_URL}`))
})
