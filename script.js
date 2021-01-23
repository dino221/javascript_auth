<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width-device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatibile" content="ie-edge">
  <title>Document</title>
</head>
<body>
  <input type="text" id="input" placeholder"input..." />
  <button id="select"> select</button>
  <button id="clear"> clear</button>
  <button id="focus"> focus</button>
  <script>

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById('input');
    var clear = document.getElementById('clear');
    var focus = document.getElementById('focus');
    var select = document.getElementById('select');

    clear.addEventListener('click', function () {
      input.value = "";
    });

    focus.addEventListener('click', function (){
      input.focus();
    });

    select.addEventListener('click', function () {
      input.select();
    });

  }, false);
  </script>
</body>
</html>
