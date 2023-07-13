import Swordsman from '../swordsman';

test('swordsmanCreate', () => {
  const hero = new Swordsman('hero', 'Swordsman');
  const result = {
    name: 'hero',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(hero);
});
