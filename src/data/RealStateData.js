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

const properties = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9747',
    title: 'Copacabana Beach Residence',
    region: 'Ingleses',
    description: 'Imóvel em Processo de individualização de Matrícula. Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 02 vagas de garagem e um hobby box para armazenamento adicional. Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O imóvel possui uma posição solar privilegiada, oeste permitindo uma ótima iluminação e ventilação natural em todos os cômodos do imóvel. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família. Quer saber mais detalhes sobre este imóvel? Fale com a gente, estamos sempre conectados pelo celular, whats, e-mail, ou se preferir venha tomar um café!',
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
      'Imóvel em Processo de individualização de Matrícula. Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional. Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família. Quer saber mais detalhes sobre este imóvel? Fale com a gente, estamos sempre conectados pelo celular, whats, e-mail, ou se preferir venha tomar um café!', 
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
    RKCode: '9765',
    title: 'Torres de Bergeroa',
    region: 'Ingleses',
    description:
      'Imóvel em Processo de individualização de Matrícula. Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 02 vagas de garagem e um hobby box para armazenamento adicional. Imóvel semi mobiliado com muito bom gosto. Posição Solar Frente Sul com Lateral Oeste, localizado a 300 metros da praia dos Ingleses. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família. Quer saber mais detalhes sobre este imóvel? Fale com a gente, estamos sempre conectados pelo celular, whats, e-mail, ou se preferir venha tomar um café!',
    price: 'R$ 930.000,00',
    details: {
      square: '96,5 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/ingleses-f01.jpg',
      './properties/ingleses-f02.jpg',
      './properties/ingleses-f03.jpg',
      './properties/ingleses-f04.jpg',
      './properties/ingleses-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9775',
    title: 'Águas Brisamar',
    region: 'Ingleses',
    description:
      'Imóvel com Matrícula. Linda unidade com 02 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional. Totalmente mobiliada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O imóvel possui uma posição solar privilegiada, oeste permitindo uma ótima iluminação e ventilação natural em todos os cômodos do imóvel. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família. Quer saber mais detalhes sobre este imóvel? Fale com a gente, estamos sempre conectados pelo celular, whats, e-mail, ou se preferir venha tomar um café!',
    price: 'R$ 660.000,00',
    details: {
      square: '77,71 m²',
      rooms: '2',
      bathrooms: '3',
      garage: '1',
    },
    pictures: [
      './properties/brisa-f01.jpg',
      './properties/brisa-f02.jpg',
      './properties/brisa-f03.jpg',
      './properties/brisa-f04.jpg',
      './properties/brisa-f05.jpg',
    ],
  },
]

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  return properties
}
