const btnFavorites = document.getElementById('btnfavorites')
const btnRemove = document.querySelector('.remove')
const userName = document.querySelector('.userName')

btnFavorites.onclick = () => {
  let name = userName.value

  alert(`${name} adicionado com sucesso`)

}

btnRemove.addEventListener('click', () => {
  alert('Usuario deletado com sucesso')
})