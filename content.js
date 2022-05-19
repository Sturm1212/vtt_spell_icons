var spellList = [
    ['Abhorrence', 'Abhorrence'],
    ['Abhorrent Apparition', 'Abhorrent_Apparition'],
    ['Abi-Dalzim’s Horrid Wilting', 'Abi-Dalzims-Horrid-Wilting'],
    ['Absorb Elements', 'Absorb_Elements'],
    ['Absorbing Field', 'Absorbing_Field'],
    ['Fire Bolt', 'Fire_Bolt']
];

function updateSpellList() {
    for(var i = 0; i < spellList.length; i++) {
        var SpellName = spellList[i][0];
        var IconID = spellList[i][1];
        $('.spellname:contains("'+SpellName+'")').html('<img class="iconSpellSheet" src="https://raw.githubusercontent.com/Sturm1212/vtt_spell_icons/main/'+IconID+'.png">'+SpellName+'');
        $('.namecontainer:contains("'+SpellName+'")').html('<img class="iconSpellComp" src="https://raw.githubusercontent.com/Sturm1212/vtt_spell_icons/main/'+IconID+'.png">'+SpellName+'');
    }
};

var intervalId = window.setInterval(function(){
    updateSpellList();
}, 5000);