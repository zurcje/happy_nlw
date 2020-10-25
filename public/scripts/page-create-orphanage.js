//create map
const map = L.map("mapid").setView([-27.5953613,-48.5249761], 15);

//create and tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;


//creater and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer 
    marker= L.marker([lat, lng], {icon})
    .addTo(map)

})

//adicionar o campo de foto
function addPhotoField() {
    // pegar container de fotos
    const container = document.querySelector('#images')
    // pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo esta vazio
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo
    input.value =""
    

    // adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    }
    //deletar campo
    span.parentNode.remove();
}
//select
function toggleSelect(event){
    // retirar a class active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    // colocar class botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // botão selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {

    //validar preenchimento
    
//     const needsLatAndLng = true,
//     if(needsLatAndLng) {

//         event.preventDefault()
//         alert('selecione o ponto no mapa')
//     }
// }
}