import Magician from '../magician';

test('magicianCreate', () => {
  const hero = new Magician('hero', 'Magician');
  const result = {
    name: 'hero',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(hero);
});
