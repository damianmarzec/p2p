let scores = {};
let defaultBaseCalculation;
let scaleDiff = 5;
let PEOPLE = [];
let cleanScore = {};

prepareCleanScoreValues(0);

$(function () {
    // defaults
    setDefaultBaseCalculationAsNumbers();
    listMaskButtons(PEOPLE);

    $('.mask-button').click(function () {
        let person = $(this).attr('id');

        maskPersonsLebels(person);
        highlitePersonsScore(person);

        addNewSuggestionBox(
            prepareSugestion(mainReviewData, person)
        );

        $('#home-button').click();
        return false;
    });

    $('#switch-base-numbers').click(function () {
        setDefaultBaseCalculationAsNumbers();
        return false;
    });
    $('#switch-base-people').click(function () {
        setDefaultBaseCalculationAsPeople();
        return false;
    });

    $('#rangeNumber').val(scaleDiff);
    $('#rangeNumberForm').submit(function () {
        scaleDiff = parseInt($('#rangeNumber').val());

        PEOPLE = [];

        prepareCleanScoreValues(0);
        reDrawTable();
        return false;
    });
});

