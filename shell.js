// Shared header + footer injected into every page
// active page is passed as a string matching the nav link text

function renderShell(activePage) {
  const nav = ['Home','Blog','Archive','About'];
  const links = { Home:'index.html', Blog:'blog.html', Archive:'archive.html', About:'about.html' };

  const navHTML = nav.map(n =>
    `<a href="${links[n]}" class="${n===activePage?'active':''}">${n}</a>`
  ).join('');

  const header = `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="site-logo">
      <span class="logo-primary">Bastrop County Archive</span>
    </a>
    <nav class="main-nav">${navHTML}</nav>
  </div>
</header>`;

  const footer = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="site-logo" style="margin-bottom:.75rem">
        <span class="logo-primary">Bastrop County Archive</span>
      </div>
      <p>IRP Description.</p>
      <p style="margin-top:.6rem;font-size:.8rem;color:#6a5e58;font-style:italic">
        Gordon-White Building, UT Austin
        210 W. 24th Street
        Austin, TX 78705
      </p>
    </div>
    <div class="footer-col">
      <h4>Navigate</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="archive.html">Document Archive</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Resources</h4>
      <ul>
        <li><a href="archive.html">Census Data (1850–1950)</a></li>
        <li><a href="archive.html">Historical Texts</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>UT IRP</h4>
      <ul>
        <li><a href="https://liberalarts.utexas.edu/aads/">UT AADS link</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Bastrop County Archive. All rights reserved.</p>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
}