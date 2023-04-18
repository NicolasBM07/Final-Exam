class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        `
        <header>
            <a><img src="./img/sample-logo.png" alt="logo" class="logo"></a>
            <div>
                <nav>
                    <ul class="nav_links">
                        <li><a href="index.html">Home|</a>
                        <li><a href="about.html">About</a>
                        <li><a href="about.html">|Contact</a>
                    </ul>
                </nav>
            </div>
            <input type="text" class="Search" name="Address" id="Search" placeholder="Search">
        </header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <img src="img/sample-logo.png" alt="Logo">
            <div class="Text-N2">
                <h4>Tile</h4>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse blanditiis magni iste ut harum, at est illo cumque 
                aliquam? Nesciunt iure incidunt provident mollitia fuga quod eaque reprehenderit reiciendis!</P>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)