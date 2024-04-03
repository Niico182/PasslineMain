const topNav = [
  { id: 1, label: "INICIAR SESION", onClick: openLoginPopup },
  { id: 2, label: "REGISTRARSE", onClick: openRegisterPopup }
  ];
  
  export const getTopNav = () => {
    return topNav;
  };

  function openLoginPopup() {
    // Obtener el elemento del popup de inicio de sesión
    const loginPopup = document.getElementById('loginPopup');
  
    // Mostrar el popup de inicio de sesión
    loginPopup.style.display = 'block';
  }
  
  function openRegisterPopup() {
    // Obtener el elemento del popup de registro
    const registerPopup = document.getElementById('registerPopup');
  
    // Mostrar el popup de registro
    registerPopup.style.display = 'block';
  }
  