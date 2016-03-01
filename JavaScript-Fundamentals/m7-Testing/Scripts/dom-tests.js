QUnit.module("paste feature");

QUnit.test("paste adds to target", function (assert) {
    
    // given
    var phrase = "Once upon a midnight dreary";
    $('#phrase').val(phrase);
    var target = $('div#target');
    var previousTargetValue = target.text();
    
    // when
    $('input[type=button]').click();
    
    // then
    assert.equal( target.text(), previousTargetValue + phrase );
});
