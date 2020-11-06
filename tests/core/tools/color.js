/* bender-tags: editor */
( function() {
	'use strict';

	bender.test( {
		setUp: function() {
			this.createColor = function( colorCode ) {
				return new CKEDITOR.tools.style.Color( colorCode );
			};
		},

		'test color object creation': function() {
			var colorObject = this.createColor( '' );

			assert.isObject( colorObject );
		},

		'test color from 6-HEX lower-case string return 6-HEX': function() {
			var hexCode = '#ffffff';
			var expectedHex = '#FFFFFF';
			var colorObject = this.createColor( hexCode );

			var resultHex = colorObject.getHex();

			assert.areSame( expectedHex, resultHex );
		},

		'test color from 3-HEX lower-case string return 6-HEX': function() {
			var hexCode = '#fff';
			var expectedHexCode = '#FFFFFF';
			var colorObject = this.createColor( hexCode );

			var resultHex = colorObject.getHex();

			assert.areSame( expectedHexCode, resultHex );
		},

		'test color from valid rgb string return HEX': function() {
			var validRgbString = 'rgb( 40, 40, 150 )';
			var expectedHexCode  = '#282896';
			var colorObj = this.createColor( validRgbString );

			var resultHex = colorObj.getHex();

			assert.areSame( expectedHexCode, resultHex );
		},

		'test color from valid string color name return HEX': function() {
			var validColorString = 'red';
			var expectedHexCode = '#FF0000';

			var colorObject = this.createColor( validColorString );

			var resultHex = colorObject.getHex();

			assert.areSame( expectedHexCode, resultHex );
		},

		'test color from invalid string color name return default color': function() {
			var notValidColorString = 'NotValidColorName';
			var expectedDefaultHexCode = '#000000';

			var colorObject = this.createColor( notValidColorString );

			var resultHex = colorObject.getHex();

			assert.areSame( expectedDefaultHexCode, resultHex );
		}

	} );

} )();
