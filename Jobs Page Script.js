function toggleSummary(summaryId) {
    var summary = document.getElementById(summaryId);
    var readMoreTxt = summary.nextElementSibling;
  
    if (summary.classList.contains('open')) {
      // Collapse the summary
      summary.classList.remove('open');
      summary.style.webkitLineClamp = '3'; // Show only 3 lines
      readMoreTxt.textContent = 'Read More';
    } else {
      // Expand the summary
      summary.classList.add('open');
      summary.style.webkitLineClamp = 'none'; // Show all lines
      readMoreTxt.textContent = 'Read Less';
    }
  }