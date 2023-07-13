import Zombie from '../zombie';

test('zombieCreate', () => {
  const hero = new Zombie('hero', 'Zombie');
  const result = {
    name: 'hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(hero);
});
