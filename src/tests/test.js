import Bowman from '../js/classes/Bowman';
import Swordsman from '../js/classes/Swordsman';
import Magician from '../js/classes/Magician';
import Undead from '../js/classes/Undead';
import Zombie from '../js/classes/Zombie';
import Daemon from '../js/classes/Daemon';

test('get bowman', () => {
  const bowman = new Bowman('killer228');
  expect(bowman).toEqual({
    name: 'killer228',
    attack: 25,
    defense: 25,
  });
});
test('get swordsman', () => {
  const swordsman = new Swordsman('killer228');
  expect(swordsman).toEqual({
    name: 'killer228',
    attack: 40,
    defense: 10,
  });
});
test('get magician', () => {
  const magician = new Magician('killer228');
  expect(magician).toEqual({
    name: 'killer228',
    attack: 10,
    defense: 40,
  });
});
test('get undead', () => {
  const undead = new Undead('killer228');
  expect(undead).toEqual({
    name: 'killer228',
    attack: 25,
    defense: 25,
  });
});
test('get zombie', () => {
  const zombie = new Zombie('killer228');
  expect(zombie).toEqual({
    name: 'killer228',
    attack: 40,
    defense: 10,
  });
});
test('get daemon', () => {
  const daemon = new Daemon('killer228');
  expect(daemon).toEqual({
    name: 'killer228',
    attack: 10,
    defense: 40,
  });
});
