
window.onload = function () {
//  generarNav();
  generarFooter();
};


function generarFooter() {
  document.querySelector("footer").innerHTML  = "  <footer>     <div class='container listafotter'>       <div class='row'>          <div class='col l6 s12 m6'>             <p>2020, Museumis.</p>         </div>          <div class='col l6 s12 m6'>           <div class='container'>             <div class='row'>               <ul>                               <li>                   <a class='col s12 m4 l4  modal-trigger' href='#modalCorreo'>                    E-Mail                   </a>                 </li>                                <li>                   <a class='col s12 m4 l4' href='https://github.com/museumis' target='_blank'>Github</a>                 </li>                                <li>                   <a class='col s12 m4 l4' href='https://play.google.com/store/apps/dev?id=6846751951826003408' target='_blank'>GooglePlay</a>                 </li>                </ul>             </div>           </div>         </div>               </div>     </div>   </footer> ";
};


function generarNav() {
  document.querySelector("nav").innerHTML  = "  <nav class='white' role='navigation'>     <div class='nav-wrapper container'>       <a id='logo-container' href='index.html' class='brand-logo ico'>         <img src='imagenes/perfil.png' alt='icono'>       </a>        <ul class='right hide-on-med-and-down'>         <li><a href='android.html'>Android</a></li>       </ul>        <ul id='nav-mobile' class='sidenav'>         <li><a href='android.html'>Android</a></li>       </ul>       <a href='' data-target='nav-mobile' class='sidenav-trigger'><i class='material-icons'>menu</i></a>     </div>";

};

