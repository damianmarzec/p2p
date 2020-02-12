function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function prepareCleanScoreValues(defaultValue) {
    cleanScore = {};
    let scoreCodes = getScoreCodes();
    for (let mainKey in scoreCodes) {
        let scoreCode = scoreCodes[mainKey];
        cleanScore[scoreCode] = defaultValue;
    }
}

function scoreNumberToCode(number) {
    let scoreCodes = getScoreCodes();
    let desiredIndex = number + scaleDiff;

    if (number > scaleDiff) { // off scale +
        desiredIndex = (2 * scaleDiff); // current max...
    }
    if (number < (scaleDiff * -1)) {  // off scale -
        desiredIndex = 0;
    }

    return scoreCodes[desiredIndex];
}

function getScoreCodes() {
    let scoreCodes = [];
    for (let i = scaleDiff; i > 0; i--) {
        scoreCodes.push('m' + i);
    }
    scoreCodes.push('n0');
    for (let i = 1; i <= scaleDiff; i++) {
        scoreCodes.push('p' + i);
    }
    return scoreCodes;
}

function calculateScores() {
    for (let mainKey in mainReviewData) {
        let reviews = mainReviewData[mainKey][OCENY];
        for (let category in reviews) {
            for (let groupIndex in reviews[category][GRUPKI]) {
                let peopleInGroup = reviews[category][GRUPKI][groupIndex];
                let currentWholeScale = reviews[category][GRUPKI];
                for (let person in peopleInGroup) {
                    PEOPLE.push(peopleInGroup[person]);
                    PEOPLE = uniq(PEOPLE);
                    addScore(peopleInGroup[person], category, parseInt(groupIndex), reviews[category][MAPA], currentWholeScale);
                }
            }
        }
    }
}

function addScore(person, category, groupIndex, map, currentWholeScale) {
    if (!scores.hasOwnProperty(person)) {
        scores[person] = {
            [HPS]: {...cleanScore},
            [HOS]: {...cleanScore},
            [COM]: {...cleanScore},
            [UND]: {...cleanScore},
            [SSF]: {...cleanScore},
            [FAM]: {...cleanScore},
        }
    }
    let points = calcPoints(groupIndex, map, currentWholeScale);
    scores[person][category][scoreNumberToCode(points)]++;
}

/**
 * @param map
 * @param currentWholeScale
 * @returns {number} - base (index! counted from 0)
 */
function selectBase(map, currentWholeScale) {
    let baseByPeople = map[BAZA] - 1;
    let maxInGroup = 0;
    let baseByNumbers = 0;
    for (let index in currentWholeScale) {
        if (currentWholeScale[index].length > maxInGroup) {
            baseByNumbers = index;
            maxInGroup = currentWholeScale[index].length;
        }
    }
    if (defaultBaseCalculation === 'PEOPLE') {
        return baseByPeople;
    } else {
        return baseByNumbers;
    }
}

function calcPoints(now, map, currentWholeScale) {
    let base = selectBase(map, currentWholeScale);
    let groupsCount = map[DYSTANSE].length + 1;
    if (now === base) {
        return 0;
    }
    let pointsBalance = 0;
    let operation = false;
    if (now < base) {
        operation = '-';
    } else if (now >= base) {
        operation = '+';
    }

    for (i = groupsCount - 1; i >= 0; i--) {
        if (operation === '+') {
            if (i > base && i <= now) {
                pointsBalance += map[DYSTANSE][i - 1];
                // console.log('dist (i:' + i + ') : ' + map[DYSTANSE][i - 1]);
            }
        }
    }

    for (i = 0; i < groupsCount; i++) {
        if (operation === '-') {
            if (i < base && i >= now) {
                pointsBalance -= map[DYSTANSE][i];
                // console.log('dist (i:' + i + ') : ' + map[DYSTANSE][i]);
            }
        }
    }
    return pointsBalance;
}