"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = uuid.v4;
class Weapon {
    constructor(name, description, bloodPoints) {
        this.weaponId = uuidv4();
        this.name = name;
        this.description = description;
        this.bloodPoints = bloodPoints;
    }
}
class ClubThrow {
    constructor() {
        this.name = 'Club Throw';
    }
    execute() { return 'throws the club with force'; }
}
class ElectricClubSmash {
    constructor() {
        this.name = 'Electric Club Smash';
    }
    execute() { return 'smashes the club with electric power'; }
}
class ClubCircles {
    constructor() {
        this.name = 'Club Circles';
    }
    execute() { return 'swings the club in wide circles'; }
}
class QuickClubThrow {
    constructor() {
        this.name = 'Quick Club Throw';
    }
    execute() { return 'throws the club quickly at the target'; }
}
class ShieldBash {
    constructor() {
        this.name = 'Shield Bash';
    }
    execute() { return 'bashes the enemy with the shield'; }
}
class ClubJab {
    constructor() {
        this.name = 'Club Jab';
    }
    execute() { return 'jabs forward with the club'; }
}
class SwordSpin {
    constructor() {
        this.name = 'Sword Spin';
    }
    execute() { return 'spins with the sword extended outward'; }
}
class SuperSwordSpin {
    constructor() {
        this.name = 'Super Sword Spin';
    }
    execute() { return 'performs a powerful spinning attack with the sword'; }
}
class DrasticSlash {
    constructor() {
        this.name = 'Drastic Slash';
    }
    execute() { return 'delivers a dramatic and forceful slash'; }
}
class IceArrow {
    constructor() {
        this.name = 'Ice Arrow';
    }
    execute() { return 'shoots an arrow with icy effects'; }
}
class MultiShot {
    constructor() {
        this.name = 'MultiShot';
    }
    execute() { return 'releases multiple arrows at once'; }
}
class PiercingArrow {
    constructor() {
        this.name = 'Piercing Arrow';
    }
    execute() { return 'shoots a powerful arrow that can pierce through defenses'; }
}
class FlamingArrow {
    constructor() {
        this.name = 'Flaming Arrow';
    }
    execute() { return 'shoots a flaming arrow that scorches the target'; }
}
class FatalBlow {
    constructor() {
        this.name = 'Fatal Blow';
    }
    execute() { return 'delivers a fatal blow with the newfound sword'; }
}
class ElvishArrow {
    constructor() {
        this.name = 'Elvish Arrow';
    }
    execute() { return 'Made with the finest of the Elves materials'; }
}
class FlamethrowerBlast {
    constructor() {
        this.name = 'Flamethrower Blast';
    }
    execute() { return 'unleashes a blast of fire from its mouth'; }
}
class TailWhip {
    constructor() {
        this.name = 'Tail Whip';
    }
    execute() { return 'whips its tail at a threatening speed'; }
}
class ClawSwipe {
    constructor() {
        this.name = 'Claw Swipe';
    }
    execute() { return 'slashes with its sharp claws'; }
}
class IronShield {
    constructor() {
        this.name = 'Iron Shield';
    }
    execute() { return 'blocks with a sturdy iron shield'; }
}
class SpikedArmor {
    constructor() {
        this.name = 'Spiked Armor';
    }
    execute() { return 'defends with armor, spikes causing damage to the attacker'; }
}
class RustShield {
    constructor() {
        this.name = 'Rust Shield';
    }
    execute() { return 'hastily defends with a rusted, but still effective shield'; }
}
class Hide {
    constructor() {
        this.name = 'Hide';
    }
    execute() { return 'uses the surroundings to hide and evade the attack'; }
}
class GoldenArmor {
    constructor() {
        this.name = 'Golden Armor';
    }
    execute() { return 'shines brilliantly in golden armor, deflecting attacks'; }
}
class KingdomSuit {
    constructor() {
        this.name = 'Kingdom Suit';
    }
    execute() { return 'donned in the kingdom\'s finest suit, providing superior defense'; }
}
class Dodge {
    constructor() {
        this.name = 'Dodge';
    }
    execute() { return 'nimbly dodges the attack'; }
}
class DiamondTunic {
    constructor() {
        this.name = 'Diamond Tunic';
    }
    execute() { return 'the diamond tunic glimmers, dispersing the force of the attack'; }
}
class WingGust {
    constructor() {
        this.name = 'Wing Gust';
    }
    execute() { return 'creates a gust with its huge wings, deflecting incoming attacks'; }
}
class FlyAway {
    constructor() {
        this.name = 'Fly Away';
    }
    execute() { return 'soars into the sky to avoid danger'; }
}
class Wallet {
    constructor(capacity) {
        this.amount = 0;
        this.capacity = capacity;
    }
    deposit(amount) {
        if (this.amount + amount <= this.capacity) {
            this.amount += amount;
            return `Deposited ${amount} gold. Total: ${this.amount}`;
        }
        return 'Cannot deposit, wallet full!';
    }
    getBalance() {
        return this.amount;
    }
}
class Character {
    constructor(attackMoves, defenseMoves, wallet) {
        this.weapons = [];
        this.attackMoves = attackMoves;
        this.defenseMoves = defenseMoves;
        this.wallet = wallet;
    }
    equipWeapon(weapon) {
        this.weapons.push(weapon);
    }
    changeWeapon(oldWeaponId, newWeapon) {
        const index = this.weapons.findIndex(weapon => weapon.weaponId === oldWeaponId);
        if (index !== -1) {
            this.weapons[index] = newWeapon;
        }
        else {
            console.log("Weapon not found, equipping as a new weapon.");
            this.equipWeapon(newWeapon);
        }
    }
    powerLevel() {
        return this.weapons.reduce((total, weapon) => total + weapon.bloodPoints, 0);
    }
    performAttack(index) {
        if (index < this.attackMoves.length) {
            return this.attackMoves[index].execute();
        }
        return 'No such attack move!';
    }
    performDefense(index) {
        if (index < this.defenseMoves.length) {
            return this.defenseMoves[index].execute();
        }
        return 'No such defense move!';
    }
    collectGold(amount) {
        console.log(this.wallet.deposit(amount));
    }
    changeAttackMove(index, newMove) {
        if (index < this.attackMoves.length) {
            this.attackMoves[index] = newMove;
        }
    }
    addAttackMove(newMove) {
        this.attackMoves.push(newMove);
    }
}
class Knight extends Character {
    constructor() {
        super([new SwordSpin(), new SuperSwordSpin(), new DrasticSlash(), new ElvishArrow()], [new GoldenArmor(), new KingdomSuit()], new Wallet(100));
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
function performAndLog(characterName, character, moveType, moveIndex) {
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
