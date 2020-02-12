
const html_start = '<div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up"><div class="unit-4 d-block"><div style="font-size: 16px;">';
const html_end = '</div></div></div>';

function addNewSuggestionBox(suggestions) {
    let html = '';
    $('#suggestion-container').html(''); // clean

    for (let scale in suggestions) {
        html += html_start + '<h3>' + scale + '</h3>';
        for (let key in suggestions[scale]) {
            html += '<p>'+suggestions[scale][key]+'</p>';
        }
        if (suggestions[scale].length === 0) {
            html += 'Brak... ';
        }
        html += html_end;
    }

    $('#suggestion-container').append(html);
}

function prepareSugestion(allData, person) {
    let suggestion = {
        [HPS]: [],
        [HOS]: [],
        [COM]: [],
        [UND]: [],
        [SSF]: [],
        [FAM]: [],
    };
    for (let index in allData) {
        for (let scale in allData[index][OCENY]) {
            for (let currentPerson in allData[index][OCENY][scale][SUGESTIE]) {
                if (person === currentPerson) {
                    let allForPersonInCurrentScale = allData[index][OCENY][scale][SUGESTIE][currentPerson];
                    for (let key in allForPersonInCurrentScale) {
                        suggestion[scale].push(
                            allForPersonInCurrentScale[key]
                        );
                    }
                }
            }
        }
    }
    return suggestion;
}
