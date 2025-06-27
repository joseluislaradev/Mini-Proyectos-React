const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Al separar funciones dejar la lgica de react en el compoente y la logica de negocio en el servicio
export const getRandomFirstWordFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const primera = data.fact.split(' ')[0]
  return primera
}
