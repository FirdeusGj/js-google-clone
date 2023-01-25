const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('keydown', function(event){
    if(event.which === 13){
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = 'https://www.google.com/search?q=' + input + '&sxsrf=AJOqlzVfqfRYpKtWKNBzru4KrFOiKcBiTQ%3A1673086732071&ei=DEe5Y9T0A-uSxc8PqLCyyA0&ved=0ahUKEwjUqt_inbX8AhVrSfEDHSiYDNkQ4dUDCA8&uact=5&oq=' + input + '&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICC4Q1AIQkQIyBQgAEIAEMgUILhCABDIFCAAQgAQyDQguEIAEEMcBENEDEAoyBQgAEIAEMgcILhCABBAKMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxCwAxAnOggIABCwAxCRAjoJCAAQBxAeELADOgcIABCwAxBDOggIABCABBCwAzoOCAAQgAQQsQMQgwEQsAM6DQgAEOQCENYEELADGAE6EwguELEDENQCEMgDELADEJECGAI6DwguENQCEMgDELADEEMYAjoMCC4QyAMQsAMQQxgCOhMILhCABBDHARDRAxDIAxCwAxgCOgkIIxAnEEYQ-wE6BAgjECc6BwguENQCEEM6BAgAEEM6BAguEEM6BwguELEDEEM6CgguELEDEIMBEEM6CgguEMcBENEDEENKBAhBGAFKBAhGGAFQqwVYhA1glBBoAnAAeACAAeUBiAGUCJIBBTAuNS4xmAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp'
}
document.getElementById('location').innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone