(function() {
  // Store the original content
  var originalContent = document.body.innerHTML;

  // Function to toggle between text-only and original content
  function toggleContent() {
    if (document.body.getAttribute('data-text-only') === 'true') {
      document.body.innerHTML = originalContent;
      document.body.removeAttribute('data-text-only');
      document.body.style.background = '';
      document.body.style.margin = '';
    } else {
      var textContent = document.body.innerText;
      document.body.innerHTML = `
        <div style="
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #F4ECD8;
          color: #5C4B51;
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
        ">
          <div style="
            max-width: 600px;
            margin: 0 auto;
          ">
            ${textContent.split('\n').map(paragraph => `<p style="margin-bottom: 1em;">${paragraph}</p>`).join('')}
          </div>
        </div>
      `;
      document.body.setAttribute('data-text-only', 'true');
      document.body.style.background = '#F4ECD8';
      document.body.style.margin = '0';
    }
  }

  // Execute the toggle function
  toggleContent();
})();