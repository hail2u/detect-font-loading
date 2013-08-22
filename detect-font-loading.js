(function () {
  var DFL = {};

  DFL.detect = function (fontName, timeout, interval) {
    if (!timeout || typeof timeout !== 'number') {
      timeout = 15000;
    }

    if (!interval || typeof interval !== 'number') {
      timeout = 500;
    }

    var tester = document.createElement('span');
    tester.style.fontFamily = '"' + fontName + '", "Adobe Blank"';
    tester.style.position = 'absolute';
    tester.style.top = '-100px';
    tester.appendChild(document.createTextNode('a'));
    document.body.appendChild(tester);

    var timerId = setInterval(checkWidth, interval);
    timeout = timeout - interval;

    function checkWidth() {
      if (tester.offsetWidth > 0) {
        clearInterval(timerId);
        document.documentElement.className += ' dfl-' + fontName.toLowerCase().replace(/\s/g, '_');
        tester.parentNode.removeChild(tester);
      } else if (timeout < 0) {
        clearInterval(timerId);
        tester.parentNode.removeChild(tester);
      }
    }
  };

  var style = document.createElement('style');
  style.appendChild(document.createTextNode([
    "@font-face {",
      "font-family: 'Adobe Blank';",
      "src: url('data:application/font-woff;base64,d09GRgABAAAAAARIABEAAAAABdwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABsAAAAcaLMRlEdERUYAAAGcAAAAHQAAACAAMAAET1MvMgAAAbwAAABJAAAAVlXgZ5BjbWFwAAACCAAAAEIAAAFKAC0DsGN2dCAAAAJMAAAABAAAAAQAIQJ5Z2FzcAAAAlAAAAAIAAAACP//AANnbHlmAAACWAAAAFQAAABUPaWWPmhlYWQAAAKsAAAAMAAAADb9ErJRaGhlYQAAAtwAAAAeAAAAJAT2A3RobXR4AAAC/AAAAAwAAAAMC7gAIWxvY2EAAAMIAAAACAAAAAgAKgBUbWF4cAAAAxAAAAAfAAAAIABHADluYW1lAAADMAAAALoAAAGEGgY1yXBvc3QAAAPsAAAAKgAAADcc+EvmdmhlYQAABBgAAAAgAAAAJAItE0N2bXR4AAAEOAAAAAgAAAAIA+gCmndlYmYAAARAAAAABgAAAAYG6lIVeNpjYGBgZACCM7aLzoPoc1bbE6B0CgBKMwa+AHjaY2BkYGDgA2IJBhBgYmAEQhDJAuYxAAAEYAA1AAAAeNpjYGR+wTiBgZWBhamLaQ8DA0MPhGZ8wGDIyMTAwMTAyswAB0ABBhYoOyDNNYXBgYGXgZdZ4b8FQxRzAUMFUJgRJAcA60YKJQAAAHjaY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmIAs3v//wSpANOP/r1D1QMDIxgDnMIJUMjGgAkaGYQ8AgK0G2wAAACECeQAAAAH//wACAAIAIQAAASoCmgADAAcALrEBAC88sgcEAO0ysQYF3DyyAwIA7TIAsQMALzyyBQQA7TKyBwYB/DyyAQIA7TIzESERJzMRIyEBCejHxwKa/WYhAlgAeNpjYGRgYABib3UXqXh+m68M9swvgCIM56y2Z8JpRaASLaZZQC4HAxNIFAAEsAjeeNpjYGRgYC7438EQxfyCAQgYtRgYGVABMwBfOwNwAAAD6AAhA+gAAAPoAAAAAAAqACoAKnjaY2BkYGBgZuBgYGIAARDJyAASc2DQAwkAAARmAIEAeNqFkE0OwVAUhb9SwgYMm47EhGgRdMbAEhhriggh8TOzHKuwAnZgFdbgtL0MGbzck/Pz7nkPqLCkiONWcfDAcEG8Z7jIlLphlwYXwyVqXA2X5b4Zvot/Gn7Q5sWIhD0xC8ZsmbNjQ5NQWpfhd07k2XHK5oGV3L60llSfSOf3LbknJBA3MD6g8zf1QVM5DhxZZy18ZdPNv9Mz8bH+L+/9yaRskvU96xV5p1TrqmGobhE9+rZZDd+rAy/wAAB42mNgYgCD/80MRkCKkQEdMAMFmRiZ2dJzKgsyDNlL8zINDAxcAHY1BkQAAHjaY2AUYPhv9o+HIYr5BQMDox/TLAYgxYAMGAF6hwSDA+gCmgAAAAAAAVIVBukAAA==') format('woff');",
    "}"
  ].join('')));
  document.getElementsByTagName('head')[0].appendChild(style);

  window.DFL = DFL;
})();
