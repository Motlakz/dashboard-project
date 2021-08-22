// calculation function 
function calculator() {
	powerConsumption = $('#powerConsumption').val();
	gasConsumption = $('#gasConsumption').val();
	woodConsumption = $('#woodConsumption').val();
	flyingEconomy = $('#flyingEconomy').val();
	flyingBusiness = $('#flyingBusiness').val();
	gasDriving = $('#gasDriving').val();
	dieselDriving = $('#dieselDriving').val();
	lpgDriving = $('#lpgDriving').val();
	plugIn = $('#plugIn').val();
	electric = $('#electric').val();
	_50ccScooter = $('#_50ccScooter').val();
	_125ccMotor = $('#_125ccMotor').val();
	_500ccMotor = $('#_500ccMotor').val();
	_500ccPMotor = $('#_500ccPMotor').val();
	tram = $('#tram').val();
	bus = $('#bus').val();
	train = $('#train').val();
	metro = $('#metro').val();
	taxi = $('#taxi').val();
	gas = $('#gas').val();
	diesel = $('#diesel').val();

	// calculations
	co2emission = (powerConsumption * 0.4521) + (gasConsumption * 0.05) + (woodConsumption * 70) + (flyingEconomy * 0.076) + (flyingBusiness * 0.2208) + (gasDriving * 0.174) + (dieselDriving * 0.168) + (lpgDriving * 0.198) + (plugIn * 0.07) + (electric * 0) + (_50ccScooter * 0.057) + (_125ccMotor * 0.064) + (_500ccMotor * 0.078) + (_500ccPMotor * 1.02) + (tram * 0.03) + (bus * 0.1) + (train * 0.04) + (metro * 0.03) + (taxi * 0.15) + (gas * 2.2) + (diesel * 2.5);
	treesNeeded = Math.ceil(co2emission / 500);
	costOfTrees = treesNeeded * 50;
	return20Yrs = treesNeeded * 10 * 20;

	$('#c02').html(co2emission);
	$('#t_needed').html(treesNeeded);
	$('#costs').html(costOfTrees);
	$('#returns').html(return20Yrs);


}

// jQuery
$(document).ready(function () {
	$('#powerConsumption').keyup(calculator);
	$('#gasConsumption').keyup(calculator);
	$('#woodConsumption').keyup(calculator);
	$('#flyingEconomy').keyup(calculator);
	$('#flyingBusiness').keyup(calculator);
	$('#gasDriving').keyup(calculator);
	$('#dieselDriving').keyup(calculator);
	$('#lpgDriving').keyup(calculator);
	$('#plugIn').keyup(calculator);
	$('#electric').keyup(calculator);
	$('#_50ccScooter').keyup(calculator);
	$('#_125ccMotor').keyup(calculator);
	$('#_500ccMotor').keyup(calculator);
	$('#_500ccPMotor').keyup(calculator);
	$('#tram').keyup(calculator);
	$('#bus').keyup(calculator);
	$('#train').keyup(calculator);
	$('#metro').keyup(calculator);
	$('#taxi').keyup(calculator);
	$('#gas').keyup(calculator);
	$('#diesel').keyup(calculator);
});