function typeWriter(text, element) {
    const speed = 85; // Adjust typing speed in milliseconds
    const caret = document.createElement('span');
    caret.classList.add('caret');
  
    element.appendChild(caret);
  
    let i = 0;
    let txt = text;
  
    function type() {
      if (i < txt.length) {
        const char = txt.charAt(i);
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        element.insertBefore(charSpan, caret);
        i++;
        setTimeout(type, speed);
      } else {
        caret.style.display = 'inline'; // Show the caret after typing
      }
    }
  
    type();
  }
  