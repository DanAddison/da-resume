<template>
  <section class="resume-section" id="portfolio">
      <h2>Portfolio</h2>
      
      <div class="resume-item">

        <div class="portfolio-item">
          <a href="#" @click.prevent="show">
            <g-image
              alt="jm-woodcraft.com screenshot"
              src="../assets/images/portfolio/JM-Woodcraft.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
          </a>
          <modal name="modal-project" height="auto" :scrollable="true" :adaptive="true">
            <div class="container">

              <div class="modal-copy">

                <div slot="top-right" class="modal-close" @click="$modal.hide('modal-project')">
                    <font-awesome :icon="['fas', 'times']"/>
                </div>

                <h1>JM Woodcraft</h1>
                <p class="subtitle">A commercial website for a carpenter.</p>
                <p>I built this bespoke WordPress site for JM Woodcraft to showcase their work by creating an organically growing archive of projects.</p>
                <p>The archive is organised by category and tag, and projects feature an image carousel. This makes it easy for their prospective clients to find and review the type of work they're interested in.</p>
                <p class="tech-stack"><span>Tech stack: </span>WordPress, Sass, jQuery, Gulp, Git</p>
                <p class="modal-copy__link"><a href="https://jm-woodcraft.com" >Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
                <p class="modal-copy__link"><a href="https://github.com/DanAddison/JM-Woodcraft" >View code<font-awesome :icon="['fab', 'github']"/></a></p>

              </div><!--.modal-copy-->

              <div class="modal-image">

                <g-image
                  alt="jm-woodcraft.com screenshot"
                  src="../assets/images/portfolio/JM-Woodcraft_mobile.jpg"
                  class="img-profile"
                  height="660"
                  width="300"
                  fit="cover"
                />

              </div><!--.modal-image-->

            </div><!--.container-->
          </modal>
        </div>

        <div class="portfolio-item">
          <a href="#" @click.prevent="show">
            <g-image
              alt="johnhosking.com screenshot"
              src="../assets/images/portfolio/John-Hosking.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
          </a>
          <modal name="modal-project">
            testing
          </modal>
        </div>

        <div class="portfolio-item">
          <a href="#" @click.prevent="show">
            <g-image
              alt="dan4ruby.com screenshot"
              src="../assets/images/portfolio/Dan4Ruby.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
          </a>
          <modal name="modal-project">
            testing again
          </modal>
        </div>

        <div class="portfolio-item">
          <g-image
            alt="ellisbolton.com screenshot"
            src="../assets/images/portfolio/Ellis-Bolton.jpg"
              class="img-profile"
              height="312"
              width="500"
            fit="cover"
          />
        </div>

        <div class="portfolio-item">
          <g-image
            alt="Pen &amp; Plant website screenshot"
            src="../assets/images/portfolio/Pen-and-Plant.jpg"
              class="img-profile"
              height="312"
              width="500"
            fit="cover"
          />
        </div>

        <div class="portfolio-item">
          <a href="#" @click.prevent="show">
            <g-image
              alt="daniel-addison-lyrics-archive screenshot"
              src="../assets/images/portfolio/Lyrics-Archive.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
          </a>
          <modal name="modal-project">
            still testing
          </modal>
        </div>

      </div>
      
  </section>
</template>

<script>


export default {

  methods: {

    show () {
      this.$modal.show('modal-project');
    },
    hide () {
      this.$modal.hide('modal-project');
    }
  }
}

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
  max-width: 100%;
  flex: 1 0 400px;
  overflow: hidden;
  margin: 0 2rem 2rem 0;
  box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.75);

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    max-width: 40%;
  }
}

.v--modal {

  .container {
    padding: 3em 2em;
    position: relative;

    @media (min-width: 500px) {
      display: flex;
    }

    .modal-close {
      font-size: 1.5em;
      line-height: 1;
      padding: 0.5em;
      color: $copy-lightest;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;

      &:hover,
      &:focus {
        color: $copy-light;
      }
    }

    .modal-copy {
      margin-bottom: 2em;

      @media (min-width: 600px) {
        padding-right: 2em;
        margin-bottom: 0;
      }

      p {
        color: $copy;

      }

      h1 {
        font-size: 2em;
        line-height: 1;
        margin: 0;
      }

      .subtitle {
        font-weight: bold;
      }

      .tech-stack {
        color: $copy-light;

        span {
          font-weight: bold;
        }
      }

      .modal-copy__link {
        margin-bottom: .5em;
        margin-top: 0;
        
        a {
          color: $primary;
          
          svg {
            padding-left: .3em;
          }

          &:hover,
          &:focus {
            color: $secondary;
          }
        }
      }
    }

    .modal-image {
      flex-shrink: 0;
      
      img {
        box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.75);
        height: auto;
        max-width: 300px;

        @media (min-width: 600px) {
          max-width: 200px;
        }
      }
    }
  }
}

</style>