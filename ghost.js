var countDownDate = new Date("Dec 18, 2020 10:45:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }


  document.getElementById("demo").innerHTML = makeMeTwoDigits(days) + "" + makeMeTwoDigits(hours) + "" +
    makeMeTwoDigits(minutes) + "" + makeMeTwoDigits(seconds);


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


window.addEvent('domready', function() {
  var container = $(document.body),
    speed = 5000;
  container.addEvent('mousemove', function(e) {
    var image = new Element('img', {
      src: 'https://i.imgur.com/Xnp4rFY.png',
      styles: {
        position: 'absolute',
        top: e.page.y,
        left: e.page.x
      },
      tween: {
        duration: speed,
        onComplete: function() {
          image.dispose();
        }
      }
    }).inject(container, 'top').fade('out');
  });
});

document.getElementById('audio').play();
