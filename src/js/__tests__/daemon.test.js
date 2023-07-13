import Daemon from '../daemon';

test('daemonCreate', () => {
  const hero = new Daemon('hero', 'Daemon');
  const result = {
    name: 'hero',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(hero);
});
