/** The team, from the salon's own "Meet our team" posts. */

export type Member = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  fun?: string;
  /** Where the face sits across the cropped portrait (0 = left edge, 1 = right edge) */
  face?: number;
};

export const owners: Member = {
  id: 'owners',
  name: 'Kirby & Christine',
  role: 'Owners',
  photo: 'kirby-and-christine-owners',
  bio: 'Sisters and beauty pros with many years of hands-on experience in the beauty field. Their biggest passion is client satisfaction, and together they have built a space where clients feel pampered, confident and cared for.',
  fun: 'Kirby could happily spend an entire day binging The Real Housewives of Beverly Hills, while Christine has such a serious lip gloss and lipstick obsession that she often buys duplicates without realising.',
};

export const team: Member[] = [
  {id: 'marvelous', name: 'Marvelous', role: 'Nail tech', photo: 'marvelous-nail-tech', face: 0.27, bio: 'A talented nail tech with a love for all things nails — especially almond-shaped sets. Her creativity and skill mean every set she does is a little work of art.'},
  {id: 'josie', name: 'Josie', role: 'Nail tech', photo: 'josie-nail-tech', face: 0.28, bio: 'With eight years of experience, Josie absolutely loves doing nails, and you will always catch her sharing her biggest, brightest smile while she works.'},
  {id: 'devotion', name: 'Devotion', role: 'Nail tech', photo: 'devotion-nail-tech', face: 0.45, bio: 'All about perfecting your nails with style. Her favourite nail shape is almond, and when she is not working you can find her watching Emily in Paris.'},
  {id: 'thambu', name: 'Thambu', role: 'Nail tech', photo: 'thambu-nail-tech', face: 0.33, bio: 'Always has a smile on her face. Her favourite part of doing nails is making clients feel good about themselves.'},
  {id: 'zim', name: 'Zim', role: 'Nail technician', photo: 'zim-nail-technician', face: 0.38, bio: 'Loves creating gorgeous nails, but her favourite part is the chit-chat — she enjoys getting to know her clients and having a good catch-up.'},
  {id: 'noma', name: 'Noma', role: 'Nail tech', photo: 'noma-nail-tech', face: 0.38, bio: 'A big fan of K-dramas. Her favourite part of doing nails is seeing clients leave feeling more confident about themselves.'},
  {id: 'taku', name: 'Taku', role: 'Nail tech', photo: 'taku-nail-tech', face: 0.32, bio: 'Taku has been doing nails for three years and is as cute as she is talented. When she is not at the salon, she loves spending time with her family and going to church on Sundays.'},
  {id: 'alfreda', name: 'Alfreda', role: 'Pedi tech', photo: 'alfreda-pedi-tech', face: 0.35, bio: 'The pedicure queen, here to take care of all your pedi dreams. Her favourite part of doing pedicures is helping clients feel calm and relaxed afterwards.'},
  {id: 'shantie', name: 'Shantie', role: 'Lash tech', photo: 'shantie-lash-tech', face: 0.33, bio: 'Our lash queen. Shantie always brings the glam and makes every client feel fabulous with her lash magic.'},
  {id: 'kiana', name: 'Kiana', role: 'Brows & lash tech', photo: 'kiana-brow-and-lash-tech', face: 0.34, bio: 'Our mini me! Kiana is a skilled lash and brow technician who loves making clients feel beautiful. Outside the salon, her heart belongs to her pup, Honey.'},
  {id: 'lisa', name: 'Lisa', role: 'Beauty therapist', photo: 'lisa-beauty-therapist', face: 0.38, bio: 'Lisa loves helping clients feel pampered and confident. Whether it is a little self-care or a full treat-yourself session, she is here to make you feel amazing.'},
  {id: 'nancy', name: 'Nancy', role: 'Receptionist', photo: 'nancy-receptionist', face: 0.38, bio: 'The first face you see when you walk into the salon. Her friendly, bubbly smile instantly makes you feel welcome, and she keeps everything at the front desk running like clockwork.'},
  {id: 'saviour', name: 'Saviour', role: 'Salon assistant', photo: 'saviour-salon-assistant', face: 0.29, bio: 'Saviour keeps the salon running smoothly and always brings good energy — and she makes the delicious cappuccinos and bubbly that clients love.'},
];

export const member = (id: string) => team.find((m) => m.id === id);
