QUnit.module( "ok assertion" );

QUnit.test( "passing test", function( assert ) {
  assert.ok( true, "this test passes" );
});

QUnit.test( "failure", function( assert ) {
  assert.ok( false, "this test fails" );
});
 
QUnit.module( "equal assertion" );

QUnit.test( "equal pass", function( assert ) {
  assert.equal( 1 + 1, 2, "equal pass" );
});

QUnit.test( "equal fail", function( assert ) {
  assert.equal( 1 + 1, 7, "equal fail" );
});

QUnit.module( "deepEqual assertion" );

QUnit.test( "deepEqual pass", function( assert ) {
  assert.deepEqual( [1, 2], [1, 2] );
});

QUnit.test( "equal fail", function( assert ) {
  assert.deepEqual( [1, 2], [1, 4] );
});