
function drawTable() {

    let html = '';

    html += '<tr style="border-bottom: 1px dashed rgba(24,169,193,0.4);">';
    html += '<td> - </td>';

    for (let person in scores) {
        html += '<td class="rotate person-label" id="label_' + person + '" style="max-width: 23px; padding-bottom: 5px;">' + person + '</td>';
    }
    html += '</tr>';

    /////////////

    let mainCategories = [HPS, HOS, COM, UND, SSF, FAM];
    for (let key in mainCategories) {

        let mainCategory = mainCategories[key];
        html += '<tr style="border-bottom: 1px dashed rgba(24,169,193,0.4);">';
        html += '<td class="rotate" style="max-width: 28px; font-size: 12px;"><strong>' + mainCategory + '</strong></td>';

        for (let person in scores) {
            html += '<td class="td_masker" data-name="' + person + '">';

            for (let category in scores[person]) {
                if (category === mainCategory) {
                    let scoresInCategory = scores[person][category];
                    for (let level in scoresInCategory) {
                        html += '<div style="background-color: ' + getColor(level, scoresInCategory[level]) + '; text-align: center; color:' + getFontColor(scoresInCategory[level]) + ';">';
                        html += scoresInCategory[level];
                        html += '</div>';
                    }
                }
            }
            html += '</td>';
        }
        html += '</tr>';
    }
    $('#main_table').append(html);
}


function getColor(code, countOfReviews) {
    const goodColors = {
        0: "rgba(0,255,203,0.24)",
        1: '#00d2b5',
        2: '#00a991',
        3: '#00a991',
        4: '#00715d',
        5: '#00715d',
        6: '#00715d',
        7: '#004823',
        8: '#004823',
        9: '#004823',
    };
    const badColors = {
        0: 'rgba(255,195,0,0.09)',
        1: 'rgba(234,133,0,0.73)',
        2: 'rgba(234,100,4,0.73)',
        3: 'rgba(216,84,0,0.71)',
        4: 'rgba(213,79,11,0.55)',
        6: 'rgba(203,43,0,0.55)',
        7: 'rgba(203,43,0,0.55)',
        8: 'rgba(210,0,8,0.65)',
        9: 'rgba(210,0,8,0.65)',
        10: 'rgba(210,0,8,0.65)',
    };

    const normalColors = {
        0: 'white',
        1: 'rgb(216,216,216)',
        2: 'rgb(176,176,176)',
        3: 'rgb(176,176,176)',
        4: 'rgb(142,142,142)',
        5: 'rgb(142,142,142)',
        6: 'rgb(117,117,117)',
        7: 'rgb(117,117,117)',
        8: 'rgb(117,117,117)',
        9: 'rgb(117,117,117)',
        10: 'rgb(89,89,89)',
    };
    if (code[0] === 'p') {
        return getColorWithMaxProtect(goodColors, countOfReviews);
    } else if (code[0] === 'm') {
        return getColorWithMaxProtect(badColors, countOfReviews);
    } else {
        return getColorWithMaxProtect(normalColors, countOfReviews);
    }
}

function getColorWithMaxProtect(colorSet, countOfReviews) {
    let countColorsInSet = Object.keys(colorSet).length - 1;
    if (countOfReviews > countColorsInSet) {
        return colorSet[countColorsInSet];
    }
    return colorSet[countOfReviews];
}

function getFontColor(contOfReviews) {
    if (contOfReviews < 2) {
        return 'gray';
    } else {
        return 'white';
    }
}

function listMaskButtons(people) {
    for (let person in people) {
        $('#mask-buttons').append(
            '<a href="#" id="' + people[person] + '" class="btn btn-primary mask-button" style="margin-bottom: 3px; margin-right: 3px;">' + people[person] + '</a>'
        );
    }
}

function maskPersonsLebels(person) {
    $(".person-label").each(function (v, e) {
        if ($(e).attr('id') === 'label_' + person) {
            $(e).html('<strong>' + person + '</strong>');
        } else {
            $(e).html('~~~~~~');
        }
    });
}

function highlitePersonsScore(person) {
    $(".td_masker").each(function (v, e) {
        $(e).css("border", "none");
        if ($(e).attr('data-name') === person) {
            $(e).css("border", "solid 1px rgb(117,117,117)");
        }
    });
}

function setDefaultBaseCalculationAsNumbers() {
    defaultBaseCalculation = 'NUMBERS';
    $('#switch-base-numbers').css('font-weight', 'bold');
    $('#switch-base-people').css('font-weight', 'normal');
    reDrawTable();
}

function setDefaultBaseCalculationAsPeople() {
    defaultBaseCalculation = 'PEOPLE';
    $('#switch-base-people').css('font-weight', 'bold');
    $('#switch-base-numbers').css('font-weight', 'normal');
    reDrawTable();
}

function reDrawTable()
{
    scores = {};
    $('#main_table').html('');
    calculateScores();
    drawTable();
    $('#home-button').click();
}