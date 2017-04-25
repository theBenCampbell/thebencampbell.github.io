$("a[href='#bottom']").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Show/hide dropdown menu when "Navigation" is clicked
function menuShow() {
    document.getElementById("menu").classList.toggle("show");
}

// Close the dropdown menu when a link is clicked or outside of menu is clicked
window.onclick = function(event) {
  if (!event.target.matches('.menuButton')) {

    var dropdown = document.getElementsByClassName("menuContent");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}