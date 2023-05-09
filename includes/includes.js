
function loadHeaderandFooter()
{
    fetch ("../includes/header.html")
        .then(response => response.text())
        .then(html =>
        {
            document.querySelector("header").innerHTML = html;
        });

    fetch("../includes/footer.html")
        .then(response => response.text())
        .then(html =>
        {
           document.querySelector("footer").innerHTML = html;
        });

}