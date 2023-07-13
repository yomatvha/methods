import Undead from '../undead';

test('undeadCreate', () => {
  const hero = new Undead('hero', 'Undead');
  const result = {
    name: 'hero',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(hero);
});
