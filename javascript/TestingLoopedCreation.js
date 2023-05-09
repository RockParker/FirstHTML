
function CreateItems()
{

    let el = document.getElementById("content");

    let custom = null;

    fetch("../html/CustomElement.html")
        .then(response => response.text())
        .then(html =>
        {

            custom = document.createElement("div");
            custom.innerHTML = html;
            //this will auto-include the link
            //to the custom.css hover many times an element in created

        });

    for(let i = 0; i < 15; i++)
    {
        el.innerHTML += '<p>Gay</p>';
    }
}