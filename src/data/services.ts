/**
 * The service menu. Each category gets its own page at /services/<slug>/.
 * Prices are deliberately left off — clients ask for a quote on WhatsApp.
 * Massage descriptions and durations come from the salon's own menu.
 */

export type Treatment = {name: string; desc: string; duration?: string};
export type Faq = {q: string; a: string};

export type ServiceCategory = {
  slug: string;
  /** Menu / card name */
  name: string;
  /** Short label used inside headings */
  label: string;
  /** Hero headline lines; `i` lines are set in italic */
  lines: {t: string; i?: boolean}[];
  seoTitle: string;
  seoDescription: string;
  short: string;
  intro: string[];
  hero: string;
  photos: string[];
  groups: {title: string; items: Treatment[]}[];
  why: {title: string; text: string}[];
  faqs: Faq[];
  team: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: 'nails',
    name: 'Nails & manicures',
    label: 'Nails',
    lines: [{t: 'Nails,'}, {t: 'done properly.', i: true}],
    seoTitle: 'Gel, Acrylic & Nail Art in Table View, Cape Town',
    seoDescription:
      'Gel overlays, rubber base, acrylic sets, French tips, chrome and hand-painted nail art at Kirby and Teen, Blaauwberg Road, Table View. Book on WhatsApp.',
    short: 'Gel overlays, rubber base, acrylic sets, French tips, chrome and hand-painted nail art.',
    intro: [
      'Nails are where Kirby and Teen began in 2014, and they are still the heart of the boutique. Our nail technicians shape, build and paint every set by hand — from a sheer nude overlay that lets your natural nails grow strong, to a sculpted almond set with chrome, bows or tortoiseshell tips.',
      'Every appointment starts with a proper consultation: we look at the health of your natural nails, the length and shape that suits your hands and lifestyle, and how long you want your set to last. Then we take our time, because neat cuticles and a clean, even finish are what make a manicure last.',
    ],
    hero: 'classic-french-almond-gel',
    photos: ['white-french-stiletto-nails', 'gold-chrome-nail-art', 'plaid-burgundy-nail-art', 'tortoiseshell-french-tips', 'red-almond-gel-nails', 'pink-star-glitter-nail-art', 'baby-french-almond-nails', 'teal-gel-nails'],
    groups: [
      {
        title: 'Overlays & builds',
        items: [
          {name: 'Gel overlay', desc: 'A strong, glossy layer of gel over your natural nails. Ideal if you want to grow your own nails out without the weight of extensions.'},
          {name: 'Rubber base overlay', desc: 'A flexible, self-levelling base that protects thin or bendy nails and gives a smooth, natural-looking finish.'},
          {name: 'Acrylic full set', desc: 'Sculpted acrylic extensions in the length and shape of your choice — almond, square, coffin, oval or stiletto.'},
          {name: 'Refills', desc: 'Keep your overlay or acrylic set looking fresh. We rebalance the growth, reshape and repaint.'},
        ],
      },
      {
        title: 'Manicures',
        items: [
          {name: 'Gel manicure ("gel hands")', desc: 'Cuticle care, shaping and a long-wearing gel colour that stays high-shine for weeks.'},
          {name: 'Classic manicure', desc: 'Soak, cuticle care, shaping, a relaxing hand massage and regular polish.'},
          {name: 'Soak-off & removal', desc: 'Gentle, careful removal of gel or acrylic so your natural nails are not damaged.'},
          {name: 'Nail repairs', desc: 'A broken or lifted nail fixed and blended back into your set.'},
        ],
      },
      {
        title: 'Finishes & nail art',
        items: [
          {name: 'French & micro French', desc: 'Classic white tips, barely-there micro French, coloured tips and double French lines.'},
          {name: 'Chrome & glazed finishes', desc: 'Pearl, glazed-donut, silver and gold chrome, plus cat-eye and velvet effects.'},
          {name: 'Hand-painted nail art', desc: 'Bows, polka dots, plaid, florals, swirls, tortoiseshell, initials and seasonal designs — bring a picture or let us create something.'},
          {name: 'Nail art add-ons', desc: 'Pearls, gems, foil and accent nails to finish any set.'},
        ],
      },
    ],
    why: [
      {title: 'Shape first', text: 'Almond is our clients’ favourite, but we file every set to suit your nail beds and the way you use your hands.'},
      {title: 'Healthy natural nails', text: 'Careful prep and gentle soak-offs mean you can keep wearing gel without thinning your own nails.'},
      {title: 'A team of artists', text: 'Seven nail technicians, each with their own style — from clean minimal sets to detailed hand-painted art.'},
    ],
    faqs: [
      {q: 'How long does a gel overlay last?', a: 'Most clients come back for a refill every two to three weeks. How long your set lasts depends on your natural nail growth and how hard you are on your hands.'},
      {q: 'What is the difference between gel and rubber base?', a: 'Both are applied over your natural nails. Rubber base is more flexible and self-levelling, so it suits thin or bendy nails and gives a very natural finish. We will recommend the right one during your consultation.'},
      {q: 'Can I bring a photo of the nail art I want?', a: 'Yes, please do. Send it with your WhatsApp booking so we can give you an accurate time and make sure the right artist is free.'},
      {q: 'Do you remove products done at another salon?', a: 'Yes. Let us know when you book so we can allow extra time for a gentle soak-off.'},
    ],
    team: ['marvelous', 'josie', 'devotion', 'zim', 'noma', 'taku', 'thambu'],
  },
  {
    slug: 'pedicures',
    name: 'Pedicures',
    label: 'Pedicures',
    lines: [{t: 'Sink in.'}, {t: 'Feet up.', i: true}],
    seoTitle: 'Gel & Spa Pedicures in Table View, Cape Town',
    seoDescription:
      'Luxury gel pedicures, mini pedicures and reflexology foot treatments in our recliner pedi chairs at Kirby and Teen, Blaauwberg Road, Table View.',
    short: 'Luxury gel pedicures, mini pedis and reflexology in our deep recliner chairs.',
    intro: [
      'Our pedicure lounge is the calmest corner of the boutique: four deep recliner chairs beneath the chocolate arch, soft throws, and a pedi tech who knows exactly how much pressure feels good.',
      'Whether you need sandal-ready toes for the weekend or a proper reset after weeks on your feet, every pedicure includes careful nail and cuticle work, and the luxury options add exfoliation, a longer massage and a hydrating finish.',
    ],
    hero: 'kirby-and-teen-salon-pedicure-lounge-table-view',
    photos: ['kirby-and-teen-salon-pedicure-lounge-table-view'],
    groups: [
      {
        title: 'Pedicures',
        items: [
          {name: 'Luxury gel pedicure', desc: 'Our full pedicure: soak, nail and cuticle care, hard-skin treatment, exfoliation, a longer foot and calf massage and long-wearing gel colour.'},
          {name: 'Mini gel pedicure', desc: 'A quicker treatment focused on neat nails, cuticles and a gel colour that lasts — perfect between full pedicures.'},
          {name: 'Polish pedicure', desc: 'The same care as our gel pedicure, finished with regular polish.'},
          {name: 'Reflexology pedicure', desc: 'A gel or polish pedicure with a relaxing reflexology foot massage, an Epsom-salt soak and a rich hydrating cream.'},
        ],
      },
      {
        title: 'Foot treatments & add-ons',
        items: [
          {name: 'Reflexology', duration: '45 min', desc: 'A therapeutic foot massage done in the pedi chair, using firm pressure on specific reflex points to promote circulation and well-being.'},
          {name: 'Epsom-salt foot soak', desc: 'A warm mineral soak that softens skin and soothes tired feet.'},
          {name: 'Hand massage', desc: 'Add a few minutes of hand massage to any pedicure.'},
        ],
      },
    ],
    why: [
      {title: 'Proper recliners', text: 'Deep, padded chairs that lean all the way back — bring a friend and sit side by side.'},
      {title: 'A dedicated pedi tech', text: 'Alfreda, our pedicure queen, loves seeing clients leave calm and relaxed.'},
      {title: 'Pair it up', text: 'Combine a pedicure with gel hands or a massage for a full pamper visit.'},
    ],
    faqs: [
      {q: 'Can two of us have pedicures together?', a: 'Yes. Our recliner chairs sit side by side, so friends, sisters and mom-and-daughter duos can book together. Mention it on WhatsApp and we will reserve neighbouring chairs.'},
      {q: 'How long does a gel pedicure last?', a: 'Gel on toes usually lasts four weeks or longer, because toenails grow more slowly than fingernails.'},
      {q: 'Should I shave before a pedicure?', a: 'We recommend not shaving your legs on the day of your pedicure, as freshly shaved skin can sting during the soak and scrub.'},
    ],
    team: ['alfreda'],
  },
  {
    slug: 'lashes-brows-waxing',
    name: 'Lashes, brows & waxing',
    label: 'Lashes & brows',
    lines: [{t: 'Lashes, brows'}, {t: '& smooth skin.', i: true}],
    seoTitle: 'Lash Extensions, Brow Lamination & Waxing in Table View',
    seoDescription:
      'Lash extensions, brow lamination, brow shaping and waxing by specialist lash and brow technicians at Kirby and Teen, Blaauwberg Road, Table View.',
    short: 'Lash extensions, brow lamination and shaping, and waxing by our lash and brow specialists.',
    intro: [
      'Wake up with your lashes done and your brows in place. Our lash and brow technicians, Shantie and Kiana, work in a quiet treatment room where you can lie back and switch off while they build a set of lashes or lift and shape your brows.',
      'We tailor every treatment to your eye shape, your natural lashes and brows, and the look you love — from soft and natural to full glam.',
    ],
    hero: 'lash-extensions-close-up',
    photos: ['lash-extensions-close-up', 'brow-lamination-result', 'lash-extensions-application'],
    groups: [
      {
        title: 'Lashes',
        items: [
          {name: 'Lash extensions — new set', desc: 'Individual lashes applied to your natural lashes for length, curl and volume. We match the style to your eye shape.'},
          {name: 'Lash refill', desc: 'Top up your set every two to three weeks to keep it full.'},
          {name: 'Lash removal', desc: 'Safe, gentle removal of extensions.'},
        ],
      },
      {
        title: 'Brows',
        items: [
          {name: 'Brow lamination', desc: 'Brushes your brows up and sets them in place for a fuller, fluffy, groomed look that lasts for weeks.'},
          {name: 'Brow shaping', desc: 'Shaping that follows your natural brow line.'},
          {name: 'Brow tint', desc: 'Adds depth and definition, especially for fair or sparse brows.'},
        ],
      },
      {
        title: 'Waxing',
        items: [
          {name: 'Face waxing', desc: 'Brows, lip and chin — quick, clean and precise.'},
          {name: 'Body waxing', desc: 'Smooth skin for legs, underarms and more. Ask us about the areas you would like done.'},
        ],
      },
    ],
    why: [
      {title: 'Specialists', text: 'Lashes and brows are done by dedicated lash and brow technicians, not squeezed between nail clients.'},
      {title: 'Made for your face', text: 'Every set and shape is designed around your eye shape and natural brows.'},
      {title: 'Everything in one visit', text: 'Book lashes or brows alongside your nails and leave fully done.'},
    ],
    faqs: [
      {q: 'How should I prepare for lash extensions?', a: 'Arrive with clean lashes and no eye make-up, and avoid caffeine right before if you find it hard to keep still. Plan to keep your lashes dry for the first 24 hours afterwards.'},
      {q: 'How long does brow lamination last?', a: 'Usually around six to eight weeks, depending on your brow growth and aftercare.'},
      {q: 'Can I book lashes and nails at the same time?', a: 'Yes. Tell us on WhatsApp which treatments you would like and we will line up our technicians so your visit runs smoothly.'},
    ],
    team: ['shantie', 'kiana', 'lisa'],
  },
  {
    slug: 'massage',
    name: 'Massage',
    label: 'Massage',
    lines: [{t: 'Breathe in.'}, {t: 'Let go.', i: true}],
    seoTitle: 'Massage in Table View: Swedish, Deep Tissue & Hot Stone',
    seoDescription:
      'Swedish, relaxation, deep tissue, aromatherapy, hot stone, back neck and shoulder, Indian head massage and reflexology at Kirby and Teen, Table View, Cape Town.',
    short: 'Swedish, deep tissue, hot stone, aromatherapy, Indian head massage and reflexology.',
    intro: [
      'Breathe in. Let go. Find your solace. Behind our wooden door is a private, candlelit massage room — warm lamps, soft linen and a pot of tea — where our therapists take care of the tension you have been carrying.',
      'Choose a full-body massage to switch off completely, or a focused treatment for your back, neck and shoulders, your head or your feet. Tell us how you feel and what pressure you like, and we will adapt the treatment to you.',
    ],
    hero: 'candlelit-massage-room',
    photos: ['candlelit-massage-room', 'massage-therapist-treatment-room', 'massage-room-mirror-ambient-light'],
    groups: [
      {
        title: 'Full-body massage',
        items: [
          {name: 'Swedish massage', duration: '60 or 90 min', desc: 'A timeless massage that uses smooth, flowing strokes to relax muscles, boost circulation and melt away tension.'},
          {name: 'Relaxation massage', duration: '60 min', desc: 'A blissful escape with light to medium pressure and flowing strokes across the full body to gently release tension, improve circulation and promote a deep sense of relaxation.'},
          {name: 'Deep tissue massage', duration: '45 or 60 min', desc: 'Ideal for relieving deep-seated tension, muscle stiffness and postural strain.'},
          {name: 'Aromatherapy massage', duration: '30 or 60 min', desc: 'Pure essential oils are blended to suit your needs, then gently massaged into the skin with light, flowing strokes to relax muscles, calm the nervous system and uplift the senses.'},
          {name: 'Hot stone massage', duration: '60 min', desc: 'Warm volcanic stones are placed on the body to gently heat the muscles, dissolve tension, boost circulation and promote full-body harmony.'},
        ],
      },
      {
        title: 'Focused treatments',
        items: [
          {name: 'Back, neck & shoulder', duration: '30 or 45 min', desc: 'A concentrated treatment to soothe sore muscles, deeply relax the upper body and improve posture and mobility.'},
          {name: 'Indian head massage (champissage)', duration: '30 min', desc: 'A soothing scalp ritual that eases headaches, releases stress and restores balance.'},
          {name: 'Reflexology', duration: '45 min', desc: 'A therapeutic foot massage using firm pressure on specific reflex points to promote circulation and well-being, done in the comfort of our pedi chair.'},
        ],
      },
    ],
    why: [
      {title: 'A private room', text: 'Your massage happens in a separate, quiet room away from the buzz of the nail bar.'},
      {title: 'Pressure your way', text: 'From feather-light relaxation to firm deep tissue — just tell your therapist.'},
      {title: 'Make it a day', text: 'Pair a massage with a gel pedicure and a glass of bubbles for a full pamper reset.'},
    ],
    faqs: [
      {q: 'Which massage should I choose?', a: 'For pure relaxation, choose a Swedish, relaxation or aromatherapy massage. For stiffness, knots or desk-posture pain, choose deep tissue or a back, neck and shoulder treatment. Not sure? Ask us on WhatsApp.'},
      {q: 'What should I wear?', a: 'You will undress to your comfort level and be covered with a towel or sheet throughout; only the area being massaged is uncovered.'},
      {q: 'Is massage safe during pregnancy?', a: 'Please tell us when you book if you are pregnant or have any medical condition, so we can advise you on a suitable treatment.'},
      {q: 'When should I arrive?', a: 'Arriving five to ten minutes early lets you settle in and start your treatment relaxed.'},
    ],
    team: ['lisa'],
  },
];

export const service = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
