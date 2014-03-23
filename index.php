<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	</head>
<body>
    <div id="centermaker" class="default">
        <div id="wordbox">&nbsp;</div>
        <div id="whitebg">&nbsp;</div>
        <div id="spotmarker">&nbsp;</div>
        <div id="lines">&nbsp;</div>
    </div>
    <div id="textvalue">
    </div>
	<div id="settingsPanel">
		<form id="insertText">
			<fieldset class="sm">
				<label>WPM:</label>
				<input type="text" id="wpmPlace" value="" placeholder="WPM">
			</fieldset>
			<fieldset class="sm">
				<label>Size:</label>
				<select id="sizePlace">
					<option value="small">Small</option>
					<option value="medium" >Medium</option>
					<option value="large" >Large</option>
					<option value="largest" >Largest</option>
				</select>
			</fieldset>
			<fieldset class="sm">
				<label>Helpers:</label>
				<ul class="helpers"> 
					<li><input type="radio" name="helpers" value="on" checked /><label>On</label></li> 
					<li><input type="radio" name="helpers" value="off" /><label>Off</label></li> 
				</ul> 
			</fieldset>
			<fieldset class="sm">
				<label>Color:</label>
				<select id="colorPlace">
					<option value="black">Black</option>
					<option value="red">Red</option>
					<option value="green" >Green</option>
					<option value="blue" >Blue</option>
					<option value="purple" >Purple</option>
				</select>
			</fieldset>
			<div class="clearfix">&nbsp;</div>
			<textarea id="textPlace" value="" placeholder="Please Insert Data..."></textarea>
			<input type="submit" id="textSubmit" value="Read!">
		</form>
	</div>
</body>
<script type="text/javascript">
	var get_var;
	get_var = <?php
	$text_data = (isset($_POST['textdata']) ? $_POST['textdata'] : null);
	print '"' . $text_data . '"';
		?>;
</script>
<script type="text/javascript" src="osmosis.js"></script>
</html>