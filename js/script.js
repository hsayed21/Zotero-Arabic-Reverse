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
      var strLine = clearResult[index];
      // Detect arabic chars
      var matches = strLine.match(
        /[\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd50-\ufd8f\ufe70-\ufefc\uFDF0-\uFDFD]+/g
      );
      matches.forEach((element) => {
        var textR = element.trim().split('').reverse().join('');
        strLine = strLine.replace(element, textR);
      });

      if (index == clearResult.length - 1) {
        // last element
        OutResult += strLine;
      } else {
        OutResult += strLine + '\n';
      }
    }
    result.setValue(OutResult);
  });
  var btnContainer = document.querySelector('.btnReverse');
  btnContainer.appendChild(btnR);
  btnContainer.appendChild(copyright);
});
