document.addEventListener('DOMContentLoaded', function () {
    const characterSelect = document.getElementById('characterSelect') as HTMLSelectElement;
    const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
    const closeButton2 = document.getElementById('closeButton2') as HTMLButtonElement;
    const weaponSelect = document.getElementById('weaponSelect') as HTMLSelectElement;
    const weaponDetails = document.getElementById('weaponDetails') as HTMLDivElement;
    const weaponInfo = document.getElementById('weaponInfo') as HTMLParagraphElement;
    const weaponLabel = document.getElementById('weaponLabel') as HTMLLabelElement;

    interface WeaponData {
        name: string;
        image: string;
        bloodPoints: number;
    }

    const weaponsData: { [key: string]: WeaponData[] } = {
        Knight: [
            { name: "Inferno Blade", image: "./static/photos/inferno_blade.png", bloodPoints: 80 },
            { name: "Lava Shield", image: "./static/photos/lava_shield.png", bloodPoints: 70 },
            { name: "Elvinia Crossbow", image: "./static/photos/elvinia_crossbow.png", bloodPoints: 100 },
        ],
        Ogre: [
            { name: "Saydonia Axe", image: "./static/photos/saydonia_axe.png", bloodPoints: 80 },
            { name: "Destroyer Helmet", image: "./static/photos/demolisher_helmet.png", bloodPoints: 85 },
            { name: "Abyssia Shield", image: "./static/photos/abyssia_shield.png", bloodPoints: 40 },
        ],
        Peon: [
            { name: "Sacron Axe", image: "./static/photos/sacron_axe.png", bloodPoints: 80 },
            { name: "Shard Club", image: "./static/photos/shard_club.png", bloodPoints: 60 },
            { name: "Valonian Shield", image: "./static/photos/rusted_shield.png", bloodPoints: 40 },
        ],
        Archer: [
            { name: "Dark Bow", image: "./static/photos/dark_bow.png", bloodPoints: 80 },
            { name: "Lightning Quiver", image: "./static/photos/lightning_quiver.png", bloodPoints: 50 },
            { name: "Havoc Dagger", image: "./static/photos/havoc_dagger.png", bloodPoints: 40 },
        ],
        Dragon: [
            { name: "Blackmetal Claws", image: "./static/photos/mystic_blade.png", bloodPoints: 80 },
            { name: "Blackmetal Armor", image: "./static/photos/blackmetal_armor.png", bloodPoints: 120 },
        ],
        Wizard: [
            { name: "Fire Staff", image: "./static/photos/fire_staff.png", bloodPoints: 90 },
            { name: "Dark Staff", image: "./static/photos/dark_staff.png", bloodPoints: 95 },
            { name: "Dark Mystic Sword", image: "./static/photos/dark_mystic_sword.png", bloodPoints: 85 },
            { name: "Fire Cloak", image: "./static/photos/fire_cloak.png", bloodPoints: 75 },
        ],
    };

    function updateWeaponDropdown(character: string) {
        weaponSelect.innerHTML = '<option value="">Choose Weapon:</option>';
        const characterWeapons = weaponsData[character];
        if (characterWeapons && characterWeapons.length > 0) {
            characterWeapons.forEach(weapon => {
                const option = document.createElement('option');
                option.value = option.textContent = weapon.name;
                weaponSelect.appendChild(option);
            });
            weaponSelect.style.display = 'block';
            weaponLabel.style.display = 'block';
            weaponDetails.style.display = 'none';
            document.querySelectorAll('.weapon-image').forEach(img => (img as HTMLElement).style.display = 'none');
        } else {
            weaponSelect.style.display = 'none';
            weaponLabel.style.display = 'none';
            weaponDetails.style.display = 'none';
        }
    }

    characterSelect.addEventListener('change', function () {
        document.querySelectorAll('.character-image').forEach(img => (img as HTMLElement).style.display = 'none');
        const selectedCharacter = characterSelect.value;
        const characterImage = document.getElementById(selectedCharacter);
        if (characterImage) {
            characterImage.style.display = 'block';
            closeButton.style.display = 'block';
        }
        updateWeaponDropdown(selectedCharacter);
    });

    closeButton.addEventListener('click', function () {
        document.querySelectorAll('.character-image').forEach(img => (img as HTMLElement).style.display = 'none');
        closeButton.style.display = 'none';
    });

    weaponSelect.addEventListener('change', function () {
        const selectedWeaponName = weaponSelect.value;
        const selectedWeapon = weaponsData[characterSelect.value].find(weapon => weapon.name === selectedWeaponName);
        document.querySelectorAll('.weapon-image').forEach(img => (img as HTMLElement).style.display = 'none');
        if (selectedWeapon) {
            const weaponImgElement = document.getElementById(selectedWeapon.name.replace(/\s+/g, ''));
            if (weaponImgElement) {
                weaponImgElement.style.display = 'block';
            }
            weaponInfo.textContent = `${selectedWeapon.name} - Blood Points: ${selectedWeapon.bloodPoints}`;
            weaponDetails.style.display = 'block';
            closeButton2.style.display = 'block';
        }
    });

    closeButton2.addEventListener('click', function () {
        document.querySelectorAll('.weapon-image').forEach(img => (img as HTMLElement).style.display = 'none');
        weaponDetails.style.display = 'none';
        closeButton2.style.display = 'none';
    });
});
