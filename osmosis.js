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
    var ispaused = false;
    var punctuationcounter = 0;
    var wordlength;
    var leftoffset;
    var fadecounter;
    var fadelimit=5;
	
	//------------------------------FUNCTIONS------------------------------

    function OnLoad() {
        SetLineWidth();
    }
    OnLoad();

    function InitThatShit() {
    	textScale = $( "#sizePlace" ).val();
    	$('#centermaker').removeClass();
    	$('#centermaker').addClass(textScale);
    	colorclass = $( "#colorPlace" ).val();
        ChangeColor();
        SetLineWidth();
    	wpm = $('#wpmPlace').val();
    	if(!wpm){wpm=150;}
    	wpmMS = 60000/wpm;
    	fadecounter = fadelimit;

    	CollectData();
    	nIntervId = clearInterval(nIntervId);
        nIntervId = setInterval(ChangeWord, wpmMS);
    }

    function ChangeWord() {
        if(!ispaused){
            if(punctuationcounter <= 0){
            
                if(textarray[wordspace].toLowerCase().indexOf(".") >= 0 || textarray[wordspace].toLowerCase().indexOf("?") >= 0 || textarray[wordspace].toLowerCase().indexOf(",") >= 0 || textarray[wordspace].toLowerCase().indexOf(";") >= 0 || textarray[wordspace].toLowerCase().indexOf("!") >= 0 || textarray[wordspace].toLowerCase().indexOf('"') >= 0){
                    punctuationcounter++; 
                }

                var wordlength = 0;
                if(textarray[wordspace]){wordlength = textarray[wordspace].length;}
                var perfectspot = Math.ceil((wordlength / 2) - 1);
                var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                $('#wordbox').html(finalval);
        
                var wordwidth = $( '#wordbox' ).width();
                switch(wordlength){
                    case 1:
                        var leftoffset = '-'+(wordwidth*.5)+'px';
                    break;
                    case 2:
                        var leftoffset = '-'+(wordwidth*.25)+'px';
                    break;
                    case 3:
                        var leftoffset = '-'+(wordwidth*.5)+'px';
                    break;
                    case 4:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                    break;
                    case 5:
                        var leftoffset = '-'+(wordwidth*.47)+'px';
                    break;
                    case 6:
                        var leftoffset = '-'+(wordwidth*.40)+'px';
                    break;
                    case 7:
                        var leftoffset = '-'+(wordwidth*.42)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 2);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 8:
                        var leftoffset = '-'+(wordwidth*.38)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 2);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 9:
                        var leftoffset = '-'+(wordwidth*.31)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 10:
                        var leftoffset = '-'+(wordwidth*.29)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    case 11:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                    break;
                    default:
                        var leftoffset = '-'+(wordwidth*.35)+'px';
                        var perfectspot = Math.ceil((wordlength / 2) - 3);
                        var oldletter = textarray[wordspace].substring(perfectspot + 1, perfectspot);
                        var finalval = replaceAt(textarray[wordspace], perfectspot, '<span class="'+colorclass+'">' + oldletter + '</span>');
                        $('#wordbox').html(finalval);
                }
                $('#wordbox').css('left', leftoffset);

                wordspace++;
                if(wordspace >= textarray.length && loopIt == true) {
                    wordspace = 0;
                }
            }else{
                punctuationcounter--;

            }

        }
        fadecounter++;
        if(fadecounter >= fadelimit){
            $('#insertText').fadeOut('slow');
        }
    }

    function ChangeColor() {
        switch(colorclass){
            case 'red':
                $('#spotmarker').css('background-color','#ff1111');
            break;

            case 'blue':
                $('#spotmarker').css('background-color','#0022ff');
            break;

            case 'purple':
                $('#spotmarker').css('background-color','#660033');
            break;

            case 'green':
                $('#spotmarker').css('background-color','#118811');
            break;

            default:
                $('#spotmarker').css('background-color','#ff1111');
        }
    }

    function CollectData() {		    	
        textstring = $('#textPlace').val();
        textarray = textstring.replace(/\s{2,}/g, ' ').split(' ');
	    return textarray, wpm, wpmMS;
    }

    function PauseUnpause(){
        ispaused = !ispaused;
        SetLineWidth();
    }

    // replace the 'n'th character of 's' with 't'
    function replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }

    function SetLineWidth(){
        textScale = $( "#sizePlace" ).val();
        var winwide = $( window ).width();

        if(textScale == 'largest'){
            var winwide = $( window ).width()/4;
        }else if(textScale == 'large'){
            var winwide = $( window ).width()/3;
        }else if(textScale == 'medium'){
            var winwide = $( window ).width()/2;
        }else{
            var winwide = $( window ).width();
        }
        $('#lines').css('width', winwide+'px').css('left','-'+(winwide/2)+'px');
        $('#whitebg').css('width', winwide+'px').css('left','-'+(winwide/2)+'px');
    }

	//------------------------------LISTENERS------------------------------
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

    $(window).mousemove(function( event ) {
        fadecounter=0;
        $('#insertText').show();
    });

    //prevent form submission
    $('#insertText').submit(function (evt) {
        evt.preventDefault();
        ispaused = false;
        InitThatShit();
    });

    //on click within body
    $('body').click(function(e){
        var theID = $(e.target).attr('id');
        if(theID != 'wpmPlace' && theID != 'sizePlace' && theID != 'colorPlace' && theID != 'textSubmit' && theID != 'textPlace'){
            PauseUnpause();
        }
    });

    //On keypress
    $(window).keypress(function(e) {
        //on spacebar or 'P'
        if (e.keyCode == 0 || e.keyCode == 32 || e.keyCode == 80) {
            PauseUnpause();
        }
    });

    //on window resize
    $( window ).resize(function() {
        SetLineWidth();
    });

});