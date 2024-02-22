import { v4 as uuidv4 } from 'uuid';
const uuidv4 = uuid.v4;

class Weapon {
  readonly weaponId: string;
  name: string;
  description: string;
  bloodPoints: number;

  constructor(name: string, description: string, bloodPoints: number) {
    this.weaponId = uuidv4();
    this.name = name;
    this.description = description;
    this.bloodPoints = bloodPoints;
  }
}

interface AttackMove {
  name: string;
  execute(): string;
}

interface DefenseMove {
  name: string;
  execute(): string;
}

class ClubThrow implements AttackMove {
    name = 'Club Throw';
    execute(): string { return 'throws the club with force'; }
  }
  class ElectricClubSmash implements AttackMove {
    name = 'Electric Club Smash';
    execute(): string { return 'smashes the club with electric power'; }
  }
  class ClubCircles implements AttackMove {
    name = 'Club Circles';
    execute(): string { return 'swings the club in wide circles'; }
  }
  class QuickClubThrow implements AttackMove {
    name = 'Quick Club Throw';
    execute(): string { return 'throws the club quickly at the target'; }
  }
  class ShieldBash implements AttackMove {
    name = 'Shield Bash';
    execute(): string { return 'bashes the enemy with the shield'; }
  }
  class ClubJab implements AttackMove {
    name = 'Club Jab';
    execute(): string { return 'jabs forward with the club'; }
  }
  class SwordSpin implements AttackMove {
    name = 'Sword Spin';
    execute(): string { return 'spins with the sword extended outward'; }
  }
  class SuperSwordSpin implements AttackMove {
    name = 'Super Sword Spin';
    execute(): string { return 'performs a powerful spinning attack with the sword'; }
  }
  class DrasticSlash implements AttackMove {
    name = 'Drastic Slash';
    execute(): string { return 'delivers a dramatic and forceful slash'; }
  }
  class IceArrow implements AttackMove {
    name = 'Ice Arrow';
    execute(): string { return 'shoots an arrow with icy effects'; }
  }
  class MultiShot implements AttackMove {
    name = 'MultiShot';
    execute(): string { return 'releases multiple arrows at once'; }
  }
  class PiercingArrow implements AttackMove {
    name = 'Piercing Arrow';
    execute(): string { return 'shoots a powerful arrow that can pierce through defenses'; }
  }
  class FlamingArrow implements AttackMove {
    name = 'Flaming Arrow';
    execute(): string { return 'shoots a flaming arrow that scorches the target'; }
  }
  class FatalBlow implements AttackMove {
    name = 'Fatal Blow';
    execute(): string { return 'delivers a fatal blow with the newfound sword'; }
  }
  class ElvishArrow implements AttackMove {
      name = 'Elvish Arrow';
      execute(): string { return 'Made with the finest of the Elves materials'; }
  }
  class FlamethrowerBlast implements AttackMove {
    name = 'Flamethrower Blast';
    execute(): string { return 'unleashes a blast of fire from its mouth'; }
  }
  class TailWhip implements AttackMove {
    name = 'Tail Whip';
    execute(): string { return 'whips its tail at a threatening speed'; }
  }
  class ClawSwipe implements AttackMove {
    name = 'Claw Swipe';
    execute(): string { return 'slashes with its sharp claws'; }
  }
  class IronShield implements DefenseMove {
    name = 'Iron Shield';
    execute(): string { return 'blocks with a sturdy iron shield'; }
  }
  class SpikedArmor implements DefenseMove {
    name = 'Spiked Armor';
    execute(): string { return 'defends with armor, spikes causing damage to the attacker'; }
  }
  class RustShield implements DefenseMove {
    name = 'Rust Shield';
    execute(): string { return 'hastily defends with a rusted, but still effective shield'; }
  }
  class Hide implements DefenseMove {
    name = 'Hide';
    execute(): string { return 'uses the surroundings to hide and evade the attack'; }
  }
  class GoldenArmor implements DefenseMove {
    name = 'Golden Armor';
    execute(): string { return 'shines brilliantly in golden armor, deflecting attacks'; }
  }
  class KingdomSuit implements DefenseMove {
    name = 'Kingdom Suit';
    execute(): string { return 'donned in the kingdom\'s finest suit, providing superior defense'; }
  }
  class Dodge implements DefenseMove {
    name = 'Dodge';
    execute(): string { return 'nimbly dodges the attack'; }
  }
  class DiamondTunic implements DefenseMove {
    name = 'Diamond Tunic';
    execute(): string { return 'the diamond tunic glimmers, dispersing the force of the attack'; }
  }
  class WingGust implements DefenseMove {
    name = 'Wing Gust';
    execute(): string { return 'creates a gust with its huge wings, deflecting incoming attacks'; }
  }
  class FlyAway implements DefenseMove {
    name = 'Fly Away';
    execute(): string { return 'soars into the sky to avoid danger'; }
  }

  class Wallet {
    private capacity: number;
    private amount: number = 0;
  
    constructor(capacity: number) {
      this.capacity = capacity;
    }
  
    deposit(amount: number): string {
      if (this.amount + amount <= this.capacity) {
        this.amount += amount;
        return `Deposited ${amount} gold. Total: ${this.amount}`;
      }
      return 'Cannot deposit, wallet full!';
    }
  
    getBalance(): number {
      return this.amount;
    }
  }
  
  interface WeaponManagement {
    equipWeapon(weapon: Weapon): void;
    changeWeapon(oldWeaponId: string, newWeapon: Weapon): void;
    powerLevel(): number;
  }
  
  abstract class Character implements WeaponManagement {
    attackMoves: AttackMove[];
    defenseMoves: DefenseMove[];
    wallet: Wallet;
    weapons: Weapon[] = [];
  
    constructor(attackMoves: AttackMove[], defenseMoves: DefenseMove[], wallet: Wallet) {
      this.attackMoves = attackMoves;
      this.defenseMoves = defenseMoves;
      this.wallet = wallet;
    }
  
    equipWeapon(weapon: Weapon): void {
      this.weapons.push(weapon);
    }
  
    changeWeapon(oldWeaponId: string, newWeapon: Weapon): void {
      const index = this.weapons.findIndex(weapon => weapon.weaponId === oldWeaponId);
      if (index !== -1) {
        this.weapons[index] = newWeapon;
      } else {
        console.log("Weapon not found, equipping as a new weapon.");
        this.equipWeapon(newWeapon);
      }
    }
  
    powerLevel(): number {
      return this.weapons.reduce((total, weapon) => total + weapon.bloodPoints, 0);
    }
  
    performAttack(index: number): string {
      if (index < this.attackMoves.length) {
        return this.attackMoves[index].execute();
      }
      return 'No such attack move!';
    }
  
    performDefense(index: number): string {
      if (index < this.defenseMoves.length) {
        return this.defenseMoves[index].execute();
      }
      return 'No such defense move!';
    }
  
    collectGold(amount: number): void {
      console.log(this.wallet.deposit(amount));
    }
  
    changeAttackMove(index: number, newMove: AttackMove): void {
      if (index < this.attackMoves.length) {
        this.attackMoves[index] = newMove;
      }
    }
  
    addAttackMove(newMove: AttackMove): void {
      this.attackMoves.push(newMove);
    }
  }

  class Knight extends Character {
    constructor() {
      super(
        [new SwordSpin(), new SuperSwordSpin(), new DrasticSlash(), new ElvishArrow()],
        [new GoldenArmor(), new KingdomSuit()],
        new Wallet(100)
      );
    }
  }
    class Ogre extends Character {
      constructor() {
        super([new ClubThrow(), new ElectricClubSmash(), new ClubCircles()], [new IronShield(), new SpikedArmor()], new Wallet(1000));
      }
    }
    class Peon extends Character {
      constructor() {
        super([new QuickClubThrow(), new ShieldBash(), new ClubJab()], [new RustShield(), new Hide()], new Wallet(500));
      }
    }
    class Archer extends Character {
      constructor() {
        super([new IceArrow(), new MultiShot(), new PiercingArrow(), new FlamingArrow()], [new Dodge(), new DiamondTunic()], new Wallet(500));
        this.addAttackMove(new FatalBlow());
      }
    }
    class Dragon extends Character {
      constructor() {
        super([new FlamethrowerBlast(), new TailWhip(), new ClawSwipe()], [new WingGust(), new FlyAway()], new Wallet(1000));
      }
    }

console.log("Knight found a Sword and Shield!");
console.log("Knight learned Block!");


function performAndLog(characterName: string, character: Character, moveType: 'Attack' | 'Defense', moveIndex: number) {
  const move = moveType === 'Attack' ? character.attackMoves[moveIndex] : character.defenseMoves[moveIndex];
  const moveResult = move.execute();
  const depositAmount = moveType === 'Attack' ? 100 : 50;
  const message = character.wallet.deposit(depositAmount);
  console.log(`${characterName} performs '${move.name}': ${moveResult}. ${message}`);
}

const characters = [new Knight(), new Peon(), new Ogre(), new Archer(), new Dragon()];
characters.forEach(character => {
  console.log(`\n${character.constructor.name}'s Moves:`);
  character.attackMoves.forEach((_, index) => performAndLog(character.constructor.name, character, 'Attack', index));
  character.defenseMoves.forEach((_, index) => performAndLog(character.constructor.name, character, 'Defense', index));
});
