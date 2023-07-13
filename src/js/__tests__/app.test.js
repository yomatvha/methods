import Character from '../app';
import Bowman from '../bowman';

test('heroCreate', () => {
  const hero = new Character('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(hero);
});

test('nameLength', () => {
  expect(() => new Character('h', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('characterType', () => {
  expect(() => new Character('hero', 'noname')).toThrow('Укажите тип персонажа');
});

test('levelUpError', () => {
  expect(() => {
    const hero = new Bowman('hero', 'Bowman');
    hero.health = 0;
    hero.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('levelUp', () => {
  const hero = new Bowman('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  hero.levelUp();
  expect(result).toEqual(hero);
});

test('damage', () => {
  const hero = new Bowman('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 77.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  hero.damage(30);
  expect(result).toEqual(hero);
});

test('damageZeroHealth', () => {
  const hero = new Bowman('hero', 'Bowman');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  hero.damage(1000);
  expect(result).toEqual(hero);
});
