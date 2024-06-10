import { useTranslation } from 'react-i18next'

/**
 * The Address info
 * @typedef {Object} Address
 * @property {string} street - The street.
 * @property {string} district - The district.
 * @property {string} number - The number.
 * @property {string} city - The city.
 * @property {string} state - The state.
 */

/**
 * The Broker Description info
 *  @typedef {Object} BrokerDescription
 *  @property {string} title - The title.
 *  @property {Array<string>} paragraph - The paragraph.
 */

/**
 * The Broker comments info
 * @typedef {Object} BrokerComments
 * @property {string} id - The id.
 * @property {string} author - The author.
 * @property {string} quote - The text quote.
 */

/**
 * The Broker tips
 * @typedef {Object} BrokerTips
 * @property {string} id - The id.
 * @property {string} quote - The tip text.
 */

/**
 * The Review of the Client info
 * @typedef {Object} ClientReview
 * @property {string} review - The review.
 * @property {string} client - The name and title of the client.
 */

/**
 * The broker profile.
 * @typedef {Object} BrokerProfile
 * @property {string} id - indicates the unique identifier of the broker.
 * @property {string} name - indicates the name of the broker.
 * @property {string} CRECI - indicates the CRECI of the broker.
 * @property {string} profileImage - indicates the profile image of the broker.
 * @property {BrokerDescription} description - indicates the description of the broker.
 * @property {Address} address - indicates the address of the broker.
 * @property {string} phone - indicates the phone number of the broker.
 * @property {string} email - indicates the email of the broker.
 * @property {ClientReview} [clientReview] - indicates the review of the client.  <optional>
 * @property {Array<BrokerComments>} comments - indicates the comments to the broker.
 * @property {Array<BrokerTips>} tips - indicates the tips of the broker.
 */

/**
 * The broker data
 * @typedef {Object} BrokerData
 * @property {BrokerProfile} pt - The Portuguese broker profile.
 * @property {BrokerProfile} es - The Spanish broker profile.
 */

/**
 * @type {BrokerProfile} The broker profile for PT language
 */
const brokerProfilePT = {
  id: crypto.randomUUID(),
  name: 'Caio Felipe',
  CRECI: '42.066-F',
  profileImage: '/broker/caio.png',
  description: {
    title:
      'Cristão, Sul-mato-grossense, Esposo da Isabela e ansioso pela chegada do primeiro filho. Apaixonado por churrasco, viagens e futebol.',
    paragraph: [
      'Sou um corretor jovem, porém experiente, com sete anos dedicados ao mercado imobiliário. Inicialmente, aprimorei meu conhecimento atuando na administração de imóveis de locação. Atualmente, concentro-me exclusivamente em transações de vendas, assegurando um processo tranquilo e eficiente com minha expertise.',
      'Nascido dentro de obras, destaco-me, especialmente na área elétrica de projetos multifamiliares e unifamiliares. Além da minha paixão por imóveis, sou um homem de família, casado e ansioso para chegada do meu próprio herdeiro.',
      'Permita-me guiá-lo na jornada de encontrar o lar perfeito para criar memórias inesquecíveis.',
    ],
  },
  address: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
    state: 'SC',
  },
  phone: '(48) 99821-2069',
  email: 'caio@rkimoveis.com.br',
  comments: [
    {
      id: crypto.randomUUID(),
      author: 'Crescimento Econômico',
      quote:
        'Investir em propriedades no Norte de Floripa significa fazer parte de uma comunidade em expansão.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Praia Paradisíaca',
      quote:
        'Quem mora em Ingleses tem acesso a um verdadeiro paraíso tropical: praia deslumbrante com águas cristalinas e areias brancas.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Infraestrutura Completa',
      quote:
        'Escolas, clínicas médicas, supermercados, comércios locais proporcionam comodidade e praticidade no dia a dia.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Natureza Preservada',
      quote:
        'As praias Ingleses e Santinho contam com áreas de preservação ambiental. Equilíbrio entre o desenvolvimento urbano e a natureza exuberante.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Diversidade de Imóveis',
      quote:
        'A diversidade de opções imobiliárias permite encontrar o lar ideal para todos os gostos e necessidades.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Acessibilidade',
      quote:
        'A região é bem conectada, facilitando o deslocamento para outras partes da ilha e para o continente.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Esportes Aquáticos',
      quote:
        'Surf, Stand Up Paddle e outros esportes náuticos são populares graças às condições ideais oferecidas pelo mar local.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Qualidade de Vida',
      quote:
        'A atmosfera relaxada, a natureza exuberante e a infraestrutura completa contribuem para uma experiência única.',
    },
  ],
  tips: [
    {
      id: crypto.randomUUID(),
      quote:
        'Defina seu objetivo: ao comprar um imóvel é fundamental entender a finalidade, pois influenciará nas suas escolhas.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Você pode ter diferentes objetivos como investimento em Revenda: Pesquise a valorização da propriedade a longo prazo, se for imóvel usado ou em construção.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se é para locação: Considere a demanda por aluguéis na área e o retorno sobre o investimento, seja rentabilidade anual ou sazonal.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Se for para moradia: Priorize suas necessidades pessoais, como proximidade do trabalho e qualidade de vida na região.',
    },
  ],
}

/**
 * @type {BrokerProfile} The broker profile for ES language
 */
const brokerProfileES = {
  // Add broker profile ES text here
  id: crypto.randomUUID(),
  name: 'Caio Felipe',
  CRECI: '42.066-F',
  profileImage: '/broker/caio.png',
  description: {
    title:
      'Christian, de Mato Grosso do Sul, Esposo de Isabela y esperando con ansias la llegada de su primer hijo. Apasionado de la barbacoa, los viajes y el fútbol.',
    paragraph: [
      'Soy un corredor joven pero experimentado, con siete años dedicados al mercado inmobiliario. Inicialmente mejoré mis conocimientos trabajando en la gestión de propiedades en alquiler. Actualmente, me enfoco exclusivamente en transacciones de ventas, asegurando un proceso fluido y eficiente con mi experiencia.',
      'Nacido dentro de las obras de construcción, me destaco, especialmente en el área eléctrica de proyectos multifamiliares y unifamiliares. Además de mi pasión por el sector inmobiliario, soy un hombre de familia, casado y esperando con ansias la llegada de mi propio heredero.',
      'Permítame guiarle en el viaje de encontrar el hogar perfecto para crear recuerdos inolvidables.',
    ],
  },
  address: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
    state: 'SC',
  },
  phone: '(48) 99821-2069',
  email: 'caio@rkimoveis.com.br',
  comments: [
    {
      id: crypto.randomUUID(),
      author: 'Crecimiento economico',
      quote:
        'Invertir en propiedades en el norte de Floripa significa ser parte de una comunidad en expansión.',
    },
    {
      id: crypto.randomUUID(),
      author: 'playa Paraíso',
      quote:
        'Quienes viven en Ingleses tienen acceso a un verdadero paraíso tropical: una impresionante playa de aguas cristalinas y arena blanca.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Infraestructura completa',
      quote:
        'Las escuelas, clínicas médicas, supermercados y comercios locales aportan comodidad y practicidad en la vida cotidiana.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Naturaleza preservada',
      quote:
        'Las playas de Ingleses y Santinho cuentan con áreas de preservación ambiental. Equilibrio entre desarrollo urbano y naturaleza exuberante.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Diversidad de Propiedades',
      quote:
        'La diversidad de opciones inmobiliarias permite encontrar la vivienda ideal para todos los gustos y necesidades.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Accesibilidad',
      quote:
        'La región está bien conectada, lo que facilita viajar a otras partes de la isla y al continente.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Deportes acuáticos',
      quote:
        'El surf, el stand up paddle y otros deportes acuáticos son populares gracias a las condiciones ideales que ofrece el mar local.',
    },
    {
      id: crypto.randomUUID(),
      author: 'Calidad de vida',
      quote:
        'El ambiente relajado, la naturaleza exuberante y la infraestructura completa contribuyen a una experiencia única.',
    },
  ],
  tips: [
    {
      id: crypto.randomUUID(),
      quote:
        'Define tu objetivo: a la hora de comprar una propiedad es fundamental entender el propósito, ya que influirá en tus elecciones.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Puedes tener diferentes objetivos como inversión en Reventa: Investigar la apreciación a largo plazo de la propiedad, ya sea usada o en construcción.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Si es para alquiler: Considere la demanda de alquileres en la zona y el retorno de la inversión, ya sea rentabilidad anual o estacional.',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Si buscas vivienda prioriza tus necesidades personales, como la proximidad al trabajo y la calidad de vida en la región.',
    },
  ],
}

/**
 * @type {BrokerData} The broker data
 */
const brokerData = {
  pt: brokerProfilePT,
  es: brokerProfileES,
}

/**
 * Retrieves the broker profile.
 * @return {BrokerProfile} returns the broker profile info.
 */
export function useBrokerProfile() {
  const {
    i18n: { language },
  } = useTranslation()

  if (brokerData[language].id) {
    return brokerData[language]
  } else {
    return brokerData['pt']
  }
}
