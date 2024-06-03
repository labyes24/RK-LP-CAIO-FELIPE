import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9747',
    title: 'Copacabana Beach',
    region: 'Ingleses',
    description:
      'Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional.\n\n Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável.\n\n O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.\n\n **Imóvel em Processo de**\n\n **Individualização de Matrícula**',
    price: 'R$ 1.300.000,00',
    details: {
      square: '98,72 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      './properties/copacabana-f01.jpg',
      './properties/copacabana-f02.jpg',
      './properties/copacabana-f03.jpg',
      './properties/copacabana-f04.jpg',
      './properties/copacabana-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9705',
    title: 'Vila Inglesa',
    region: 'Ingleses',
    description:
      'Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional.\n\n Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável.\n\n O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.\n\n **Imóvel em Processo de**\n\n **Individualização de Matrícula**',
    price: 'R$ 1.980.000,00',
    details: {
      square: '119 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '1',
    },
    pictures: [
      './properties/vilainglesa-f01.jpg',
      './properties/vilainglesa-f02.jpg',
      './properties/vilainglesa-f03.jpg',
      './properties/vilainglesa-f04.jpg',
      './properties/vilainglesa-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9886',
    title: 'Estrela Verde',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Charmosa unidade com 02 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional.\n\n Imóvel mobiliado e com muito bom gosto.\n\n Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável.\n\n O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.',
    price: 'R$ 790.000,00',
    details: {
      square: '77,45 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/estrela-verde-f01.jpg',
      './properties/estrela-verde-f02.jpg',
      './properties/estrela-verde-f03.jpg',
      './properties/estrela-verde-f04.jpg',
      './properties/estrela-verde-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9616',
    title: 'Hercílio Luz',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Charmoso Duplex com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional.\n\n Imóvel com posição Solar Frente Norte, localizado a 500 metros da praia dos Ingleses.\n\n Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável.\n\n O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.',
    price: 'R$ 845.000,00',
    details: {
      square: '96,21 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/hercilio-luz-f01.jpg',
      './properties/hercilio-luz-f02.jpg',
      './properties/hercilio-luz-f03.jpg',
      './properties/hercilio-luz-f04.jpg',
      './properties/hercilio-luz-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9350',
    title: 'Estrela Verde',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Cobertura dos seus sonhos!\n\n Totalmente mobiliada. Excelente opção para moradia ou investimento.\n\n Móveis planejados, alto padrão e decoração impecável.\n\n Área gourmet com 46,50m² e linda hidromassagem para você, sua família e amigos desfrutarem de ótimos momentos.\n\n Localizado na área nobre na praia dos Ingleses a 450m do mar.\n\n Você poderá curtir uma das mais belas praias de Florianópolis.\n\n Residencial com área de lazer completa.\n\n Aceita financiamento bancário.',
    price: 'R$ 1.880.000,00',
    details: {
      square: '168,70 m²',
      rooms: '3',
      bathrooms: '5',
      garage: '2',
    },
    pictures: [
      './properties/cobertura-ingleses-f01.jpg',
      './properties/cobertura-ingleses-f02.jpg',
      './properties/cobertura-ingleses-f03.jpg',
      './properties/cobertura-ingleses-f04.jpg',
      './properties/cobertura-ingleses-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  // TODO: Add Spanish properties text
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  // es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
