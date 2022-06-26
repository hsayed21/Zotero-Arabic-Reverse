$(document).ready(function () {
  var editor = CodeMirror.fromTextArea(document.querySelector('#codeIn'), {
    lineNumbers: true,
    // lineWrapping: true,
    tabSize: 2,
    mode: 'markdown',
    theme: 'monokai',
  });

  var result = CodeMirror.fromTextArea(document.querySelector('#codeOut'), {
    lineNumbers: true,
    // lineWrapping: true,
    tabSize: 2,
    mode: 'markdown',
    theme: 'monokai',
  });

  var btnR = document.createElement('button');
  btnR.className = 'button-32';
  btnR.role = 'button';
  btnR.innerHTML = 'Reverse';

  var copyright = document.createElement('span');
  copyright.className = 'copyright';
  copyright.innerHTML = 'Made<br>with<br>&#10084;&#65039;<br>hsayed21';

  btnR.addEventListener('click', function () {
    const clearResult = editor
      .getValue()
      .split(/\r?\n/)
      .filter((element) => element);

    var OutResult = '';
    // clearResult.forEach(function (e) {
    //   var textR = String(e).trim().split('').reverse().join('');
    //   OutResult += textR + '\n';
    // });
    for (let index = 0; index < clearResult.length; index++) {
      const str = clearResult[index];
      var textR = str.trim().split('').reverse().join('');
      if (index == clearResult.length - 1) {
        // last element
        OutResult += textR;
      } else {
        OutResult += textR + '\n';
      }
    }
    result.setValue(OutResult);
  });
  var btnContainer = document.querySelector('.btnReverse');
  btnContainer.appendChild(btnR);
  btnContainer.appendChild(copyright);
});
