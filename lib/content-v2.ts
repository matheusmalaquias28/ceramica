/**
 * Conteúdo da landing page V2 (teste A/B) — edite este arquivo para variantes.
 * A V1 original está em lib/content.ts. Rota: /v2
 *
 * Checklist:
 * 1. Troque `theme.brandColor` (re-tematiza todos os bg-brand/text-brand).
 * 2. Substitua as imagens em /public e ajuste os caminhos/dimensões aqui.
 * 3. Revise textos, preços e links de checkout (lib/config.ts).
 * 4. Atualize metadata/favicon em app/layout.tsx, app/icon.png e app/opengraph-image.png.
 * 5. Configure pixels/IDs de tracking em app/layout.tsx.
 */

export const theme = {
  /** Cor principal da marca (sobrescreve --color-brand só nesta página). */
  brandColor: "#914c2e",
};

export const offerBar = {
  text: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

export const hero = {
  tape: {
    src: "/img/fita (1).png",
    alt: "Método Peça Pronta em Cerâmica Fria",
    width: 1260,
    height: 219,
  },
  headline: "Aprenda a fazer peças em Cerâmica Fria mesmo que nunca tenha feito antes",
  image: { src: "/img/NOVA-IMG-HERO.webp", alt: "Método Peça Pronta — 35 projetos de cerâmica fria com bônus e peças modeladas", width: 1080, height: 1080 },
  subtitle:
    "Você vai receber um método com mais de 35 projetos de Cerâmica Fria, seja você iniciante ou experiente, aprenda do zero a produzir sua primeira peça.",
  ctaLabel: "QUERO COMEÇAR A CRIAR",
  note: "Siga o guia visual e crie sua primeira peça no mesmo dia, mesmo que nunca tenha mexido com cerâmica fria.",
  checks: [
    "Passo a passo visual completo",
    "Materiais acessíveis e fáceis de achar",
    "Dicas para evitar erros e rachaduras",
    "Sugestões de acabamentos sofisticados",
  ],
  deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail.",
  socialProofLabel: "Mais de 2.000 aluno(a)s",
};

export const materials = {
  title: "Veja os projetos que você vai receber já",
  imageSize: { width: 716, height: 1074 },
  items: [
    {
      src: "/entregaveis/Frame 1707483104.jpg",
      alt: "Módulo 1 — 7 peças para começar",
      size: { width: 716, height: 1074 },
    },
    {
      src: "/entregaveis/Frame 1707483105.jpg",
      alt: "Peça 01 — Mini vaso com passo a passo",
      size: { width: 716, height: 1074 },
    },
    {
      src: "/entregaveis/Frame 1707483106.jpg",
      alt: "Módulo 2 — 7 peças de decoração",
      size: { width: 716, height: 1074 },
    },
    {
      src: "/entregaveis/Frame 1707483107.jpg",
      alt: "Módulo 3 — 7 peças úteis",
      size: { width: 716, height: 1074 },
    },
    {
      src: "/entregaveis/Frame 1707483108.jpg",
      alt: "Desafio primeira peça em 7 dias",
      size: { width: 716, height: 1074 },
    },
    {
      src: "/entregaveis/Frame 1707483109.jpg",
      alt: "Manual peça sem rachaduras",
      size: { width: 804, height: 1074 },
    },
  ],
};

export const testimonials = {
  title: "Veja o que nossos clientes estão dizendo",
  imageSize: { width: 738, height: 1463 },
  items: [
    { src: "/feedbacks/feedbacks-1 (1).jpg", alt: "Depoimento de aluna no WhatsApp", size: { width: 738, height: 1463 } },
    { src: "/feedbacks/feedbacks-2 (1).jpg", alt: "Depoimento de aluna no WhatsApp", size: { width: 738, height: 1463 } },
    { src: "/feedbacks/feedbacks-3 (1).jpg", alt: "Depoimento de aluna no WhatsApp", size: { width: 738, height: 1463 } },
    { src: "/feedbacks/stories-depoimento (1).jpg", alt: "Depoimento de aluna no Instagram Stories", size: { width: 661, height: 1174 } },
    { src: "/feedbacks/stories-depoimento-2 (1).jpg", alt: "Depoimento de aluna no Instagram Stories", size: { width: 661, height: 1174 } },
    { src: "/feedbacks/stories-depoimento-1 (1).jpg", alt: "Depoimento de aluna no Instagram Stories", size: { width: 661, height: 1174 } },
  ],
};

export const studentWorks = {
  title: "Veja algumas peças que nossas alunas produziram:",
  items: [
    { name: "Mariana Silva", city: "Campinas, SP", img: "/feedbacks/Instagram post - 32.jpg", width: 822, height: 1028 },
    { name: "Fernanda Costa", city: "Curitiba, PR", img: "/feedbacks/Instagram post - 33.jpg", width: 822, height: 1028 },
    { name: "Juliana Alves", city: "Belo Horizonte, MG", img: "/feedbacks/Instagram post - 34.jpg", width: 822, height: 1028 },
    { name: "Camila Rocha", city: "Florianópolis, SC", img: "/feedbacks/Instagram post - 35.jpg", width: 822, height: 1028 },
    { name: "Patrícia Mendes", city: "Goiânia, GO", img: "/feedbacks/Instagram post - 36.jpg", width: 822, height: 1028 },
    { name: "Amanda Souza", city: "Recife, PE", img: "/feedbacks/Instagram post - 37.jpg", width: 822, height: 1028 },
  ],
};

export const whySection = {
  title: "Os projetos do Método Peça Pronta possuem:",
  cards: [
    { icon: "📖", title: "Passo a passo visual", desc: "Sem improvisos, você segue o guia facilmente" },
    { icon: "🛒", title: "Materiais acessíveis", desc: "Saiba o que comprar e onde encontrar" },
    { icon: "✅", title: "Dicas para evitar erros", desc: "Aprenda a modelar sem frustrações" },
    { icon: "🎨", title: "Sugestões de acabamentos", desc: "Deixe suas peças ainda mais sofisticadas" },
    { icon: "🗓️", title: "Acompanhamento prático", desc: "Crie sua primeira peça no mesmo dia" },
  ],
};

export const idealSection = {
  title: "Este material é ideal para você que deseja",
  items: [
    { title: "Começar um hobby relaxante", desc: "Desfrute de momentos criativos e relaxantes ao modelar suas peças." },
    { title: "Criar peças únicas e pessoais", desc: "Aprenda a fazer presentes personalizados e decorações que refletem seu estilo." },
    { title: "Aprender sem medo de errar", desc: "Siga o passo a passo e descubra como é fácil criar com cerâmica fria." },
    { title: "Expressar sua criatividade", desc: "Transforme suas ideias em lindas peças e sinta-se realizada." },
    { title: "Compartilhar suas criações", desc: "Mostre suas peças para amigos e familiares e ganhe reconhecimento." },
    { title: "Montar um espaço de arte em casa", desc: "Tenha um local especial para relaxar e criar suas obras de arte." },
  ],
};

export const offerSection = {
  title: "Tudo o que você vai receber",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "Tudo foi organizado para ser simples e fácil de aplicar.",
  image: { src: "/img/NOVA-IMG-HERO.webp", alt: "Materiais do Método Peça Pronta", width: 1080, height: 1080 },
  features: [
    "Método Peça Pronta — biblioteca com 35 projetos",
    "7 peças para iniciar sua jornada",
    "7 peças decorativas para embelezar sua casa",
    "7 peças úteis para o dia a dia",
    "7 peças para presentear com amor",
    "7 peças com acabamentos sofisticados",
  ],
  moreLabel: "E MUITO MAIS...",
  ctaLabel: "QUERO ACESSAR AGORA E USAR HOJE",
  deliveryNote: hero.deliveryNote,
};

export const bonusSection = {
  titleLines: ["E não para por aí... tem mais!", "Você também vai receber:"],
  pill: "🎁 4 BÔNUS EXCLUSIVOS",
  exclusiveNote: ["BÔNUS INCLUSO APENAS", "NO PLANO COMPLETO"],
  items: [
    {
      img: "/img/bonuts-ceramica (1).png",
      width: 1024,
      height: 1536,
      title: "Kit Comece Hoje",
      desc: "Materiais essenciais, quantidades iniciais, opções econômicas e checklist imprimível de compras.",
      price: "R$27",
    },
    {
      img: "/img/bonuts-ceramica (4).png",
      width: 1024,
      height: 1536,
      title: "Desafio Primeira Peça em 7 Dias",
      desc: "Um plano diário: escolher a peça, modelar, secar, pintar e finalizar sua primeira peça em uma semana.",
      price: "R$27",
    },
    {
      img: "/img/bonuts-ceramica (3).png",
      width: 1024,
      height: 1536,
      title: "Manual Peça Sem Rachaduras",
      desc: "Guia visual com espessura ideal, erros de secagem e como corrigir pequenas imperfeições.",
      price: "R$27",
    },
    {
      img: "/img/bonuts-ceramica (2).png",
      width: 1024,
      height: 1536,
      title: "Acabamento de Loja",
      desc: "Como lixar, pintar de forma uniforme, criar efeito mármore e rústico, envernizar e impermeabilizar.",
      price: "R$27",
    },
  ],
};

/** Itens 🎁 exibidos nas listas dos planos (tachados no Básico, inclusos no Completo). */
export const bonusFeatures = [
  "🎁 Kit Comece Hoje",
  "🎁 Desafio Primeira Peça em 7 Dias",
  "🎁 Manual Peça Sem Rachaduras",
  "🎁 Acabamento de Loja",
];

export const plansSection = {
  pill: "⏰ OFERTA VÁLIDA POR TEMPO LIMITADO",
  title: "Escolha a opção ideal para você",
  securePurchase: {
    src: "/img/compra-segura.png",
    alt: "Compra 100% segura — Hotmart",
    width: 738,
    height: 222,
  },
  basic: {
    name: "Plano básico",
    image: { src: "/img/plano-basico.jpeg", alt: "Materiais do plano básico do Método Peça Pronta", width: 2048, height: 2048 },
    receiveLabel: "Você recebe:",
    features: [
      "Método Peça Pronta — 35 projetos",
      "Acesso imediato ao material",
      "Suporte via WhatsApp",
      "Grupo de apoio exclusivo",
    ],
    oldPrice: "R$37,90",
    price: "R$27,90",
    installments: "ou 4x de R$7,48 no cartão",
    savings: "🟢 você economiza R$10,00",
    ctaLabel: "QUERO O PLANO BÁSICO",
  },
  complete: {
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    name: "Plano completo",
    allBonusesLabel: "TODOS OS BÔNUS INCLUSOS",
    image: { src: "/img/NOVA-IMG-HERO.webp", alt: "Materiais do Método Peça Pronta", width: 1080, height: 1080 },
    pill: "⚡4X MAIS CONTEÚDOS",
    features: [
      "Método Peça Pronta — 35 projetos",
      "Acesso imediato ao material",
      "Suporte via WhatsApp",
      "Grupo de apoio exclusivo",
    ],
    oldPrice: "R$67,90",
    price: "R$37,90",
    installments: "ou 6x de R$7,48 no cartão",
    savings: "🟢 você economiza R$30,00",
    ctaLabel: "QUERO O PLANO COMPLETO",
  },
  upsellNote: {
    alert: "AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!",
    body: "92% das pessoas aproveitam a nossa",
    highlight: "SUPER OFERTA!",
  },
  paybackBadge: {
    title: "Tudo o que você precisa para criar sua primeira peça ainda hoje.",
    subtitle: "Acesso imediato e vitalício.",
  },
};

export const guarantee = {
  seal: { src: "/img/guarantee-seal.webp", alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "Garantia de 7 Dias",
  intro: "🔒 COMPRA 100% SEGURA E GARANTIDA",
  lead: "Isso significa que, a qualquer momento, se você achar que:",
  bullets: [
    "o material não faz sentido para você.",
    "os projetos não atendem suas expectativas.",
    "ou simplesmente não quiser continuar.",
  ],
  outro: "Você pode solicitar o reembolso. Sem prazo, sem burocracia.",
  outroStrong: "O risco fica todo do nosso lado.",
  helpLabel: "Precisa de ajuda? Entre em contato conosco:",
};

export const contact = {
  email: "contato@acookielab.com",
};

export const stepsSection = {
  title: "Como é o acesso",
  subtitle: "(Siga os passos e comece a criar!)",
  ctaLabel: "QUERO COMEÇAR AGORA",
  steps: [
    {
      icon: "🛒",
      title: "Conclua sua compra",
      desc: "Após o pagamento, seu acesso é liberado automaticamente.",
      items: ["Receba o material por e-mail.", "Acesse o grupo de apoio.", "Prepare seu espaço para criar."],
    },
    {
      icon: "📱",
      title: "Escolha seu projeto",
      desc: "Veja os projetos disponíveis e escolha o que mais gosta.",
      items: ["Acesse a biblioteca de projetos.", "Leia as instruções.", "Separe os materiais necessários."],
    },
    {
      icon: "🏺",
      title: "Comece a modelar",
      desc: "Siga o passo a passo e comece a criar sua peça.",
      items: ["Modelagem da peça.", "Acompanhamento da secagem.", "Finalização e pintura."],
    },
    {
      icon: "📸",
      title: "Compartilhe suas criações",
      desc: "Mostre suas peças para o grupo e receba feedback.",
      items: ["Fotografe suas peças.", "Publique no grupo.", "Inspire outras pessoas."],
    },
  ],
};

export const faq: readonly (readonly [string, string])[] = [
  ["Preciso ter experiência em cerâmica para começar?", "Você não precisa ter experiência para fazer sua primeira peça, nosso Método é perfeito para iniciantes e para quem já tem experiência."],
  ["Os materiais são fáceis de encontrar?", "Sim, indicamos materiais acessíveis e fáceis de encontrar."],
  ["O acesso é imediato?", "Sim, você recebe tudo na hora após a confirmação do pagamento."],
  ["E se eu não gostar do material?", "Você tem 7 dias para solicitar o reembolso, sem burocracia."],
  ["Posso compartilhar os projetos com amigos?", "Os projetos são para uso pessoal, mas você pode mostrar suas criações."],
  ["O que faço se tiver dúvidas?", "Você pode entrar em contato pelo suporte via e-mail."],
];

export const footer = {
  legal:
    "Este site não possui qualquer vínculo com Facebook, Google ou qualquer outra plataforma mencionada. Todos os direitos sobre a obra “Método Peça Pronta” são reservados ao seu autor, nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais). A reprodução não autorizada, total ou parcial, por qualquer meio, constitui violação de direitos autorais e pode resultar em sanções civis e criminais, de acordo com a legislação aplicável.",
};
