$('#speedInput').on("keypress", function(event){return leaveOnlyNumber(event);});
$('#gutsInput').on("keypress", function(event){return leaveOnlyNumber(event);});

function leaveOnlyNumber(e){
  // 数字以外の不要な文字を削除
  var st = String.fromCharCode(e.which);
  if ("0123456789".indexOf(st,0) < 0) { return false; }
  return true;  
};
// ボタンを押すと、ブロック内のプログラムが実行される
$("#btn1").on("click", function()  {
  let speed = document.getElementById("speedInput").value;
  let guts = document.getElementById("gutsInput").value;
  let motiva = document.getElementById("motivation").value;
  let style = document.getElementById("running_style").value;
  let distance = document.getElementById("distance").value;
  let distance_a = document.getElementById("distance_adequate").value;
  let distance_a_s = 1;

  let c_speed = speed*motiva*1.2*1;
  let c_guts = guts*motiva*1;
  let race_target_speed = 20+(2000-distance)/1000;
  let basic_target_speed = Math.pow(500*c_speed,0.5)*distance_a*0.002+race_target_speed*distance_a_s;
  let energy_speed_c = Math.pow(basic_target_speed - race_target_speed + 12,2) /144;
  let energy_c_ps = race_target_speed * energy_speed_c * 1 * 0.6 * 1;
  let spurt_c = 1 + 200/Math.pow(600*c_guts,0.5);
  let spurt_energy_c_ps = race_target_speed * energy_speed_c * 1 * 1 * spurt_c;
  let target_time = 0;
  switch(distance){
    case '1000':
	target_time = '56.1';
        break;
    case '1200':
	target_time = '67.8';
        break;
    case '1400':
	target_time = '79.6';
        break;
    case '1500':
	target_time = '85.6';
        break;
    case '1600':
	target_time = '91.6';
        break;
    case '1800':
	target_time = '103.8';
        break;
    case '2000':
	target_time = '116.1';
        break;
    case '2200':
	target_time = '128.6';
        break;
    case '2400':
	target_time = '141.2';
        break;
    case '2500':
	target_time = '147.6';
        break;
    case '2600':
	target_time = '154.1';
        break;
    case '3000':
	target_time = '180.4';
        break;
    case '3200':
	target_time = '193.8';
        break;
    case '3400':
	target_time = '207.4';
        break;
    case '3600':
	target_time = '221.3';
        break;
    default :
        target_time = '0';
  }
  let energy_need = target_time*(energy_c_ps*2/3 + spurt_energy_c_ps * 1/3);
  let stamina_need = ((energy_need-distance)/style)/0.8/motiva;
  let stamina_need_round = Math.round(stamina_need);
  let blue_stamina = Math.round(energy_need * 0.055);
  let white_stamina = Math.round(energy_need * 0.015);
  //let message = `${stamina_need}`
  // jQueryを使って画面にメッセージを表示する
  $("#tBox").val(stamina_need_round);
  $("#tBox2").val(blue_stamina);
  $("#tBox3").val(white_stamina);
});