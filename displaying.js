<!DOCTYPE html>

<html lang="en">
  <head>
    <title>Displaying Keypress</title>
    <script type="text/javascript">
    function displayKey(e) {
      // which key was pressed?
      if (e.keyCode) {
        var keycode=e.keyCode;
      } else {
        var keycode=e.which;
      }
      character=String.fromCharCode(keycode);

      // find the object for the destination paragraph
      var keys_paragraph = document.getElementById('keys');

      //add the characters to the keys_paragrap
      keys_paragrap.innerHTML += character;
    }
    </script>
    </head>

    <body onkeypress = "displayKey(event)">
    <h1>Displaying Typed Characters</h1>
    <p>This document includes a simple script that displays
    the keys you type as a new paragraph below. Type a few keys
    to try it. </p>
    <p id="keys"></p>
  </body>
</html>
