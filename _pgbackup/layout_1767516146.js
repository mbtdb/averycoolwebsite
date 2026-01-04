document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">Welcome to Farviz's Web Jungle!</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/contact">Contact info</a></li>
	            <li><a href="/thoughts">Thoughts</a></li>
	            <li><a href="/pictures">Pictures</a></li>
                <!--
                <li>
                    <strong>Submenu (hover to show)</strong>
                    <ul>
                      <li><a href="/page-a">Page A</a></li>
                      <li><a href="/page-b">Page B</a></li>
                      <li><a href="/page-c">Page C</a></li>
                      <li><a href="/page-d">Page D</a></li>
                      <li><a href="/page-e">Page E</a></li>
                    </ul>
                </li>
                -->
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">Quick facts abt me:</div>
          <ul>
  <li>CS major @ UAlbany 🧠💻</li>
  <li>I build random servers at 3AM (against my will)</li>
  <li>Languages: English / Русский / ქართული</li>
  <li>On that depression arc 💅</li>
  <li>Currently: making this site look decent</li>
</ul>
        </div>
        <hr style="opacity:0.4">
        
<div class="sidebar-section">
  <div class="sidebar-title">Title Cards:</div>
<img src="Very_gay.png" alt="It's a struggle 😝">
    <img src="kHBaXec.png" alt="">
    <img src="lightacademia.png" alt="Ready to mingleeeee">
    <img src="N16btBO.png" alt="It's not a 2-week phase, I rlly can't get over it">
    <img src="r8v91MH.png" alt="">
    <img src="rI18gRz.png" alt="">
    <img src="tuclmOl.png" alt="">
    
</div>
        <hr style="opacity:0.4">
        <div class="sidebar-section">
          <div class="sidebar-title">Currently:</div>
          <ul>
            <li>Playing: Minecraft</li>
            <li>listening: IT GIRL</li>
            <li>Working on: This Webpage (It's my hyperfixation atm)</li>
            <li>Last updated: 01/04/2026</li>
          </ul>
        </div>
        <hr style="opacity:0.4">
          <marquee>
    <img src="homoeroticsubtext.gif" alt="">
    <img src="smosh.gif" alt="">
    <img src="tummy.gif" alt="">
    <img src="onthefloor.gif" alt="">
    <img src="h57.gif" alt="">
          </marquee>
        <hr style="opacity:0.4">
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/24/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
  <div class="sidebar-title">Status:</div>

  <div class="status-wrap">
    <iframe
      src="https://petrapixel.neocities.org/widgets/statuscafe?center=0&marquee=0&font-family=Times New Roman&font-size=14px&color=#565673&linkColor=#d92f2f&username=mbtdb&hideUsername=0&timeColor=#6d0fba"
      frameborder="0"
      title="Status.Cafe Status">
    </iframe>
  </div>
</div>

<style>
  .status-wrap {
    display: flex;
    justify-content: center;
  }

  .status-wrap iframe {
    width: 100%;
    max-width: 240px;   /* tweak this */
    height: 80px;       /* tweak this */
    border: none;
  }
</style>
          <div style="text-align: center;">
  <a href="http://www.snazzyspace.com/generators/viewer-counter/"
     target="_blank">
    <img src="http://www.snazzyspace.com/generators/viewer-counter/counter.php/fid=1767505489/style=1/counter.png">
  </a>
</div>

          <div class="clock-wrap">
  <iframe src="https://free.timeanddate.com/clock/ia88q8ch/n12/ftb/tt0/tw0/tm1/ts1/tb4"
    frameborder="0" width="88" height="34"></iframe>
</div>

<style>
.clock-wrap {
  display: flex;
  justify-content: center;
}
</style>

        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
          <iframe width="130" height="250" frameborder="2" src="https://cdn.abowman.com/widgets/fish/fish.html?up\_backgroundColor=8ae7ea&up\_numFish=5&up\_fishColor1=f45540&up\_fishColor2=e1549f&up\_fishColor3=625ce1&up\_fishColor4=e0c31e&up\_fishColor5=f45540&up\_fishColor6=f45540&up\_fishColor7=f45540&up\_fishColor8=f45540&up\_fishColor9=f45540&up\_fishColor10=f45540"></iframe>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Awesome People/Sites:</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://status.cafe"><img src="https://status.cafe/assets/button.png" alt="Status Cafe"/></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/24/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Footer Text. <a href="/">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
