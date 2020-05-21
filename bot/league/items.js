
const items = [
    {
      "name": "Boots of Speed",
      "description": "<groupLimit>Limited to 1.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
      "plaintext": "Slightly increases Movement Speed",
      "into": [
        "3006",
        "3047",
        "3020",
        "3158",
        "3111",
        "3117",
        "3009"
      ],
      "tags": [
        "Boots"
      ],
      "stats": {
        "FlatMovementSpeedMod": 25
      },
      "id": "1001",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1001.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 0
      },
      "price": {
        "base": 300,
        "total": 300,
        "sell": 210
      },
      "purchasable": true
    },
    {
      "name": "Faerie Charm",
      "description": "<stats><mana>+25% Base Mana Regen </mana></stats>",
      "plaintext": "Slightly increases Mana Regen",
      "into": [
        "3028",
        "3070",
        "3073",
        "3114",
        "3098",
        "3096"
      ],
      "tags": [
        "ManaRegen"
      ],
      "stats": {},
      "id": "1004",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1004.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 0
      },
      "price": {
        "base": 125,
        "total": 125,
        "sell": 88
      },
      "purchasable": true
    },
    {
      "name": "Rejuvenation Bead",
      "description": "<stats>+50% Base Health Regen </stats>",
      "plaintext": "Slightly increases Health Regen",
      "into": [
        "3077",
        "3097",
        "2053",
        "3801"
      ],
      "tags": [
        "HealthRegen"
      ],
      "stats": {},
      "id": "1006",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1006.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 0
      },
      "price": {
        "base": 150,
        "total": 150,
        "sell": 105
      },
      "purchasable": true
    },
    {
      "name": "Giant's Belt",
      "description": "<stats>+380 Health</stats>",
      "plaintext": "Greatly increases Health",
      "from": [
        "1028"
      ],
      "into": [
        "3083",
        "3143",
        "3084",
        "3022",
        "3742"
      ],
      "tags": [
        "Health"
      ],
      "stats": {
        "FlatHPPoolMod": 380
      },
      "depth": 2,
      "id": "1011",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1011.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 0
      },
      "price": {
        "base": 600,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Cloak of Agility",
      "description": "<stats>+20% Critical Strike Chance</stats>",
      "plaintext": "Increases critical strike chance",
      "into": [
        "3031",
        "3185",
        "3508"
      ],
      "tags": [
        "CriticalStrike"
      ],
      "stats": {
        "FlatCritChanceMod": 0.2
      },
      "id": "1018",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1018.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 0
      },
      "price": {
        "base": 800,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Blasting Wand",
      "description": "<stats>+40 Ability Power</stats>",
      "plaintext": "Moderately increases Ability Power",
      "into": [
        "3089",
        "3135",
        "3124",
        "3029",
        "3151",
        "3027",
        "3100",
        "3116"
      ],
      "tags": [
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 40
      },
      "id": "1026",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1026.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 0
      },
      "price": {
        "base": 850,
        "total": 850,
        "sell": 595
      },
      "purchasable": true
    },
    {
      "name": "Sapphire Crystal",
      "description": "<stats><mana>+250 Mana</mana></stats>",
      "plaintext": "Increases Mana",
      "into": [
        "3057",
        "3070",
        "3010",
        "3024",
        "3073",
        "3802"
      ],
      "tags": [
        "Mana"
      ],
      "stats": {
        "FlatMPPoolMod": 250
      },
      "id": "1027",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1027.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 0
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 245
      },
      "purchasable": true
    },
    {
      "name": "Ruby Crystal",
      "description": "<stats>+150 Health</stats>",
      "plaintext": "Increases Health",
      "into": [
        "1011",
        "3211",
        "3136",
        "2045",
        "2049",
        "3010",
        "3801",
        "3044",
        "3052",
        "3067",
        "3116",
        "3748",
        "3751"
      ],
      "tags": [
        "Health"
      ],
      "stats": {
        "FlatHPPoolMod": 150
      },
      "id": "1028",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1028.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 0
      },
      "price": {
        "base": 400,
        "total": 400,
        "sell": 280
      },
      "purchasable": true
    },
    {
      "name": "Cloth Armor",
      "description": "<stats>+15 Armor</stats>",
      "plaintext": "Slightly increases Armor",
      "into": [
        "3047",
        "1031",
        "3191",
        "3024",
        "3082",
        "3075",
        "2053",
        "3105"
      ],
      "tags": [
        "Armor"
      ],
      "stats": {
        "FlatArmorMod": 15
      },
      "id": "1029",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1029.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 0
      },
      "price": {
        "base": 300,
        "total": 300,
        "sell": 210
      },
      "purchasable": true
    },
    {
      "name": "Chain Vest",
      "description": "<stats>+40 Armor</stats>",
      "plaintext": "Greatly increases Armor",
      "from": [
        "1029"
      ],
      "into": [
        "3075",
        "3068",
        "3026",
        "3109",
        "2053",
        "3742"
      ],
      "tags": [
        "Armor"
      ],
      "stats": {
        "FlatArmorMod": 40
      },
      "depth": 2,
      "id": "1031",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1031.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 0
      },
      "price": {
        "base": 500,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Null-Magic Mantle",
      "description": "<stats>+25 Magic Resist</stats>",
      "plaintext": "Slightly increases Magic Resist",
      "into": [
        "3111",
        "3211",
        "1057",
        "3028",
        "3140",
        "3155",
        "3105",
        "3814",
        "3190"
      ],
      "tags": [
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 25
      },
      "id": "1033",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1033.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 48
      },
      "price": {
        "base": 450,
        "total": 450,
        "sell": 315
      },
      "purchasable": true
    },
    {
      "name": "Long Sword",
      "description": "<stats>+10 Attack Damage</stats>",
      "plaintext": "Slightly increases Attack Damage",
      "into": [
        "3134",
        "3077",
        "3123",
        "1053",
        "3133",
        "3034",
        "3035",
        "3044",
        "3052",
        "3053",
        "3072",
        "3122",
        "3144",
        "3155",
        "3252"
      ],
      "tags": [
        "Damage",
        "Lane"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 10
      },
      "id": "1036",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1036.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 48
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 245
      },
      "purchasable": true
    },
    {
      "name": "Pickaxe",
      "description": "<stats>+25 Attack Damage</stats>",
      "plaintext": "Moderately increases Attack Damage",
      "into": [
        "3124",
        "3004",
        "3008",
        "3031",
        "3074",
        "3814",
        "3812",
        "3139",
        "3181"
      ],
      "tags": [
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25
      },
      "id": "1037",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1037.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 48
      },
      "price": {
        "base": 875,
        "total": 875,
        "sell": 613
      },
      "purchasable": true
    },
    {
      "name": "B. F. Sword",
      "description": "<stats>+40 Attack Damage</stats>",
      "plaintext": "Greatly increases Attack Damage",
      "into": [
        "3031",
        "3072",
        "3147",
        "3508"
      ],
      "tags": [
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 40
      },
      "id": "1038",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1038.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 48
      },
      "price": {
        "base": 1300,
        "total": 1300,
        "sell": 910
      },
      "purchasable": true
    },
    {
      "name": "Hunter's Talisman",
      "description": "<stats><mana>+150% Base Mana Regen while in Jungle  </mana></stats><br><br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack  steals 25 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
      "plaintext": "Provides damage against Monsters and Mana Regen in the Jungle",
      "into": [
        "3706",
        "3711",
        "3715"
      ],
      "tags": [
        "LifeSteal",
        "ManaRegen",
        "OnHit",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "5",
        "Effect5Amount": "0",
        "Effect6Amount": "1.5",
        "Effect7Amount": "15"
      },
      "id": "1039",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1039.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 48
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 245
      },
      "purchasable": true
    },
    {
      "name": "Hunter's Machete",
      "description": "<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks deal 25 bonus damage on hit vs. Monsters. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
      "plaintext": "Provides damage and life steal versus Monsters",
      "into": [
        "3706",
        "3711",
        "3715"
      ],
      "tags": [
        "LifeSteal",
        "OnHit",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "12",
        "Effect2Amount": "25",
        "Effect3Amount": "0.1",
        "Effect4Amount": "2",
        "Effect5Amount": "0",
        "Effect6Amount": "0.1",
        "Effect7Amount": "15"
      },
      "id": "1041",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1041.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 48
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 245
      },
      "purchasable": true
    },
    {
      "name": "Dagger",
      "description": "<stats>+12% Attack Speed</stats>",
      "plaintext": "Slightly increases Attack Speed",
      "into": [
        "1043",
        "3091",
        "3006",
        "2015",
        "3046",
        "3086",
        "3101"
      ],
      "tags": [
        "AttackSpeed"
      ],
      "stats": {
        "PercentAttackSpeedMod": 0.12
      },
      "id": "1042",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1042.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 48
      },
      "price": {
        "base": 300,
        "total": 300,
        "sell": 210
      },
      "purchasable": true
    },
    {
      "name": "Recurve Bow",
      "description": "<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
      "plaintext": "Greatly increases Attack Speed",
      "from": [
        "1042",
        "1042"
      ],
      "into": [
        "3091",
        "3153",
        "3085",
        "3124",
        "3675",
        "1416",
        "1418",
        "1419"
      ],
      "tags": [
        "AttackSpeed",
        "OnHit"
      ],
      "stats": {
        "PercentAttackSpeedMod": 0.25
      },
      "effect": {
        "Effect1Amount": "15"
      },
      "depth": 2,
      "id": "1043",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1043.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 48
      },
      "price": {
        "base": 400,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Brawler's Gloves",
      "description": "<stats>+10% Critical Strike Chance</stats>",
      "plaintext": "Slightly increases Critical Strike Chance",
      "into": [
        "3086",
        "3122"
      ],
      "tags": [
        "CriticalStrike"
      ],
      "stats": {
        "FlatCritChanceMod": 0.1
      },
      "id": "1051",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1051.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 48
      },
      "price": {
        "base": 400,
        "total": 400,
        "sell": 280
      },
      "purchasable": true
    },
    {
      "name": "Amplifying Tome",
      "description": "<stats>+20 Ability Power</stats>",
      "plaintext": "Slightly increases Ability Power",
      "into": [
        "3108",
        "3191",
        "3136",
        "3135",
        "3145",
        "3113",
        "3090",
        "3116",
        "1402",
        "1410",
        "1414",
        "3001",
        "3050",
        "3089",
        "3165",
        "3673",
        "3802"
      ],
      "tags": [
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 20
      },
      "id": "1052",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1052.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 48
      },
      "price": {
        "base": 435,
        "total": 435,
        "sell": 305
      },
      "purchasable": true
    },
    {
      "name": "Vampiric Scepter",
      "description": "<stats>+15 Attack Damage<br>+10% Life Steal</stats>",
      "plaintext": "Basic attacks restore Health",
      "from": [
        "1036"
      ],
      "into": [
        "3072",
        "3074",
        "3812",
        "3139",
        "3144",
        "3181"
      ],
      "tags": [
        "Damage",
        "LifeSteal"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15,
        "PercentLifeStealMod": 0.1
      },
      "depth": 2,
      "id": "1053",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1053.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 96
      },
      "price": {
        "base": 550,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Doran's Shield",
      "description": "<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 8 damage from single target attacks and spells from champions.",
      "plaintext": "Good defensive starting item",
      "tags": [
        "Health",
        "HealthRegen",
        "Lane"
      ],
      "stats": {
        "FlatHPPoolMod": 80,
        "FlatHPRegenMod": 1.2
      },
      "effect": {
        "Effect1Amount": "8"
      },
      "id": "1054",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1054.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 96
      },
      "price": {
        "base": 450,
        "total": 450,
        "sell": 180
      },
      "purchasable": true
    },
    {
      "name": "Doran's Blade",
      "description": "<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>",
      "plaintext": "Good starting item for attackers",
      "tags": [
        "Damage",
        "Health",
        "Lane",
        "LifeSteal"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 8,
        "FlatHPPoolMod": 80,
        "PercentLifeStealMod": 0.03
      },
      "effect": {
        "Effect1Amount": "10"
      },
      "id": "1055",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1055.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 96
      },
      "price": {
        "base": 450,
        "total": 450,
        "sell": 180
      },
      "purchasable": true
    },
    {
      "name": "Doran's Ring",
      "description": "<stats>+60 Health<br>+15 Ability Power<br><mana>+50% Base Mana Regen </mana></stats><br><br><mana><passive>Passive:</passive> Restores 4 Mana upon killing a unit.</mana>",
      "plaintext": "Good starting item for casters",
      "tags": [
        "Health",
        "Lane",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatHPPoolMod": 60,
        "FlatMagicDamageMod": 15
      },
      "effect": {
        "Effect1Amount": "4"
      },
      "id": "1056",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1056.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 96
      },
      "price": {
        "base": 400,
        "total": 400,
        "sell": 160
      },
      "purchasable": true
    },
    {
      "name": "Negatron Cloak",
      "description": "<stats>+40 Magic Resist</stats>",
      "plaintext": "Moderately increases Magic Resist",
      "from": [
        "1033"
      ],
      "into": [
        "3170",
        "3091",
        "3512",
        "3026",
        "3001",
        "3102"
      ],
      "tags": [
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 40
      },
      "depth": 2,
      "id": "1057",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1057.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 96
      },
      "price": {
        "base": 270,
        "total": 720,
        "sell": 504
      },
      "purchasable": true
    },
    {
      "name": "Needlessly Large Rod",
      "description": "<stats>+60 Ability Power</stats>",
      "plaintext": "Greatly increases Ability Power",
      "into": [
        "3089",
        "3090",
        "3003",
        "3007",
        "3285"
      ],
      "tags": [
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 60
      },
      "id": "1058",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1058.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 96
      },
      "price": {
        "base": 1250,
        "total": 1250,
        "sell": 875
      },
      "purchasable": true
    },
    {
      "name": "The Dark Seal",
      "description": "<stats>+15 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory.  <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
      "plaintext": "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
      "into": [
        "3041"
      ],
      "tags": [
        "HealthRegen",
        "SpellDamage",
        "Mana",
        "Lane"
      ],
      "stats": {
        "FlatMPPoolMod": 100,
        "FlatMagicDamageMod": 15
      },
      "effect": {
        "Effect1Amount": "0.25",
        "Effect2Amount": "2",
        "Effect3Amount": "1",
        "Effect4Amount": "10",
        "Effect5Amount": "3",
        "Effect6Amount": "4"
      },
      "id": "1082",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1082.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 96
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 245
      },
      "purchasable": true
    },
    {
      "name": "Cull",
      "description": "<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.",
      "plaintext": "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
      "tags": [
        "Damage",
        "LifeSteal",
        "Lane"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 7
      },
      "effect": {
        "Effect1Amount": "3",
        "Effect2Amount": "1",
        "Effect3Amount": "100",
        "Effect4Amount": "350"
      },
      "id": "1083",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1083.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 96
      },
      "price": {
        "base": 450,
        "total": 450,
        "sell": 180
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Warrior",
      "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
      "plaintext": "Grants Attack Damage and Cooldown Reduction",
      "from": [
        "3133",
        "3706"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatPhysicalDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "-0.2",
        "Effect7Amount": "2",
        "Effect8Amount": "3",
        "Effect9Amount": "0.1"
      },
      "depth": 3,
      "id": "1400",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1400.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 96
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Cinderhulk",
      "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
      "plaintext": "Grants Health and Immolate Aura",
      "from": [
        "3751",
        "3706"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatHPPoolMod": 400
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "-0.2",
        "Effect7Amount": "2",
        "Effect8Amount": "3",
        "Effect9Amount": "0.1"
      },
      "depth": 3,
      "id": "1401",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1401.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 96
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Runic Echoes",
      "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "plaintext": "Grants Ability Power and periodically empowers your Spells",
      "from": [
        "3113",
        "1052",
        "3706"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentMovementSpeedMod": 0.07,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "-0.2",
        "Effect7Amount": "2",
        "Effect8Amount": "3",
        "Effect9Amount": "0.1"
      },
      "depth": 3,
      "id": "1402",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1402.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 144
      },
      "price": {
        "base": 340,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Warrior",
      "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
      "plaintext": "Grants Attack Damage and Cooldown Reduction",
      "from": [
        "3133",
        "3711"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatPhysicalDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "30",
        "Effect9Amount": "0.1",
        "Effect10Amount": "150"
      },
      "depth": 3,
      "id": "1408",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1408.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 144
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Cinderhulk",
      "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
      "plaintext": "Grants Health and Immolate Aura",
      "from": [
        "3751",
        "3711"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatHPPoolMod": 400
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "30",
        "Effect9Amount": "0.1",
        "Effect10Amount": "150"
      },
      "depth": 3,
      "id": "1409",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1409.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 144
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Runic Echoes",
      "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "plaintext": "Grants Ability Power and periodically empowers your Spells",
      "from": [
        "3113",
        "1052",
        "3711"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentMovementSpeedMod": 0.07,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "30",
        "Effect9Amount": "0.1",
        "Effect10Amount": "150"
      },
      "depth": 3,
      "id": "1410",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1410.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 144
      },
      "price": {
        "base": 340,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Warrior",
      "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
      "plaintext": "Grants Attack Damage and Cooldown Reduction",
      "from": [
        "3133",
        "3715"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatPhysicalDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "18",
        "Effect9Amount": "0.1",
        "Effect10Amount": "4"
      },
      "depth": 3,
      "id": "1412",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1412.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 144
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Cinderhulk",
      "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
      "plaintext": "Grants Health and Immolate Aura",
      "from": [
        "3751",
        "3715"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatHPPoolMod": 400
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "18",
        "Effect9Amount": "0.1",
        "Effect10Amount": "4"
      },
      "depth": 3,
      "id": "1413",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1413.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 144
      },
      "price": {
        "base": 525,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Runic Echoes",
      "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "plaintext": "Grants Ability Power and periodically empowers your Spells",
      "from": [
        "3113",
        "1052",
        "3715"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentMovementSpeedMod": 0.07,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "18",
        "Effect9Amount": "0.1",
        "Effect10Amount": "4"
      },
      "depth": 3,
      "id": "1414",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1414.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 144
      },
      "price": {
        "base": 340,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Bloodrazor",
      "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
      "from": [
        "1043",
        "3706"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentAttackSpeedMod": 0.5
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "-0.2",
        "Effect7Amount": "2",
        "Effect8Amount": "3",
        "Effect9Amount": "0.1"
      },
      "depth": 3,
      "id": "1416",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1416.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 144
      },
      "price": {
        "base": 625,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Bloodrazor",
      "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
      "from": [
        "1043",
        "3711"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentAttackSpeedMod": 0.5
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "30",
        "Effect9Amount": "0.1",
        "Effect10Amount": "150"
      },
      "depth": 3,
      "id": "1418",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1418.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 144
      },
      "price": {
        "base": 625,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Bloodrazor",
      "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
      "from": [
        "1043",
        "3715"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentAttackSpeedMod": 0.5
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "18",
        "Effect9Amount": "0.1",
        "Effect10Amount": "4"
      },
      "depth": 3,
      "id": "1419",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/1419.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 144
      },
      "price": {
        "base": 625,
        "total": 2625,
        "sell": 1838
      },
      "purchasable": true
    },
    {
      "name": "Health Potion",
      "description": "<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.",
      "plaintext": "Consume to restore Health over time",
      "stacks": 5,
      "consumed": true,
      "tags": [
        "Consumable",
        "Jungle",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "150",
        "Effect2Amount": "15"
      },
      "id": "2003",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2003.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 192
      },
      "price": {
        "base": 50,
        "total": 50,
        "sell": 20
      },
      "purchasable": true
    },
    {
      "name": "Total Biscuit of Rejuvenation",
      "description": "<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.",
      "plaintext": "",
      "consumed": true,
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "2009",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2009.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 192
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Total Biscuit of Rejuvenation",
      "description": "<consumable>Click to Consume:</consumable> Restores 15 Health and 15 Mana immediately and then 150 Health over 15 seconds.",
      "plaintext": "",
      "stacks": 5,
      "consumed": true,
      "inStore": false,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "15",
        "Effect3Amount": "150",
        "Effect4Amount": "15"
      },
      "id": "2010",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2010.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 192
      },
      "price": {
        "base": 50,
        "total": 50,
        "sell": 20
      },
      "purchasable": false
    },
    {
      "name": "Kircheis Shard",
      "description": "<stats>+15% Attack Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Energized Strike:</unique> Your Energized attacks deal 40 bonus magic damage on hit.",
      "plaintext": "Attack speed and a chargable magic hit",
      "from": [
        "1042"
      ],
      "into": [
        "3094",
        "3087"
      ],
      "tags": [
        "AttackSpeed",
        "OnHit"
      ],
      "stats": {
        "PercentAttackSpeedMod": 0.15
      },
      "effect": {
        "Effect1Amount": "40"
      },
      "depth": 2,
      "id": "2015",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2015.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 192
      },
      "price": {
        "base": 450,
        "total": 750,
        "sell": 525
      },
      "purchasable": true
    },
    {
      "name": "Refillable Potion",
      "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
      "plaintext": "Restores Health over time. Refills at shop.",
      "into": [
        "2032",
        "2033"
      ],
      "tags": [
        "HealthRegen",
        "Consumable",
        "Active",
        "Lane",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "125",
        "Effect2Amount": "0",
        "Effect3Amount": "12",
        "Effect4Amount": "2"
      },
      "id": "2031",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2031.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 192
      },
      "price": {
        "base": 150,
        "total": 150,
        "sell": 60
      },
      "purchasable": true
    },
    {
      "name": "Hunter's Potion",
      "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop.<br><br>Killing a Large Monster grants 1 charge.<br><br><rules>(Killing a Large Monster at full charges will automatically consume the newest charge.)</rules>",
      "plaintext": "Restores Health and Mana over time - Refills at shop and has increased capacity",
      "from": [
        "2031"
      ],
      "tags": [
        "HealthRegen",
        "ManaRegen",
        "Consumable",
        "Active",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "60",
        "Effect2Amount": "35",
        "Effect3Amount": "8",
        "Effect4Amount": "5"
      },
      "depth": 2,
      "id": "2032",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2032.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 192
      },
      "price": {
        "base": 250,
        "total": 400,
        "sell": 160
      },
      "purchasable": true
    },
    {
      "name": "Corrupting Potion",
      "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for <scaleLevel>15 - 30</scaleLevel> magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>",
      "plaintext": "Restores Health and Mana over time and boosts combat power - Refills at Shop",
      "from": [
        "2031"
      ],
      "tags": [
        "Active",
        "Consumable",
        "HealthRegen",
        "Lane",
        "ManaRegen"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "125",
        "Effect2Amount": "75",
        "Effect3Amount": "12",
        "Effect4Amount": "3",
        "Effect5Amount": "10",
        "Effect6Amount": "0.1",
        "Effect7Amount": "15",
        "Effect8Amount": "3",
        "Effect9Amount": "30"
      },
      "depth": 2,
      "id": "2033",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2033.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 192
      },
      "price": {
        "base": 350,
        "total": 500,
        "sell": 200
      },
      "purchasable": true
    },
    {
      "name": "Ruby Sightstone",
      "description": "<stats>+500 Health</stats><br><br><unique>UNIQUE Passive:</unique> Item Active cooldowns are reduced by 20%.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges and refills when visiting the shop.<br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Greatly increases Health and provides Stealth Wards over time",
      "from": [
        "2049",
        "1028"
      ],
      "tags": [
        "Active",
        "Health",
        "Vision"
      ],
      "stats": {
        "FlatHPPoolMod": 500
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "4",
        "Effect3Amount": "150"
      },
      "depth": 3,
      "id": "2045",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2045.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 192
      },
      "price": {
        "base": 400,
        "total": 1600,
        "sell": 640
      },
      "purchasable": true
    },
    {
      "name": "Oracle's Extract",
      "description": "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
      "plaintext": "Allows champion to see invisible or unseen enemy units",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [
        "Consumable",
        "Stealth",
        "Vision"
      ],
      "stats": {},
      "id": "2047",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2047.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 192
      },
      "price": {
        "base": 300,
        "total": 300,
        "sell": 120
      },
      "purchasable": true
    },
    {
      "name": "Sightstone",
      "description": "<stats>+150 Health</stats><br><br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Increases Health and provides Stealth Wards over time",
      "from": [
        "1028"
      ],
      "into": [
        "2045",
        "2301",
        "2302",
        "2303"
      ],
      "tags": [
        "Active",
        "Health",
        "Vision"
      ],
      "stats": {
        "FlatHPPoolMod": 150
      },
      "effect": {
        "Effect1Amount": "3",
        "Effect2Amount": "150"
      },
      "depth": 2,
      "id": "2049",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2049.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 192
      },
      "price": {
        "base": 400,
        "total": 800,
        "sell": 320
      },
      "purchasable": true
    },
    {
      "name": "Explorer's Ward",
      "description": "<consumable>Click to Consume:</consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.",
      "plaintext": "",
      "inStore": false,
      "tags": [
        "Consumable"
      ],
      "stats": {},
      "id": "2050",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2050.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 240
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Guardian's Horn",
      "description": "<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      "plaintext": "Good starting item for tanks",
      "tags": [
        "Health",
        "HealthRegen",
        "Lane"
      ],
      "stats": {
        "FlatHPPoolMod": 150,
        "FlatHPRegenMod": 4
      },
      "effect": {
        "Effect1Amount": "12",
        "Effect2Amount": "0.25"
      },
      "id": "2051",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2051.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 240
      },
      "price": {
        "base": 950,
        "total": 950,
        "sell": 380
      },
      "purchasable": true
    },
    {
      "name": "Poro-Snax",
      "description": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>",
      "plaintext": "",
      "stacks": 2,
      "consumed": true,
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "2052",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2052.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 240
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Raptor Cloak",
      "description": "<stats>+40 Armor<br>+125% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
      "plaintext": "Enhances Movement Speed near turrets",
      "from": [
        "1006",
        "1031"
      ],
      "into": [
        "3512",
        "3056",
        "3069"
      ],
      "tags": [
        "Armor",
        "HealthRegen",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatArmorMod": 40
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "2"
      },
      "depth": 3,
      "id": "2053",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2053.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 240
      },
      "price": {
        "base": 250,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "Diet Poro-Snax",
      "description": "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.",
      "plaintext": "",
      "consumed": true,
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "2054",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2054.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 240
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Control Ward",
      "description": "<groupLimit>Can only carry 3 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.",
      "plaintext": "Used to disable wards and invisible traps in an area.",
      "stacks": 3,
      "consumed": true,
      "tags": [
        "Consumable",
        "Lane",
        "Stealth",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "1",
        "Effect2Amount": "3"
      },
      "id": "2055",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2055.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 240
      },
      "price": {
        "base": 75,
        "total": 75,
        "sell": 30
      },
      "purchasable": true
    },
    {
      "name": "Elixir of Iron",
      "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
      "plaintext": "Temporarily increases defenses. Leaves a trail for allies to follow.",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [
        "Health",
        "Consumable",
        "NonbootsMovement",
        "Tenacity"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "300",
        "Effect2Amount": "0.25",
        "Effect3Amount": "3",
        "Effect4Amount": "0.15",
        "Effect5Amount": "0.15",
        "Effect6Amount": "0",
        "Effect7Amount": "0",
        "Effect8Amount": "9"
      },
      "id": "2138",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2138.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 240
      },
      "price": {
        "base": 500,
        "total": 500,
        "sell": 200
      },
      "purchasable": true
    },
    {
      "name": "Elixir of Sorcery",
      "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>",
      "plaintext": "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [
        "Consumable",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "50",
        "Effect2Amount": "50",
        "Effect3Amount": "25",
        "Effect4Amount": "3",
        "Effect5Amount": "5",
        "Effect6Amount": "3",
        "Effect7Amount": "0",
        "Effect8Amount": "9"
      },
      "id": "2139",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2139.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 240
      },
      "price": {
        "base": 500,
        "total": 500,
        "sell": 200
      },
      "purchasable": true
    },
    {
      "name": "Elixir of Wrath",
      "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
      "plaintext": "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [
        "Consumable",
        "Damage",
        "LifeSteal",
        "SpellVamp"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "30",
        "Effect3Amount": "0.15",
        "Effect4Amount": "3",
        "Effect5Amount": "0",
        "Effect6Amount": "0",
        "Effect7Amount": "0",
        "Effect8Amount": "9"
      },
      "id": "2140",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2140.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 240
      },
      "price": {
        "base": 500,
        "total": 500,
        "sell": 200
      },
      "purchasable": true
    },
    {
      "name": "Eye of the Watchers",
      "description": "<stats>+200 Health<br><mana>+100% Base Mana Regen </mana><br>+25 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. <br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Provides Ability Power and Stealth Wards over time",
      "from": [
        "2049",
        "3098"
      ],
      "tags": [
        "Health",
        "SpellDamage",
        "ManaRegen",
        "Vision",
        "Active",
        "GoldPer",
        "CooldownReduction"
      ],
      "stats": {
        "FlatHPPoolMod": 200,
        "FlatMagicDamageMod": 25
      },
      "effect": {
        "Effect1Amount": "2",
        "Effect2Amount": "15",
        "Effect3Amount": "15",
        "Effect4Amount": "4",
        "Effect5Amount": "30",
        "Effect6Amount": "12",
        "Effect7Amount": "150",
        "Effect8Amount": "3"
      },
      "depth": 3,
      "id": "2301",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2301.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 240
      },
      "price": {
        "base": 550,
        "total": 2200,
        "sell": 880
      },
      "purchasable": true
    },
    {
      "name": "Eye of the Oasis",
      "description": "<stats>+200 Health<br>+100% Base Health Regen <br><mana>+100% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Provides Regeneration and Stealth Wards over time",
      "from": [
        "2049",
        "3096"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "ManaRegen",
        "Vision",
        "Active",
        "GoldPer",
        "CooldownReduction"
      ],
      "stats": {
        "FlatHPPoolMod": 200
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "6",
        "Effect3Amount": "10",
        "Effect4Amount": "4",
        "Effect5Amount": "0",
        "Effect6Amount": "0",
        "Effect7Amount": "150"
      },
      "depth": 3,
      "id": "2302",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2302.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 288
      },
      "price": {
        "base": 250,
        "total": 1900,
        "sell": 760
      },
      "purchasable": true
    },
    {
      "name": "Eye of the Equinox",
      "description": "<stats>+500 Health<br>+200% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Provides Health and Stealth Wards over time",
      "from": [
        "2049",
        "3097"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Vision",
        "Active",
        "GoldPer"
      ],
      "stats": {
        "FlatHPPoolMod": 500
      },
      "effect": {
        "Effect1Amount": "320",
        "Effect2Amount": "50",
        "Effect3Amount": "30",
        "Effect4Amount": "4",
        "Effect5Amount": "0",
        "Effect6Amount": "0",
        "Effect7Amount": "150",
        "Effect8Amount": "0",
        "Effect9Amount": "2",
        "Effect10Amount": "20"
      },
      "depth": 3,
      "id": "2303",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/2303.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 288
      },
      "price": {
        "base": 650,
        "total": 2300,
        "sell": 920
      },
      "purchasable": true
    },
    {
      "name": "Abyssal Scepter",
      "description": "<stats>+60 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 10% more magic damage.",
      "plaintext": "Nearby enemies take more magic damage",
      "from": [
        "3108",
        "1057",
        "1052"
      ],
      "tags": [
        "SpellBlock",
        "SpellDamage",
        "Aura",
        "CooldownReduction",
        "MagicPenetration"
      ],
      "stats": {
        "FlatSpellBlockMod": 60,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "-10",
        "Effect2Amount": "-25",
        "Effect3Amount": "0.1"
      },
      "depth": 3,
      "id": "3001",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3001.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 288
      },
      "price": {
        "base": 695,
        "total": 2750,
        "sell": 1925
      },
      "purchasable": true
    },
    {
      "name": "Archangel's Staff",
      "description": "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
      "plaintext": "Increases Ability Power based on maximum Mana",
      "from": [
        "3070",
        "1058"
      ],
      "tags": [
        "Mana",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatMPPoolMod": 250,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.03",
        "Effect2Amount": "8",
        "Effect3Amount": "750",
        "Effect4Amount": "2",
        "Effect5Amount": "8",
        "Effect6Amount": "0",
        "Effect7Amount": "0.25"
      },
      "depth": 3,
      "id": "3003",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3003.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 288
      },
      "price": {
        "base": 1100,
        "total": 3100,
        "sell": 2170
      },
      "purchasable": true
    },
    {
      "name": "Manamune",
      "description": "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
      "plaintext": "Increases Attack Damage based on maximum Mana",
      "from": [
        "3070",
        "1037"
      ],
      "tags": [
        "Damage",
        "Mana",
        "ManaRegen",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "FlatMPPoolMod": 250
      },
      "effect": {
        "Effect1Amount": "0.02",
        "Effect2Amount": "4",
        "Effect3Amount": "750",
        "Effect4Amount": "2",
        "Effect5Amount": "8",
        "Effect6Amount": "1",
        "Effect7Amount": "0.15"
      },
      "depth": 3,
      "id": "3004",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3004.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 288
      },
      "price": {
        "base": 775,
        "total": 2400,
        "sell": 1680
      },
      "purchasable": true
    },
    {
      "name": "Berserker's Greaves",
      "description": "<stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      "plaintext": "Enhances Movement Speed and Attack Speed",
      "from": [
        "1001",
        "1042"
      ],
      "tags": [
        "AttackSpeed",
        "Boots"
      ],
      "stats": {
        "FlatMovementSpeedMod": 45,
        "PercentAttackSpeedMod": 0.35
      },
      "depth": 2,
      "id": "3006",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3006.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 288
      },
      "price": {
        "base": 500,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Archangel's Staff (Quick Charge)",
      "description": "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
      "plaintext": "Increases Ability Power based on maximum Mana",
      "from": [
        "3073",
        "1058"
      ],
      "tags": [
        "Mana",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatMPPoolMod": 250,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.03",
        "Effect2Amount": "12",
        "Effect3Amount": "750",
        "Effect4Amount": "2",
        "Effect5Amount": "8",
        "Effect6Amount": "0",
        "Effect7Amount": "0.25"
      },
      "depth": 3,
      "id": "3007",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3007.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 288
      },
      "price": {
        "base": 1100,
        "total": 3100,
        "sell": 2170
      },
      "purchasable": true
    },
    {
      "name": "Manamune (Quick Charge)",
      "description": "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
      "plaintext": "Increases Attack Damage based on maximum Mana",
      "from": [
        "3073",
        "1037"
      ],
      "tags": [
        "Damage",
        "Mana",
        "ManaRegen",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "FlatMPPoolMod": 250
      },
      "effect": {
        "Effect1Amount": "0.02",
        "Effect2Amount": "6",
        "Effect3Amount": "750",
        "Effect4Amount": "2",
        "Effect5Amount": "8",
        "Effect6Amount": "1",
        "Effect7Amount": "0.15"
      },
      "depth": 3,
      "id": "3008",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3008.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 288
      },
      "price": {
        "base": 775,
        "total": 2400,
        "sell": 1680
      },
      "purchasable": true
    },
    {
      "name": "Boots of Swiftness",
      "description": "<unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.",
      "plaintext": "Enhances Movement Speed and reduces the effect of slows",
      "from": [
        "1001"
      ],
      "tags": [
        "Boots"
      ],
      "stats": {
        "FlatMovementSpeedMod": 55
      },
      "effect": {
        "Effect1Amount": "0.25"
      },
      "depth": 2,
      "id": "3009",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3009.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 288
      },
      "price": {
        "base": 600,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Catalyst of Aeons",
      "description": "<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast.  <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>",
      "plaintext": "Spend Mana to recover Health",
      "from": [
        "1028",
        "1027"
      ],
      "into": [
        "3027",
        "3029",
        "3030",
        "3800"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Mana",
        "ManaRegen"
      ],
      "stats": {
        "FlatHPPoolMod": 225,
        "FlatMPPoolMod": 300
      },
      "effect": {
        "Effect1Amount": "150",
        "Effect2Amount": "200",
        "Effect3Amount": "8",
        "Effect4Amount": "15",
        "Effect5Amount": "0.2",
        "Effect6Amount": "0.15"
      },
      "depth": 2,
      "id": "3010",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3010.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 288
      },
      "price": {
        "base": 350,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Sorcerer's Shoes",
      "description": "<stats>+15 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      "plaintext": "Enhances Movement Speed and magic damage",
      "from": [
        "1001"
      ],
      "tags": [
        "Boots",
        "MagicPenetration"
      ],
      "stats": {
        "FlatMovementSpeedMod": 45
      },
      "effect": {
        "Effect1Amount": "15"
      },
      "depth": 2,
      "id": "3020",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3020.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 336
      },
      "price": {
        "base": 800,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Frozen Mallet",
      "description": "<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).",
      "plaintext": "Basic attacks slow enemies",
      "from": [
        "3052",
        "1011"
      ],
      "tags": [
        "Damage",
        "Health",
        "OnHit",
        "Slow"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 30,
        "FlatHPPoolMod": 700
      },
      "effect": {
        "Effect1Amount": "1.5",
        "Effect2Amount": "0.4",
        "Effect3Amount": "0.3"
      },
      "depth": 3,
      "id": "3022",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3022.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 336
      },
      "price": {
        "base": 900,
        "total": 3100,
        "sell": 2170
      },
      "purchasable": true
    },
    {
      "name": "Glacial Shroud",
      "description": "<stats>+25 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      "plaintext": "Increases Armor and Cooldown Reduction",
      "from": [
        "1027",
        "1029"
      ],
      "into": [
        "3110",
        "3025",
        "3050",
        "3060",
        "3187"
      ],
      "tags": [
        "Armor",
        "CooldownReduction",
        "Mana"
      ],
      "stats": {
        "FlatMPPoolMod": 250,
        "FlatArmorMod": 25
      },
      "effect": {
        "Effect1Amount": "-0.1"
      },
      "depth": 2,
      "id": "3024",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3024.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 336
      },
      "price": {
        "base": 350,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Iceborn Gauntlet",
      "description": "<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.",
      "plaintext": "Basic attacks create a slow field after spell cast",
      "from": [
        "3057",
        "3024"
      ],
      "tags": [
        "Armor",
        "Mana",
        "CooldownReduction",
        "Slow"
      ],
      "stats": {
        "FlatMPPoolMod": 500,
        "FlatArmorMod": 65
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "1",
        "Effect3Amount": "2",
        "Effect4Amount": "-0.3",
        "Effect5Amount": "1.5"
      },
      "depth": 3,
      "id": "3025",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3025.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 336
      },
      "price": {
        "base": 650,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Guardian Angel",
      "description": "<stats>+60 Armor<br>+45 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores the greater of 700 Health or 30% of maximum Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
      "plaintext": "Periodically revives champion upon death",
      "from": [
        "1057",
        "1031"
      ],
      "tags": [
        "Armor",
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 45,
        "FlatArmorMod": 60
      },
      "effect": {
        "Effect1Amount": "0.3",
        "Effect2Amount": "4",
        "Effect3Amount": "300",
        "Effect4Amount": "700"
      },
      "depth": 3,
      "id": "3026",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3026.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 336
      },
      "price": {
        "base": 880,
        "total": 2400,
        "sell": 960
      },
      "purchasable": true
    },
    {
      "name": "Rod of Ages",
      "description": "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
      "plaintext": "Greatly increases Health, Mana, and Ability Power",
      "from": [
        "3010",
        "1026"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Mana",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMPPoolMod": 300,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "10",
        "Effect3Amount": "4",
        "Effect4Amount": "1",
        "Effect5Amount": "10",
        "Effect6Amount": "150",
        "Effect7Amount": "200",
        "Effect8Amount": "8",
        "Effect9Amount": "25",
        "Effect10Amount": "0.2",
        "Effect11Amount": "0.15"
      },
      "depth": 3,
      "id": "3027",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3027.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 336
      },
      "price": {
        "base": 750,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Chalice of Harmony",
      "description": "<stats>+30 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.</unique>",
      "plaintext": "Increases Mana and Health Regeneration",
      "from": [
        "1004",
        "1033",
        "1004"
      ],
      "into": [
        "3174",
        "3222"
      ],
      "tags": [
        "SpellBlock",
        "HealthRegen",
        "ManaRegen"
      ],
      "stats": {
        "FlatSpellBlockMod": 30
      },
      "effect": {
        "Effect1Amount": "2",
        "Effect2Amount": "5",
        "Effect3Amount": "600",
        "Effect4Amount": "180",
        "Effect5Amount": "8",
        "Effect6Amount": "1",
        "Effect7Amount": "1"
      },
      "depth": 2,
      "id": "3028",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3028.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 336
      },
      "price": {
        "base": 100,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Rod of Ages (Quick Charge)",
      "description": "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
      "plaintext": "Greatly increases Health, Mana, and Ability Power",
      "from": [
        "3010",
        "1026"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Mana",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMPPoolMod": 300,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "10",
        "Effect3Amount": "4",
        "Effect4Amount": "1",
        "Effect5Amount": "10",
        "Effect6Amount": "150",
        "Effect7Amount": "200",
        "Effect8Amount": "8",
        "Effect9Amount": "25",
        "Effect10Amount": "0.2",
        "Effect11Amount": "0.15"
      },
      "depth": 3,
      "id": "3029",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3029.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 336
      },
      "price": {
        "base": 750,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Hextech GLP-800",
      "description": "<stats>+300 Health<br><mana>+400 Mana</mana><br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode, dealing <scaleLevel>100 - 200</scaleLevel> (+35% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Enemies hit are slowed by 65% decaying over 0.5 seconds.<br><br><rules>(Frost Bolt has a cast time, in contrast to most actives.)</rules> ",
      "plaintext": "Activate to fire icy bolts to slow enemies",
      "from": [
        "3010",
        "3145"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "SpellDamage",
        "Mana",
        "ManaRegen",
        "Active"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMPPoolMod": 400,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "0.5",
        "Effect5Amount": "0.65",
        "Effect6Amount": "100",
        "Effect7Amount": "200",
        "Effect8Amount": "0.35",
        "Effect9Amount": "25",
        "Effect10Amount": "0.2",
        "Effect11Amount": "0.15",
        "Effect12Amount": "40"
      },
      "depth": 3,
      "id": "3030",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3030.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 336
      },
      "price": {
        "base": 850,
        "total": 3000,
        "sell": 2100
      },
      "purchasable": true
    },
    {
      "name": "Infinity Edge",
      "description": "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strike bonus damage is increased by 50%.",
      "plaintext": "Massively enhances critical strikes",
      "from": [
        "1038",
        "1037",
        "1018"
      ],
      "tags": [
        "CriticalStrike",
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 70,
        "FlatCritChanceMod": 0.2
      },
      "effect": {
        "Effect1Amount": "0.5"
      },
      "depth": 2,
      "id": "3031",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3031.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 336
      },
      "price": {
        "base": 625,
        "total": 3600,
        "sell": 2520
      },
      "purchasable": true
    },
    {
      "name": "Mortal Reminder",
      "description": "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.<br><unique>UNIQUE Passive - Last Whisper:</unique> +45% <a href='BonusArmorPen'>Bonus Armor Penetration</a>.",
      "plaintext": "Overcomes enemies with high Health recovery and Armor",
      "from": [
        "3035",
        "3123"
      ],
      "tags": [
        "ArmorPenetration",
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 50
      },
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "0.45"
      },
      "depth": 3,
      "id": "3033",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3033.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 384
      },
      "price": {
        "base": 600,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Giant Slayer",
      "description": "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +10% physical damage against enemy champions with greater maximum Health than you (+1% damage per 100 Health difference, maxing at 1000 Health difference).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Overcomes enemies with high Health",
      "from": [
        "1036"
      ],
      "into": [
        "3036"
      ],
      "tags": [
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 10
      },
      "effect": {
        "Effect1Amount": "0.1",
        "Effect2Amount": "100",
        "Effect3Amount": "0.01",
        "Effect4Amount": "1000"
      },
      "depth": 2,
      "id": "3034",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3034.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 384
      },
      "price": {
        "base": 650,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Last Whisper",
      "description": "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +45% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
      "plaintext": "Overcomes enemies with high Armor",
      "from": [
        "1036"
      ],
      "into": [
        "3033",
        "3036"
      ],
      "tags": [
        "ArmorPenetration",
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 10
      },
      "effect": {
        "Effect1Amount": "0.45",
        "Effect2Amount": "0.45"
      },
      "depth": 2,
      "id": "3035",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3035.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 384
      },
      "price": {
        "base": 950,
        "total": 1300,
        "sell": 910
      },
      "purchasable": true
    },
    {
      "name": "Lord Dominik's Regards",
      "description": "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +15% physical damage against enemy champions with greater maximum Health than you (+1.5% damage per 100 Health difference, maxing at 1000 Health difference).<br><unique>UNIQUE Passive - Last Whisper:</unique> +45% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
      "plaintext": "Overcomes enemies with high health and armor",
      "from": [
        "3035",
        "3034"
      ],
      "tags": [
        "Damage",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 50
      },
      "effect": {
        "Effect1Amount": "0.45",
        "Effect2Amount": "0.15",
        "Effect3Amount": "0",
        "Effect4Amount": "100",
        "Effect5Amount": "0.015",
        "Effect6Amount": "1000"
      },
      "depth": 3,
      "id": "3036",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3036.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 384
      },
      "price": {
        "base": 400,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Seraph's Embrace",
      "description": "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
      "plaintext": "",
      "specialRecipe": 3003,
      "inStore": false,
      "tags": [
        "Active"
      ],
      "stats": {
        "FlatMPPoolMod": 1000,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.03",
        "Effect2Amount": "0.2",
        "Effect3Amount": "3",
        "Effect4Amount": "150",
        "Effect5Amount": "120",
        "Effect6Amount": "0",
        "Effect7Amount": "0.25"
      },
      "id": "3040",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3040.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Mejai's Soulstealer",
      "description": "<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 15 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
      "plaintext": "Grants Ability Power for kills and assists",
      "from": [
        "1082"
      ],
      "tags": [
        "SpellDamage",
        "Mana"
      ],
      "stats": {
        "FlatMPPoolMod": 200,
        "FlatMagicDamageMod": 20
      },
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "4",
        "Effect3Amount": "2",
        "Effect4Amount": "25",
        "Effect5Amount": "0.5",
        "Effect6Amount": "0.1",
        "Effect7Amount": "10",
        "Effect8Amount": "15"
      },
      "depth": 2,
      "id": "3041",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3041.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 384
      },
      "price": {
        "base": 1050,
        "total": 1400,
        "sell": 980
      },
      "purchasable": true
    },
    {
      "name": "Muramana",
      "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
      "plaintext": "",
      "specialRecipe": 3004,
      "inStore": false,
      "tags": [
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "FlatMPPoolMod": 1000
      },
      "effect": {
        "Effect1Amount": "0.15"
      },
      "id": "3042",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3042.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Muramana",
      "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
      "plaintext": "",
      "specialRecipe": 3008,
      "inStore": false,
      "tags": [
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "FlatMPPoolMod": 1000
      },
      "effect": {
        "Effect1Amount": "0.15"
      },
      "id": "3043",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3043.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Phage",
      "description": "<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
      "plaintext": "Attacks and kills give a small burst of speed",
      "from": [
        "1028",
        "1036"
      ],
      "into": [
        "3078",
        "3071"
      ],
      "tags": [
        "Damage",
        "Health",
        "NonbootsMovement",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15,
        "FlatHPPoolMod": 200
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "2",
        "Effect3Amount": "60"
      },
      "depth": 2,
      "id": "3044",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3044.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 384
      },
      "price": {
        "base": 500,
        "total": 1250,
        "sell": 875
      },
      "purchasable": true
    },
    {
      "name": "Phantom Dancer",
      "description": "<stats>+45% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> While within 550 units of an enemy champion you can see, +7% Movement Speed and you can move through units.<br><unique>UNIQUE Passive - Lament:</unique> The last champion hit deals 12% less damage to you (ends after 10 seconds of not hitting).",
      "plaintext": "Move faster near enemies and reduce incoming damage",
      "from": [
        "1042",
        "3086",
        "1042"
      ],
      "tags": [
        "AttackSpeed",
        "CriticalStrike",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatCritChanceMod": 0.3,
        "PercentMovementSpeedMod": 0.05,
        "PercentAttackSpeedMod": 0.45
      },
      "effect": {
        "Effect1Amount": "0.12",
        "Effect2Amount": "10",
        "Effect3Amount": "550",
        "Effect4Amount": "0.07"
      },
      "depth": 3,
      "id": "3046",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3046.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 384
      },
      "price": {
        "base": 650,
        "total": 2550,
        "sell": 1785
      },
      "purchasable": true
    },
    {
      "name": "Ninja Tabi",
      "description": "<stats>+30 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 12% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
      "plaintext": "Enhances Movement Speed and reduces incoming basic attack damage",
      "from": [
        "1001",
        "1029"
      ],
      "tags": [
        "Armor",
        "Boots"
      ],
      "stats": {
        "FlatMovementSpeedMod": 45,
        "FlatArmorMod": 30
      },
      "effect": {
        "Effect1Amount": "0.12"
      },
      "depth": 2,
      "id": "3047",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3047.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 0,
        "y": 432
      },
      "price": {
        "base": 500,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Seraph's Embrace",
      "description": "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
      "plaintext": "",
      "specialRecipe": 3007,
      "inStore": false,
      "tags": [
        "Active"
      ],
      "stats": {
        "FlatMPPoolMod": 1000,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.03",
        "Effect2Amount": "0.2",
        "Effect3Amount": "3",
        "Effect4Amount": "150",
        "Effect5Amount": "120",
        "Effect6Amount": "0",
        "Effect7Amount": "0.25"
      },
      "id": "3048",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3048.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 48,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Zeke's Harbinger",
      "description": "<stats><mana>+250 Mana</mana><br>+30 Armor<br>+50 Ability Power<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Conduit:</active> Bind to target ally (60 second cooldown).<br><unique>UNIQUE Passive:</unique> When within 1000 units of each other, you and your ally generate Charges. Attacking or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds.<br><br><rules>(Champions can only be linked by one Zeke's Harbinger at a time.)</rules>",
      "plaintext": "Grants an ally bursts of Critical Strike Chance and Ability Power",
      "from": [
        "1052",
        "3024",
        "1052"
      ],
      "tags": [
        "Armor",
        "SpellDamage",
        "Mana",
        "Aura",
        "Active",
        "CooldownReduction"
      ],
      "stats": {
        "FlatMPPoolMod": 250,
        "FlatMagicDamageMod": 50,
        "FlatArmorMod": 30
      },
      "effect": {
        "Effect1Amount": "-0.1",
        "Effect2Amount": "1",
        "Effect3Amount": "0.5",
        "Effect4Amount": "0.2",
        "Effect5Amount": "1000",
        "Effect6Amount": "100",
        "Effect7Amount": "8",
        "Effect8Amount": "10",
        "Effect9Amount": "4",
        "Effect10Amount": "2",
        "Effect11Amount": "2",
        "Effect12Amount": "6",
        "Effect13Amount": "60",
        "Effect14Amount": "5"
      },
      "depth": 3,
      "id": "3050",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3050.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 96,
        "y": 432
      },
      "price": {
        "base": 380,
        "total": 2250,
        "sell": 1575
      },
      "purchasable": true
    },
    {
      "name": "Jaurim's Fist",
      "description": "<stats>+15 Attack Damage<br>+150 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 30 times.",
      "plaintext": "Attack Damage and stacking Health on Unit Kill",
      "from": [
        "1036",
        "1028"
      ],
      "into": [
        "3104",
        "3022",
        "3053",
        "3748"
      ],
      "tags": [
        "Health",
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15,
        "FlatHPPoolMod": 150
      },
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "5",
        "Effect3Amount": "2",
        "Effect4Amount": "150"
      },
      "depth": 2,
      "id": "3052",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3052.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 144,
        "y": 432
      },
      "price": {
        "base": 450,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "Sterak's Gage",
      "description": "<stats>+400 Health<br>+25% Base Attack Damage </stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a rapidly decaying Shield for 30% of your maximum Health for 8 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +25% additional Base Attack Damage.",
      "plaintext": "Shields against large bursts of damage",
      "from": [
        "3052",
        "1036"
      ],
      "tags": [
        "Health",
        "Damage"
      ],
      "stats": {
        "FlatHPPoolMod": 400
      },
      "effect": {
        "Effect1Amount": "400",
        "Effect2Amount": "0.25",
        "Effect3Amount": "5",
        "Effect4Amount": "0.3",
        "Effect5Amount": "0",
        "Effect6Amount": "8",
        "Effect7Amount": "60",
        "Effect8Amount": "3",
        "Effect9Amount": "1800"
      },
      "depth": 3,
      "id": "3053",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3053.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 192,
        "y": 432
      },
      "price": {
        "base": 1050,
        "total": 2600,
        "sell": 1820
      },
      "purchasable": true
    },
    {
      "name": "Ohmwrecker",
      "description": "<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.",
      "plaintext": "Temporarily disables enemy turrets",
      "from": [
        "2053",
        "3067"
      ],
      "tags": [
        "Active",
        "Armor",
        "CooldownReduction",
        "Health",
        "HealthRegen",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatArmorMod": 50
      },
      "effect": {
        "Effect1Amount": "3",
        "Effect2Amount": "120",
        "Effect3Amount": "8",
        "Effect4Amount": "0.2",
        "Effect5Amount": "1"
      },
      "depth": 4,
      "id": "3056",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3056.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 240,
        "y": 432
      },
      "price": {
        "base": 650,
        "total": 2650,
        "sell": 1855
      },
      "purchasable": true
    },
    {
      "name": "Sheen",
      "description": "<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
      "plaintext": "Grants a bonus to next attack after spell cast",
      "from": [
        "1027"
      ],
      "into": [
        "3078",
        "3100",
        "3025"
      ],
      "tags": [
        "Mana",
        "CooldownReduction"
      ],
      "stats": {
        "FlatMPPoolMod": 250
      },
      "effect": {
        "Effect1Amount": "1.5",
        "Effect2Amount": "1"
      },
      "depth": 2,
      "id": "3057",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3057.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 288,
        "y": 432
      },
      "price": {
        "base": 700,
        "total": 1050,
        "sell": 735
      },
      "purchasable": true
    },
    {
      "name": "Banner of Command",
      "description": "<stats>+60 Armor<br>+30 Magic Resist<br><mana>+400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Promote:</active> Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown).",
      "plaintext": "Promotes a siege minion to a more powerful unit",
      "from": [
        "3105",
        "3024"
      ],
      "tags": [
        "SpellBlock",
        "Armor",
        "Mana",
        "Active",
        "CooldownReduction"
      ],
      "stats": {
        "FlatSpellBlockMod": 30,
        "FlatMPPoolMod": 400,
        "FlatArmorMod": 60
      },
      "effect": {
        "Effect1Amount": "0.5",
        "Effect2Amount": "15",
        "Effect3Amount": "0.75"
      },
      "depth": 3,
      "id": "3060",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3060.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 336,
        "y": 432
      },
      "price": {
        "base": 100,
        "total": 2200,
        "sell": 1540
      },
      "purchasable": true
    },
    {
      "name": "Spirit Visage",
      "description": "<stats>+500 Health<br>+55 Magic Resist<br>+200% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 25%.",
      "plaintext": "Increases Health and healing effects",
      "from": [
        "3211",
        "3067"
      ],
      "tags": [
        "CooldownReduction",
        "Health",
        "HealthRegen",
        "SpellBlock"
      ],
      "stats": {
        "FlatHPPoolMod": 500,
        "FlatSpellBlockMod": 55
      },
      "effect": {
        "Effect1Amount": "-0.1",
        "Effect2Amount": "0.25",
        "Effect3Amount": "0.5",
        "Effect4Amount": "0.015"
      },
      "depth": 3,
      "id": "3065",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3065.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 384,
        "y": 432
      },
      "price": {
        "base": 800,
        "total": 2800,
        "sell": 1960
      },
      "purchasable": true
    },
    {
      "name": "Kindlegem",
      "description": "<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      "plaintext": "Increases Health and Cooldown Reduction",
      "from": [
        "1028"
      ],
      "into": [
        "3187",
        "3401",
        "3065",
        "3071",
        "3056",
        "3083",
        "3152"
      ],
      "tags": [
        "CooldownReduction",
        "Health"
      ],
      "stats": {
        "FlatHPPoolMod": 200
      },
      "effect": {
        "Effect1Amount": "-0.1"
      },
      "depth": 2,
      "id": "3067",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3067.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item0.png",
        "x": 432,
        "y": 432
      },
      "price": {
        "base": 400,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Sunfire Cape",
      "description": "<stats>+500 Health<br>+50 Armor  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
      "plaintext": "Constantly deals damage to nearby enemies",
      "from": [
        "1031",
        "3751"
      ],
      "tags": [
        "Armor",
        "Health"
      ],
      "stats": {
        "FlatHPPoolMod": 500,
        "FlatArmorMod": 50
      },
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "1",
        "Effect3Amount": "0.5"
      },
      "depth": 3,
      "id": "3068",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3068.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 0
      },
      "price": {
        "base": 1000,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Talisman of Ascension",
      "description": "<stats>+45 Armor<br>+150% Base Health Regen <br><mana>+75% Base Mana Regen <br></mana>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><active>UNIQUE Active:</active> Grants nearby allies +40% Movement Speed for 3 seconds (60 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>",
      "plaintext": "Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.",
      "from": [
        "3096",
        "2053"
      ],
      "tags": [
        "HealthRegen",
        "Armor",
        "ManaRegen",
        "Active",
        "GoldPer",
        "CooldownReduction",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatArmorMod": 45
      },
      "effect": {
        "Effect1Amount": "-0.1",
        "Effect2Amount": "2",
        "Effect3Amount": "6",
        "Effect4Amount": "10",
        "Effect5Amount": "0.4",
        "Effect6Amount": "3",
        "Effect7Amount": "60",
        "Effect8Amount": "20",
        "Effect9Amount": "0.2"
      },
      "depth": 4,
      "id": "3069",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3069.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 0
      },
      "price": {
        "base": 350,
        "total": 2400,
        "sell": 960
      },
      "purchasable": true
    },
    {
      "name": "Tear of the Goddess",
      "description": "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
      "plaintext": "Increases maximum Mana as Mana is spent",
      "from": [
        "1027",
        "1004"
      ],
      "into": [
        "3003",
        "3004"
      ],
      "tags": [
        "Mana",
        "ManaRegen"
      ],
      "stats": {
        "FlatMPPoolMod": 250
      },
      "effect": {
        "Effect1Amount": "4",
        "Effect2Amount": "8",
        "Effect3Amount": "1",
        "Effect4Amount": "8",
        "Effect5Amount": "750",
        "Effect6Amount": "2",
        "Effect7Amount": "0.15"
      },
      "depth": 2,
      "id": "3070",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3070.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 0
      },
      "price": {
        "base": 275,
        "total": 750,
        "sell": 525
      },
      "purchasable": true
    },
    {
      "name": "The Black Cleaver",
      "description": "<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 5% for 6 seconds (stacks up to 6 times, up to 30%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
      "plaintext": "Dealing physical damage to enemy champions reduces their Armor",
      "from": [
        "3044",
        "3067"
      ],
      "tags": [
        "ArmorPenetration",
        "CooldownReduction",
        "Damage",
        "Health",
        "NonbootsMovement",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 40,
        "FlatHPPoolMod": 400
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "0.05",
        "Effect3Amount": "6",
        "Effect4Amount": "6",
        "Effect5Amount": "0.3",
        "Effect6Amount": "20",
        "Effect7Amount": "2",
        "Effect8Amount": "60",
        "Effect9Amount": "2"
      },
      "depth": 3,
      "id": "3071",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3071.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 0
      },
      "price": {
        "base": 950,
        "total": 3000,
        "sell": 2100
      },
      "purchasable": true
    },
    {
      "name": "The Bloodthirster",
      "description": "<stats>+75 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
      "plaintext": "Grants Attack Damage, Life Steal and Life Steal now overheals",
      "from": [
        "1038",
        "1036",
        "1053"
      ],
      "tags": [
        "Damage",
        "LifeSteal"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 75
      },
      "effect": {
        "Effect1Amount": "50",
        "Effect2Amount": "350",
        "Effect3Amount": "25",
        "Effect4Amount": "0.2"
      },
      "depth": 3,
      "id": "3072",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3072.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 0
      },
      "price": {
        "base": 1150,
        "total": 3700,
        "sell": 2590
      },
      "purchasable": true
    },
    {
      "name": "Tear of the Goddess (Quick Charge)",
      "description": "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
      "plaintext": "Increases maximum Mana as Mana is spent",
      "from": [
        "1027",
        "1004"
      ],
      "into": [
        "3007",
        "3008"
      ],
      "tags": [
        "Mana",
        "ManaRegen"
      ],
      "stats": {
        "FlatMPPoolMod": 250
      },
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "8",
        "Effect3Amount": "1",
        "Effect4Amount": "8",
        "Effect5Amount": "750",
        "Effect6Amount": "2",
        "Effect7Amount": "0.15"
      },
      "depth": 2,
      "id": "3073",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3073.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 0
      },
      "price": {
        "base": 275,
        "total": 750,
        "sell": 525
      },
      "purchasable": true
    },
    {
      "name": "Ravenous Hydra",
      "description": "<stats>+75 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
      "plaintext": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
      "from": [
        "3077",
        "1053",
        "1037"
      ],
      "tags": [
        "Active",
        "Damage",
        "HealthRegen",
        "LifeSteal",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 75,
        "PercentLifeStealMod": 0.12
      },
      "effect": {
        "Effect1Amount": "0.2",
        "Effect2Amount": "0.6",
        "Effect3Amount": "0.6",
        "Effect4Amount": "1",
        "Effect5Amount": "10"
      },
      "depth": 3,
      "id": "3074",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3074.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 0
      },
      "price": {
        "base": 525,
        "total": 3500,
        "sell": 2450
      },
      "purchasable": true
    },
    {
      "name": "Thornmail",
      "description": "<stats>+100 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage.<br><br><rules>(Bonus Armor is Armor from items, buffs, runes and masteries.)</rules><br><rules>(Reflect damage is calculated based on damage taken before being reduced by Armor.)</rules>",
      "plaintext": "Returns damage taken from basic attacks as magic damage",
      "from": [
        "1029",
        "1031"
      ],
      "tags": [
        "Armor"
      ],
      "stats": {
        "FlatArmorMod": 100
      },
      "effect": {
        "Effect1Amount": "0.15",
        "Effect2Amount": "0.25"
      },
      "depth": 3,
      "id": "3075",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3075.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 0
      },
      "price": {
        "base": 1250,
        "total": 2350,
        "sell": 1645
      },
      "purchasable": true
    },
    {
      "name": "Tiamat",
      "description": "<stats>+20 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).",
      "plaintext": "Melee attacks hit nearby enemies",
      "from": [
        "1036",
        "1006",
        "1036"
      ],
      "into": [
        "3074",
        "3748"
      ],
      "tags": [
        "HealthRegen",
        "Damage",
        "Active"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 20
      },
      "effect": {
        "Effect1Amount": "0.2",
        "Effect2Amount": "0.6",
        "Effect3Amount": "0.6",
        "Effect4Amount": "1",
        "Effect5Amount": "10"
      },
      "depth": 2,
      "id": "3077",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3077.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 0
      },
      "price": {
        "base": 350,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "Trinity Force",
      "description": "<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
      "plaintext": "Tons of Damage",
      "from": [
        "3101",
        "3057",
        "3044"
      ],
      "tags": [
        "Health",
        "Damage",
        "AttackSpeed",
        "Mana",
        "CooldownReduction",
        "OnHit",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "PercentMovementSpeedMod": 0.05,
        "FlatHPPoolMod": 250,
        "FlatMPPoolMod": 250,
        "PercentAttackSpeedMod": 0.4
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "60",
        "Effect3Amount": "2",
        "Effect4Amount": "2",
        "Effect5Amount": "1.5"
      },
      "depth": 3,
      "id": "3078",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3078.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 0
      },
      "price": {
        "base": 333,
        "total": 3733,
        "sell": 2613
      },
      "purchasable": true
    },
    {
      "name": "Warden's Mail",
      "description": "<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.",
      "plaintext": "Slows Attack Speed of enemy champions when receiving basic attacks",
      "from": [
        "1029",
        "1029"
      ],
      "into": [
        "3110",
        "3143"
      ],
      "tags": [
        "Armor",
        "Slow"
      ],
      "stats": {
        "FlatArmorMod": 40
      },
      "effect": {
        "Effect1Amount": "-0.15",
        "Effect2Amount": "1"
      },
      "depth": 2,
      "id": "3082",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3082.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 48
      },
      "price": {
        "base": 400,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Warmog's Armor",
      "description": "<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 3000 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 15% of maximum Health every 5 seconds if damage hasn't been taken within 8 seconds. ",
      "plaintext": "Grants massive Health and Health Regen",
      "from": [
        "1011",
        "3067",
        "3801"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "CooldownReduction"
      ],
      "stats": {
        "FlatHPPoolMod": 800
      },
      "effect": {
        "Effect1Amount": "0.015",
        "Effect2Amount": "5",
        "Effect3Amount": "0.15",
        "Effect4Amount": "3000",
        "Effect5Amount": "8",
        "Effect6Amount": "-0.1"
      },
      "depth": 3,
      "id": "3083",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3083.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 48
      },
      "price": {
        "base": 400,
        "total": 2850,
        "sell": 1995
      },
      "purchasable": true
    },
    {
      "name": "Overlord's Bloodmail",
      "description": "<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.",
      "plaintext": "Restores Health on kill or assist",
      "from": [
        "1011",
        "3801"
      ],
      "tags": [
        "Health",
        "HealthRegen"
      ],
      "stats": {
        "FlatHPPoolMod": 800
      },
      "effect": {
        "Effect1Amount": "300",
        "Effect2Amount": "5"
      },
      "depth": 3,
      "id": "3084",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3084.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 48
      },
      "price": {
        "base": 900,
        "total": 2550,
        "sell": 1785
      },
      "purchasable": true
    },
    {
      "name": "Runaan's Hurricane",
      "description": "<stats>+40% Attack Speed<br>+30% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (25% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.<br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
      "plaintext": "Ranged attacks fire two bolts at nearby enemies",
      "from": [
        "1043",
        "3086"
      ],
      "tags": [
        "CriticalStrike",
        "AttackSpeed",
        "OnHit",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatCritChanceMod": 0.3,
        "PercentMovementSpeedMod": 0.07,
        "PercentAttackSpeedMod": 0.4
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "25",
        "Effect3Amount": "2",
        "Effect4Amount": "15",
        "Effect5Amount": "25",
        "Effect6Amount": "1"
      },
      "depth": 3,
      "id": "3085",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3085.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 48
      },
      "price": {
        "base": 300,
        "total": 2600,
        "sell": 1820
      },
      "purchasable": true
    },
    {
      "name": "Zeal",
      "description": "<stats>+15% Attack Speed<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
      "plaintext": "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
      "from": [
        "1051",
        "1042"
      ],
      "into": [
        "3094",
        "3085",
        "3046",
        "3087"
      ],
      "tags": [
        "AttackSpeed",
        "CriticalStrike",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatCritChanceMod": 0.2,
        "PercentAttackSpeedMod": 0.15
      },
      "effect": {
        "Effect1Amount": "0.05"
      },
      "depth": 2,
      "id": "3086",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3086.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 48
      },
      "price": {
        "base": 600,
        "total": 1300,
        "sell": 910
      },
      "purchasable": true
    },
    {
      "name": "Statikk Shiv",
      "description": "<stats>+35% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Shiv Lightning:</unique> Your Energized attacks deal 50~120 bonus magic damage (based on level) to up to 5 targets on hit (deals +120% bonus damage to minions and can critically strike).",
      "plaintext": "Movement builds charges that release chain lightning on basic attack",
      "from": [
        "3086",
        "2015"
      ],
      "tags": [
        "AttackSpeed",
        "CriticalStrike",
        "NonbootsMovement",
        "OnHit"
      ],
      "stats": {
        "FlatCritChanceMod": 0.3,
        "PercentMovementSpeedMod": 0.05,
        "PercentAttackSpeedMod": 0.35
      },
      "effect": {
        "Effect1Amount": "100",
        "Effect2Amount": "80",
        "Effect3Amount": "5",
        "Effect4Amount": "750",
        "Effect5Amount": "50",
        "Effect6Amount": "120",
        "Effect7Amount": "5",
        "Effect8Amount": "1.2"
      },
      "depth": 3,
      "id": "3087",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3087.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 48
      },
      "price": {
        "base": 550,
        "total": 2600,
        "sell": 1820
      },
      "purchasable": true
    },
    {
      "name": "Rabadon's Deathcap",
      "description": "<stats>+120 Ability Power  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 35%.",
      "plaintext": "Massively increases Ability Power",
      "from": [
        "1026",
        "1058",
        "1052"
      ],
      "tags": [
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 120
      },
      "effect": {
        "Effect1Amount": "35"
      },
      "depth": 2,
      "id": "3089",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3089.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 48
      },
      "price": {
        "base": 1265,
        "total": 3800,
        "sell": 2660
      },
      "purchasable": true
    },
    {
      "name": "Wooglet's Witchcap",
      "description": "<stats>+100 Ability Power<br>+45 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
      "plaintext": "Massively increases Ability Power and can be activated to enter stasis",
      "from": [
        "3191",
        "1058"
      ],
      "tags": [
        "Active",
        "Armor",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 100,
        "FlatArmorMod": 45
      },
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "2.5",
        "Effect3Amount": "120"
      },
      "depth": 3,
      "id": "3090",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3090.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 48
      },
      "price": {
        "base": 1050,
        "total": 3500,
        "sell": 2450
      },
      "purchasable": true
    },
    {
      "name": "Wit's End",
      "description": "<stats>+40% Attack Speed<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 40 bonus magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
      "plaintext": "Deals bonus magic damage on basic attacks",
      "from": [
        "1043",
        "1057",
        "1042"
      ],
      "tags": [
        "AttackSpeed",
        "OnHit",
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 40,
        "PercentAttackSpeedMod": 0.4
      },
      "effect": {
        "Effect1Amount": "40",
        "Effect2Amount": "5",
        "Effect3Amount": "5"
      },
      "depth": 3,
      "id": "3091",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3091.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 48
      },
      "price": {
        "base": 480,
        "total": 2500,
        "sell": 1750
      },
      "purchasable": true
    },
    {
      "name": "Frost Queen's Claim",
      "description": "<stats>+50 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active:</active> Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and reduce their Movement Speed by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Sends out seeking wraiths that track hidden enemies and slow them",
      "from": [
        "3098",
        "3108"
      ],
      "tags": [
        "Active",
        "CooldownReduction",
        "GoldPer",
        "ManaRegen",
        "Slow",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 50
      },
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "15",
        "Effect3Amount": "12",
        "Effect4Amount": "3",
        "Effect5Amount": "30",
        "Effect6Amount": "2",
        "Effect7Amount": "1",
        "Effect8Amount": "2",
        "Effect9Amount": "2",
        "Effect10Amount": "-0.4",
        "Effect11Amount": "5",
        "Effect12Amount": "6",
        "Effect13Amount": "50",
        "Effect14Amount": "90",
        "Effect15Amount": "0.25",
        "Effect16Amount": "2"
      },
      "depth": 3,
      "id": "3092",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3092.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 48
      },
      "price": {
        "base": 450,
        "total": 2200,
        "sell": 880
      },
      "purchasable": true
    },
    {
      "name": "Rapid Firecannon",
      "description": "<stats>+30% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Firecannon:</unique> Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50~160 bonus magic damage (based on level) on hit.<br><br>Energized attacks function on structures.",
      "plaintext": "Movement builds charges that release a sieging fire attack on release",
      "from": [
        "3086",
        "2015"
      ],
      "tags": [
        "AttackSpeed",
        "CriticalStrike",
        "NonbootsMovement",
        "OnHit"
      ],
      "stats": {
        "FlatCritChanceMod": 0.3,
        "PercentMovementSpeedMod": 0.05,
        "PercentAttackSpeedMod": 0.3
      },
      "effect": {
        "Effect1Amount": "0.35",
        "Effect2Amount": "150",
        "Effect3Amount": "50",
        "Effect4Amount": "160",
        "Effect5Amount": "5"
      },
      "depth": 3,
      "id": "3094",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3094.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 96
      },
      "price": {
        "base": 550,
        "total": 2600,
        "sell": 1820
      },
      "purchasable": true
    },
    {
      "name": "Nomad's Medallion",
      "description": "<stats>+25% Base Health Regen <br><mana>+75% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>",
      "plaintext": "Grants gold when nearby enemy minions die, Health Regen and Mana Regen",
      "from": [
        "1004",
        "3301"
      ],
      "into": [
        "2302",
        "3069"
      ],
      "tags": [
        "HealthRegen",
        "ManaRegen",
        "Active",
        "GoldPer",
        "CooldownReduction"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "6",
        "Effect3Amount": "10",
        "Effect4Amount": "10"
      },
      "depth": 2,
      "id": "3096",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3096.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 96
      },
      "price": {
        "base": 375,
        "total": 850,
        "sell": 340
      },
      "purchasable": true
    },
    {
      "name": "Targon's Brace",
      "description": "<stats>+175 Health<br>+50% Base Health Regen <br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold.<br><br>These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Periodically kill enemy minions to heal and grant gold to a nearby ally",
      "from": [
        "3302",
        "1006"
      ],
      "into": [
        "2303",
        "3401"
      ],
      "tags": [
        "Aura",
        "GoldPer",
        "Health",
        "HealthRegen"
      ],
      "stats": {
        "FlatHPPoolMod": 175
      },
      "effect": {
        "Effect1Amount": "200",
        "Effect2Amount": "40",
        "Effect3Amount": "30",
        "Effect4Amount": "3",
        "Effect5Amount": "2",
        "Effect6Amount": "10"
      },
      "depth": 2,
      "id": "3097",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3097.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 96
      },
      "price": {
        "base": 350,
        "total": 850,
        "sell": 340
      },
      "purchasable": true
    },
    {
      "name": "Frostfang",
      "description": "<stats>+15 Ability Power<br>+2 Gold per 10 seconds<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Grants gold when you damage an enemy with a Spell or Attack",
      "from": [
        "3303",
        "1004"
      ],
      "into": [
        "2301",
        "3092"
      ],
      "tags": [
        "Active",
        "GoldPer",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 15
      },
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "15",
        "Effect3Amount": "12",
        "Effect4Amount": "3",
        "Effect5Amount": "30",
        "Effect6Amount": "2"
      },
      "depth": 2,
      "id": "3098",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3098.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 96
      },
      "price": {
        "base": 375,
        "total": 850,
        "sell": 340
      },
      "purchasable": true
    },
    {
      "name": "Lich Bane",
      "description": "<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
      "plaintext": "Grants a bonus to next attack after spell cast",
      "from": [
        "3057",
        "3113",
        "1026"
      ],
      "tags": [
        "SpellDamage",
        "Mana",
        "CooldownReduction",
        "NonbootsMovement"
      ],
      "stats": {
        "PercentMovementSpeedMod": 0.07,
        "FlatMPPoolMod": 250,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.75",
        "Effect2Amount": "0.5",
        "Effect3Amount": "1.5"
      },
      "depth": 3,
      "id": "3100",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3100.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 96
      },
      "price": {
        "base": 450,
        "total": 3200,
        "sell": 2240
      },
      "purchasable": true
    },
    {
      "name": "Stinger",
      "description": "<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      "plaintext": "Increased Attack Speed and Cooldown Reduction",
      "from": [
        "1042",
        "1042"
      ],
      "into": [
        "3115",
        "3137",
        "3078"
      ],
      "tags": [
        "AttackSpeed",
        "CooldownReduction"
      ],
      "stats": {
        "PercentAttackSpeedMod": 0.35
      },
      "effect": {
        "Effect1Amount": "10"
      },
      "depth": 2,
      "id": "3101",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3101.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 96
      },
      "price": {
        "base": 500,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Banshee's Veil",
      "description": "<stats>+300 Health<br>+70 Magic Resist<br>+100% Base Health Regeneration </stats><br><br><unique>UNIQUE Passive:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
      "plaintext": "Periodically blocks enemy abilities",
      "from": [
        "3211",
        "1057"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "SpellBlock"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatSpellBlockMod": 70
      },
      "effect": {
        "Effect1Amount": "40",
        "Effect2Amount": "45",
        "Effect3Amount": "10"
      },
      "depth": 3,
      "id": "3102",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3102.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 96
      },
      "price": {
        "base": 530,
        "total": 2450,
        "sell": 1715
      },
      "purchasable": true
    },
    {
      "name": "Lord Van Damm's Pillager",
      "description": "<stats>+300 Health<br>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Ashes to Ashes:</unique> Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.",
      "plaintext": "Reduces Armor of nearby enemies",
      "from": [
        "3133",
        "3052"
      ],
      "tags": [
        "Health",
        "Damage",
        "Aura",
        "CooldownReduction",
        "OnHit",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 50,
        "FlatHPPoolMod": 300
      },
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "1",
        "Effect3Amount": "0.5"
      },
      "depth": 3,
      "id": "3104",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3104.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 96
      },
      "price": {
        "base": 700,
        "total": 3000,
        "sell": 2100
      },
      "purchasable": true
    },
    {
      "name": "Aegis of the Legion",
      "description": "<stats>+30 Armor<br>+30 Magic Resist</stats>",
      "plaintext": "Grants Armor and Magic Resistance",
      "from": [
        "1033",
        "1029"
      ],
      "into": [
        "3190",
        "3060"
      ],
      "tags": [
        "SpellBlock",
        "Armor"
      ],
      "stats": {
        "FlatSpellBlockMod": 30,
        "FlatArmorMod": 30
      },
      "depth": 2,
      "id": "3105",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3105.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 96
      },
      "price": {
        "base": 350,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Redemption",
      "description": "<stats>+300 Health<br>+75% Base Health Regen <br>+125% Base Mana Regen <br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 40 (+25 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown).<br><br>Can be used while dead.<br><br><rules>(Half effect if the target has been affected by another Redemption recently.)</rules>",
      "plaintext": "Further improves defenses for nearby allies",
      "from": [
        "3114",
        "3801"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "ManaRegen",
        "CooldownReduction"
      ],
      "stats": {
        "FlatHPPoolMod": 300
      },
      "effect": {
        "Effect1Amount": "0.1",
        "Effect2Amount": "40",
        "Effect3Amount": "25",
        "Effect4Amount": "0.1",
        "Effect5Amount": "250",
        "Effect6Amount": "120",
        "Effect7Amount": "550",
        "Effect8Amount": "5500",
        "Effect9Amount": "0.5",
        "Effect10Amount": "8"
      },
      "depth": 3,
      "id": "3107",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3107.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 96
      },
      "price": {
        "base": 650,
        "total": 2100,
        "sell": 1470
      },
      "purchasable": true
    },
    {
      "name": "Fiendish Codex",
      "description": "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      "plaintext": "Increases Ability Power and Cooldown Reduction",
      "from": [
        "1052"
      ],
      "into": [
        "3174",
        "3092",
        "3115",
        "3165",
        "3001",
        "3157"
      ],
      "tags": [
        "CooldownReduction",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 30
      },
      "effect": {
        "Effect1Amount": "-0.1"
      },
      "depth": 2,
      "id": "3108",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3108.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 144
      },
      "price": {
        "base": 465,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Knight's Vow",
      "description": "<stats>+400 Health<br>+100% Base Health Regen <br>+40 Armor</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>",
      "plaintext": "Partner with an ally to protect each other",
      "from": [
        "3801",
        "1031"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Armor",
        "Aura",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatHPPoolMod": 400,
        "FlatArmorMod": 40
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "0.15",
        "Effect3Amount": "0.12",
        "Effect4Amount": "0.12",
        "Effect5Amount": "90",
        "Effect6Amount": "0.5",
        "Effect7Amount": "1000"
      },
      "depth": 3,
      "id": "3109",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3109.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 144
      },
      "price": {
        "base": 850,
        "total": 2300,
        "sell": 1610
      },
      "purchasable": true
    },
    {
      "name": "Frozen Heart",
      "description": "<stats>+90 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.",
      "plaintext": "Massively increases Armor and slows enemy basic attacks",
      "from": [
        "3082",
        "3024"
      ],
      "tags": [
        "Armor",
        "Aura",
        "CooldownReduction",
        "Mana"
      ],
      "stats": {
        "FlatMPPoolMod": 400,
        "FlatArmorMod": 90
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "-0.15"
      },
      "depth": 3,
      "id": "3110",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3110.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 144
      },
      "price": {
        "base": 700,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Mercury's Treads",
      "description": "<stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
      "plaintext": "Increases Movement Speed and reduces duration of disabling effects",
      "from": [
        "1001",
        "1033"
      ],
      "tags": [
        "Boots",
        "SpellBlock",
        "Tenacity"
      ],
      "stats": {
        "FlatMovementSpeedMod": 45,
        "FlatSpellBlockMod": 25
      },
      "depth": 2,
      "id": "3111",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3111.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 144
      },
      "price": {
        "base": 350,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Guardian's Orb",
      "description": "<stats>+150 Health<br>+30 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      "plaintext": "Good starting item for mages",
      "tags": [
        "Health",
        "SpellDamage",
        "Mana",
        "Lane"
      ],
      "stats": {
        "FlatHPPoolMod": 150,
        "FlatMagicDamageMod": 30
      },
      "id": "3112",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3112.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 144
      },
      "price": {
        "base": 950,
        "total": 950,
        "sell": 380
      },
      "purchasable": true
    },
    {
      "name": "Aether Wisp",
      "description": "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
      "plaintext": "Increases Ability Power and Movement Speed",
      "from": [
        "1052"
      ],
      "into": [
        "1402",
        "1410",
        "1414",
        "3100",
        "3285",
        "3504",
        "3673"
      ],
      "tags": [
        "NonbootsMovement",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 30
      },
      "effect": {
        "Effect1Amount": "0.05"
      },
      "depth": 2,
      "id": "3113",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3113.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 144
      },
      "price": {
        "base": 415,
        "total": 850,
        "sell": 595
      },
      "purchasable": true
    },
    {
      "name": "Forbidden Idol",
      "description": "<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +8% Heal and Shield Power",
      "plaintext": "Increases Mana Regeneration and Cooldown Reduction",
      "from": [
        "1004",
        "1004"
      ],
      "into": [
        "3107",
        "3222",
        "3504"
      ],
      "tags": [
        "CooldownReduction",
        "ManaRegen"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "-0.1",
        "Effect2Amount": "0.08"
      },
      "depth": 2,
      "id": "3114",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3114.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 144
      },
      "price": {
        "base": 550,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Nashor's Tooth",
      "description": "<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>",
      "plaintext": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
      "from": [
        "3101",
        "3108"
      ],
      "tags": [
        "AttackSpeed",
        "CooldownReduction",
        "OnHit",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 80,
        "PercentAttackSpeedMod": 0.5
      },
      "depth": 3,
      "id": "3115",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3115.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 144
      },
      "price": {
        "base": 1000,
        "total": 3000,
        "sell": 2100
      },
      "purchasable": true
    },
    {
      "name": "Rylai's Crystal Scepter",
      "description": "<stats>+300 Health<br>+75 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
      "plaintext": "Abilities slow enemies",
      "from": [
        "1026",
        "1052",
        "1028"
      ],
      "tags": [
        "Health",
        "SpellDamage",
        "Slow"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMagicDamageMod": 75
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "-0.2",
        "Effect3Amount": "-0.2",
        "Effect4Amount": "1",
        "Effect5Amount": "1",
        "Effect6Amount": "1"
      },
      "depth": 2,
      "id": "3116",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3116.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 144
      },
      "price": {
        "base": 915,
        "total": 2600,
        "sell": 1820
      },
      "purchasable": true
    },
    {
      "name": "Boots of Mobility",
      "description": "<unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
      "plaintext": "Greatly enhances Movement Speed when out of combat",
      "from": [
        "1001"
      ],
      "tags": [
        "Boots"
      ],
      "stats": {
        "FlatMovementSpeedMod": 115
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "0",
        "Effect5Amount": "0",
        "Effect6Amount": "0",
        "Effect7Amount": "0",
        "Effect8Amount": "25"
      },
      "depth": 2,
      "id": "3117",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3117.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 144
      },
      "price": {
        "base": 600,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Wicked Hatchet",
      "description": "<stats>+20 Attack Damage<br>+10% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
      "plaintext": "Critical Strikes cause your target to bleed",
      "from": [
        "1051",
        "1036"
      ],
      "into": [
        "3104",
        "3185"
      ],
      "tags": [
        "CriticalStrike",
        "Damage",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 20,
        "FlatCritChanceMod": 0.1
      },
      "effect": {
        "Effect1Amount": "0.6",
        "Effect2Amount": "3"
      },
      "depth": 2,
      "id": "3122",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3122.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 192
      },
      "price": {
        "base": 450,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "Executioner's Calling",
      "description": "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.",
      "plaintext": "Overcomes enemies with high health gain",
      "from": [
        "1036"
      ],
      "into": [
        "3033"
      ],
      "tags": [
        "Damage"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15
      },
      "effect": {
        "Effect1Amount": "3"
      },
      "depth": 2,
      "id": "3123",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3123.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 192
      },
      "price": {
        "base": 450,
        "total": 800,
        "sell": 560
      },
      "purchasable": true
    },
    {
      "name": "Guinsoo's Rageblade",
      "description": "<stats>+35 Attack Damage<br>+50 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 15 magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed, +3 Attack Damage, and +4 Ability Power for 5 seconds (stacks up to 6 times). While you have 6 stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every other basic attack will trigger on hit effects an additional time.",
      "plaintext": "Increases Ability Power and Attack Damage",
      "from": [
        "1026",
        "1043",
        "1037"
      ],
      "tags": [
        "Damage",
        "AttackSpeed",
        "SpellDamage",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 35,
        "FlatMagicDamageMod": 50,
        "PercentAttackSpeedMod": 0.25
      },
      "effect": {
        "Effect1Amount": "0.08",
        "Effect2Amount": "4",
        "Effect3Amount": "3",
        "Effect4Amount": "5",
        "Effect5Amount": "6",
        "Effect6Amount": "0",
        "Effect7Amount": "0",
        "Effect8Amount": "15",
        "Effect9Amount": "1"
      },
      "depth": 3,
      "id": "3124",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3124.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 192
      },
      "price": {
        "base": 875,
        "total": 3600,
        "sell": 2520
      },
      "purchasable": true
    },
    {
      "name": "Caulfield's Warhammer",
      "description": "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
      "plaintext": "Attack Damage and Cooldown Reduction",
      "stacks": 0,
      "from": [
        "1036",
        "1036"
      ],
      "into": [
        "3142",
        "1400",
        "3104",
        "1408",
        "1412",
        "3812",
        "3156",
        "3508",
        "3671"
      ],
      "tags": [
        "Damage",
        "CooldownReduction"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25
      },
      "effect": {
        "Effect1Amount": "-0.1"
      },
      "depth": 2,
      "id": "3133",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3133.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 192
      },
      "price": {
        "base": 400,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Serrated Dirk",
      "description": "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.",
      "plaintext": "Increases Attack Damage and Lethality",
      "stacks": 0,
      "from": [
        "1036",
        "1036"
      ],
      "into": [
        "3142",
        "3814",
        "3147"
      ],
      "tags": [
        "Damage",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "10",
        "Effect3Amount": "20"
      },
      "depth": 2,
      "id": "3134",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3134.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 192
      },
      "price": {
        "base": 400,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Void Staff",
      "description": "<stats>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +35% <a href='TotalMagicPen'>Magic Penetration</a>.",
      "plaintext": "Increases magic damage",
      "from": [
        "1026",
        "1052"
      ],
      "tags": [
        "MagicPenetration",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.35"
      },
      "depth": 2,
      "id": "3135",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3135.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 192
      },
      "price": {
        "base": 1365,
        "total": 2650,
        "sell": 1855
      },
      "purchasable": true
    },
    {
      "name": "Haunting Guise",
      "description": "<stats>+25 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>",
      "plaintext": "Increases magic damage",
      "stacks": 0,
      "from": [
        "1028",
        "1052"
      ],
      "into": [
        "3151"
      ],
      "tags": [
        "Health",
        "MagicPenetration",
        "SpellDamage"
      ],
      "stats": {
        "FlatHPPoolMod": 200,
        "FlatMagicDamageMod": 25
      },
      "effect": {
        "Effect1Amount": "15"
      },
      "depth": 2,
      "id": "3136",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3136.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 192
      },
      "price": {
        "base": 665,
        "total": 1500,
        "sell": 1050
      },
      "purchasable": true
    },
    {
      "name": "Dervish Blade",
      "description": "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      "plaintext": "Activate to remove all debuffs and grant massive Movement Speed",
      "from": [
        "3140",
        "3101"
      ],
      "tags": [
        "Active",
        "AttackSpeed",
        "CooldownReduction",
        "NonbootsMovement",
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 45,
        "PercentAttackSpeedMod": 0.5
      },
      "effect": {
        "Effect1Amount": "0.5",
        "Effect2Amount": "1",
        "Effect3Amount": "90"
      },
      "depth": 3,
      "id": "3137",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3137.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 192
      },
      "price": {
        "base": 300,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "Mercurial Scimitar",
      "description": "<stats>+65 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
      "plaintext": "Activate to remove all crowd control debuffs and grant massive Movement Speed",
      "from": [
        "3140",
        "1037",
        "1053"
      ],
      "tags": [
        "SpellBlock",
        "Damage",
        "LifeSteal",
        "Active",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 65,
        "FlatSpellBlockMod": 35,
        "PercentLifeStealMod": 0.1
      },
      "effect": {
        "Effect1Amount": "0.5",
        "Effect2Amount": "1",
        "Effect3Amount": "90"
      },
      "depth": 3,
      "id": "3139",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3139.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 192
      },
      "price": {
        "base": 525,
        "total": 3600,
        "sell": 2520
      },
      "purchasable": true
    },
    {
      "name": "Quicksilver Sash",
      "description": "<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).",
      "plaintext": "Activate to remove all crowd control debuffs",
      "from": [
        "1033"
      ],
      "into": [
        "3139",
        "3137"
      ],
      "tags": [
        "Active",
        "SpellBlock"
      ],
      "stats": {
        "FlatSpellBlockMod": 30
      },
      "effect": {
        "Effect1Amount": "90"
      },
      "depth": 2,
      "id": "3140",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3140.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 192
      },
      "price": {
        "base": 850,
        "total": 1300,
        "sell": 910
      },
      "purchasable": true
    },
    {
      "name": "Youmuu's Ghostblade",
      "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
      "plaintext": "Activate to greatly increase Movement Speed",
      "from": [
        "3133",
        "3134"
      ],
      "tags": [
        "Damage",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "45",
        "Effect2Amount": "15",
        "Effect3Amount": "0.2",
        "Effect4Amount": "0",
        "Effect5Amount": "6",
        "Effect6Amount": "20"
      },
      "depth": 3,
      "id": "3142",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3142.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 240
      },
      "price": {
        "base": 700,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Randuin's Omen",
      "description": "<stats>+500 Health<br>+60 Armor<br>-10% Damage taken from Critical Strikes</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% (1 second duration).<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 35% for 4 seconds (60 second cooldown).",
      "plaintext": "Greatly increases defenses, activate to slow nearby enemies",
      "from": [
        "3082",
        "1011"
      ],
      "tags": [
        "Active",
        "Armor",
        "Health",
        "Slow"
      ],
      "stats": {
        "FlatHPPoolMod": 500,
        "FlatArmorMod": 60
      },
      "effect": {
        "Effect1Amount": "4",
        "Effect2Amount": "0.1",
        "Effect3Amount": "-0.35",
        "Effect4Amount": "1"
      },
      "depth": 3,
      "id": "3143",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3143.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 240
      },
      "price": {
        "base": 900,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Bilgewater Cutlass",
      "description": "<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
      "plaintext": "Activate to deal magic damage and slow target champion",
      "from": [
        "1053",
        "1036"
      ],
      "into": [
        "3146",
        "3153"
      ],
      "tags": [
        "Active",
        "Damage",
        "LifeSteal",
        "Slow"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 25,
        "PercentLifeStealMod": 0.1
      },
      "effect": {
        "Effect1Amount": "-0.25",
        "Effect2Amount": "2",
        "Effect3Amount": "90",
        "Effect4Amount": "100"
      },
      "depth": 3,
      "id": "3144",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3144.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 240
      },
      "price": {
        "base": 250,
        "total": 1500,
        "sell": 1050
      },
      "purchasable": true
    },
    {
      "name": "Hextech Revolver",
      "description": "<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <scaleLevel>50 - 125</scaleLevel> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>",
      "plaintext": "Increases Ability Power. Deal bonus magic damage on attack periodically.",
      "from": [
        "1052",
        "1052"
      ],
      "into": [
        "3146",
        "3152",
        "3030"
      ],
      "tags": [
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 40
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "50",
        "Effect3Amount": "0",
        "Effect4Amount": "125",
        "Effect5Amount": "40"
      },
      "depth": 2,
      "id": "3145",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3145.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 240
      },
      "price": {
        "base": 180,
        "total": 1050,
        "sell": 735
      },
      "purchasable": true
    },
    {
      "name": "Hextech Gunblade",
      "description": "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 250</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).",
      "plaintext": "Increases Attack Damage and Ability Power, activate to slow a target",
      "from": [
        "3144",
        "3145"
      ],
      "tags": [
        "Active",
        "Damage",
        "LifeSteal",
        "Slow",
        "SpellDamage",
        "SpellVamp"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 40,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "0.15",
        "Effect2Amount": "40",
        "Effect3Amount": "175",
        "Effect4Amount": "250"
      },
      "depth": 4,
      "id": "3146",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3146.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 240
      },
      "price": {
        "base": 850,
        "total": 3400,
        "sell": 2380
      },
      "purchasable": true
    },
    {
      "name": "Duskblade of Draktharr",
      "description": "<stats>+65 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.<br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next Basic Attack against an enemy champion will deal 75 (+200% Lethality) true damage on-hit (lasts for 4 seconds after being seen by an enemy champion).<br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, causes a blackout for 8 seconds, revealing invisible traps and revealing / disabling wards (90 second cooldown).",
      "plaintext": "Deals additional true damage on-hit and provides true sight periodically",
      "from": [
        "3134",
        "1038"
      ],
      "tags": [
        "Damage",
        "OnHit",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 65
      },
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "20",
        "Effect3Amount": "0",
        "Effect4Amount": "90",
        "Effect5Amount": "75",
        "Effect6Amount": "2"
      },
      "depth": 3,
      "id": "3147",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3147.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 240
      },
      "price": {
        "base": 850,
        "total": 3250,
        "sell": 2275
      },
      "purchasable": true
    },
    {
      "name": "Liandry's Torment",
      "description": "<stats>+80 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 2% of their current Health per second. Burn damage is doubled against <a href='MovementImpaired'>movement-impaired</a> units.",
      "plaintext": "Spell damage burns enemies for a portion of their Health",
      "stacks": 0,
      "from": [
        "3136",
        "1026"
      ],
      "tags": [
        "Health",
        "MagicPenetration",
        "SpellDamage"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMagicDamageMod": 80
      },
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "0.02",
        "Effect3Amount": "3",
        "Effect4Amount": "100",
        "Effect5Amount": "2"
      },
      "depth": 3,
      "id": "3151",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3151.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 240
      },
      "price": {
        "base": 750,
        "total": 3100,
        "sell": 2170
      },
      "purchasable": true
    },
    {
      "name": "Hextech Protobelt-01",
      "description": "<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <scaleLevel>75 - 150</scaleLevel> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>",
      "plaintext": "Activate to dash forward and unleash a fiery explosion",
      "from": [
        "3145",
        "3067"
      ],
      "tags": [
        "Health",
        "SpellDamage",
        "Active",
        "CooldownReduction"
      ],
      "stats": {
        "FlatHPPoolMod": 300,
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "0.12",
        "Effect2Amount": "0.04",
        "Effect3Amount": "40",
        "Effect4Amount": "75",
        "Effect5Amount": "150",
        "Effect6Amount": "0.1",
        "Effect7Amount": "0.25",
        "Effect8Amount": "40",
        "Effect9Amount": "0.5"
      },
      "depth": 3,
      "id": "3152",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3152.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 240
      },
      "price": {
        "base": 650,
        "total": 2500,
        "sell": 1750
      },
      "purchasable": true
    },
    {
      "name": "Blade of the Ruined King",
      "description": "<stats>+40 Attack Damage<br>+25% Attack Speed<br>+15% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health in bonus physical damage (max 60 vs. monsters and minions) on hit. Life Steal applies to this damage.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).",
      "plaintext": "Deals damage based on target's Health, can steal Movement Speed",
      "from": [
        "3144",
        "1043"
      ],
      "tags": [
        "Active",
        "AttackSpeed",
        "Damage",
        "LifeSteal",
        "NonbootsMovement",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 40,
        "PercentAttackSpeedMod": 0.25,
        "PercentLifeStealMod": 0.15
      },
      "effect": {
        "Effect1Amount": "0.08"
      },
      "depth": 4,
      "id": "3153",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3153.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 240
      },
      "price": {
        "base": 800,
        "total": 3300,
        "sell": 2310
      },
      "purchasable": true
    },
    {
      "name": "Hexdrinker",
      "description": "<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
      "plaintext": "Increases Attack Damage and Magic Resist",
      "stacks": 0,
      "from": [
        "1036",
        "1033"
      ],
      "into": [
        "3156"
      ],
      "tags": [
        "Damage",
        "SpellBlock"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 20,
        "FlatSpellBlockMod": 35
      },
      "effect": {
        "Effect1Amount": "0.3",
        "Effect2Amount": "110",
        "Effect3Amount": "5",
        "Effect4Amount": "90",
        "Effect5Amount": "280",
        "Effect6Amount": "100",
        "Effect7Amount": "10"
      },
      "depth": 2,
      "id": "3155",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3155.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 240
      },
      "price": {
        "base": 500,
        "total": 1300,
        "sell": 910
      },
      "purchasable": true
    },
    {
      "name": "Maw of Malmortius",
      "description": "<stats>+50 Attack Damage<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs magic damage equal to 300 + 1 per bonus Magic Resistance for 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.",
      "plaintext": "Grants bonus Attack Damage when Health is low",
      "stacks": 0,
      "from": [
        "3155",
        "3133"
      ],
      "tags": [
        "SpellBlock",
        "Damage",
        "LifeSteal",
        "CooldownReduction",
        "SpellVamp"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 50,
        "FlatSpellBlockMod": 45
      },
      "effect": {
        "Effect1Amount": "1",
        "Effect2Amount": "35",
        "Effect3Amount": "0.3",
        "Effect4Amount": "300",
        "Effect5Amount": "5",
        "Effect6Amount": "90",
        "Effect7Amount": "20",
        "Effect8Amount": "0",
        "Effect9Amount": "0.1",
        "Effect10Amount": "0.1"
      },
      "depth": 3,
      "id": "3156",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3156.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 288
      },
      "price": {
        "base": 850,
        "total": 3250,
        "sell": 2275
      },
      "purchasable": true
    },
    {
      "name": "Zhonya's Hourglass",
      "description": "<stats>+70 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
      "plaintext": "Activate to become invincible but unable to take actions",
      "from": [
        "3191",
        "3108"
      ],
      "tags": [
        "Armor",
        "SpellDamage",
        "Active",
        "CooldownReduction"
      ],
      "stats": {
        "FlatMagicDamageMod": 70,
        "FlatArmorMod": 45
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "2.5",
        "Effect3Amount": "120"
      },
      "depth": 3,
      "id": "3157",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3157.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 288
      },
      "price": {
        "base": 800,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Ionian Boots of Lucidity",
      "description": "<unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>",
      "plaintext": "Increases Movement Speed and Cooldown Reduction",
      "from": [
        "1001"
      ],
      "tags": [
        "Boots",
        "CooldownReduction"
      ],
      "stats": {
        "FlatMovementSpeedMod": 45
      },
      "effect": {
        "Effect1Amount": "-0.1",
        "Effect2Amount": "0.1"
      },
      "depth": 2,
      "id": "3158",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3158.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 288
      },
      "price": {
        "base": 600,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Morellonomicon",
      "description": "<stats>+100 Ability Power<br><mana>+400 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Dealing magic damage to champions below 35% Health inflicts <a href='GrievousWounds'>Grievous Wounds</a> for 8 seconds.<br><unique>UNIQUE Passive:</unique> Kills and Assists restore 20% of your maximum Mana.",
      "plaintext": "Greatly increases Ability Power and Cooldown Reduction",
      "from": [
        "3108",
        "1052",
        "3802"
      ],
      "tags": [
        "SpellDamage",
        "Mana",
        "ManaRegen",
        "CooldownReduction"
      ],
      "stats": {
        "FlatMPPoolMod": 400,
        "FlatMagicDamageMod": 100
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "35",
        "Effect3Amount": "8",
        "Effect4Amount": "0.2"
      },
      "depth": 3,
      "id": "3165",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3165.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 288
      },
      "price": {
        "base": 665,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Moonflair Spellblade",
      "description": "<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.",
      "plaintext": "Improves defense and reduces duration of disabling effects",
      "from": [
        "3191",
        "1057"
      ],
      "tags": [
        "Armor",
        "SpellBlock",
        "SpellDamage",
        "Tenacity"
      ],
      "stats": {
        "FlatSpellBlockMod": 50,
        "FlatMagicDamageMod": 50,
        "FlatArmorMod": 50
      },
      "depth": 3,
      "id": "3170",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3170.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 288
      },
      "price": {
        "base": 580,
        "total": 2500,
        "sell": 1750
      },
      "purchasable": true
    },
    {
      "name": "Athene's Unholy Grail",
      "description": "<stats>+40 Ability Power<br>+30 Magic Resist<br>+20% Cooldown Reduction<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 20% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <scaleLevel>100 - 250</scaleLevel>  max. Healing or shielding another ally consumes charges to heal them, up to the original effect amount.<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>",
      "plaintext": "Deal damage to empower your heals and shields",
      "from": [
        "3108",
        "3028"
      ],
      "tags": [
        "SpellBlock",
        "HealthRegen",
        "SpellDamage",
        "ManaRegen",
        "CooldownReduction"
      ],
      "stats": {
        "FlatSpellBlockMod": 30,
        "FlatMagicDamageMod": 40
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "30",
        "Effect3Amount": "2",
        "Effect4Amount": "5",
        "Effect5Amount": "100",
        "Effect6Amount": "0.2",
        "Effect7Amount": "100",
        "Effect8Amount": "250",
        "Effect9Amount": "1",
        "Effect10Amount": "1",
        "Effect11Amount": "0.25",
        "Effect12Amount": "600",
        "Effect13Amount": "8",
        "Effect14Amount": "90"
      },
      "depth": 3,
      "id": "3174",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3174.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 288
      },
      "price": {
        "base": 400,
        "total": 2100,
        "sell": 1470
      },
      "purchasable": true
    },
    {
      "name": "Head of Kha'Zix",
      "description": "<unique>UNIQUE Active - Bonetooth Totem:</unique> Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player.<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.",
      "plaintext": "",
      "specialRecipe": 3169,
      "inStore": false,
      "requiredChampion": "Rengar",
      "hideFromAll": true,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "125",
        "Effect3Amount": "5",
        "Effect4Amount": "180",
        "Effect5Amount": "90"
      },
      "id": "3175",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3175.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 288
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Sanguine Blade",
      "description": "<stats>+45 Attack Damage<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
      "plaintext": "Greatly increases Attack Damage and Life Steal",
      "from": [
        "1037",
        "1053"
      ],
      "tags": [
        "Damage",
        "LifeSteal"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 45,
        "PercentLifeStealMod": 0.1
      },
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "0.01",
        "Effect3Amount": "8",
        "Effect4Amount": "5"
      },
      "depth": 3,
      "id": "3181",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3181.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 288
      },
      "price": {
        "base": 625,
        "total": 2400,
        "sell": 1680
      },
      "purchasable": true
    },
    {
      "name": "Guardian's Hammer",
      "description": "<stats>+150 Health<br>+15 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
      "plaintext": "Good starting item for attackers",
      "tags": [
        "Health",
        "Damage",
        "LifeSteal",
        "Lane"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15,
        "FlatHPPoolMod": 150,
        "PercentLifeStealMod": 0.1
      },
      "id": "3184",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3184.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 288
      },
      "price": {
        "base": 950,
        "total": 950,
        "sell": 380
      },
      "purchasable": true
    },
    {
      "name": "The Lightbringer",
      "description": "<stats>+30 Attack Damage<br>+30% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
      "plaintext": "Critical Strikes cause your target to bleed and be revealed",
      "from": [
        "3122",
        "1018"
      ],
      "tags": [
        "Active",
        "CriticalStrike",
        "Damage",
        "OnHit",
        "Stealth",
        "Vision"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 30,
        "FlatCritChanceMod": 0.3
      },
      "effect": {
        "Effect1Amount": "0.9",
        "Effect2Amount": "3",
        "Effect3Amount": "0",
        "Effect4Amount": "5",
        "Effect5Amount": "3",
        "Effect6Amount": "60"
      },
      "depth": 3,
      "id": "3185",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3185.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 288
      },
      "price": {
        "base": 350,
        "total": 2350,
        "sell": 1645
      },
      "purchasable": true
    },
    {
      "name": "Arcane Sweeper",
      "description": "<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Trap Detection:</unique> Grants <font color='#ee91d7'>True Sight</font>  of nearby enemy traps.<br><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).",
      "plaintext": "Activate to reveal a nearby area of the map",
      "from": [
        "3024",
        "3067"
      ],
      "tags": [
        "Active",
        "Armor",
        "CooldownReduction",
        "Health",
        "Mana",
        "Stealth",
        "Vision"
      ],
      "stats": {
        "FlatHPPoolMod": 225,
        "FlatMPPoolMod": 250,
        "FlatArmorMod": 25
      },
      "effect": {
        "Effect1Amount": "-0.2",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "5",
        "Effect5Amount": "3",
        "Effect6Amount": "60"
      },
      "depth": 3,
      "id": "3187",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3187.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 336
      },
      "price": {
        "base": 350,
        "total": 2150,
        "sell": 1505
      },
      "purchasable": true
    },
    {
      "name": "Locket of the Iron Solari",
      "description": "<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allies for 2.5 seconds that absorbs up to 35 (+35 per level) damage (90 second cooldown).<br><br><rules>(Half effect if the target has been affected by another Locket of the Iron Solari recently.)</rules>",
      "plaintext": "Activate to shield nearby allies from damage",
      "from": [
        "3105",
        "1033"
      ],
      "tags": [
        "SpellBlock",
        "Armor",
        "Active"
      ],
      "stats": {
        "FlatSpellBlockMod": 60,
        "FlatArmorMod": 30
      },
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "0.75",
        "Effect3Amount": "2.5",
        "Effect4Amount": "35",
        "Effect5Amount": "35",
        "Effect6Amount": "90"
      },
      "depth": 3,
      "id": "3190",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3190.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 336
      },
      "price": {
        "base": 650,
        "total": 2200,
        "sell": 1540
      },
      "purchasable": true
    },
    {
      "name": "Seeker's Armguard",
      "description": "<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
      "plaintext": "Increases Armor and Ability Power",
      "from": [
        "1029",
        "1052",
        "1029"
      ],
      "into": [
        "3090",
        "3170",
        "3157"
      ],
      "tags": [
        "Armor",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 20,
        "FlatArmorMod": 30
      },
      "effect": {
        "Effect1Amount": "0.5",
        "Effect2Amount": "30"
      },
      "depth": 2,
      "id": "3191",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3191.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 336
      },
      "price": {
        "base": 165,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "The Hex Core mk-1",
      "description": "<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
      "plaintext": "Allows Viktor to improve an ability of his choice",
      "from": [
        "3200"
      ],
      "requiredChampion": "Viktor",
      "into": [
        "3197"
      ],
      "tags": [
        "Mana",
        "SpellDamage"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "3",
        "Effect2Amount": "15"
      },
      "depth": 2,
      "id": "3196",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3196.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 336
      },
      "price": {
        "base": 1250,
        "total": 1250,
        "sell": 875
      },
      "purchasable": true
    },
    {
      "name": "The Hex Core mk-2",
      "description": "<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
      "plaintext": "Allows Viktor to improve an ability of his choice",
      "from": [
        "3196"
      ],
      "requiredChampion": "Viktor",
      "into": [
        "3198"
      ],
      "tags": [
        "Mana",
        "SpellDamage"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "20"
      },
      "depth": 3,
      "id": "3197",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3197.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 336
      },
      "price": {
        "base": 1000,
        "total": 2250,
        "sell": 1575
      },
      "purchasable": true
    },
    {
      "name": "Perfect Hex Core",
      "description": "<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
      "plaintext": "Allows Viktor to improve an ability of his choice",
      "from": [
        "3197"
      ],
      "requiredChampion": "Viktor",
      "tags": [
        "Mana",
        "SpellDamage"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "10",
        "Effect2Amount": "25"
      },
      "depth": 4,
      "id": "3198",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3198.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 336
      },
      "price": {
        "base": 750,
        "total": 3000,
        "sell": 2100
      },
      "purchasable": true
    },
    {
      "name": "Prototype Hex Core",
      "description": "<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.",
      "plaintext": "Increases Ability Power and can be upgraded to improve Viktor's abilities",
      "inStore": false,
      "requiredChampion": "Viktor",
      "into": [
        "3196"
      ],
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "1",
        "Effect2Amount": "10"
      },
      "id": "3200",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3200.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 336
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Spectre's Cowl",
      "description": "<stats>+250 Health<br>+30 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
      "plaintext": "Improves defense and grants regeneration upon being damaged",
      "from": [
        "1028",
        "1033"
      ],
      "into": [
        "3065",
        "3102"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "SpellBlock"
      ],
      "stats": {
        "FlatHPPoolMod": 250,
        "FlatSpellBlockMod": 30
      },
      "effect": {
        "Effect1Amount": "1.5",
        "Effect2Amount": "10"
      },
      "depth": 2,
      "id": "3211",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3211.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 336
      },
      "price": {
        "base": 350,
        "total": 1200,
        "sell": 840
      },
      "purchasable": true
    },
    {
      "name": "Mikael's Crucible",
      "description": "<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown).<br><br>Successfully cleansing an effect this way grants the ally 40% movement speed for 2 seconds.",
      "plaintext": "Activate to heal and remove all disabling effects from an allied champion",
      "from": [
        "3028",
        "3114"
      ],
      "tags": [
        "SpellBlock",
        "HealthRegen",
        "ManaRegen",
        "Active",
        "CooldownReduction"
      ],
      "stats": {
        "FlatSpellBlockMod": 40
      },
      "effect": {
        "Effect1Amount": "2",
        "Effect2Amount": "5",
        "Effect3Amount": "0.5",
        "Effect4Amount": "0.25",
        "Effect5Amount": "600",
        "Effect6Amount": "8",
        "Effect7Amount": "90",
        "Effect8Amount": "1",
        "Effect9Amount": "1",
        "Effect10Amount": "0.4",
        "Effect11Amount": "0.2",
        "Effect12Amount": "2",
        "Effect13Amount": "120"
      },
      "depth": 3,
      "id": "3222",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3222.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 336
      },
      "price": {
        "base": 500,
        "total": 2100,
        "sell": 1470
      },
      "purchasable": true
    },
    {
      "name": "Poacher's Dirk",
      "description": "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Passive:</unique> After poaching 3 large monsters from the enemy jungle (60 second cooldown), transforms into a Serrated Dirk.",
      "plaintext": "Transforms into a Serrated Dirk after poaching in the enemy jungle.",
      "stacks": 0,
      "from": [
        "1036"
      ],
      "tags": [
        "Damage",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 15
      },
      "effect": {
        "Effect1Amount": "100",
        "Effect2Amount": "15",
        "Effect3Amount": "20"
      },
      "depth": 2,
      "id": "3252",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3252.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 336
      },
      "price": {
        "base": 400,
        "total": 750,
        "sell": 525
      },
      "purchasable": true
    },
    {
      "name": "Luden's Echo",
      "description": "<stats>+100 Ability Power<br>+10% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
      "plaintext": "Movement and casting builds charges that release chain lightning on next spell hit",
      "from": [
        "1058",
        "3113"
      ],
      "tags": [
        "NonbootsMovement",
        "OnHit",
        "SpellDamage"
      ],
      "stats": {
        "PercentMovementSpeedMod": 0.1,
        "FlatMagicDamageMod": 100
      },
      "effect": {
        "Effect1Amount": "100",
        "Effect2Amount": "100",
        "Effect3Amount": "4",
        "Effect4Amount": "0.1",
        "Effect5Amount": "35",
        "Effect6Amount": "10"
      },
      "depth": 3,
      "id": "3285",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3285.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 384
      },
      "price": {
        "base": 1100,
        "total": 3200,
        "sell": 2240
      },
      "purchasable": true
    },
    {
      "name": "Ancient Coin",
      "description": "<stats><mana>+25% Base Mana Regen </mana><br>+5% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 4 Gold and 5 Health.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>",
      "plaintext": "Grants gold when nearby minions die that you didn't kill",
      "into": [
        "3096"
      ],
      "tags": [
        "ManaRegen",
        "GoldPer",
        "CooldownReduction",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "4",
        "Effect2Amount": "5"
      },
      "id": "3301",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3301.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 384
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 140
      },
      "purchasable": true
    },
    {
      "name": "Relic Shield",
      "description": "<stats>+75 Health<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health and grants them kill Gold.<br><br>These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges. <br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Kill minions periodically to heal and grant gold to a nearby ally",
      "into": [
        "3097"
      ],
      "tags": [
        "Aura",
        "GoldPer",
        "Health",
        "Lane"
      ],
      "stats": {
        "FlatHPPoolMod": 75
      },
      "effect": {
        "Effect1Amount": "195",
        "Effect2Amount": "15",
        "Effect3Amount": "2",
        "Effect4Amount": "5"
      },
      "id": "3302",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3302.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 384
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 140
      },
      "purchasable": true
    },
    {
      "name": "Spellthief's Edge",
      "description": "<stats>+5 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 10 additional damage and grant 8 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Grants gold when you attack enemies",
      "into": [
        "3098"
      ],
      "tags": [
        "GoldPer",
        "Lane",
        "ManaRegen",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 5
      },
      "effect": {
        "Effect1Amount": "10",
        "Effect2Amount": "8",
        "Effect3Amount": "12",
        "Effect4Amount": "3",
        "Effect5Amount": "30",
        "Effect6Amount": "2"
      },
      "id": "3303",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3303.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 384
      },
      "price": {
        "base": 350,
        "total": 350,
        "sell": 140
      },
      "purchasable": true
    },
    {
      "name": "Warding Totem (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>60 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>180 - 90</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player. Switching to a <font color='#BBFFFF'>Lens</font> type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
      "plaintext": "Periodically place a Stealth Ward",
      "tags": [
        "Active",
        "Jungle",
        "Lane",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "60",
        "Effect2Amount": "180",
        "Effect3Amount": "120",
        "Effect4Amount": "90",
        "Effect5Amount": "2",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120"
      },
      "id": "3340",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3340.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Sweeping Lens (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans an area for 6 seconds, warning against hidden hostile units and revealing invisible traps and revealing / disabling wards (90 to 60 second cooldown).<br><br>Cast range and sweep radius gradually improve with level.<br><br><rules>(Switching to a <font color='#BBFFFF'>Totem</font>-type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
      "plaintext": "Detects and disables nearby invisible wards and traps",
      "tags": [
        "Active",
        "Jungle",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "90",
        "Effect3Amount": "400",
        "Effect4Amount": "60",
        "Effect5Amount": "1500",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120",
        "Effect9Amount": "60",
        "Effect10Amount": "450",
        "Effect11Amount": "575"
      },
      "id": "3341",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3341.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Soul Anchor (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><rules>Additional charges are gained at levels 9 and 14.</rules><br><br><font color='#BBFFFF'>(Max: 2 charges)</font></rules><br><br>",
      "plaintext": "Consumes charge to revive champion.",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "id": "3345",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3345.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Arcane Sweeper",
      "description": "<active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (90 second cooldown).",
      "plaintext": "Activate to reveal a nearby area of the map",
      "inStore": false,
      "tags": [
        "Vision",
        "Trinket",
        "Stealth",
        "Active"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "5",
        "Effect5Amount": "3",
        "Effect6Amount": "90"
      },
      "id": "3348",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3348.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 384
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Greater Stealth Totem (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds.  Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
      "plaintext": "Periodically place a Stealth Ward",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "180",
        "Effect2Amount": "60",
        "Effect3Amount": "0",
        "Effect4Amount": "0",
        "Effect5Amount": "0",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120"
      },
      "id": "3361",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3361.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 384
      },
      "price": {
        "base": 250,
        "total": 250,
        "sell": 175
      },
      "purchasable": false
    },
    {
      "name": "Greater Vision Totem (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
      "plaintext": "Periodically place a Vision Ward",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "120",
        "Effect2Amount": "0",
        "Effect3Amount": "0",
        "Effect4Amount": "0",
        "Effect5Amount": "0",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120"
      },
      "id": "3362",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3362.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 384
      },
      "price": {
        "base": 250,
        "total": 250,
        "sell": 175
      },
      "purchasable": false
    },
    {
      "name": "Farsight Alteration",
      "description": "<levelLimit>* Level 9+ required to upgrade.</levelLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>",
      "plaintext": "Grants increased range and reveals the targetted area",
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "4000",
        "Effect2Amount": "2",
        "Effect3Amount": "5",
        "Effect4Amount": "198",
        "Effect5Amount": "60",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120",
        "Effect9Amount": "6.5",
        "Effect10Amount": "198",
        "Effect11Amount": "99",
        "Effect12Amount": "60",
        "Effect13Amount": "180",
        "Effect14Amount": "10",
        "Effect15Amount": "45"
      },
      "id": "3363",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3363.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 0,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Oracle Alteration",
      "description": "<levelLimit>* Level 9+ required to upgrade.</levelLimit><stats></stats><br><br>Alters the <font color='#FFFFFF'>Sweeping Lens</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Increased detection radius<br><font color='#00FF00'>+</font> Sweeping effect follows you for 10 seconds<br><font color='#FF0000'>-</font> <font color='#FF6600'>Cast range reduced to zero</font></stats>",
      "plaintext": "Disables nearby invisible wards and traps for a duration",
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "10",
        "Effect3Amount": "90",
        "Effect4Amount": "60",
        "Effect5Amount": "0",
        "Effect6Amount": "9",
        "Effect7Amount": "30",
        "Effect8Amount": "120",
        "Effect9Amount": "60"
      },
      "id": "3364",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3364.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 48,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Face of the Mountain",
      "description": "<stats>+450 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><unique>UNIQUE Active:</unique> Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown).  Automatically targets the most wounded ally if cast upon self.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
      "plaintext": "Shield an ally from damage based on your Health",
      "from": [
        "3097",
        "3067"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Active",
        "GoldPer",
        "CooldownReduction",
        "support"
      ],
      "stats": {
        "FlatHPPoolMod": 450
      },
      "effect": {
        "Effect1Amount": "320",
        "Effect2Amount": "50",
        "Effect3Amount": "0.1",
        "Effect4Amount": "4",
        "Effect5Amount": "-0.4",
        "Effect6Amount": "2",
        "Effect7Amount": "60",
        "Effect8Amount": "120",
        "Effect9Amount": "2",
        "Effect10Amount": "20"
      },
      "depth": 3,
      "id": "3401",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3401.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 96,
        "y": 432
      },
      "price": {
        "base": 550,
        "total": 2200,
        "sell": 880
      },
      "purchasable": true
    },
    {
      "name": "Head of Kha'Zix",
      "description": "<unique>UNIQUE Active - Sweeping Lens:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      "plaintext": "",
      "specialRecipe": 3169,
      "inStore": false,
      "requiredChampion": "Rengar",
      "hideFromAll": true,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "125",
        "Effect3Amount": "5",
        "Effect4Amount": "6",
        "Effect5Amount": "10",
        "Effect6Amount": "60"
      },
      "id": "3410",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3410.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 144,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Head of Kha'Zix",
      "description": "<unique>UNIQUE Active - Scrying:</unique> Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      "plaintext": "",
      "specialRecipe": 3169,
      "inStore": false,
      "requiredChampion": "Rengar",
      "hideFromAll": true,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "125",
        "Effect3Amount": "5",
        "Effect4Amount": "4000",
        "Effect5Amount": "2",
        "Effect6Amount": "5",
        "Effect7Amount": "90"
      },
      "id": "3416",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3416.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 192,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Head of Kha'Zix",
      "description": "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      "plaintext": "",
      "specialRecipe": 3169,
      "inStore": false,
      "requiredChampion": "Rengar",
      "hideFromAll": true,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "125",
        "Effect3Amount": "5"
      },
      "id": "3422",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3422.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 240,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Head of Kha'Zix",
      "description": "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
      "plaintext": "",
      "specialRecipe": 3169,
      "inStore": false,
      "requiredChampion": "Rengar",
      "hideFromAll": true,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "125",
        "Effect3Amount": "5"
      },
      "id": "3455",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3455.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 288,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Golden Transcendence",
      "description": "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
      "plaintext": "",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket"
      ],
      "stats": {},
      "id": "3460",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3460.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 336,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Golden Transcendence (Disabled)",
      "description": "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
      "plaintext": "",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket"
      ],
      "stats": {},
      "id": "3461",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3461.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 384,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Seer Stone (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>2500</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
      "plaintext": "Briefly reveals a nearby targeted area",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "2500",
        "Effect2Amount": "60",
        "Effect3Amount": "3",
        "Effect4Amount": "5",
        "Effect5Amount": "550"
      },
      "id": "3462",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3462.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item1.png",
        "x": 432,
        "y": 432
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Ardent Censer",
      "description": "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Your heals and shields on another allied champion grant them 20% - 35% Attack Speed and their attacks drain 20 - 35 health on-hit for 6 seconds.<br><br><rules>(This does not include regeneration effects or effects on yourself. Bonus effects are based on target's level.</rules>)</rules>",
      "plaintext": "Shield and heal effects on other units grant them Attack Speed and their attacks drain life",
      "from": [
        "3114",
        "3113"
      ],
      "tags": [
        "CooldownReduction",
        "ManaRegen",
        "NonbootsMovement",
        "SpellDamage"
      ],
      "stats": {
        "FlatMagicDamageMod": 60
      },
      "effect": {
        "Effect1Amount": "0.08",
        "Effect2Amount": "0.2",
        "Effect3Amount": "6",
        "Effect4Amount": "20",
        "Effect5Amount": "0.1",
        "Effect6Amount": "0.35",
        "Effect7Amount": "35"
      },
      "depth": 3,
      "id": "3504",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3504.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 0,
        "y": 0
      },
      "price": {
        "base": 650,
        "total": 2300,
        "sell": 1610
      },
      "purchasable": true
    },
    {
      "name": "Essence Reaver",
      "description": "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Gain increasingly more Cooldown Reduction from Critical Strike Chance provided by other sources (maximum +20% additional Cooldown Reduction at 30% Critical Strike Chance).<br><unique>UNIQUE Passive:</unique> Critical strikes restore 3% of your maximum Mana pool.",
      "plaintext": "Critical Strike provides Cooldown Reduction and Mana",
      "from": [
        "1038",
        "3133",
        "1018"
      ],
      "tags": [
        "Damage",
        "CriticalStrike",
        "ManaRegen",
        "CooldownReduction"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 70,
        "FlatCritChanceMod": 0.2
      },
      "effect": {
        "Effect1Amount": "0.1",
        "Effect2Amount": "0.03",
        "Effect3Amount": "0.2",
        "Effect4Amount": "0.3",
        "Effect5Amount": "0.0167",
        "Effect6Amount": "0.1667"
      },
      "depth": 3,
      "id": "3508",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3508.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 48,
        "y": 0
      },
      "price": {
        "base": 400,
        "total": 3600,
        "sell": 2520
      },
      "purchasable": true
    },
    {
      "name": "Zz'Rot Portal",
      "description": "<stats>+55 Armor<br>+55 Magic Resist<br>+125% Base Health Regen <br></stats><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><active>UNIQUE Active:</active> Spawns a <a href='VoidGate'>Void Gate</a> for 120 seconds (120 second cooldown).<br><br>Every 4 seconds the gate makes a <a href='Voidspawn'>Voidspawn</a>. The first and every fourth Voidspawn gains 15% of maximum Health as damage.",
      "plaintext": "Makes a Voidspawn generating Void Gate to push a lane with.",
      "from": [
        "2053",
        "1057"
      ],
      "tags": [
        "SpellBlock",
        "HealthRegen",
        "Armor",
        "Active",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatSpellBlockMod": 55,
        "FlatArmorMod": 55
      },
      "effect": {
        "Effect1Amount": "20",
        "Effect2Amount": "4",
        "Effect3Amount": "50",
        "Effect4Amount": "0",
        "Effect5Amount": "120",
        "Effect6Amount": "120",
        "Effect7Amount": "0.5",
        "Effect8Amount": "0.15",
        "Effect9Amount": "3",
        "Effect10Amount": "20",
        "Effect11Amount": "2",
        "Effect12Amount": "100",
        "Effect13Amount": "20",
        "Effect14Amount": "50",
        "Effect15Amount": "2"
      },
      "depth": 4,
      "id": "3512",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3512.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 96,
        "y": 0
      },
      "price": {
        "base": 780,
        "total": 2700,
        "sell": 1890
      },
      "purchasable": true
    },
    {
      "name": "The Black Spear",
      "description": "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
      "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
      "requiredChampion": "Kalista",
      "tags": [
        "Active"
      ],
      "stats": {},
      "id": "3599",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3599.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 144,
        "y": 0
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Siege Teleport",
      "description": "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "3630",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3630.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 192,
        "y": 0
      },
      "price": {
        "base": 10,
        "total": 10,
        "sell": 7
      },
      "purchasable": false
    },
    {
      "name": "Siege Ballista",
      "description": "<br><font color='#FF9900'>Deploys a ballista that shoots the closest turret.</font><br><br>Places a long range ballista if within 2200 range of an enemy turret. After a 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.",
      "plaintext": "Place a long range anti-turret ballista",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "5",
        "Effect3Amount": "20",
        "Effect4Amount": "3",
        "Effect5Amount": "0",
        "Effect6Amount": "2200",
        "Effect7Amount": "10",
        "Effect8Amount": "0",
        "Effect9Amount": "0.5"
      },
      "id": "3631",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3631.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 240,
        "y": 0
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "",
      "description": "",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "1",
        "Effect3Amount": "310",
        "Effect4Amount": "5000",
        "Effect5Amount": "20",
        "Effect6Amount": "0",
        "Effect7Amount": "3",
        "Effect8Amount": "45",
        "Effect9Amount": "10",
        "Effect10Amount": "1",
        "Effect11Amount": "15",
        "Effect12Amount": "3000"
      },
      "id": "3632",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3632.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 288,
        "y": 0
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Siege Teleport",
      "description": "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "3633",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3633.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 336,
        "y": 0
      },
      "price": {
        "base": 10,
        "total": 10,
        "sell": 7
      },
      "purchasable": false
    },
    {
      "name": "Tower: Beam of Ruination",
      "description": "<br><font color='#FF9900'>Attach, then recast to fire a damaging beam from a turret to your cursor.</font><br><br><font color='#FF9900'>First Cast:</font> Attach a Slayer Beam to the target turret that can be fired 3 times.<br></br><font color='#FF9900'>Next Three Casts:</font> Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line.<br></br><br></br>Beam will last 15 seconds, or until it has been fired 3 times.",
      "plaintext": "Attaches a three shot beam to a turret which can then be aimed and fired",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "3",
        "Effect2Amount": "1.5",
        "Effect3Amount": "3000",
        "Effect4Amount": "0",
        "Effect5Amount": "30",
        "Effect6Amount": "0.2",
        "Effect7Amount": "15",
        "Effect8Amount": "0.3",
        "Effect9Amount": "0",
        "Effect10Amount": "76"
      },
      "id": "3634",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3634.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 384,
        "y": 0
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Port Pad",
      "description": "<br><font color='#FF9900'>Deploy an additional teleport target.</font><br><br>Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.",
      "plaintext": "Creates another point for your team to Teleport to",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "4",
        "Effect2Amount": "1000",
        "Effect3Amount": "3",
        "Effect4Amount": "10"
      },
      "id": "3635",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3635.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 432,
        "y": 0
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Tower: Storm Bulwark",
      "description": "<br><font color='#FF9900'>Makes a turret go invulnerable, then rain fire.</font><br><br>Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 2600 true damage over the remaining time to all nearby enemies.<br><br>Cannot be used on the same turret more than once in 15 seconds.",
      "plaintext": "Make a turret go invulnerable while charging a powerful barrage",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {
        "FlatCritChanceMod": 3
      },
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "15",
        "Effect3Amount": "650",
        "Effect4Amount": "825",
        "Effect5Amount": "1.2"
      },
      "id": "3636",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3636.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 0,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Nexus Siege: Siege Weapon Slot",
      "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "3637",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3637.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 48,
        "y": 48
      },
      "price": {
        "base": 10,
        "total": 10,
        "sell": 7
      },
      "purchasable": false
    },
    {
      "name": "Flash Zone",
      "description": "<br><font color='#FF9900'>Allows team to cast Flash repeatedly in a limited zone.</font><br><br>Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown).",
      "plaintext": "Allows you and allies to repeatedly flash while in a zone",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "1",
        "Effect2Amount": "5"
      },
      "id": "3640",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3640.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 96,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Vanguard Banner",
      "description": "<br><font color='#FF9900'>Place a banner that buffs minions.</font><br><br>Place a Vanguard Banner at target location. After a 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.",
      "plaintext": "Strengthens nearby minions",
      "consumed": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "0",
        "Effect2Amount": "0.5",
        "Effect3Amount": "50",
        "Effect4Amount": "100",
        "Effect5Amount": "5",
        "Effect6Amount": "0.3",
        "Effect7Amount": "2",
        "Effect8Amount": "10",
        "Effect9Amount": "1400"
      },
      "id": "3641",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3641.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 144,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Siege Refund",
      "description": "Refunds all purchased Siege Weapons for their full price.",
      "plaintext": "Refunds all current Siege Weapons",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "1"
      },
      "id": "3642",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3642.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 192,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Entropy Field",
      "description": "<br><font color='#FF9900'>Stun minions and slow champions in an area.</font><br><br>Places an Entropy Field at target location for 5 seconds.  Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field.  Enemy champions in the field have their Movement Speed reduced by 25%.",
      "plaintext": "Places a field that stuns enemy minions and slows champions",
      "consumed": true,
      "consumeOnFull": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "600",
        "Effect3Amount": "25"
      },
      "id": "3643",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3643.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 240,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Seer Stone (Trinket)",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>1400</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
      "plaintext": "Briefly reveals a nearby targeted area",
      "inStore": false,
      "tags": [
        "Active",
        "Trinket",
        "Vision"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "1400",
        "Effect2Amount": "60",
        "Effect3Amount": "3",
        "Effect4Amount": "5",
        "Effect5Amount": "550"
      },
      "id": "3645",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3645.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 288,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Shield Totem",
      "description": "<br><font color='#FF9900'>Place a totem that shields nearby deployables.</font><br><br>Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.",
      "plaintext": "Grants bonus health to nearby Siege Weapons",
      "consumed": true,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "2",
        "Effect2Amount": "3",
        "Effect3Amount": "2",
        "Effect4Amount": "1",
        "Effect5Amount": "1000",
        "Effect6Amount": "0.25",
        "Effect7Amount": "10",
        "Effect8Amount": "1",
        "Effect9Amount": "4"
      },
      "id": "3647",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3647.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 336,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Siege Teleport (Inactive)",
      "description": "",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "id": "3648",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3648.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 384,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Siege Sight Warder",
      "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Places a <font color='#FFFFFF'>Stealth Ward</font> that lasts <font color='#FFFFFF'>30</font> seconds (30 second cooldown).",
      "plaintext": "",
      "inStore": false,
      "tags": [],
      "stats": {},
      "effect": {
        "Effect1Amount": "30"
      },
      "id": "3649",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3649.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 432,
        "y": 48
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": false
    },
    {
      "name": "Enchantment: Warrior",
      "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
      "plaintext": "",
      "from": [
        "3133"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatPhysicalDamageMod": 60
      },
      "depth": 3,
      "id": "3671",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3671.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 0,
        "y": 96
      },
      "price": {
        "base": 525,
        "total": 1625,
        "sell": 1138
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Cinderhulk",
      "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
      "plaintext": "",
      "from": [
        "3751"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "FlatHPPoolMod": 400
      },
      "depth": 3,
      "id": "3672",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3672.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 48,
        "y": 96
      },
      "price": {
        "base": 525,
        "total": 1625,
        "sell": 1138
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Runic Echoes",
      "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
      "plaintext": "",
      "from": [
        "3113",
        "1052"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentMovementSpeedMod": 0.07,
        "FlatMagicDamageMod": 60
      },
      "depth": 3,
      "id": "3673",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3673.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 96,
        "y": 96
      },
      "price": {
        "base": 340,
        "total": 1625,
        "sell": 1138
      },
      "purchasable": true
    },
    {
      "name": "Enchantment: Bloodrazor",
      "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
      "plaintext": "",
      "from": [
        "1043"
      ],
      "hideFromAll": true,
      "tags": ["jungle"],
      "stats": {
        "PercentAttackSpeedMod": 0.5
      },
      "depth": 3,
      "id": "3675",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3675.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 144,
        "y": 96
      },
      "price": {
        "base": 625,
        "total": 1625,
        "sell": 1138
      },
      "purchasable": true
    },
    {
      "name": "Frosted Snax",
      "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <scaleLevel>213-775</scaleLevel> magic damage to targets in the center of the impact, scaling down to <scaleLevel>85-310</scaleLevel> on the edge. (120s cooldown)",
      "plaintext": "King: Fires a barrage of icy artillery",
      "tags": [
        "Trinket",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "120",
        "Effect3Amount": "40",
        "Effect4Amount": "15",
        "Effect5Amount": "250",
        "Effect6Amount": "213",
        "Effect7Amount": "775",
        "Effect8Amount": "85",
        "Effect9Amount": "310"
      },
      "id": "3680",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3680.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 192,
        "y": 96
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Super Spicy Snax",
      "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <scaleLevel>705-1479</scaleLevel> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)",
      "plaintext": "King: Shoots flames that burn units and Turrets",
      "tags": [
        "Trinket",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "4",
        "Effect2Amount": "120",
        "Effect3Amount": "700",
        "Effect4Amount": "2.35",
        "Effect5Amount": "560",
        "Effect6Amount": "705",
        "Effect7Amount": "1479"
      },
      "id": "3681",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3681.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 240,
        "y": 96
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Espresso Snax",
      "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <scaleLevel>40-190</scaleLevel> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)",
      "plaintext": "King: Knocks back and grants a large shield",
      "tags": [
        "Trinket",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "1.8",
        "Effect2Amount": "30",
        "Effect3Amount": "10",
        "Effect4Amount": "10",
        "Effect5Amount": "20",
        "Effect6Amount": "4",
        "Effect7Amount": "600",
        "Effect8Amount": "40",
        "Effect9Amount": "190",
        "Effect10Amount": "500"
      },
      "id": "3682",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3682.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 288,
        "y": 96
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Rainbow Snax Party Pack!",
      "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <scaleLevel>230-680</scaleLevel> physical damage. (120s cooldown)",
      "plaintext": "King: Poros knock enemies towards him",
      "tags": [
        "Trinket",
        "Lane"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "6",
        "Effect2Amount": "120",
        "Effect3Amount": "140",
        "Effect4Amount": "30",
        "Effect5Amount": "1",
        "Effect6Amount": "1500",
        "Effect7Amount": "1650",
        "Effect8Amount": "1000",
        "Effect9Amount": "230",
        "Effect10Amount": "680",
        "Effect11Amount": "2"
      },
      "id": "3683",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3683.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 336,
        "y": 96
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Stalker's Blade",
      "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
      "plaintext": "Lets your Smite slow Champions",
      "from": [
        "1039",
        "1041"
      ],
      "into": [
        "1400",
        "1401",
        "1402",
        "1416"
      ],
      "tags": [
        "LifeSteal",
        "ManaRegen",
        "Slow",
        "OnHit",
        "NonbootsMovement",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "-0.2",
        "Effect7Amount": "2",
        "Effect8Amount": "3",
        "Effect9Amount": "0.1"
      },
      "depth": 2,
      "id": "3706",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3706.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 384,
        "y": 96
      },
      "price": {
        "base": 300,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Tracker's Knife",
      "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Provides Stealth Wards over time",
      "from": [
        "1039",
        "1041"
      ],
      "into": [
        "1408",
        "1409",
        "1410",
        "1418"
      ],
      "tags": [
        "LifeSteal",
        "ManaRegen",
        "Vision",
        "Active",
        "OnHit",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "30",
        "Effect9Amount": "0.1",
        "Effect10Amount": "150"
      },
      "depth": 2,
      "id": "3711",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3711.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 432,
        "y": 96
      },
      "price": {
        "base": 300,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Skirmisher's Sabre",
      "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><passive>Passive - Challenging Smite:</passive> Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
      "plaintext": "Lets your Smite mark Champions, giving you combat power against them.",
      "from": [
        "1039",
        "1041"
      ],
      "into": [
        "1412",
        "1413",
        "1414",
        "1419"
      ],
      "tags": [
        "LifeSteal",
        "ManaRegen",
        "OnHit",
        "Jungle"
      ],
      "stats": {},
      "effect": {
        "Effect1Amount": "30",
        "Effect2Amount": "25",
        "Effect3Amount": "1.8",
        "Effect4Amount": "5",
        "Effect5Amount": "30",
        "Effect6Amount": "3",
        "Effect7Amount": "20",
        "Effect8Amount": "18",
        "Effect9Amount": "0.1",
        "Effect10Amount": "4"
      },
      "depth": 2,
      "id": "3715",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3715.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 0,
        "y": 144
      },
      "price": {
        "base": 300,
        "total": 1000,
        "sell": 700
      },
      "purchasable": true
    },
    {
      "name": "Dead Man's Plate",
      "description": "<stats>+500 Health<br>+50 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum quickly decays while under the effects of a stun, taunt, fear, polymorph, or immobilize effect, and slowly decays while slowed.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks discharge all Momentum, dealing 1 physical damage per 2 stacks. If 100 stacks are discharged, damage is doubled and the target is slowed by 50% decaying over 1 second (melee only).<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>",
      "plaintext": "Build momentum as you move around then smash into enemies.",
      "from": [
        "1031",
        "1011"
      ],
      "tags": [
        "Health",
        "Armor",
        "OnHit",
        "NonbootsMovement",
        "Bilgewater"
      ],
      "stats": {
        "FlatHPPoolMod": 500,
        "FlatArmorMod": 50
      },
      "effect": {
        "Effect1Amount": "60",
        "Effect2Amount": "100",
        "Effect3Amount": "2",
        "Effect4Amount": "-0.5",
        "Effect5Amount": "1"
      },
      "depth": 3,
      "id": "3742",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3742.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 48,
        "y": 144
      },
      "price": {
        "base": 1100,
        "total": 2900,
        "sell": 2030
      },
      "purchasable": true
    },
    {
      "name": "Titanic Hydra",
      "description": "<stats>+450 Health<br>+35 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage  to your target and 40 + 2.5% of your maximum health as physical damage  to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage  in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
      "plaintext": "Deals area of effect damage based on owner's health",
      "from": [
        "3077",
        "1028",
        "3052"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Damage",
        "Active",
        "OnHit"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 35,
        "FlatHPPoolMod": 450
      },
      "effect": {
        "Effect1Amount": "0.025",
        "Effect2Amount": "40",
        "Effect3Amount": "0",
        "Effect4Amount": "0",
        "Effect5Amount": "0.1",
        "Effect6Amount": "0",
        "Effect7Amount": "20",
        "Effect8Amount": "40",
        "Effect9Amount": "0.01",
        "Effect10Amount": "5"
      },
      "depth": 3,
      "id": "3748",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3748.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 96,
        "y": 144
      },
      "price": {
        "base": 700,
        "total": 3500,
        "sell": 2450
      },
      "purchasable": true
    },
    {
      "name": "Bami's Cinder",
      "description": "<stats>+280 Health  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
      "plaintext": "Grants Health and Immolate Aura",
      "from": [
        "1028"
      ],
      "into": [
        "3068",
        "1401",
        "1409",
        "1413",
        "3672"
      ],
      "tags": [
        "Health"
      ],
      "stats": {
        "FlatHPPoolMod": 280
      },
      "effect": {
        "Effect1Amount": "5",
        "Effect2Amount": "1",
        "Effect3Amount": "50"
      },
      "depth": 2,
      "id": "3751",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3751.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 144,
        "y": 144
      },
      "price": {
        "base": 700,
        "total": 1100,
        "sell": 770
      },
      "purchasable": true
    },
    {
      "name": "Righteous Glory",
      "description": "<stats>+500 Health<br><mana>+300 Mana</mana><br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.  <br><unique>UNIQUE Active:</unique> Grants +75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. After 3 seconds, a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).<br><br>This effect may be reactivated early to instantly release the shockwave.",
      "plaintext": "Grants Health, Mana. Activate to speed towards enemies and slow them.",
      "from": [
        "3010",
        "3801"
      ],
      "tags": [
        "Health",
        "HealthRegen",
        "Mana",
        "ManaRegen",
        "Active",
        "Slow",
        "NonbootsMovement"
      ],
      "stats": {
        "FlatHPPoolMod": 500,
        "FlatMPPoolMod": 300
      },
      "effect": {
        "Effect1Amount": "0.75",
        "Effect2Amount": "4",
        "Effect3Amount": "-0.75",
        "Effect4Amount": "2",
        "Effect5Amount": "90",
        "Effect6Amount": "0.2",
        "Effect7Amount": "25",
        "Effect8Amount": "0.15",
        "Effect9Amount": "3"
      },
      "depth": 3,
      "id": "3800",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3800.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 192,
        "y": 144
      },
      "price": {
        "base": 750,
        "total": 2500,
        "sell": 1750
      },
      "purchasable": true
    },
    {
      "name": "Crystalline Bracer",
      "description": "<stats>+200 Health<br>+50% Base Health Regen </stats>",
      "plaintext": "Grants Health and Health Regen",
      "from": [
        "1028",
        "1006"
      ],
      "into": [
        "3109",
        "3800",
        "3083",
        "3084",
        "3107"
      ],
      "tags": [
        "Health",
        "HealthRegen"
      ],
      "stats": {
        "FlatHPPoolMod": 200
      },
      "depth": 2,
      "id": "3801",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3801.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 240,
        "y": 144
      },
      "price": {
        "base": 100,
        "total": 650,
        "sell": 455
      },
      "purchasable": true
    },
    {
      "name": "Lost Chapter",
      "description": "<stats>+25 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.",
      "plaintext": "Restores Mana upon levelling up.",
      "from": [
        "1052",
        "1027"
      ],
      "into": [
        "3165"
      ],
      "tags": [
        "SpellDamage",
        "Mana",
        "ManaRegen"
      ],
      "stats": {
        "FlatMPPoolMod": 300,
        "FlatMagicDamageMod": 25
      },
      "effect": {
        "Effect1Amount": "25",
        "Effect2Amount": "-0.1",
        "Effect3Amount": "15",
        "Effect4Amount": "10",
        "Effect5Amount": "20",
        "Effect6Amount": "5",
        "Effect7Amount": "0.2",
        "Effect8Amount": "3"
      },
      "depth": 2,
      "id": "3802",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3802.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 288,
        "y": 144
      },
      "price": {
        "base": 115,
        "total": 900,
        "sell": 630
      },
      "purchasable": true
    },
    {
      "name": "Death's Dance",
      "description": "<stats>+75 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage heals for 15% of the damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 15% of damage taken is dealt as a Bleed effect over 3 seconds instead.",
      "plaintext": "Trades incoming damage now for incoming damage later",
      "stacks": 0,
      "from": [
        "1053",
        "1037",
        "3133"
      ],
      "tags": [
        "Damage",
        "LifeSteal",
        "CooldownReduction"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 75
      },
      "effect": {
        "Effect1Amount": "0.15",
        "Effect2Amount": "0.15",
        "Effect3Amount": "3"
      },
      "depth": 3,
      "id": "3812",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3812.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 336,
        "y": 144
      },
      "price": {
        "base": 625,
        "total": 3500,
        "sell": 2450
      },
      "purchasable": true
    },
    {
      "name": "Edge of Night",
      "description": "<stats>+55 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Active - Night's Veil:</unique> Channel for 1.5 second to grant a spell shield that blocks the next enemy ability. Lasts for 5 seconds (45 second cooldown).<br><br><rules>(Can move while channeling, but taking damage breaks the channel.)</rules>",
      "plaintext": "Blocks an incoming enemy spell.",
      "stacks": 0,
      "from": [
        "1037",
        "3134",
        "1033"
      ],
      "tags": [
        "SpellBlock",
        "Damage",
        "NonbootsMovement",
        "ArmorPenetration"
      ],
      "stats": {
        "FlatPhysicalDamageMod": 55,
        "FlatSpellBlockMod": 35
      },
      "effect": {
        "Effect1Amount": "15",
        "Effect2Amount": "5",
        "Effect3Amount": "20",
        "Effect4Amount": "45",
        "Effect5Amount": "5"
      },
      "depth": 3,
      "id": "3814",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3814.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 384,
        "y": 144
      },
      "price": {
        "base": 675,
        "total": 3100,
        "sell": 2170
      },
      "purchasable": true
    },
    {
      "name": "Fire at Will",
      "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
      "plaintext": "Cannon Barrage gains extra waves",
      "consumed": true,
      "consumeOnFull": true,
      "requiredChampion": "Gangplank",
      "tags": [],
      "stats": {},
      "id": "3901",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3901.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 432,
        "y": 144
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Death's Daughter",
      "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. ",
      "plaintext": "Cannon Barrage fires a mega-cannonball",
      "consumed": true,
      "consumeOnFull": true,
      "requiredChampion": "Gangplank",
      "tags": [],
      "stats": {},
      "id": "3902",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3902.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 0,
        "y": 192
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    },
    {
      "name": "Raise Morale",
      "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
      "plaintext": "Cannon Barrage hastes allies",
      "consumed": true,
      "consumeOnFull": true,
      "requiredChampion": "Gangplank",
      "tags": [],
      "stats": {},
      "id": "3903",
      "icon": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/item/3903.png",
      "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/7.8.1/img/sprite/item2.png",
        "x": 48,
        "y": 192
      },
      "price": {
        "base": 0,
        "total": 0,
        "sell": 0
      },
      "purchasable": true
    }
  ]

export default items