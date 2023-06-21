const header = `
<nav class="navbar navbar-expand-lg  navbar-light bg-white py-4 fixed-top order-lg-0">
<div class="container">
    <a class="navbar-brand d-flex justify-content-between align-items-center" href="home.html">
        <img src="../img/logo.jpeg">
        <span class="fw-lighter ms-2">Life Cycle</span>
    </a>
    <div class="links order-lg-2 nav-btns">
        <a class="btn position-relative me-4" href="./shoppingcart.html">
            <i class="fa fa-shopping-cart"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
        </a>
        <a class="btn position-relative me-4"href="./login.html">
            <i class="fa fa-user"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">?</span>
        </a>
        <a class="btn position-relative">
            <i class="fa fa-search"></i>
        </a>
    </div>
    <a class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
    </a>

    <div class="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul class="navbar-nav mx-auto text-center d-flex justify-content-between align-items-center">
            <li class="nav-item px-2 py-2"><a class="nav-link text-dark" href="./home.html">Home</a></li>
            <li class="nav-item px-2 py-2"><a class="nav-link text-dark" href="./home.html#collection">Collection</a></li>
            <li class="nav-item px-2 py-2"><a class="nav-link text-dark" href="./home.html#special">Specials</a></li>
            <li class="nav-item px-2 py-2"><a class="nav-link text-dark" href="./home.html#collection">Popular</a></li>
        </ul>
    </div>
</div>
</nav>
`
export {header} 
