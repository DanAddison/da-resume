<template>
  <section class="resume-section" id="portfolio">
    <h2>Portfolio</h2>
    <p class="lead">A few personal/ freelance projects.
    <div class="resume-item">
      <div class="portfolio-item">
        <g-image
          alt="Signal WP theme screenshot in dark mode"
          src="../assets/images/web-screenshots/Signal-shop.jpg"
          class="img-profile"
          height="364"
          width="500"
          fit="cover"
        />
        <div class="portfolio-item__overlay">
          <h1>Signal</h1>
          <p class="subtitle">A minimal WooCommerce portfolio/shop theme for creators, supports dark mode.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> WordPress, WooCommerce, Sass, jQuery, Gulp
          </p>
          <div class="links">
            <p>
              <a href="https://signal.da-hosting.uk/" target="_blank">
                Visit demo
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/signal" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <g-image
          alt="dan4ruby.com screenshot"
          src="../assets/images/web-screenshots/Dan4Ruby.jpg"
          class="img-profile"
          height="364"
          width="500"
          fit="cover"
        />
        <div class="portfolio-item__overlay">
          <h1>wedding.danaddison.uk</h1>
          <p class="subtitle">Event information website.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> Gatsby, Styled Components, Styled System, Typeform
          </p>
          <div class="links">
            <p>
              <a href="https://wedding.danaddison.uk" target="_blank">
                Visit site
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/dan4ruby-gatsby" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <g-image
          alt="jm-woodcraft.com screenshot"
          src="../assets/images/web-screenshots/JMWoodcraft.jpg"
          height="364"
          width="500"
          fit="cover"
        />

        <div class="portfolio-item__overlay">
          <h1>jm-woodcraft.com</h1>
          <p class="subtitle">Bespoke brochure/archive site for a carpenter.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> WordPress, Sass, jQuery, Gulp
          </p>
          <div class="links">
            <p>
              <a href="https://jm-woodcraft.com" target="_blank">
                Visit site
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/JM-Woodcraft" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <g-image
          alt="johnhosking.com screenshot"
          src="../assets/images/web-screenshots/JohnHosking.jpg"
          class="img-profile"
          height="364"
          width="500"
          fit="cover"
        />

        <div class="portfolio-item__overlay">
          <h1>johnhosking.com</h1>
          <p class="subtitle">Portfolio website for an artist.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> Sass, Nunjucks, jQuery, Gulp
          </p>
          <div class="links">
            <p>
              <a href="https://johnhosking.com" target="_blank">
                Visit site
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/John-Hosking" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <g-image
          alt="jazzbeams.com screenshot"
          src="../assets/images/web-screenshots/JazzBeams.jpg"
          class="img-profile"
          height="364"
          width="500"
          fit="cover"
        />
        <div class="portfolio-item__overlay">
          <h1>jazzbeams.com</h1>
          <p class="subtitle">Brochure website for freelance DJs.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> Gridsome, Vue, Sass
          </p>
          <div class="links">
            <p>
              <a href="https://jazzbeams.com" target="_blank">
                Visit site
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/jazz-beams" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <g-image
          alt="daniel-addison-lyrics-archive screenshot"
          src="../assets/images/web-screenshots/LyricsArchive.jpg"
          class="img-profile"
          height="364"
          width="500"
          fit="cover"
        />
        <div class="portfolio-item__overlay">
          <h1>lyrics.danaddison.uk</h1>
          <p class="subtitle">Documentation website for songwriters.</p>
          <p class="tech-stack">
            <span>Tech stack:</span> Docsify, Markdown, Javascript
          </p>
          <div class="links">
            <p>
              <a href="https://lyrics.danaddison.uk" target="_blank">
                Visit site
                <font-awesome :icon="['fas', 'external-link-alt']" />
              </a>
            </p>
            <p>
              <a href="https://github.com/DanAddison/Songwriting" target="_blank">
                View code
                <font-awesome :icon="['fab', 'github']" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>


<style lang="scss" scoped>
section.resume-section {
  max-width: 1400px;
}
.resume-item {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-item {
  position: relative;
  max-width: 100%;
  flex: 1 0 400px;
  min-width: 300px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 11px -6px rgba(0, 0, 0, 0.75);
  transition: 0.2s;

  @media (min-width: 600px) {
    max-width: 47%;

    &:nth-of-type(odd) {
      margin-right: 2rem;
    }
  }

  @media (min-width: 1400px) {
    margin-right: 2rem;
  }

  &:hover,
  &:focus {
    transform: scale(1.07);
    box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.5);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.portfolio-item__overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  background-color: $primary-overlay;
  transition: 0.3s;
  opacity: 0;

  &:hover,
  &:focus {
    opacity: 1;
  }

  p {
    color: $copy;
    margin: 0;
    line-height: 1;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }

  .subtitle {
    font-weight: bold;
    margin: 0.5em 0 0.7em;
  }

  .tech-stack {
    color: $copy-light;
    font-size: 0.9rem;
  }

  .links {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    // margin-top: 1rem;

    p {
      flex-grow: 1;
      margin-bottom: 0.5em;
      margin-top: 0;
      color: $primary;

      svg {
        padding-left: 0.3em;
      }

      a {
        color: $primary;

        &:hover,
        &:focus {
          color: $secondary;
        }
      }
    }
  }
}
</style>