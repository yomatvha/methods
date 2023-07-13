import Bowman from '../bowman';

test('bowmanCreate', () => {
  const hero = new Bowman('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(hero);
});
