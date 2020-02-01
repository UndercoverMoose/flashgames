function embedit(file){
  document.location.href = "/flashgames?" + file;

}
function adjust(x){
  let wh = [[250, 250], [500, 500], [750, 750], [250, 500], [500, 250], [500, 750], [750, 500]];
  if(x < 7) {
    document.getElementById('width').value = wh[x][0];
    document.getElementById('height').value = wh[x][1];
  }
}
function sizeit(){
  try {
    document.getElementById('swf').width = document.getElementById('width').value;
    document.getElementById('swf').height = document.getElementById('height').value;
    document.getElementById('curwh').innerHTML = "Currently: " + document.getElementById('width').value + "x" + document.getElementById('height').value;
    document.getElementById('btn-download').href = "/flashgames/games/" + document.getElementById('gameID').value + ".swf";
  }catch(err) {
    console.warn('Loaded JS before HTML [ignore] > ' + err);
  }
}setInterval(sizeit, 0);

function onload(){
  if((document.location.href).indexOf('?') > -1){
    let xz = (document.location.href).slice((document.location.href).indexOf('?') + 1).split("&");
    let newsrc = xz[0];
    let showtab = (xz.length > 1) ? xz[1] : "";
    if (showtab.indexOf('hide') > -1) {
      document.getElementById('out').style.display = "none";
    }
    if (showtab.indexOf('display') > -1) {
      document.getElementById('adjust').style.display = "none";
    }
    if (showtab.indexOf('adjust') > -1) {
      document.getElementById('width').style.display = "none";
      document.getElementById('height').style.display = "none";
    }
    document.getElementById('swf').src = "/flashgames/games/" + newsrc + ".swf";
    document.getElementById('swf').width = 0;
    document.getElementById('swf').width = document.getElementById('width').value;
    adjust(7);
  }else {
    document.getElementById('homepage').style.display = "block";
  }
}
function download(id){
  document.location.href = document.domain + "/flashgames/games/" + id + ".swf";
}
