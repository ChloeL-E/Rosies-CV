function fetchGithubInformation(event) {
    var username = $("#gh-username").val();
    if(!username) {
        $("#gh-user-data").html(`<h2>PLease enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader>
        <img src-"css/loader.gif" alt="loading..."/>
        </div>`);
}