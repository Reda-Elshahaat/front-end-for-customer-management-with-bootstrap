var sidebarId = document.getElementById('sidebarId')
  if(localStorage.getItem('isSmall') === "yes"){
    sidebarId.classList.add('sidebar-small')
  }else{
    sidebarId.classList.remove('sidebar-small')
  }
  const sidebarToggle = () => {
    if(localStorage.getItem('isSmall') === "yes"){
        localStorage.setItem('isSmall',"no") 
        sidebarId.classList.remove('sidebar-small')
    }else{
        localStorage.setItem('isSmall',"yes") 
        sidebarId.classList.add('sidebar-small')
    }
}