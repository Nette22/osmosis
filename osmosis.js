jQuery(document).ready(function ($) {

	//------------------------------VARIABLES------------------------------
    var textstring;
    var textarray;
    var textScale;
    var colorclass;
    var nIntervId;
    var wpm;
    var wpmMS;
    var wordspace = 0;
    var loopIt = true;
    var wordlength;
    var leftoffset;
    var fadecounter;
    var fadelimit=5;
	
	//------------------------------FUNCTIONS------------------------------
    function InitThatShit() {
    	
    	textScale = $( "#sizePlace" ).val();
    	$('#centermaker').removeClass();
    	$('#centermaker').addClass(textScale);
    	colorclass = $( "#colorPlace" ).val();
    	wpm = $('#wpmPlace').val();
    	if(!wpm){wpm=150;}
    	wpmMS = 60000/wpm;
    	fadecounter = fadelimit;

    	CollectData();
    	nIntervId = clearInterval(nIntervId);
        nIntervId = setInterval(ChangeWord, wpmMS);
    }

    function ChangeWord() {
        if(textarray[wordspace]){var wordlength = textarray[wordspace].length;}
        var perfectspot = Math.ceil((wordlength / 2) - 1);
        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');

        $('#wordbox').html(finalval);
		var wordwidth = $( '#wordbox' ).width();

		var leftoffset = '-'+wordwidth*.4932+'px';

		$('#wordbox').css('left', leftoffset).html(finalval);

        fadecounter++;
        if(fadecounter >= fadelimit){
        	$('#insertText').fadeOut('slow');
        }

        wordspace++;
       	if(wordspace >= textarray.length && loopIt == true) {
            wordspace = 0;
        }
    }

    function CollectData() {		    	
        textstring = $('#textPlace').val();
        textarray = textstring.replace(/\s{2,}/g, ' ').split(' ');
	    return textarray, wpm, wpmMS;
    }

    // replace the 'n'th character of 's' with 't'
    function replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }

	//------------------------------LISTENERS------------------------------
	$(document).mousemove(function( event ) {
		fadecounter=0;
    	$('#insertText').show();
	});

	$('#textPlace').focus(function( event ) {
		fadecounter=0;
    	$('#insertText').show();
	});
	$('#wpmPlace').focus(function( event ) {
		fadecounter=0;
    	$('#insertText').show();
	});
	$('#sizePlace').focus(function( event ) {
		fadecounter=0;
    	$('#insertText').show();
	});

	$('#insertText').submit(function (evt) {
	    evt.preventDefault();
	    InitThatShit();
	});

});